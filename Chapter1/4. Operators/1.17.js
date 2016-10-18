var Listing1_17;
(function (Listing1_17) {
    var truthyString = 'Truthy string';
    var falseyString;

    // False, it checks the string but inverts the truth
    var invertedTest = !truthyString;

    // True, the string is not undefined or empty
    var truthyTest = !!truthyString;

    // False, the string is empty
    var falseyTest = !!falseyString;
})(Listing1_17 || (Listing1_17 = {}));
