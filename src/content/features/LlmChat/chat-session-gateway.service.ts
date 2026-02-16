import type { EntityType } from 'audako-core-components';
import type { Subscription } from 'rxjs';
import type { AudakoApp } from '../../../models/audako-apps';
import { UrlUtils } from '../../../utils/url-utils';

type ChatSession = {
  opencodeUrl: string;
  websocketUrl?: string;
  sessionId: string;
  isNew: boolean;
  scadaUrl: string;
  sessionInfo?: SessionInfoUpdateRequest & { updatedAt?: string };
};

type SessionInfoUpdateRequest = {
  tenantId?: string;
  groupId?: string;
  entityType?: EntityType;
  app?: AudakoApp;
};

export interface SessionEventEnvelope<T = unknown> {
  type: string;
  sessionId: string;
  timestamp: string;
  payload: T;
}

type SessionMessageHandler = (event: SessionEventEnvelope) => void;

const AUDAKO_MCP_GATEWAY_URL = 'http://localhost:3000';

export class ChatSessionGatewayService {
  public static instance: ChatSessionGatewayService = new ChatSessionGatewayService();
  private chatSession: ChatSession | null;
  private urlSubscription: Subscription | null;
  private lastSessionInfoKey: string | null;
  private websocket: WebSocket | null;
  private websocketUrl: string | null;
  private sessionMessageHandlers: Set<SessionMessageHandler>;

  constructor() {
    this.chatSession = null;
    this.urlSubscription = null;
    this.lastSessionInfoKey = null;
    this.websocket = null;
    this.websocketUrl = null;
    this.sessionMessageHandlers = new Set<SessionMessageHandler>();
  }

  public onSessionEvent(handler: SessionMessageHandler): () => void {
    this.sessionMessageHandlers.add(handler);
    return () => {
      this.sessionMessageHandlers.delete(handler);
    };
  }

  public onWebsocketEvent(handler: SessionMessageHandler): () => void {
    return this.onSessionEvent(handler);
  }

  public async requestChatSession(): Promise<ChatSession> {
    if (this.chatSession) {
      this.startSessionInfoSync();
      this.startWebsocketLogging();
      void this.updateSessionInfoFromCurrentUrl();
      return Promise.resolve(this.chatSession);
    }

    try {
      const sessionInfo = this.resolveSessionInfoFromCurrentUrl();
      const response = await fetch(`${AUDAKO_MCP_GATEWAY_URL}/api/session/bootstrap`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          scadaUrl: window.location.origin,
          accessToken: localStorage.getItem('access_token') || '',
          model: '',
          sessionInfo: sessionInfo ?? undefined,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to bootstrap chat session: ${response.statusText}`);
      }

      const data = (await response.json()) as ChatSession;

      console.log('Received chat session data:', data);
      this.chatSession = data;
      if (data.sessionInfo) {
        this.lastSessionInfoKey = this.createSessionInfoKey(data.sessionInfo);
      }
      this.startSessionInfoSync();
      this.startWebsocketLogging();

      return this.chatSession;
    } catch (error) {
      console.error('Failed to request chat session:', error);
      throw error;
    }
  }

  private startSessionInfoSync(): void {
    if (!this.chatSession?.sessionId || this.urlSubscription) {
      return;
    }

    this.urlSubscription = UrlUtils.subscribeToUrl().subscribe(() => {
      void this.updateSessionInfoFromCurrentUrl();
    });
  }

  private startWebsocketLogging(): void {
    const websocketUrl = this.chatSession?.websocketUrl;
    if (!websocketUrl) {
      return;
    }

    if (
      this.websocket &&
      this.websocketUrl === websocketUrl &&
      (this.websocket.readyState === WebSocket.OPEN ||
        this.websocket.readyState === WebSocket.CONNECTING)
    ) {
      return;
    }

    this.stopWebsocketLogging();
    this.websocketUrl = websocketUrl;
    this.websocket = new WebSocket(websocketUrl);

    this.websocket.addEventListener('open', () => {
      console.log('[ChatSessionGatewayService] Session websocket connected:', websocketUrl);
    });

    this.websocket.addEventListener('message', event => {
      if (typeof event.data !== 'string') {
        console.log('[ChatSessionGatewayService] Session websocket event:', event.data);
        return;
      }

      try {
        const sessionEvent = JSON.parse(event.data) as SessionEventEnvelope;
        this.handleSessionMessage(sessionEvent);
        console.log('[ChatSessionGatewayService] Session websocket event:', sessionEvent);
      } catch {
        console.log('[ChatSessionGatewayService] Session websocket event:', event.data);
      }
    });

    this.websocket.addEventListener('error', event => {
      console.error('[ChatSessionGatewayService] Session websocket error:', event);
    });

    this.websocket.addEventListener('close', event => {
      console.log('[ChatSessionGatewayService] Session websocket closed:', {
        code: event.code,
        reason: event.reason,
        wasClean: event.wasClean,
      });
      this.websocket = null;
      this.websocketUrl = null;
    });
  }

  private stopWebsocketLogging(): void {
    if (this.websocket) {
      this.websocket.close();
      this.websocket = null;
    }
    this.websocketUrl = null;
  }

  private handleSessionMessage(event: SessionEventEnvelope): void {
    this.sessionMessageHandlers.forEach(handler => {
      try {
        handler(event);
      } catch (error) {
        console.error('[ChatSessionGatewayService] Session message handler failed:', error);
      }
    });
  }

  private resolveSessionInfoFromCurrentUrl(): SessionInfoUpdateRequest | null {
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

    return {
      tenantId,
      groupId,
      entityType,
      app: app,
    };
  }

  private createSessionInfoKey(sessionInfo: SessionInfoUpdateRequest): string {
    return `${sessionInfo.tenantId}|${sessionInfo.groupId}|${sessionInfo.app ?? ''}|${sessionInfo.entityType ?? ''}`;
  }

  private async updateSessionInfoFromCurrentUrl(): Promise<void> {
    if (!this.chatSession?.sessionId) {
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
      const response = await fetch(
        `${AUDAKO_MCP_GATEWAY_URL}/api/session/${this.chatSession.sessionId}/info`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sessionInfo),
        },
      );

      if (response.status === 404) {
        this.stopWebsocketLogging();
        this.chatSession = null;
        this.lastSessionInfoKey = null;
        throw new Error('Session not found while updating session info');
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to update session info: ${response.status} ${errorText || response.statusText}`,
        );
      }

      this.lastSessionInfoKey = sessionInfoKey;
    } catch (error) {
      console.error('Failed to update chat session info:', error);
    }
  }
}
