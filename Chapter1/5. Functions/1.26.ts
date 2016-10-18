module Listing1_26 {

    function concatenate(items: string[], separator = ',', beginAt = 0, endAt = items.length) {
        var result = '';

        for (var i = beginAt; i < endAt; i++) {
            result += items[i];
            if (i < (endAt - 1)) {
                result += separator;
            }
        }

        return result;
    }

    var items = ['A', 'B', 'C'];

    // 'A,B,C'
    var result = concatenate(items);

    // 'B-C'
    var partialResult = concatenate(items, '-', 1);

} 