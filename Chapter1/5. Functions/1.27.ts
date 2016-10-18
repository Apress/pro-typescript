module Listing1_27 {

    function getAverage(...a: number[]): string {
        var total = 0;
        var count = 0;

        for (var i = 0; i < a.length; i++) {
            total += a[i];
            count++;
        }

        var average = total / count;
        return 'The average is ' + average;
    }

    var result = getAverage(2, 4, 6, 8, 10); // 'The average is 6'

} 