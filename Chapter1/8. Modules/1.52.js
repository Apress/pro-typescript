///<reference path="1.50.ts" />
var DockingWithReferenceComment;
(function (DockingWithReferenceComment) {
    var Dock = (function () {
        function Dock() {
            this.dockedShips = [];
        }
        Dock.prototype.arrival = function (ship) {
            this.dockedShips.push(ship);
        };
        return Dock;
    })();
    DockingWithReferenceComment.Dock = Dock;
})(DockingWithReferenceComment || (DockingWithReferenceComment = {}));
