import { SocketIOAdapter } from '@audako/chat-ui';
import type {
  EntityCreatedSessionEvent,
  EntityUpdatedSessionEvent,
  SessionBootstrapResponse,
} from '@audako/contracts';
import type { Subscription } from 'rxjs';
import { UrlUtils } from '../../../utils/url-utils';
import {
  dispatchEventToMainWorld,
  ENTITY_CREATED_EVENT_NAME,
  ENTITY_UPDATED_EVENT_NAME,
} from '../../shared/helpers/cross-world-events';

interface SessionInfoFields {
  tenantId: string;
  groupId: string;
  entityType?: string;
  app?: string;
}

const AUDAKO_MCP_GATEWAY_URL = 'http://localhost:3001';

type EntitySessionEvent = EntityCreatedSessionEvent | EntityUpdatedSessionEvent;

interface EntityEventSocket {
  on(event: 'entity.created', listener: (event: EntityCreatedSessionEvent) => void): void;
  on(event: 'entity.updated', listener: (event: EntityUpdatedSessionEvent) => void): void;
  off(event: 'entity.created', listener: (event: EntityCreatedSessionEvent) => void): void;
  off(event: 'entity.updated', listener: (event: EntityUpdatedSessionEvent) => void): void;
}

export class ChatSessionGatewayService {
  public static instance: ChatSessionGatewayService = new ChatSessionGatewayService();

  private adapter: SocketIOAdapter | null = null;
  private urlSubscription: Subscription | null = null;
  private entityEventSocket: EntityEventSocket | null = null;
  private lastSessionInfoKey: string | null = null;

  public getAdapter(): SocketIOAdapter | null {
    return this.adapter;
  }

  public async requestChatSession(): Promise<SocketIOAdapter> {
    if (this.adapter) {
      void this.updateSessionInfoFromCurrentUrl();
      return this.adapter;
    }

    const sessionInfo = this.resolveSessionInfoFromCurrentUrl();

    const response = await fetch(`${AUDAKO_MCP_GATEWAY_URL}/api/session/bootstrap`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        scadaUrl: window.location.origin,
        accessToken: localStorage.getItem('access_token') || '',
        sessionInfo: sessionInfo ?? undefined,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to bootstrap chat session: ${response.statusText}`);
    }

    const bootstrap = (await response.json()) as SessionBootstrapResponse;
    if (bootstrap.realtime?.transport !== 'socket.io') {
      throw new Error('Failed to bootstrap chat session: missing socket.io realtime config');
    }

    if (!bootstrap.realtime.auth?.token || typeof bootstrap.realtime.auth.token !== 'string') {
      throw new Error('Failed to bootstrap chat session: missing realtime auth token');
    }

    if (sessionInfo) {
      this.lastSessionInfoKey = this.createSessionInfoKey(sessionInfo);
    }

    this.adapter = new SocketIOAdapter({
      baseUrl: AUDAKO_MCP_GATEWAY_URL,
      sessionId: bootstrap.sessionId,
      realtime: bootstrap.realtime,
    });

    await this.adapter.init();
    this.bindEntityEventBridge();

    this.startSessionInfoSync();

    return this.adapter;
  }

  public disconnect(): void {
    if (this.adapter) {
      this.unbindEntityEventBridge();
      this.adapter.disconnect();
      this.adapter = null;
    }

    if (this.urlSubscription) {
      this.urlSubscription.unsubscribe();
      this.urlSubscription = null;
    }

    this.lastSessionInfoKey = null;
  }

  private readonly handleEntityCreatedEvent = (event: EntityCreatedSessionEvent): void => {
    this.handleCustomEvent(event);
  };

  private readonly handleEntityUpdatedEvent = (event: EntityUpdatedSessionEvent): void => {
    this.handleCustomEvent(event);
  };

  private bindEntityEventBridge(): void {
    if (!this.adapter) {
      return;
    }

    // SocketIOAdapter no longer exposes a public custom-event hook.
    const socket = (this.adapter as unknown as { socket?: EntityEventSocket | null }).socket;
    if (!socket || socket === this.entityEventSocket) {
      return;
    }

    this.unbindEntityEventBridge();
    socket.on('entity.created', this.handleEntityCreatedEvent);
    socket.on('entity.updated', this.handleEntityUpdatedEvent);
    this.entityEventSocket = socket;
  }

  private unbindEntityEventBridge(): void {
    if (!this.entityEventSocket) {
      return;
    }

    this.entityEventSocket.off('entity.created', this.handleEntityCreatedEvent);
    this.entityEventSocket.off('entity.updated', this.handleEntityUpdatedEvent);
    this.entityEventSocket = null;
  }

  private handleCustomEvent(event: EntitySessionEvent): void {
    switch (event.type) {
      case 'entity.created':
        console.log('[ChatSessionGateway] Entity created event:', event.payload);
        dispatchEventToMainWorld(ENTITY_CREATED_EVENT_NAME, event.payload);
        break;

      case 'entity.updated':
        console.log('[ChatSessionGateway] Entity updated event:', event.payload);
        dispatchEventToMainWorld(ENTITY_UPDATED_EVENT_NAME, event.payload);
        break;
    }
  }

  private startSessionInfoSync(): void {
    if (this.urlSubscription) {
      return;
    }

    this.urlSubscription = UrlUtils.subscribeToUrl().subscribe(() => {
      void this.updateSessionInfoFromCurrentUrl();
    });
  }

  private resolveSessionInfoFromCurrentUrl(): SessionInfoFields | null {
    const currentPath = window.location.pathname;
    const tenantId = UrlUtils.getTenantIdFromUrl(currentPath);
    const groupId = UrlUtils.getGroupIdFromUrl(currentPath);
    const app = UrlUtils.getAppFromUrl(currentPath);

    if (!tenantId || !groupId) {
      return null;
    }

    const entityType =
      UrlUtils.getEntityConfigurationDetails()?.entityType ??
      UrlUtils.getEntityListDetails()?.entityType;

    return { tenantId, groupId, entityType, app };
  }

  private createSessionInfoKey(sessionInfo: SessionInfoFields): string {
    return `${sessionInfo.tenantId}|${sessionInfo.groupId}|${sessionInfo.app ?? ''}|${sessionInfo.entityType ?? ''}`;
  }

  private async updateSessionInfoFromCurrentUrl(): Promise<void> {
    if (!this.adapter) {
      return;
    }

    const sessionInfo = this.resolveSessionInfoFromCurrentUrl();
    if (!sessionInfo) {
      return;
    }

    const sessionInfoKey = this.createSessionInfoKey(sessionInfo);
    if (sessionInfoKey === this.lastSessionInfoKey) {
      return;
    }

    try {
      await this.adapter.updateSessionInfo(sessionInfo);
      this.lastSessionInfoKey = sessionInfoKey;
    } catch (error) {
      console.error('[ChatSessionGateway] Failed to update session info:', error);
    }
  }
}
