import { Subscription } from 'rxjs';
import { UrlUtils } from '../../../utils/url-utils';
import { AudakoApp } from '../../../models/audako-apps';
import { EntityType } from 'audako-core-components';

type OpencodeServer = {
  opencodeUrl: string;
  sessionId: string;
  isNew: boolean;
  scadaUrl: string;
};

type SessionInfoUpdateRequest = {
  tenantId?: string;
  groupId?: string;
  entityType?: EntityType;
  app?: AudakoApp;
};

const AUDAKO_MCP_GATEWAY_URL = 'http://localhost:3000';

export class OpenCodeGatewayService {

  public static instance: OpenCodeGatewayService = new OpenCodeGatewayService();
  private server: OpencodeServer | null;
  private urlSubscription: Subscription | null;
  private lastSessionInfoKey: string | null;

  constructor() {
    this.server = null;
    this.urlSubscription = null;
    this.lastSessionInfoKey = null;
  }

  public async requestOpencodeServer(): Promise<OpencodeServer> {
    if (this.server) {
      this.startSessionInfoSync();
      void this.updateSessionInfoFromCurrentUrl();
      return Promise.resolve(this.server);
    }

    try {
      const response = await fetch(`${AUDAKO_MCP_GATEWAY_URL}/api/opencode/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          scadaUrl: window.location.origin,
          accessToken: localStorage.getItem('access_token') || '',
          model: '',
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to get OpenCode server: ${response.statusText}`);
      }
      
      const data = await response.json() as OpencodeServer;

      console.log('Received OpenCode server data:', data);
      this.server = data;
      this.startSessionInfoSync();

      return this.server;

    } catch (error) {
      console.error('Failed to request OpenCode server:', error);
      throw error;
    }
  }

  private startSessionInfoSync(): void {
    if (!this.server?.sessionId || this.urlSubscription) {
      return;
    }

    this.urlSubscription = UrlUtils.subscribeToUrl().subscribe(() => {
      void this.updateSessionInfoFromCurrentUrl();
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

    const entityType = UrlUtils.getEntityConfigurationDetails()?.entityType ?? UrlUtils.getEntityListDetails()?.entityType;

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
    if (!this.server?.sessionId) {
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
        `${AUDAKO_MCP_GATEWAY_URL}/api/opencode/sessions/${this.server.sessionId}/info`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sessionInfo),
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update session info: ${response.status} ${errorText || response.statusText}`);
      }

      this.lastSessionInfoKey = sessionInfoKey;
    } catch (error) {
      console.error('Failed to update OpenCode session info:', error);
    }
  }
}
