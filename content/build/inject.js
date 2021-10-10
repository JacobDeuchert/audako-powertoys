/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./inject.ts ***!
  \*******************/
(function () {
    var proxied = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function (method, URL) {
        let _onreadystatechange = this.onreadystatechange, _this = this;
        _this.onreadystatechange = function () {
            if (_this.readyState === 4 && _this.status === 200 && URL.indexOf('userprofile') >= 0) {
                try {
                    //////////////////////////////////////
                    // THIS IS ACTIONS FOR YOUR REQUEST //
                    //             EXAMPLE:             //
                    //////////////////////////////////////
                    var data = JSON.parse(_this.responseText);
                    data.UserSettings.OpenInSameWindow = true;
                    console.info(data);
                    Object.defineProperty(_this, 'response', { value: JSON.stringify(data) });
                }
                catch (e) { }
            }
            // call original callback
            if (_onreadystatechange)
                _onreadystatechange.apply(this, arguments);
        };
        // detect any onreadystatechange changing
        Object.defineProperty(this, "onreadystatechange", {
            get: function () {
                return _onreadystatechange;
            },
            set: function (value) {
                _onreadystatechange = value;
            }
        });
        return proxied.apply(this, [].slice.call(arguments));
    };
})();

/******/ })()
;