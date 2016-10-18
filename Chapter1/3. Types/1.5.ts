module Listing1_5 {

    // primitive type annotation
    var name: string = 'Steve';
    var heightInCentimeters: number = 182.88;
    var isActive: boolean = true;

    // array type annotation
    var names: string[] = ['James', 'Nick', 'Rebecca', 'Lily'];

    // function annotation with parameter type annotation and return type annotation
    var sayHello: (name: string) => string;


    // implementation of sayHello function
    sayHello = function (name: string) {
        return 'Hello ' + name;
    };

    // object type annotation
    var person: { name: string; heightInCentimeters: number; };

    // Implementation of a person object
    person = {
        name: 'Mark',
        heightInCentimeters: 183
    };

} 