var Listing1_58;
(function (Listing1_58) {
    // Class/Module Merging
    var Car = (function () {
        function Car() {
        }
        return Car;
    })();

    var Car;
    (function (Car) {
        var Engine = (function () {
            function Engine() {
            }
            return Engine;
        })();
        Car.Engine = Engine;

        var GloveBox = (function () {
            function GloveBox() {
            }
            return GloveBox;
        })();
        Car.GloveBox = GloveBox;
    })(Car || (Car = {}));

    var car = new Car();
    var engine = new Car.Engine();
    var gloveBox = new Car.GloveBox();
})(Listing1_58 || (Listing1_58 = {}));
