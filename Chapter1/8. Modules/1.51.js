var Docking;
(function (Docking) {
    var Dock = (function () {
        function Dock() {
            this.dockedShips = [];
        }
        Dock.prototype.arrival = function (ship) {
            this.dockedShips.push(ship);
        };
        return Dock;
    })();
    Docking.Dock = Dock;
})(Docking || (Docking = {}));

var dock = new Docking.Dock();
