import axios from 'axios';
import { catchError, firstValueFrom, from, map, Observable, of, switchMap, tap, timer } from 'rxjs';
import { AppConfig } from '../models/app.config';
import { CombinedHealthCheckResponse, HealthCheckResponse } from '../models/health-check-response';

export class HealthCheckService {

  public observeWebsiteHealth(systemUrl: string): Observable<boolean> {
    return timer(0, 5000).pipe(
      tap(() => console.log('Request')),
      switchMap(() => from(this._requestAppConfig(systemUrl))),
      map(() => true),
      catchError((e) => { console.log(e); return of(false)})
    );
  }

  public observeHealthChecks(systemUrl: string): Observable<CombinedHealthCheckResponse> {
    return of(null);
  }

  public async getHealthChecInformation<T>(): Promise<HealthCheckResponse<T>> {
    return null;
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