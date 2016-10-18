var Listing1_27;
(function (Listing1_27) {
    function getAverage() {
        var a = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            a[_i] = arguments[_i + 0];
        }
        var total = 0;
        var count = 0;

        for (var i = 0; i < a.length; i++) {
            total += a[i];
            count++;
        }

        var average = total / count;
        return 'The average is ' + average;
    }

    var result = getAverage(2, 4, 6, 8, 10);
})(Listing1_27 || (Listing1_27 = {}));
