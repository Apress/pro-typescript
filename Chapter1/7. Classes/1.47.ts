module Listing1_47 {

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

    var hasName;

    // true
    hasName = 'name' in display;

    // false
    hasName = 'name' in television;

    // true
    hasName = 'name' in hiFi;

} 