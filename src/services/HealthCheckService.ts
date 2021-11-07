import { catchError, firstValueFrom, from, map, Observable, of, Subscription, switchMap, tap, timer } from 'rxjs';
import { AppConfig } from '../models/app.config';
import { SystemSettings } from '../models/extension-settings';
import { CombinedHealthCheckResponse, HealthCheckResponse } from '../models/health-check-response';
import { SystemStatus } from '../models/system-status';
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

    return timer(0, 5000).pipe(
      tap(() => console.log('Request')),
      switchMap(() => from(this._requestAppConfig(system.url))),
      map(() => true),
      catchError((e) => { console.log(e); return of(false)})
    ).subscribe(healthy => {
      console.log('Healthy', healthy);
        if (healthy) {
          this._systemStats[system.url].healthy = true;
        } else {
          this._systemStats[system.url].healthy = false;
            chrome.notifications.create({
                type: 'basic',
                iconUrl: './assets/favicon.ico',
                title: 'audako system error',
                message: `Failed to reach Website for System: ${system.al ?? system.url}!`
            })
        }
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
    console.log(response);

    if (response.status != 200) {
      throw new Error(response.status.toString());
    }

    return await response.json();
  }


}