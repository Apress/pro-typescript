module Listing1_48 {

    class Display {
        name: string;
    }

    var display = new Display();

    // false
    var hasName = 'name' in display;

} 