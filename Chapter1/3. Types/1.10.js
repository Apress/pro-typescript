var Listing1_10;
(function (Listing1_10) {
    var DiscFlags;
    (function (DiscFlags) {
        DiscFlags[DiscFlags["None"] = 0] = "None";
        DiscFlags[DiscFlags["Drive"] = 1] = "Drive";
        DiscFlags[DiscFlags["Influence"] = 2] = "Influence";
        DiscFlags[DiscFlags["Steadiness"] = 4] = "Steadiness";
        DiscFlags[DiscFlags["Conscientiousness"] = 8] = "Conscientiousness";
    })(DiscFlags || (DiscFlags = {}));

    // Using flags
    var personality = 1 /* Drive */ | 8 /* Conscientiousness */;

    // Testing flags
    // true
    var hasD = (personality & 1 /* Drive */) == 1 /* Drive */;

    // true
    var hasI = (personality & 2 /* Influence */) == 2 /* Influence */;

    // false
    var hasS = (personality & 4 /* Steadiness */) == 4 /* Steadiness */;

    // false
    var hasC = (personality & 8 /* Conscientiousness */) == 8 /* Conscientiousness */;
})(Listing1_10 || (Listing1_10 = {}));
