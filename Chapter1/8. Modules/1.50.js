var Shipping;
(function (Shipping) {
    

    // Available as Shipping.Ferry
    var Ferry = (function () {
        function Ferry(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return Ferry;
    })();
    Shipping.Ferry = Ferry;

    // Only available inside of the Shipping module
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
})(Shipping || (Shipping = {}));

var ferry = new Shipping.Ferry('Assurance', 'London', 3220);
