module Listing1_58 {

    // Class/Module Merging
    class Car {

    }

    module Car {
        export class Engine {

        }

        export class GloveBox {

        }

    }

    var car = new Car();
    var engine = new Car.Engine();
    var gloveBox = new Car.GloveBox();

}
 