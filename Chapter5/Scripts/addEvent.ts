var addEvent: (elem: any, eventName: string, callback: Function) => void = (function () {
    if (document.addEventListener) {
        return function (elem, eventName, callback) {
            if (elem && (elem.nodeName || elem === window || typeof elem === 'object')) {
                // Handles a single element
                elem.addEventListener(eventName, callback, false);
            } else if (elem && elem.length) {
                // Handles a collection of elements (recursively)
                for (var i = 0; i < elem.length; i++) {
                    addEvent(elem[i], eventName, callback);
                }
            }
        };
    } else {
        return function (elem, eventName, callback) {
            if (elem && (elem.nodeName || elem === window || typeof elem === 'object')) {
                // Handles a single element
                elem.attachEvent('on' + eventName, function () {
                    return callback.call(elem, window.event);
                });
            } else if (elem && elem.length) {
                // Handles a collection of elements (recursively)
                for (var i = 0; i < elem.length; i++) {
                    addEvent(elem[i], eventName, callback);
                }
            }
        };
    }
})();

export = addEvent;
 