module Listing1_33 {

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
            setTimeout(() => {
                alert(this.text);
            }, 1000);
        }
    };

    // alerts "Property from lexical scope"
    ScopePreservingExample.run();

} 