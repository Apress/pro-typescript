define(["require", "exports"], function(require, exports) {
    var Dock = (function () {
        function Dock() {
            this.dockedShips = [];
        }
        Dock.prototype.arrival = function (ship) {
            this.dockedShips.push(ship);
        };
        return Dock;
    })();
    exports.Dock = Dock;
});
