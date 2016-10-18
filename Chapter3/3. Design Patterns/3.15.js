var Listing3_15;
(function (Listing3_15) {
    var CarWashProgram = (function () {
        function CarWashProgram(washLevel) {
            this.washLevel = washLevel;
        }
        CarWashProgram.prototype.runWash = function () {
            var wheelWash;
            var bodyWash;

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
        };
        return CarWashProgram;
    })();
})(Listing3_15 || (Listing3_15 = {}));
