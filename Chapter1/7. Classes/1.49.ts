module Listing1_49 {

    class Display {
        name: string = '';
    }

    class Television extends Display {

    }

    class HiFi {

    }

    class Describer {
        static getName(inputClass) {
            // RegEx to get the class name
            var funcNameRegex = /function (.{1,})\(/;

            var results = (funcNameRegex).exec((<any> inputClass).constructor.toString());

            return (results && results.length > 1) ? results[1] : '';
        }
    }

    var tv = new Television();
    var radio = new HiFi();

    var tvType = Describer.getName(tv); // Television
    var radioType = Describer.getName(radio); // HiFi  

} 