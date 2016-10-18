var Listing1_7;
(function (Listing1_7) {
    // The array is typed using the Monument interface
    var monuments = [];

    // Each item added to the array is checked for type compatibility
    monuments.push({
        name: 'Statue of Liberty',
        heightInMeters: 46,
        location: 'USA'
    });

    monuments.push({
        name: 'Peter the Great',
        heightInMeters: 96
    });

    monuments.push({
        name: 'Angel of the North',
        heightInMeters: 20
    });

    function compareMonumentHeights(a, b) {
        if (a.heightInMeters > b.heightInMeters) {
            return -1;
        }
        if (a.heightInMeters < b.heightInMeters) {
            return 1;
        }
        return 0;
    }

    // The array.sort method expects a comparer that accepts two Monuments
    var monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);

    // Get the first element from the array, which is the tallest
    var tallestMonument = monumentsOrderedByHeight[0];

    console.log(tallestMonument.name); // Peter the Great
})(Listing1_7 || (Listing1_7 = {}));
