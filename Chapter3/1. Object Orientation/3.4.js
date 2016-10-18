var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Listing3_4;
(function (Listing3_4) {
    var Car = (function () {
        function Car() {
        }
        Car.prototype.moveTo = function (x, y) {
            console.log('Driving to ' + x + ' ' + y);
        };
        return Car;
    })();

    var SportsCar = (function (_super) {
        __extends(SportsCar, _super);
        function SportsCar() {
            _super.apply(this, arguments);
        }
        return SportsCar;
    })(Car);

    var Airplane = (function () {
        function Airplane() {
        }
        Airplane.prototype.moveTo = function (x, y) {
            console.log('Flying to ' + x + ' ' + y);
        };
        return Airplane;
    })();

    function navigate(vehicle) {
        vehicle.moveTo(59.9436499, 10.7167959);
    }

    var airplane = new Airplane();

    navigate(airplane);

    var car = new SportsCar();

    navigate(car);
})(Listing3_4 || (Listing3_4 = {}));
