var Listing1_26;
(function (Listing1_26) {
    function concatenate(items, separator, beginAt, endAt) {
        if (typeof separator === "undefined") { separator = ','; }
        if (typeof beginAt === "undefined") { beginAt = 0; }
        if (typeof endAt === "undefined") { endAt = items.length; }
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
})(Listing1_26 || (Listing1_26 = {}));
