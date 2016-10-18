var Listing1_45;
(function (Listing1_45) {
    var ClickCounter = (function () {
        function ClickCounter() {
            var _this = this;
            this.count = 0;
            this.registerClick = function () {
                _this.count++;
                alert(_this.count);
            };
        }
        return ClickCounter;
    })();

    var clickCounter = new ClickCounter();

    var clickHandler = clickCounter.registerClick.bind(clickCounter);

    document.getElementById('target').onclick = clickHandler;
})(Listing1_45 || (Listing1_45 = {}));
