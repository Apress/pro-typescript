module Listing1_46 {

    class Display {
        name: string = '';
    }

    class Television extends Display {

    }

    class HiFi {

    }

    var display = new Display();
    var television = new Television();
    var hiFi = new HiFi();

    var isDisplay;

    // true
    isDisplay = display instanceof Display;

    // true (inherits from Display)
    isDisplay = television instanceof Display;

    // false
    isDisplay = hiFi instanceof Display;

} 