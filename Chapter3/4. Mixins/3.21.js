var Actor = (function () {
    function Actor() {
    }
    return Actor;
})();

applyMixins(Actor, [Acts]);

var AllRounder = (function () {
    function AllRounder() {
    }
    return AllRounder;
})();

applyMixins(AllRounder, [Acts, Dances, Sings]);
