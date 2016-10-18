define(["require", "exports"], function(require, exports) {
    var Ferry = (function () {
        function Ferry(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return Ferry;
    })();
    exports.Ferry = Ferry;

    var defaultDisplacement = 4000;

    var PrivateShip = (function () {
        function PrivateShip(name, port, displacement) {
            if (typeof displacement === "undefined") { displacement = defaultDisplacement; }
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return PrivateShip;
    })();
});
