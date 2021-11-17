// Overrides userprofile to set the OpenInSameWindow property

import { HttpRequestUtils } from '../../../utils/http-request-utils';

function overrideUserProfile(xmlRequest: XMLHttpRequest, methode: string, url: string) {

  const isCompletedGetRequest = xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 200 && methode === 'GET';

  if (isCompletedGetRequest && url.endsWith('userprofile')) {
    try 
    {
      var data = JSON.parse(xmlRequest.responseText);
      data.UserSettings.OpenInSameWindow = true;
  
      Object.defineProperty(xmlRequest, 'response', {
        value: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
      console.info('Failed to override userprofile with Response:', xmlRequest.responseText);
    }
     
  }
}

HttpRequestUtils.addXMLHttpRequestOverride(overrideUserProfile);

