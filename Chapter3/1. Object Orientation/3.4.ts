module Listing3_4 {

    interface Vehicle {
        moveTo(x: number, y: number);
    }

    class Car implements Vehicle {
        moveTo(x: number, y: number) {
            console.log('Driving to ' + x + ' ' + y);
        }
    }

    class SportsCar extends Car {

    }

    class Airplane {
        moveTo(x: number, y: number) {
            console.log('Flying to ' + x + ' ' + y);
        }
    }

    function navigate(vehicle: Vehicle) {
        vehicle.moveTo(59.9436499, 10.7167959);
    }

    var airplane = new Airplane();

    navigate(airplane);

    var car = new SportsCar();

    navigate(car);

}