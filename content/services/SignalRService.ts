import { concat, filter, map, Observable, of, Subject } from 'rxjs';
import * as signalR from '@aspnet/signalr';
import { singleton } from 'tsyringe';

export type SignalLiveValue= {
  identifier: string;
  value: any;
  timestamp: Date;
};

@singleton()
export class SignalRService {
  private hubConnection: signalR.HubConnection;

  private _valueCache: { [key: string]: SignalLiveValue };

  private _subscribedIds: string[];

  private _valueObserver: Subject<SignalLiveValue[]>;

  public constructor() {
    this._valueCache = {};
    this._subscribedIds = [];
    this._valueObserver = new Subject<SignalLiveValue[]>();
  }

  public connect(hubUrl: string): Observable<void> {
    if (!this.hubConnection) {
      this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(hubUrl)
        .build();

      const connectionEstablished$ = new Subject<void>();

      this.hubConnection
        .start()
        .then(() => {
          this.hubConnection.send('ChangeModeAsync', true);
          this.hubConnection.send('ChangeIntervalAsync', 500);

          this.hubConnection.on('Send', (values: SignalLiveValue[]) => {

            values.forEach((value: SignalLiveValue) => {
              this._valueCache[value.identifier] = value;
            });
            console.log(values);
            this._valueObserver.next(values);
            
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
    } else {
      return of(null);
    }
  }

  public subscribeToSignalValues( signalIds: string[]): Observable<SignalLiveValue[]> {

    const prefixedIds = signalIds.map(x => `S:${x}`);

    const notSubscribedIds = prefixedIds.filter(id => !this._subscribedIds.includes(id));

    if (this.hubConnection && notSubscribedIds.length > 0) {
      this.hubConnection.send(
        'SubscribeMany',
        notSubscribedIds
      );
      
      this._subscribedIds.push(...notSubscribedIds);
    }

    const initialValues: SignalLiveValue[]= Object.keys(this._valueCache)
      .filter((id) => prefixedIds.includes(id))
      .map(id => this._valueCache[id]);

    const liveValues$: Observable<SignalLiveValue[]> = this._valueObserver.pipe(
        map((values: SignalLiveValue[]): SignalLiveValue[] =>
            values.filter(liveValue => prefixedIds.includes(liveValue.identifier) 
        ),
        filter((values: SignalLiveValue[]) => values.length > 0)
    ));

    return concat(of(initialValues), liveValues$);
  }
}
