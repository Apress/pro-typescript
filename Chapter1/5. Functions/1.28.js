var Listing1_28;
(function (Listing1_28) {
    // implementation signature
    function getAverage(a, b, c) {
        var total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
        var average = total / 3;
        return 'The average is ' + average;
    }

    var result = getAverage(4, 3, 8);
})(Listing1_28 || (Listing1_28 = {}));
