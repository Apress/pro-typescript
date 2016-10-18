var Size;
(function (Size) {
    Size[Size["S"] = 0] = "S";
    Size[Size["M"] = 1] = "M";
    Size[Size["L"] = 2] = "L";
    Size[Size["XL"] = 3] = "XL";
})(Size || (Size = {}));

function acceptNumber(input) {
    return input;
}

// number
acceptNumber(1);

// enum
acceptNumber(3 /* XL */);

// null
acceptNumber(null);
