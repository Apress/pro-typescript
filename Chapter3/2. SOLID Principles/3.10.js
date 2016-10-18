var SimplePrinter = (function () {
    function SimplePrinter() {
    }
    SimplePrinter.prototype.printDocument = function (document) {
        //...
    };
    return SimplePrinter;
})();

var SuperPrinter = (function () {
    function SuperPrinter() {
    }
    SuperPrinter.prototype.printDocument = function (document) {
        //...
    };

    SuperPrinter.prototype.copyDocument = function () {
        //...
    };

    SuperPrinter.prototype.stapleDocument = function (document, tray) {
        //...
    };
    return SuperPrinter;
})();
