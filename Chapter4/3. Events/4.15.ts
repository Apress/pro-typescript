function addEventCrossBrowser(element, eventName, listener) {
    if (element.addEventListener) {
        element.addEventListener(eventName, listener, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, listener);
    }
}

class ClickLogger15 {
    constructor() {
        addEventCrossBrowser(document, 'click', this.eventListener);
    }

    eventListener(e: Event) {
        // 3 (Bubbling Phase)
        var phase = e.eventPhase;

        var tag = (<HTMLElement>e.target).tagName;

        console.log('Click event detected on element ' + tag + ' by ClickLogger.');
    }
}

var clickLogger = new ClickLogger15(); 
