import { catchError, firstValueFrom, from, map, Observable, of, Subscription, switchMap, tap, timer } from 'rxjs';
import { AppConfig } from '../models/app.config';
import { SystemSettings } from '../models/extension-settings';
import { CombinedHealthCheckResponse, HealthCheckResponse } from '../models/health-check-response';
import { SystemStatus } from '../models/system-status';
import { NotificationUtils } from '../utils/notification-utils';
import { StorageUtils } from '../utils/storage-utils';

export class HealthCheckService {

  private _systemStats: {[url: string]: SystemStatus};

  private _healthCheckSubscriptions: {[url: string]: Subscription};

  constructor() {
    this._systemStats = {};
    this._healthCheckSubscriptions = {};
  }

  public async observeSystemsHealth(systems: SystemSettings[]): Promise<void> {
    console.log("Observing systems", systems);
    this._systemStats = await StorageUtils.getSystemStats() ?? {};

    // unsubscribe from all healthchecks for deleted systems
    const deletedSystems = Object.keys(this._healthCheckSubscriptions).filter(url => !systems.some(system => system.url === url))

    deletedSystems.forEach(url=> {
      delete this._systemStats[url];
      const subscription = this._healthCheckSubscriptions[url];
      subscription?.unsubscribe();
    });


    systems.forEach(system => {
      if (!this._healthCheckSubscriptions[system.url]) {
        if (system.rh) {
          this._healthCheckSubscriptions[system.url] = this.observeRichHealthChecks(system.url);
        }
        this._healthCheckSubscriptions[system.url] = this.observeWebsiteHealth(system);  
      }
    });

    this._syncStatsToStorage();
  }
  
  public observeWebsiteHealth(system: SystemSettings): Subscription {

    if (!this._systemStats[system.url]) {
      this._systemStats[system.url] = {
        healthy: true 
      };
    }

    const websiteReachable$ = () => from(this._requestAppConfig(system.url)).pipe(
      map(() => true),
      catchError(() => of(false))      
    );

    return timer(0, 10000).pipe(
      switchMap(() => websiteReachable$()),
    ).subscribe(healthy => {
      
      const lastStatus = this._systemStats[system.url];

      // do nothing if status has not changed
      if (healthy === lastStatus.healthy) {
        return;
      }

      if (!healthy) {
        console.log('Healthy', healthy);
        NotificationUtils.showErrorNotification(`System: ${new URL(system.url)} not reachable`);
      }

      this._systemStats[system.url] = {
        healthy: healthy
      };
      this._syncStatsToStorage()
    });
  }

  public observeRichHealthChecks(systemUrl: string): Subscription {
    return of(null).subscribe();
  }

  public async getHealthChecInformation<T>(): Promise<HealthCheckResponse<T>> {
    return null;
  }

  private _syncStatsToStorage(): void {
    StorageUtils.setSystemStats(this._systemStats);
  }

  private async _requestAppConfig(baseUrl: string): Promise<AppConfig> {
        
    const response = await fetch(`${baseUrl}/assets/conf/application.config`, {cache: 'no-cache'});
  
    if (response.status != 200) {
      throw new Error(response.status.toString());
    }

    return await response.json();
  }


}