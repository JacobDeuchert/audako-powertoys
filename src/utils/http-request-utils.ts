export class HttpRequestUtils {

  public static addXMLHttpRequestOverride(override:(xmlRequest: XMLHttpRequest, methode: string, url: string) => void): void {

    var currentFunction = XMLHttpRequest.prototype.open;

    window.XMLHttpRequest.prototype.open = function (
        method: string,
        URL: string
      ) {
        let _onreadystatechange = this.onreadystatechange,
          _this = this as XMLHttpRequest;
    
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
}