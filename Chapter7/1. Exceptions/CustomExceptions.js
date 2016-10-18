var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ApplicationError = (function () {
    function ApplicationError(message) {
        this.message = message;
        this.name = 'ApplicationError';
    }
    ApplicationError.prototype.toString = function () {
        return this.name + ': ' + this.message;
    };
    return ApplicationError;
})();

var InputError = (function (_super) {
    __extends(InputError, _super);
    function InputError() {
        _super.apply(this, arguments);
    }
    return InputError;
})(ApplicationError);
