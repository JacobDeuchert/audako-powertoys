const EXTENSION_WORLD_SOURCE = 'audako-powertoys-extension';
const MAIN_WORLD_SOURCE = 'audako-powertoys-main';
const EXTENSION_EVENT_MESSAGE_TYPE = 'audako-powertoys:event';
const MAIN_WORLD_EVENT_ACK_TYPE = 'audako-powertoys:event:ack';

const ALLOWED_EVENT_NAMES = new Set(['entity.updated']);

type ExtensionWorldEventMessage = {
  source: typeof EXTENSION_WORLD_SOURCE;
  type: typeof EXTENSION_EVENT_MESSAGE_TYPE;
  requestId?: string;
  payload?: {
    name?: string;
    detail?: any;
  };
};

function isExtensionWorldEventMessage(value: any): value is ExtensionWorldEventMessage {
  return (
    !!value
    && value.source === EXTENSION_WORLD_SOURCE
    && value.type === EXTENSION_EVENT_MESSAGE_TYPE
  );
}

export function registerExtensionEventHandler(): void {
  window.addEventListener('message', (event: MessageEvent) => {
    if (event.source !== window) {
      return;
    }

    if (!isExtensionWorldEventMessage(event.data)) {
      return;
    }

    const eventName = event.data.payload?.name;
    if (typeof eventName !== 'string' || !ALLOWED_EVENT_NAMES.has(eventName)) {
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

    window.postMessage(
      {
        source: MAIN_WORLD_SOURCE,
        type: MAIN_WORLD_EVENT_ACK_TYPE,
        requestId: event.data.requestId,
        payload: {
          event: eventName,
          ok: true,
        },
      },
      '*',
    );
  });
}
