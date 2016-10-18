var Listing1_25;
(function (Listing1_25) {
    function getAverage(a, b, c) {
        var total = a;
        var count = 1;

        total += b;
        count++;

        if (typeof c !== 'undefined') {
            total += c;
            count++;
        }

        var average = total / count;
        return 'The average is ' + average;
    }

    var result = getAverage(4, 6);
})(Listing1_25 || (Listing1_25 = {}));
