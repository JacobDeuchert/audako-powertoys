import axios, { AxiosResponse } from 'axios';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { singleton } from 'tsyringe';
import { AppConfig } from '../models/app.config';
import { ConfigurationEntity, EntityType } from '../models/configuration-entity';
import { SignalType } from '../models/signal';

@singleton()
export class HttpService {

    private _appConfig: BehaviorSubject<AppConfig>;

    private _typeUrlMapping: { [key in keyof typeof EntityType]: string} = {
        Group: '/base/Group',
        Signal: '/daq/Signal'
    };

    constructor() {
        this._appConfig = new BehaviorSubject<AppConfig>(null);
        this._requestAppConfig();
    }

    public getAppConfig(): Observable<AppConfig> {
        return this._appConfig.asObservable().pipe(filter(x => !!x));
    }

    private async _requestAppConfig(): Promise<void> {
        
        const response = await axios.get<AppConfig>(window.location.origin + '/assets/conf/application.config')
        this._appConfig.next(response.data);
        return;
    }

    public async queryConfiguration<T extends ConfigurationEntity>(entityType: EntityType, query: {[p: string]: any}, 
                                                             paging?: {skip: number; limit: number}, projection?: {[p in keyof T]?: number}): Promise<Array<Partial<T>>> {

        const appConfig = this._appConfig.value;
        console.log(this._typeUrlMapping, entityType);
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

    private _getAuthorizationHeader(): {[p: string]: string} {
        const accessToken = localStorage.getItem('access_token');

        return { 
            Authorization: `Bearer ${accessToken}`
        };   
    }
}