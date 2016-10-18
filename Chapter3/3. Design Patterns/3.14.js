var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BasicBodyCleaning = (function () {
    function BasicBodyCleaning() {
    }
    BasicBodyCleaning.prototype.cleanBody = function () {
        console.log('Soaping car');
        console.log('Rinsing Car');
    };
    return BasicBodyCleaning;
})();

var ExecutiveBodyCleaning = (function (_super) {
    __extends(ExecutiveBodyCleaning, _super);
    function ExecutiveBodyCleaning() {
        _super.apply(this, arguments);
    }
    ExecutiveBodyCleaning.prototype.cleanBody = function () {
        _super.prototype.cleanBody.call(this);
        console.log('Waxing car');
        console.log('Blow drying car');
    };
    return ExecutiveBodyCleaning;
})(BasicBodyCleaning);
