var Listing1_5;
(function (Listing1_5) {
    // primitive type annotation
    var name = 'Steve';
    var heightInCentimeters = 182.88;
    var isActive = true;

    // array type annotation
    var names = ['James', 'Nick', 'Rebecca', 'Lily'];

    // function annotation with parameter type annotation and return type annotation
    var sayHello;

    // implementation of sayHello function
    sayHello = function (name) {
        return 'Hello ' + name;
    };

    // object type annotation
    var person;

    // Implementation of a person object
    person = {
        name: 'Mark',
        heightInCentimeters: 183
    };
})(Listing1_5 || (Listing1_5 = {}));
