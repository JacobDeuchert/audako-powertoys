import axios, { AxiosResponse } from 'axios';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { singleton } from 'tsyringe';
import { AppConfig } from '../models/app.config';
import { ConfigurationEntity, EntityType } from '../models/configuration-entity';
import { SignalType } from '../models/signal';
import { TenantView } from '../models/tenant-view';

@singleton()
export class HttpService {

    private _appConfig: BehaviorSubject<AppConfig>;

    private _url: string;

    private _typeUrlMapping: { [key in keyof typeof EntityType]: string} = {
        Group: '/base/Group',
        Signal: '/daq/Signal', 
        Dashboard: '/base/Dashboard',
    };

    constructor(url?: string) {
        this._url = url ?? window.location.origin;

        this._appConfig = new BehaviorSubject<AppConfig>(null);
        this._requestAppConfig();
    }

    public getAppConfig(): Observable<AppConfig> {
        return this._appConfig.asObservable().pipe(filter(x => !!x));
    }

    private async _requestAppConfig(): Promise<void> {
        
        try {
            const response = await axios.get<AppConfig>(this._url + '/assets/conf/application.config')
            if (response.status === 200) {
                this._appConfig.next(response.data);
            } else {
                this._appConfig.error(response.status);
            }
        } catch (err) {
            this._appConfig.error(err);
        }
    }

    public async queryConfiguration<T extends ConfigurationEntity>(entityType: EntityType, query: {[p: string]: any}, 
                                                             paging?: {skip: number; limit: number}, projection?: {[p in keyof T]?: number}): Promise<Array<Partial<T>>> {

        const appConfig = this._appConfig.value;
        const url = `${appConfig.Services.BaseUri}${appConfig.Services.Structure}${this._typeUrlMapping[entityType]}/query`;
        
        const queryBody = {
            $filter: JSON.stringify(query),
            $paging: paging ? JSON.stringify(paging) : null,
            $projection: projection ? JSON.stringify(projection) : null
        };

        const headers = this._getAuthorizationHeader()

        const response = await axios.post<{$filter: string, $paging: string, $projection: string}, AxiosResponse<Partial<T>[]>>(url, queryBody, {headers: headers});
        return response.data;
    }

    public async getTopTenants(): Promise<TenantView[]> {

        const appConfig = this._appConfig.value;
        
        const url = `${appConfig.Services.BaseUri}${appConfig.Services.Structure}/tenant/top`;
        const headers = this._getAuthorizationHeader();
        const response = await axios.get<TenantView[]>(url, {headers: headers});
        return response.data;
    }

    public async getNextTenants(tenantId: string): Promise<TenantView[]> {
        const appConfig = this._appConfig.value;
        
        const url = `${appConfig.Services.BaseUri}${appConfig.Services.Structure}/tenant/${tenantId}/next`;
        const headers = this._getAuthorizationHeader();
        const response = await axios.get<TenantView[]>(url, {headers: headers});
        return response.data; 
    }

    private _getAuthorizationHeader(): {[p: string]: string} {
        const accessToken = localStorage.getItem('access_token');

        return { 
            Authorization: `Bearer ${accessToken}`
        };   
    }
}