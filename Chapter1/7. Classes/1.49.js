var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Listing1_49;
(function (Listing1_49) {
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

    var Describer = (function () {
        function Describer() {
        }
        Describer.getName = function (inputClass) {
            // RegEx to get the class name
            var funcNameRegex = /function (.{1,})\(/;

            var results = (funcNameRegex).exec(inputClass.constructor.toString());

            return (results && results.length > 1) ? results[1] : '';
        };
        return Describer;
    })();

    var tv = new Television();
    var radio = new HiFi();

    var tvType = Describer.getName(tv);
    var radioType = Describer.getName(radio);
})(Listing1_49 || (Listing1_49 = {}));
