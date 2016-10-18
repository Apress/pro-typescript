var Listing1_42;
(function (Listing1_42) {
    var ClickCounter = (function () {
        function ClickCounter() {
            this.count = 0;
        }
        ClickCounter.prototype.registerClick = function () {
            this.count++;
            alert(this.count);
        };
        return ClickCounter;
    })();

    var clickCounter = new ClickCounter();

    document.getElementById('target').onclick = clickCounter.registerClick;
})(Listing1_42 || (Listing1_42 = {}));
