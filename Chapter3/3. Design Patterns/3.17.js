var BronzeWashFactory = (function () {
    function BronzeWashFactory() {
    }
    BronzeWashFactory.prototype.getWheelCleaning = function () {
        return new BasicWheelCleaning();
    };

    BronzeWashFactory.prototype.getBodyCleaning = function () {
        return new BasicBodyCleaning();
    };
    return BronzeWashFactory;
})();

var SilverWashFactory = (function () {
    function SilverWashFactory() {
    }
    SilverWashFactory.prototype.getWheelCleaning = function () {
        return new BasicWheelCleaning();
    };

    SilverWashFactory.prototype.getBodyCleaning = function () {
        return new ExecutiveBodyCleaning();
    };
    return SilverWashFactory;
})();

var GoldWashFactory = (function () {
    function GoldWashFactory() {
    }
    GoldWashFactory.prototype.getWheelCleaning = function () {
        return new ExecutiveWheelCleaning();
    };

    GoldWashFactory.prototype.getBodyCleaning = function () {
        return new ExecutiveBodyCleaning();
    };
    return GoldWashFactory;
})();
