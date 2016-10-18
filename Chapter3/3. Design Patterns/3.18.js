var CarWashProgram = (function () {
    function CarWashProgram(cleaningFactory) {
        this.cleaningFactory = cleaningFactory;
    }
    CarWashProgram.prototype.runWash = function () {
        var wheelWash = this.cleaningFactory.getWheelCleaning();
        wheelWash.cleanWheels();

        var bodyWash = this.cleaningFactory.getBodyCleaning();
        bodyWash.cleanBody();
    };
    return CarWashProgram;
})();
