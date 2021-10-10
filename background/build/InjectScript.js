console.log('Hello World');
(function () {
    var proxied = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function () {
        console.log(arguments);
        return proxied.apply(this, [].slice.call(arguments));
    };
})();
