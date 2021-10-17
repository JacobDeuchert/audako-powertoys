<script lang="ts">
  import {
    BehaviorSubject,
    filter,
    from,
    map,
    Observable,
    Subject,
    Subscription,
    switchMap,
tap,
  } from 'rxjs';
import { SvelteComponent } from 'svelte/internal';
  import SignalValue from './../components/SignalValue.svelte';
  import { container } from 'tsyringe';
  import { AppConfig } from '../models/app.config';
  import { EntityType } from '../models/configuration-entity';
  import { Signal } from '../models/signal';
  import { HttpService } from '../services/HttpService';
  import { SignalLiveValue, SignalRService } from '../services/SignalRService';
  import { DomUtils } from '../utils/dom-utils';
  import { UrlUtils } from '../utils/url-utils';

  const httpService = container.resolve(HttpService);
  const signalRService = container.resolve(SignalRService);

  const hubConnected$ = new BehaviorSubject<boolean>(false);

  const urlContextChange = new Subject<void>();
  let listDomSubscription: Subscription;

  // listen for urls changes and show live values if user is in signal list or signal form
  UrlUtils.subscribeToUrl().subscribe((url) => {
    if (url?.includes('list/Signal')) {
      initHubConnection();
      showSignalValuesInList();
    } else {
      urlContextChange.next();

      if (listDomSubscription) {
        listDomSubscription.unsubscribe();
        listDomSubscription = null;
      }
    }

    if (url?.includes('/detail/') && url?.includes('/Signal')) {
      initHubConnection();
      showSignalValuesInList();
    } else {
      urlContextChange.next();
    }
  });

  function showSignalValuesInList(): void {
    let lastSignalIds = [];
    const idElementMapping: { [key: string]: SvelteComponent } = {};
    const signals: Partial<Signal>[] = [];

    listDomSubscription = DomUtils.watchForDomChanges(document, 100)
      .pipe(
        map((): string[] => {
          const table = document
            .getElementsByClassName('mat-table cdk-table')
            .item(0); 
          const tableBody = table?.getElementsByTagName('tbody').item(0);

          console.log(tableBody?.childElementCount);

          if (tableBody) {
            let idColumns = tableBody.getElementsByClassName(
            'mat-cell mat-column-Id'
          );
          const signalIds = DomUtils.mapHTMLCollection(
            idColumns,
            (element) => (element as HTMLElement).innerText
          );
          return signalIds;
          }

          return [];
        }),
        filter((signalIds: string[]) => signalIds.length > 0 && !!signalIds.find((id) => !lastSignalIds.includes(id))),
        tap((signalIds: string[]) => lastSignalIds = signalIds),
        switchMap((signalIds: string[]): Observable<Partial<Signal>[]> => {
          const unknownSignals = signalIds.filter((id) => !idElementMapping[id]);
          return getSignals(unknownSignals);
        }),
        tap((unknownSignals: Partial<Signal>[]) => {

          console.log(unknownSignals);

          signals.push(...unknownSignals);

          const table = document
            .getElementsByClassName('mat-table cdk-table')
            .item(0);
          
          console.log(table);

          // Add Header Cell if not already present
          const tableHeader = table?.getElementsByTagName('thead').item(0);
          const tableHeaderRow = tableHeader
            ?.getElementsByTagName('tr')
            .item(0);

          if (
            tableHeaderRow.getElementsByClassName('powertoys-header-cell')
              .length === 0
          ) {
            const headerCell = DomUtils.createMatTableHeader();
            headerCell.style.position = 'sticky';
            headerCell.style.top = '0px';
            headerCell.style.float = 'none';
            headerCell.style.paddingTop = '8px !important';
            headerCell.style.zIndex = '100';
            headerCell.innerText = 'Values';
            headerCell.style.backgroundColor = 'var(--primary)';
            tableHeaderRow.appendChild(headerCell);
          }

          // Add new cell for every row in the table if not already present
          const tableBody = table?.getElementsByTagName('tbody').item(0);

          DomUtils.mapHTMLCollection(tableBody.children, (element, index) => {
            const signalId = lastSignalIds[index];
            const signal = signals.find(signal => signal.Id === signalId);

            if (element.getElementsByClassName('powertoys-cell').length === 0) {
              const newTd = DomUtils.createMatTableDefinition();
              newTd.style.fontWeight = 'bold';
              newTd.style.textAlign = 'center';

              const signalValueComponent = new SignalValue({
                target: newTd,
                props: {
                  signal: signal as Signal,
                  signalValue: null
                }
              });
              element.appendChild(newTd);
              idElementMapping[signalId] = signalValueComponent;
            }
          });
        }),
        switchMap((signals: Partial<Signal>[]): Observable<boolean> => 
          hubConnected$.pipe(filter((x: boolean) => !!x))
        ),
        switchMap((connected: boolean): Observable<SignalLiveValue[]> => 
          signalRService.subscribeToSignalValues(lastSignalIds)
        )).subscribe((values: SignalLiveValue[]) => {
            
          values.forEach((liveValue: SignalLiveValue) => {

            const id = liveValue.identifier.replace('S:', '');
            const valueComponent = idElementMapping[id];
            if (valueComponent) {
              valueComponent.$$set({signalValue: liveValue});
            }
          }); 
      });
  }

  function showSignalValueInForm(): void {}

  function getSignals(ids: string[]): Observable<Partial<Signal>[]> {
    const query = { Id: { $in: ids } };
    const projection = { Type: 1, Settings: 1 };

    return from(
      httpService.queryConfiguration<Signal>(
        EntityType.Signal,
        query,
        null,
        projection
      )
    );
  }

  function initHubConnection(): void {
    // do nothing if connection is already established
    if (hubConnected$.value) {
      return;
    }

    httpService
      .getAppConfig()
      .pipe(
        switchMap((appconfig: AppConfig) =>
          signalRService.connect(
            `${appconfig.Services.BaseUri}${appconfig.Services.Live}/hub`
          )
        )
      )
      .subscribe(() => {
        hubConnected$.next(true);
      });
  }
</script>

<main />

<style>
</style>
