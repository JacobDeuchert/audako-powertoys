import { concat, filter, map, Observable, of, Subject } from 'rxjs';
import * as signalR from '@aspnet/signalr';
import { singleton } from 'tsyringe';
import { AppConfig } from '../models/app.config';
import { Signal, SignalType } from '../models/signal';

export type SignalLiveValue= {
  identifier: string;
  value: any;
  timestamp: Date;
};

export enum LiveHubMethode {
  ChangeModeAsync = 'ChangeModeAsync',
  ChangeIntervalAsync = 'ChangeIntervalAsync',
  SubscribeMany = 'SubscribeMany',
}

export enum LiveHubEvent {
  Send = 'Send'
}

export enum SubscriptionPrefix {
  S = 'S',
  SO = 'SO',
  T = 'T',
  TC = 'TC',
}

@singleton()
export class SignalRService {
  private hubConnection: signalR.HubConnection;

  private _valueCache: { [key: string]: SignalLiveValue };

  private _subscribedIds: string[];

  private _livePackageObserver: Subject<SignalLiveValue[]>;

  public constructor() {
    this._valueCache = {};
    this._subscribedIds = [];
    this._livePackageObserver = new Subject<SignalLiveValue[]>();
  }

  public connectWithConfig(appConfig: AppConfig): Observable<void> {
    console.log('Connect');
    return this.connect(`${appConfig.Services.BaseUri}${appConfig.Services.Live}/hub`);
  }

  public connect(hubUrl: string): Observable<void> {
    if (this.hubConnection) {
      return of(null);
    }

    this.hubConnection = this._buildHubConnection(hubUrl);

    const connectionEstablished$ = new Subject<void>();

    this.hubConnection
      .start()
      .then(() => {
        this._sendMessage(LiveHubMethode.ChangeModeAsync, true);
        this._sendMessage(LiveHubMethode.ChangeIntervalAsync, 500);
      
        this.hubConnection.on('Send', (values: SignalLiveValue[]) => {
          values.forEach((value: SignalLiveValue) => {
            this._valueCache[value.identifier] = value;
          });
          
          this._livePackageObserver.next(values);
        });

        connectionEstablished$.next(null);
      })
      .catch((e) => {
        this.hubConnection = null;
        connectionEstablished$.error(e);
        console.log('Failed to start connection: ' + e.message);
      });

    this.hubConnection.onclose(() => {
      console.log('Hub connection closed');
      this.hubConnection = null;
    });

    return connectionEstablished$.asObservable();
  }

  public subscribeToSignalIds(signalIds: string[]): Observable<SignalLiveValue[]> {
    const prefixedIds = signalIds.map((x) => `S:${x}`);

    const notSubscribedIds = prefixedIds.filter((id) => !this._subscribedIds.includes(id));

    if (this.hubConnection && notSubscribedIds.length > 0) {
      this.hubConnection.send('SubscribeMany', notSubscribedIds);

      this._subscribedIds.push(...notSubscribedIds);
    }

    const initialValues: SignalLiveValue[] = Object.keys(this._valueCache)
      .filter((id) => prefixedIds.includes(id))
      .map((id) => this._valueCache[id]);

    const liveValues$: Observable<SignalLiveValue[]> = this._livePackageObserver.pipe(
      map(
        (values: SignalLiveValue[]): SignalLiveValue[] =>
          values.filter((liveValue) => prefixedIds.includes(liveValue.identifier)),
        filter((values: SignalLiveValue[]) => values.length > 0)
      )
    );

    return concat(of(initialValues), liveValues$);
  }

  public subscribeToSignalValues(signals: Signal[]): Observable<SignalLiveValue[]> {

    const offsetSubscriptionIds = signals.filter(s => s.Type.Value === SignalType.Counter).map(s => `${SubscriptionPrefix.SO}:${s.Id}`);

    const signalSubscriptionIds = signals.map(s => `${SubscriptionPrefix.S}:${s.Id}`);

    const totalSubscriptionIds = [...offsetSubscriptionIds, ...signalSubscriptionIds];

    const packageValues$ = this._subscribeLiveValuePackages(totalSubscriptionIds);

    return packageValues$.pipe(
      map((values: SignalLiveValue[]) => 
        values.reduce((ids, livePackage) => ({...ids, [this._extractEntityId(livePackage.identifier)]: 1}), {})  
      ),
      map((changedSignals: {[id: string]: number}): SignalLiveValue[] => 
        Object.keys(changedSignals).map((id) => {
          const signal = signals.find(s => s.Id === id);
          return this._calculateSignalValueFromCache(signal)
        }).filter((v) => v !== null)
      )
    );
  }

  private _subscribeLiveValuePackages(packageIds: string[]): Observable<SignalLiveValue[]> {
    const notSubscribedIds = packageIds.filter((id) => !this._subscribedIds.includes(id));

    if (this.hubConnection && notSubscribedIds.length > 0) {
       this._sendMessage(LiveHubMethode.SubscribeMany, notSubscribedIds);
      this._subscribedIds.push(...notSubscribedIds);
    }

    const cachedPackages = this._getCachedValuePackages(packageIds);

    const livePackages$ = this._livePackageObserver.pipe(
      map((values: SignalLiveValue[]) => 
        values.filter((liveValue) => packageIds.includes(liveValue.identifier)),
      filter((values: SignalLiveValue[]) => values.length > 0)
    ));
    return concat(of(cachedPackages), livePackages$);
  }

  private _getCachedValuePackages(packageIds: string[]): SignalLiveValue[] {
    return packageIds.map((id) => this._valueCache[id]).filter((value) => value !== undefined);
  }

  private _calculateSignalValueFromCache(signal: Signal): SignalLiveValue {
    const offsetValue = this._valueCache[`${SubscriptionPrefix.SO}:${signal.Id}`];
    const signalValue = this._valueCache[`${SubscriptionPrefix.S}:${signal.Id}`];

    if (!offsetValue && !signalValue) {
      return null;
    }

    const timestamp = this._getNewerTimestamp(offsetValue?.timestamp, signalValue?.timestamp);

    return {
      identifier: signal.Id,
      timestamp: timestamp,
      value: offsetValue?.value ?? 0 + signalValue?.value ?? 0
    }
  }
  
  private _sendMessage(methode: LiveHubMethode, ...args: any[]): void {
    if (this.hubConnection) {
      this.hubConnection.send(methode, ...args);
    }
  }

  private _getNewerTimestamp(timestamp1: Date, timestamp2: Date): Date {
    return (timestamp1 ?? null ) > (timestamp2 ?? null) ? timestamp1 : timestamp2;
  }

  private _extractEntityId(packageId: string): string {
    return packageId.split(':')[1];
  }

  private _buildHubConnection(hubUrl: string): signalR.HubConnection {
    return new signalR.HubConnectionBuilder().withUrl(hubUrl).build();
  }
}
