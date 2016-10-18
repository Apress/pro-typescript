define(["require", "exports"], function(require, exports) {
    var addEvent = (function () {
        if (document.addEventListener) {
            return function (elem, eventName, callback) {
                if (elem && (elem.nodeName || elem === window || typeof elem === 'object')) {
                    // Handles a single element
                    elem.addEventListener(eventName, callback, false);
                } else if (elem && elem.length) {
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
                    for (var i = 0; i < elem.length; i++) {
                        addEvent(elem[i], eventName, callback);
                    }
                }
            };
        }
    })();

    
    return addEvent;
});
