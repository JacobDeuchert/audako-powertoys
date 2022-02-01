// import { EntityType } from '../../../models/configuration-entity';
// import { Signal, SignalType } from '../../../models/signal';
// import { HttpRequestUtils } from '../../../utils/http-request-utils';
// import { EntityChangeEvent, EntityDeleteEvent } from './entity-event';

// let editedSignal: Signal = null;

// function listenForSignalEditRequest(requestUrl: string, responseBody: Signal) {
//   const isSignalRequest = requestUrl.match(/daq\/signal\/(.){24}$/);
//   if (isSignalRequest) {

//     if (inSignalList() || inSignalConfig()) {
//       editedSignal = responseBody;
//     }
//   }
// }

// function listenForSignalSavedRequest(requestUrl: string, responseBody: Signal) {
  
//   const signalCreateRequest = requestUrl.endsWith('daq/signal');
//   const signalUpdateRequest = requestUrl.match(/daq\/signal\/(.){24}$/);

//   if (signalCreateRequest || signalUpdateRequest) {
//     if (inSignalConfig()) {
//       document.dispatchEvent(
//         new CustomEvent<EntityChangeEvent>('entity-changed', { detail: { oldEntity: editedSignal, newEntity: responseBody, entityType: EntityType.Signal} })
//       );
//     }
//   }
// }

// function listenForSignalDeleteRequest(requestUrl: string, payload: any): void {
//   if (requestUrl.includes('daq/signal/')) {
//     const signalId = requestUrl.substring(requestUrl.length - 24);
//     if (signalId == editedSignal?.Id && signalId.length === 24) {
//       document.dispatchEvent(
//         new CustomEvent<EntityDeleteEvent>('entity-deleted', { detail: { entity: editedSignal, entityType: EntityType.Signal}})
//       );
//     }
//   }
// }

// function inSignalConfig(): boolean {
//   const inSignalConfig = window.location.pathname.match(/detail\/(.){24}\/Signal/);
//   return !!inSignalConfig;
// }

// function inSignalList(): boolean {
//   return window.location.pathname.endsWith('/list/Signal');
// }

// HttpRequestUtils.onSuccessfulGetRequest(listenForSignalEditRequest);

// HttpRequestUtils.onSuccessfulPostRequest(listenForSignalSavedRequest);
// HttpRequestUtils.onSuccessfulPutRequest(listenForSignalSavedRequest);

// HttpRequestUtils.onSuccessfulDeleteRequest(listenForSignalDeleteRequest);
