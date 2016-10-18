var Listing1_44;
(function (Listing1_44) {
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

    document.getElementById('target').onclick = function () {
        clickCounter.registerClick();
    };
})(Listing1_44 || (Listing1_44 = {}));
