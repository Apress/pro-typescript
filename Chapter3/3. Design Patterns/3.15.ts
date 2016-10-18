module Listing3_15 {

    class CarWashProgram {
        constructor(private washLevel: number) {

        }

        runWash() {
            var wheelWash: WheelCleaning;
            var bodyWash: BodyCleaning;

            switch (this.washLevel) {
                case 1:
                    wheelWash = new BasicWheelCleaning();
                    wheelWash.cleanWheels();

                    bodyWash = new BasicBodyCleaning();
                    bodyWash.cleanBody();

                    break;
                case 2:
                    wheelWash = new BasicWheelCleaning();
                    wheelWash.cleanWheels();

                    bodyWash = new ExecutiveBodyCleaning();
                    bodyWash.cleanBody();

                    break;
                case 3:
                    wheelWash = new ExecutiveWheelCleaning();
                    wheelWash.cleanWheels();

                    bodyWash = new ExecutiveBodyCleaning();
                    bodyWash.cleanBody();

                    break;
            }
        }
    }

}