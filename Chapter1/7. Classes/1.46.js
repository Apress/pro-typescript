var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Listing1_46;
(function (Listing1_46) {
    var Display = (function () {
        function Display() {
            this.name = '';
        }
        return Display;
    })();

    var Television = (function (_super) {
        __extends(Television, _super);
        function Television() {
            _super.apply(this, arguments);
        }
        return Television;
    })(Display);

    var HiFi = (function () {
        function HiFi() {
        }
        return HiFi;
    })();

    var display = new Display();
    var television = new Television();
    var hiFi = new HiFi();

    var isDisplay;

    // true
    isDisplay = display instanceof Display;

    // true (inherits from Display)
    isDisplay = television instanceof Display;

    // false
    isDisplay = hiFi instanceof Display;
})(Listing1_46 || (Listing1_46 = {}));
