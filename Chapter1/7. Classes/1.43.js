var Listing1_43;
(function (Listing1_43) {
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
})(Listing1_43 || (Listing1_43 = {}));
