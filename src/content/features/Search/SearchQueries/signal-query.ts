import { filter, map, share, shareReplay, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { container } from 'tsyringe';
import { AudakoApp } from '../../../../models/audako-apps';
import { ConfigurationEntity, EntityIcons, EntityType } from '../../../../models/configuration-entity';
import { Signal } from '../../../../models/signal';
import { HttpService } from '../../../../services/http.service';
import { SignalRService } from '../../../../services/signalR.service';
import { UrlUtils } from '../../../../utils/url-utils';
import { IndexedTenant } from '../search-requisites';
import { SearchResult } from '../search-results';
import { TenantIndexer } from '../tenant-indexer';
import { SearchQuery } from './search-query';
// @ts-ignore
import SignalValue from '../../../shared/components/SignalValue.svelte';


export class SignalQuery extends SearchQuery {
  private _signalRService: SignalRService;

  private _liveValueUnsub: Subject<void>;

  constructor(tenantIndexer: TenantIndexer, httpService: HttpService) {
    super(tenantIndexer, httpService);

    this._signalRService = container.resolve(SignalRService);

    this._liveValueUnsub = new Subject<void>();
  }

  public async query(queryString: string, tenantRestriction?: string): Promise<SearchResult[]> {
    const indexedTenants = await this.tenantIndexer.getIndexedTenants();

    const defaultAction = (tenant: IndexedTenant, entity: ConfigurationEntity) =>
      UrlUtils.openApp(AudakoApp.Configuration, tenant.Id, entity.GroupId, entity.Id);

    const tooltip = (entity: ConfigurationEntity) => {
      return this.httpService.resolvePathName(entity.Path);
    };

    const signalProjection = {
      Name: 1,
      Path: 1,
      GroupId: 1,
      Type: 1,
      Settings: 1
    }

    const matchedEntities = await this.requestConfigurationEntities<Signal>(
      EntityType.Signal,
      queryString,
      tenantRestriction,
      signalProjection
    );

    console.log('Creating Shared Observable');

    const liveValue$ = this.httpService.getAppConfig().pipe(
      takeUntil(this._liveValueUnsub),
      switchMap(appConfig => this._signalRService.connectWithConfig(appConfig)),
      switchMap(() => this._signalRService.subscribeToSignalValues(matchedEntities)),
      tap((liveValues) => console.log(liveValues)),
      share()
    );

    return matchedEntities.map((signal) => {
      const tenant = this.getTenantForEntity(indexedTenants, signal);

      const signalValue = liveValue$.pipe(
        map(liveValues => liveValues.find(liveValue => liveValue.identifier === signal.Id)),
        filter(liveValue => !!liveValue)
      )

      const infoComponent = {
        component: SignalValue,
        props: {
          signal: signal,
          signalValue: signalValue
        }
      } 

      return {
        title: signal.Name.Value,
        infoText: tenant.Name,
        defaultAction: () => defaultAction(tenant, signal),
        extraActions: [],
        icon: EntityIcons[EntityType.Signal],
        tooltip: () => tooltip(signal),
        infoComponent: infoComponent
      };
    });
  }
}
