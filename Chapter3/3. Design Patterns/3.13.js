var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BasicWheelCleaning = (function () {
    function BasicWheelCleaning() {
    }
    BasicWheelCleaning.prototype.cleanWheels = function () {
        console.log('Soaping Wheel');
        console.log('Brushing wheel');
    };
    return BasicWheelCleaning;
})();

var ExecutiveWheelCleaning = (function (_super) {
    __extends(ExecutiveWheelCleaning, _super);
    function ExecutiveWheelCleaning() {
        _super.apply(this, arguments);
    }
    ExecutiveWheelCleaning.prototype.cleanWheels = function () {
        _super.prototype.cleanWheels.call(this);
        console.log('Waxing Wheel');
        console.log('Rinsing Wheel');
    };
    return ExecutiveWheelCleaning;
})(BasicWheelCleaning);
