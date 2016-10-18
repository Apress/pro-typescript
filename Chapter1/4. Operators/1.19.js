var Listing1_19;
(function (Listing1_19) {
    // long-hand
    if (console) {
        console.log('Console Available');
    }

    // short-hand
    console && console.log('Console Available');

    var player1 = 'Martin';

    // player2 is only defined if player1 is defined
    var player2 = player1 && 'Dan';

    // 'Dan'
    alert(player2);
})(Listing1_19 || (Listing1_19 = {}));
