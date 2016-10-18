module Listing1_62 {

    interface HasName {
        name: string;
    }

    class Personalisation {
        static greet<T extends HasName>(obj: T) {
            return 'Hello ' + obj.name;
        }
    }

} 