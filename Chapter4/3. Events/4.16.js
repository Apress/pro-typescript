// Polyfill for CustomEvent: https://developer.mozilla.org/en/docs/Web/API/CustomEvent
(function () {
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    ;

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

var StandardEvent = CustomEvent;

// Code for custom events is below:
var EventType;
(function (EventType) {
    EventType[EventType["MyCustomEvent"] = 0] = "MyCustomEvent";
})(EventType || (EventType = {}));

var Trigger = (function () {
    function Trigger() {
    }
    Trigger.customEvent = function (name, detail) {
        var event = new StandardEvent(name, detail);

        document.dispatchEvent(event);
    };
    return Trigger;
})();

var ListeningClass = (function () {
    function ListeningClass() {
        document.addEventListener(EventType[0 /* MyCustomEvent */], this.eventListener, false);
    }
    ListeningClass.prototype.eventListener = function (e) {
        console.log(EventType[0 /* MyCustomEvent */] + ' detected by ClickLogger.');
        console.log('Information passed: ' + e.detail.example);
    };
    return ListeningClass;
})();

var customLogger = new ListeningClass();

Trigger.customEvent(EventType[0 /* MyCustomEvent */], {
    "detail": {
        "example": "Example Value"
    }
});
