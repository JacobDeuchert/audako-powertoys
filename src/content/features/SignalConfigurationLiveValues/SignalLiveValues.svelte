<script lang="ts">
  import {
    BehaviorSubject,
    concatAll,
    filter,
    finalize,
    first,
    from,
    map,
    Observable,
    Subject,
    Subscription,
    switchMap,
tap,
  } from 'rxjs';
import { SvelteComponent } from 'svelte/internal';
  import SignalValue from '../../shared/components/SignalValue.svelte';
  import { container } from 'tsyringe';
import { Signal } from '../../../models/signal';
import { EntityType } from '../../../models/configuration-entity';
import { AppConfig } from '../../../models/app.config';
import { HttpService } from '../../../services/http.service';
import { SignalLiveValue, SignalRService } from '../../../services/signalR.service';
import { UrlUtils } from '../../../utils/url-utils';
import { DomUtils } from '../../../utils/dom-utils';

  const httpService = container.resolve(HttpService);
  const signalRService = container.resolve(SignalRService);

  const hubConnected$ = new BehaviorSubject<boolean>(false);

  
  let listDomSubscription: Subscription;

  let configLiveElement: HTMLElement;
  let configLiveValueComponent: SignalValue;

  // listen for urls changes and show live values if user is in signal list or signal form
  UrlUtils.subscribeToUrl().subscribe((url) => {
    if (url?.includes('list/Signal')) {
      initHubConnection();
      showSignalValuesInList();
    } else {
    
      if (listDomSubscription) {
        listDomSubscription.unsubscribe();
        listDomSubscription = null;
      }
    }

    const configDetails = UrlUtils.getEntityConfigurationDetails();
    if (UrlUtils.isInEntityConfiguration() && configDetails.entityType === EntityType.Signal && configDetails.entityId !== 'NEW') {
      initHubConnection();
      showSignalValueInForm();
    } else {
      if (configLiveElement) {
        configLiveValueComponent.$destroy();
        configLiveElement.remove();
      }
    }
  });

  function showSignalValuesInList(): void {
    let lastSignalIds = [];
    const idElementMapping: { [key: string]: SvelteComponent } = {};
    const signals: Partial<Signal>[] = [];

    listDomSubscription = DomUtils.watchForDomChanges(document, 100)
      .pipe(
        finalize(() => console.log('Finalized')),
        map((): string[] => {
          const table = document
            .getElementsByClassName('mat-table cdk-table')
            .item(0); 
          const tableBody = table?.getElementsByTagName('tbody').item(0);

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

          signals.push(...unknownSignals);

          const table = document
            .getElementsByClassName('mat-table cdk-table')
            .item(0);
          
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
          signalRService.subscribeToSignalIds(lastSignalIds)
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

  function showSignalValueInForm(): void {
    
    let liveComponentAnchor: HTMLElement = null; 

    DomUtils.watchForDomChanges(document, 200).pipe(
      map(changes => document.getElementsByClassName('mat-expansion-panel')),
      filter((panels: HTMLCollection) => panels.length > 0),
      first(),
      tap((panels: HTMLCollection) => {
        const basicConfigurationPanel = panels.item(0);
        const panelContent = basicConfigurationPanel?.lastChild?.firstChild;
        const {liveValueElement, componentAnchor} = createLiveValueElementWithComponentAnchor();
        configLiveElement = liveValueElement;
        liveComponentAnchor = componentAnchor;
        panelContent.appendChild(liveValueElement);
      }),
      switchMap(() => {
        const signalId = UrlUtils.getEntityConfigurationDetails().entityId;
        return httpService.getEntityById(EntityType.Signal, signalId);
      })
    ).subscribe((signal: Signal)=> {
      console.log(signal);
      const liveValue$ = signalRService.subscribeToSignalValues([signal]).pipe(concatAll(), tap(x=> console.log(x)));
      configLiveValueComponent = new SignalValue({
        target: liveComponentAnchor,
        props: {
          signal: signal,
          signalValue: liveValue$,
          displayTimestamp: true

        }
      }); 
    }); 
  }

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
          signalRService.connectWithConfig(appconfig)
        )
      )
      .subscribe(() => {
        hubConnected$.next(true);
      });
  }

  function createLiveValueElementWithComponentAnchor(): {liveValueElement: HTMLElement, componentAnchor: HTMLElement} {
    const liveValueElement = document.createElement('div');
    const liveComponentAnchor = document.createElement('div');

    liveComponentAnchor.style.padding = "0 0 0 8px";

    liveValueElement.innerText = 'Live-Wert:';
    liveValueElement.style.display = 'flex';

    liveValueElement.appendChild(liveComponentAnchor);
    return {liveValueElement: liveValueElement, componentAnchor: liveComponentAnchor};
  }
</script>

<main />

<style>
</style>
