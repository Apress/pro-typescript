var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RewardPointsCalculator = (function () {
    function RewardPointsCalculator() {
    }
    RewardPointsCalculator.prototype.getPoints = function (transactionValue) {
        // 4 points per whole dollar spent
        return Math.floor(transactionValue) * 4;
    };
    return RewardPointsCalculator;
})();

var DoublePointsCalculator = (function (_super) {
    __extends(DoublePointsCalculator, _super);
    function DoublePointsCalculator() {
        _super.apply(this, arguments);
    }
    DoublePointsCalculator.prototype.getPoints = function (transactionValue) {
        var standardPoints = _super.prototype.getPoints.call(this, transactionValue);
        return standardPoints * 2;
    };
    return DoublePointsCalculator;
})(RewardPointsCalculator);

var pointsCalculator = new DoublePointsCalculator();

alert(pointsCalculator.getPoints(100.99));
