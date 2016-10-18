var Listing3_23;
(function (Listing3_23) {
    var Acts = (function () {
        function Acts() {
            this.message = 'Acting';
        }
        Acts.prototype.act = function () {
            console.log(this.message);
        };
        return Acts;
    })();

    var Actor = (function () {
        function Actor() {
        }
        return Actor;
    })();

    applyMixins(Actor, [Acts]);

    var actor = new Actor();

    // Logs 'undefined', not 'Acting'
    actor.act();
})(Listing3_23 || (Listing3_23 = {}));
