import { EntityIcons, EntityType, LiveValueService, type Signal } from 'audako-core-components';
import { filter, from, map, Subject, share, switchMap, takeUntil } from 'rxjs';
import { container } from 'tsyringe';
import SignalValue from '../../../shared/components/SignalValue.svelte';
import { type SearchResult, SignalSearchResult } from '../search-results';
import { SearchQuery } from './search-query';

export class SignalQuery extends SearchQuery {
  private liveValueService: LiveValueService;

  private _liveValueUnsub: Subject<void>;

  constructor() {
    super();
    this.liveValueService = container.resolve(LiveValueService);
    this._liveValueUnsub = new Subject<void>();
  }

  public async query(queryString: string, tenantRestriction?: string): Promise<SearchResult[]> {
    const signalProjection = {
      Name: 1,
      Path: 1,
      GroupId: 1,
      Type: 1,
      Settings: 1,
    };

    const matchedEntities = await this.requestConfigurationEntities<Signal>(
      EntityType.Signal,
      queryString,
      tenantRestriction,
      signalProjection,
    );

    if (matchedEntities.length === 0) {
      return [];
    }

    this._liveValueUnsub.next();

    const signalIds = matchedEntities.map(signal => signal.Id);
    const liveValue$ = from(this.liveValueService.connect()).pipe(
      takeUntil(this._liveValueUnsub),
      switchMap(() => this.liveValueService.subscribeToSignalValues(signalIds)),
      share(),
    );

    return Promise.all(
      matchedEntities.map(async signal => {
        const tenant = await this.getTenantForEntity(signal);
        const tenantId = tenant?.Id ?? tenant?.Root ?? signal.Path?.[0] ?? signal.Id;

        const signalValue = liveValue$.pipe(
          map(liveValues => liveValues.find(liveValue => liveValue.identifier === signal.Id)),
          filter(liveValue => !!liveValue),
        );

        const infoComponent = {
          component: SignalValue,
          props: {
            signal: signal,
            signalValue: signalValue,
          },
        };

        return new SignalSearchResult({
          title: signal.Name.Value,
          infoText: tenant?.Name,
          icon: EntityIcons[EntityType.Signal],
          tooltip: () => this.entityNameService.resolvePathName(signal.Path ?? []),
          infoComponent: infoComponent,
          context: {
            tenantId,
            groupId: signal.GroupId,
            signalId: signal.Id,
          },
        });
      }),
    );
  }
}
