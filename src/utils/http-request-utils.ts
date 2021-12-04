export class HttpRequestUtils {

  
  public static addXMLHttpRequestOverride(override:(xmlRequest: XMLHttpRequest, methode: string, url: string) => void): void {

    var currentFunction = XMLHttpRequest.prototype.open;

    var currentSendFn = XMLHttpRequest.prototype.send;

    window.XMLHttpRequest.prototype.send = function (body?: any) {
      
      this.onSend(body)
      return currentSendFn.apply(this, [].slice.call(arguments));
    }

    window.XMLHttpRequest.prototype.open = function (
        method: string,
        URL: string
      ) {
        let _onreadystatechange = this.onreadystatechange,
          _this = this as XMLHttpRequest;

          let sendBody = null;
          (_this as any).onSend = (body: string) => sendBody = body;

          
    
        _this.onreadystatechange = function () {
          override(_this, method, URL);
          if (_onreadystatechange) _onreadystatechange.apply(this, arguments);
        };
    
        // detect any onreadystatechange changing
        Object.defineProperty(this, 'onreadystatechange', {
          get: function () {
            return _onreadystatechange;
          },
          set: function (value) {
            _onreadystatechange = value;
          },
        });
        return currentFunction.apply(this, [].slice.call(arguments));
      };
    }

  public static onSuccessfulGetRequest(callBack: (url: string, responseData: any) => void): void {

    const xmlRequestOverride = (xmlRequest: XMLHttpRequest, method: string, url: string) => {
      const isSuccessfulGetRequest =
        xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 200 && method === 'GET';
      
        if (isSuccessfulGetRequest) {
          let responseData = this.tryParseToJson(xmlRequest.responseText); 
          callBack(url, responseData);
        }
      }

    HttpRequestUtils.addXMLHttpRequestOverride(xmlRequestOverride);
  }

  public static onSuccessfulPostRequest(callBack: (url: string, responseData: any) => void): void {

    const xmlRequestOverride = (xmlRequest: XMLHttpRequest, method: string, url: string) => {
      const isSuccessfulGetRequest =
        xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 200 && method === 'POST';
      
        if (isSuccessfulGetRequest) {
          const responseData = this.tryParseToJson(xmlRequest.responseText);
          callBack(url, responseData);
        }
      }

    HttpRequestUtils.addXMLHttpRequestOverride(xmlRequestOverride);
  }

  public static onSuccessfulPutRequest(callBack: (url: string, responseData: any) => void): void {

    const xmlRequestOverride = (xmlRequest: XMLHttpRequest, method: string, url: string) => {
      const isSuccessfulGetRequest =
        xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 200 && method === 'PUT';
      
        if (isSuccessfulGetRequest) {
          const responseData = xmlRequest.responseText ? JSON.parse(xmlRequest.responseText) : null
          callBack(url, responseData);
        }
      }

    HttpRequestUtils.addXMLHttpRequestOverride(xmlRequestOverride);
  }


  public static onSuccessfulDeleteRequest(callBack: (url: string, responseData: any) => void): void {

    const xmlRequestOverride = (xmlRequest: XMLHttpRequest, method: string, url: string) => {
      const isSuccessfulGetRequest =
        xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 200 && method === 'DELETE';
      
        if (isSuccessfulGetRequest) {
          const responseData = this.tryParseToJson(xmlRequest.responseText);
          callBack(url, responseData);
        }
      }

    HttpRequestUtils.addXMLHttpRequestOverride(xmlRequestOverride);
  }

  private static tryParseToJson(text: string): string {
    try {
      return text ? JSON.stringify(text) : null;
    } catch (e) {
      return text;
    }
  }
}