module Listing1_12 {

    var name: string = 'Avenue Road';

    // Error: Cannot convert 'string' to 'number'
    //var bedrooms: number = <number> name;

    // Works
    var bedrooms: number = <number> <any> name;

} 