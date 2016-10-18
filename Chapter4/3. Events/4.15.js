function addEventCrossBrowser(element, eventName, listener) {
    if (element.addEventListener) {
        element.addEventListener(eventName, listener, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, listener);
    }
}

var ClickLogger15 = (function () {
    function ClickLogger15() {
        addEventCrossBrowser(document, 'click', this.eventListener);
    }
    ClickLogger15.prototype.eventListener = function (e) {
        // 3 (Bubbling Phase)
        var phase = e.eventPhase;

        var tag = e.target.tagName;

        console.log('Click event detected on element ' + tag + ' by ClickLogger.');
    };
    return ClickLogger15;
})();

var clickLogger = new ClickLogger15();
