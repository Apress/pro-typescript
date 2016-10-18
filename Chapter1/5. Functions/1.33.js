var Listing1_33;
(function (Listing1_33) {
    var ScopeLosingExample = {
        text: "Property from lexical scope",
        run: function () {
            setTimeout(function () {
                alert(this.text);
            }, 1000);
        }
    };

    // alerts undefined
    ScopeLosingExample.run();

    var ScopePreservingExample = {
        text: "Property from lexical scope",
        run: function () {
            var _this = this;
            setTimeout(function () {
                alert(_this.text);
            }, 1000);
        }
    };

    // alerts "Property from lexical scope"
    ScopePreservingExample.run();
})(Listing1_33 || (Listing1_33 = {}));
