var Listing1_14;
(function (Listing1_14) {
    var Size;
    (function (Size) {
        Size[Size["S"] = 0] = "S";
        Size[Size["M"] = 1] = "M";
        Size[Size["L"] = 2] = "L";
        Size[Size["XL"] = 3] = "XL";
    })(Size || (Size = {}));

    var size = 0 /* S */;
    ++size;
    console.log(Size[size]); // M

    var size = 3 /* XL */;
    --size;
    console.log(Size[size]); // L

    var size = 3 /* XL */;
    ++size;
    console.log(Size[size]); // undefined
})(Listing1_14 || (Listing1_14 = {}));
