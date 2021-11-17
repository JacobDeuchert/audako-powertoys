import { Signal } from '../../../models/signal';
import { HttpRequestUtils } from '../../../utils/http-request-utils';

let editedSignal: Signal = null;

function listenForSignalEditRequest(xmlRequest: XMLHttpRequest, methode: string , requestUrl: string) {
  
  const isCompletedGetRequest = xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 200 && methode === 'GET';
  

  if (isCompletedGetRequest) {
    const isSignalRequest = requestUrl.match(/daq\/signal\/(.){24}$/);
    if (isSignalRequest) {

      const inSignalList = window.location.pathname.endsWith('/list/Signal');
      const inSignalConfig = window.location.pathname.match(/detail\/(.){24}\/Signal/);

      if (inSignalList || inSignalConfig) {
        let data = JSON.parse(xmlRequest.responseText);
  
        editedSignal = data;
        console.info('EditedSignal', data, methode, requestUrl);
      }
    }
  }
}

function listenForSignalSavedRequest(xmlRequest: XMLHttpRequest, methode: string , requestUrl: string) {

  const isCompletedPostRequest = xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 200 && methode === 'POST';
  const isCompletedPutRequest = xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 200 && methode === 'PUT';

  const signalPostRequest = requestUrl.endsWith('daq/signal');
  const signalPutRequest = requestUrl.match(/daq\/signal\/(.){24}$/);
  
    if (isCompletedPostRequest && signalPostRequest || isCompletedPutRequest && signalPutRequest) {
     
      const inSignalConfig = window.location.pathname.match(/detail\/(.){24}\/Signal/);
  
      if (inSignalConfig) {
        let data = JSON.parse(xmlRequest.responseText);
        console.info('SavedSignal', data);
        }
    }
}

HttpRequestUtils.addXMLHttpRequestOverride(listenForSignalEditRequest);
HttpRequestUtils.addXMLHttpRequestOverride(listenForSignalSavedRequest);