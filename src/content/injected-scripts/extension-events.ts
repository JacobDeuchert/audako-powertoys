import { AudakoApp } from '../../models/audako-apps';
import { ComponentUtils } from '../../utils/component-utils';
import { UrlUtils } from '../../utils/url-utils';
import {
  ENTITY_CREATED_EVENT_NAME,
  ENTITY_UPDATED_EVENT_NAME,
  type EntityCreatedEventPayload,
  dispatchEventAckToExtensionWorld,
  isEntityEventName,
  isExtensionWorldEventMessage,
} from '../shared/helpers/cross-world-events';

interface SidebarComponent {
  configDataChangedService: {
    configDataChangedTrigger(change: { id: string; type: string }, resetCache?: boolean): void;
  };
}

interface TypesOverviewComponent {
  _requestTypeCounts(): void;
}

function noopEntityEventHandler(_event: Event): void {}

function handleEntityCreateEvent(event: CustomEvent): void {
  if (UrlUtils.getCurrentApp() !== AudakoApp.Configuration) {
    return;
  }

  console.log(
    '[audako-powertoys] Received entity created event in extension world:',
    event.type,
    event.detail,
  );

  const sidebarComponent = ComponentUtils.getComponentByTagName(
    'audako4-sidebar',
  ) as unknown as SidebarComponent;

  const typesOverview = ComponentUtils.getFirstRouterOutletChildByComponentSelector(
    'audako4-configuration',
  ) as unknown as TypesOverviewComponent;

  console.log(typesOverview);
  console.log(
    '[audako-powertoys] Retrieved sidebar component for entity created event:',
    sidebarComponent,
  );

  if (
    sidebarComponent &&
    typeof sidebarComponent.configDataChangedService?.configDataChangedTrigger === 'function'
  ) {
    const detail = event.detail as EntityCreatedEventPayload;
    sidebarComponent.configDataChangedService.configDataChangedTrigger(
      {
        id: detail.entityId,
        type: detail.entityType,
      },
      true,
    );

    console.log(
      '[audako-powertoys] Triggered sidebar configDataChangedTrigger due to entity created event:',
      detail,
    );
  }

  if (typesOverview && typeof typesOverview._requestTypeCounts === 'function') {
    typesOverview._requestTypeCounts();
    console.log(
      '[audako-powertoys] Triggered types overview _requestTypeCounts due to entity created event',
    );
  }
}

function registerNoopEntityEventHandlers(): void {
  document.addEventListener(ENTITY_UPDATED_EVENT_NAME, noopEntityEventHandler);
  document.addEventListener(ENTITY_CREATED_EVENT_NAME, handleEntityCreateEvent);
}

export function registerExtensionEventHandler(): void {
  registerNoopEntityEventHandlers();

  window.addEventListener('message', (event: MessageEvent) => {
    if (event.source !== window) {
      return;
    }

    if (!isExtensionWorldEventMessage(event.data)) {
      return;
    }

    const eventName = event.data.payload?.name;
    if (!isEntityEventName(eventName)) {
      return;
    }

    document.dispatchEvent(
      new CustomEvent(eventName, {
        detail: event.data.payload?.detail ?? null,
      }),
    );

    if (!event.data.requestId) {
      return;
    }

    dispatchEventAckToExtensionWorld(eventName, event.data.requestId, true);
  });
}
