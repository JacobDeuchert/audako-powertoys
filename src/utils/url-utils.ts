import { filter, map, Observable, timer } from 'rxjs';
import { AudakoApp } from '../models/audako-apps';
import { EntityType } from '../models/configuration-entity';
export class UrlUtils {
  private static appRouteMapping: { [key: string]: AudakoApp } = {
    config: AudakoApp.Configuration,
    application: AudakoApp.Dashboard,
    commissioning: AudakoApp.Commissioning,
  };

  public static openApp(
    app: AudakoApp,
    tenantId: string,
    groupId?: string,
    detailId?: string,
    detailType?: EntityType
  ): void {
    let url = null;
    switch (app) {
      case AudakoApp.Dashboard:
        url = `/${tenantId}/application/${groupId ?? ''}`;
        if (detailId) {
          url += `/${detailId ?? ''}`;
        }
        break;
      case AudakoApp.Configuration:
        url = `/${tenantId}/config/${groupId ?? ''}`;
        if (detailId && detailType) {
          url += `/${detailId}/${detailType}`;
        }
        break;
      case AudakoApp.Commissioning:
        url = `/${tenantId}/commissioning/${groupId ?? ''}`;
        break;
      case AudakoApp.Administration:
        url = `administration/${tenantId}`;
        break;
    }
    window.location.href = url;
  }

  public static getTenantIdFromUrl(url: string): string {
    if (!url || url.length === 0) {
      return null;
    }

    const tenantId = url.split('/')[1];

    if (tenantId.length === 24) {
      return tenantId;
    }

    return null;
  }

  public static getAppFromUrl(url: string): AudakoApp {
    if (!url || url.length === 0) {
      return null;
    }

    const app = url.split('/')[2];

    if (UrlUtils.appRouteMapping[app]) {
      return UrlUtils.appRouteMapping[app];
    }

    return null;
  }

  public static getAppUrl(app: AudakoApp): string {
    let url = null;
    Object.keys(UrlUtils.appRouteMapping).forEach((key) => {
      if (UrlUtils.appRouteMapping[key] === app) {
        url = key;
      }
    });
    return url;
  }

  public static subscribeToUrl(): Observable<string> {
    let currentLocation = null;
    return timer(0, 50).pipe(
      filter(() => currentLocation !== window.location.pathname),
      map(() => {
        currentLocation = window.location.pathname;
        return currentLocation;
      })
    );
  }

  public static isActiveApp(app: AudakoApp): boolean {
    const currentLocation = window.location.pathname;
    const appUrl: { [app in AudakoApp]: string } = {
      [AudakoApp.Administration]: 'administration',
      [AudakoApp.Configuration]: 'config',
      [AudakoApp.Dashboard]: 'application',
      [AudakoApp.Commissioning]: 'commissioning',
    };

    return currentLocation.includes(appUrl[app]);
  }

  public static isInEntityConfiguration(): boolean {
    const currentLocation = window.location.pathname;
    return this.isActiveApp(AudakoApp.Configuration) && currentLocation.includes('detail');
  }

  public static getEntityConfigurationDetails(): { tenantId: string; groupId: string; entityId: string; entityType: EntityType } {
    const currentLocation = window.location.pathname;

    const matchResults = currentLocation.match(/(.{24})\/config\/(.{24})\/detail\/(.{3,24})\/([A-z]+)/);
    if (!matchResults) return null;
    return {
      tenantId: matchResults[1],
      groupId: matchResults[2],
      entityId: matchResults[3],
      entityType: matchResults[4] as EntityType,
    };
  }

  public static isInEntityList(): boolean {
    const currentLocation = window.location.pathname;
    return currentLocation.includes('list')
  }

  public static getEntityListDetails(): {tenantId: string; groupId: string, entityType: EntityType} {
    const currentLocation = window.location.pathname;
    const matchResults = currentLocation.match(/(.{24})\/config\/(.{24})\/list\/([A-z]+)/);
    if (!matchResults) return null;

    return {
      tenantId: matchResults[1],
      groupId: matchResults[2],
      entityType: matchResults[3] as EntityType
    };
  }
}
