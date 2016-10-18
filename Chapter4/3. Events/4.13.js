var ClickLogger = (function () {
    function ClickLogger() {
        document.addEventListener('click', this.eventListener);
    }
    ClickLogger.prototype.eventListener = function (e) {
        // 3 (Bubbling Phase)
        var phase = e.eventPhase;

        var tag = e.target.tagName;

        console.log('Click event in phase ' + phase + ' detected on element ' + tag + ' by ClickLogger.');
    };
    return ClickLogger;
})();

var clickLogger = new ClickLogger();
