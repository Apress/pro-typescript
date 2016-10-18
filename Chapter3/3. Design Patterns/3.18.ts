class CarWashProgram {
    constructor(private cleaningFactory: ValetFactory) {

    }

    runWash() {
        var wheelWash = this.cleaningFactory.getWheelCleaning();
        wheelWash.cleanWheels();

        var bodyWash = this.cleaningFactory.getBodyCleaning();
        bodyWash.cleanBody();
    }
}
 