export const EXTENSION_WORLD_SOURCE = 'audako-powertoys-extension' as const;
export const MAIN_WORLD_SOURCE = 'audako-powertoys-main' as const;
export const EXTENSION_EVENT_MESSAGE_TYPE = 'audako-powertoys:event' as const;
export const MAIN_WORLD_EVENT_ACK_TYPE = 'audako-powertoys:event:ack' as const;

export const ENTITY_UPDATED_EVENT_NAME = 'entity.updated' as const;
export const ENTITY_CREATED_EVENT_NAME = 'entity.created' as const;

const ENTITY_EVENT_NAMES = [ENTITY_UPDATED_EVENT_NAME, ENTITY_CREATED_EVENT_NAME] as const;

export interface EntityCreatedEventPayload {
  entityType: string;
  entityId: string;
  tenantId: string;
  groupId: string;
  sourceTool: 'create-entity';
  timestamp: string;
}

export type EntityEventName = (typeof ENTITY_EVENT_NAMES)[number];

export type ExtensionWorldEventMessage = {
  source: typeof EXTENSION_WORLD_SOURCE;
  type: typeof EXTENSION_EVENT_MESSAGE_TYPE;
  requestId?: string;
  payload?: {
    name?: string;
    detail?: any;
  };
};

export type MainWorldEventAckMessage = {
  source: typeof MAIN_WORLD_SOURCE;
  type: typeof MAIN_WORLD_EVENT_ACK_TYPE;
  requestId?: string;
  payload?: {
    event?: string;
    ok?: boolean;
  };
};

export const ALLOWED_ENTITY_EVENT_NAMES = new Set<string>(ENTITY_EVENT_NAMES);

function isRecord(value: any): value is Record<string, any> {
  return !!value && typeof value === 'object';
}

export function isEntityEventName(value: any): value is EntityEventName {
  return typeof value === 'string' && ALLOWED_ENTITY_EVENT_NAMES.has(value);
}

export function isExtensionWorldEventMessage(value: any): value is ExtensionWorldEventMessage {
  return (
    isRecord(value) &&
    value.source === EXTENSION_WORLD_SOURCE &&
    value.type === EXTENSION_EVENT_MESSAGE_TYPE
  );
}

export function isMainWorldEventAckMessage(value: any): value is MainWorldEventAckMessage {
  return (
    isRecord(value) &&
    value.source === MAIN_WORLD_SOURCE &&
    value.type === MAIN_WORLD_EVENT_ACK_TYPE
  );
}

export function dispatchEventToMainWorld(eventName: string, detail: any, requestId?: string): void {
  const message: ExtensionWorldEventMessage = {
    source: EXTENSION_WORLD_SOURCE,
    type: EXTENSION_EVENT_MESSAGE_TYPE,
    payload: {
      name: eventName,
      detail,
    },
  };

  if (requestId) {
    message.requestId = requestId;
  }

  window.postMessage(message, '*');
}

export function dispatchEventAckToExtensionWorld(
  eventName: string,
  requestId: string,
  ok = true,
): void {
  const message: MainWorldEventAckMessage = {
    source: MAIN_WORLD_SOURCE,
    type: MAIN_WORLD_EVENT_ACK_TYPE,
    requestId,
    payload: {
      event: eventName,
      ok,
    },
  };

  window.postMessage(message, '*');
}
