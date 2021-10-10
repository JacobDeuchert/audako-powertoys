import { filter, map, Observable, timer } from 'rxjs';

export enum AudakoApp {
    Dashboard = 'Dashboard',
    Configuration = 'Configuration',
    Commissioning = 'Commissioning'
}

export class UrlUtils {

    private static appRouteMapping: { [key: string]: AudakoApp } = {
        config: AudakoApp.Configuration,
        application: AudakoApp.Dashboard,
        commissioning: AudakoApp.Commissioning
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
        Object.keys(UrlUtils.appRouteMapping).forEach(key => {
            if (UrlUtils.appRouteMapping[key] === app) {
                url = key;
            }
        });
        return url; 
    }

    public static subscribeToUrl(): Observable<string> {
        let currentLocation = null;
        return timer(0, 50).pipe(filter(() => currentLocation !== window.location.pathname), map(() => {
            currentLocation = window.location.pathname;
            return currentLocation;
        }))
    }
}