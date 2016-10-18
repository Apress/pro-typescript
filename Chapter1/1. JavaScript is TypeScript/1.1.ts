module Listing1_1 {

    // Not using with
    var radius = 4;
    var area = Math.PI * radius * radius;

    // Using with
    var radius = 4;

    // Warning: All symbols within a with block will be resolved to 'any'.
    //with (Math) {
    //    var area = PI * radius * radius;
    //}

}