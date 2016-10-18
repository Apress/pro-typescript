class ClickLogger {
    constructor() {
        document.addEventListener('click', this.eventListener);
    }

    eventListener(e: Event) {
        // 3 (Bubbling Phase)
        var phase = e.eventPhase;

        var tag = (<HTMLElement>e.target).tagName;

        console.log('Click event in phase ' + phase +
            ' detected on element ' + tag + ' by ClickLogger.');
    }
}

var clickLogger = new ClickLogger();
