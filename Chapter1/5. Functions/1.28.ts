module Listing1_28 {

    function getAverage(a: string, b: string, c: string): string;
    function getAverage(a: number, b: number, c: number): string;
    // implementation signature
    function getAverage(a: any, b: any, c: any): string {
        var total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
        var average = total / 3;
        return 'The average is ' + average;
    }

    var result = getAverage(4, 3, 8); // 5

} 