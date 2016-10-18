var Sings = (function () {
    function Sings() {
    }
    Sings.prototype.sing = function () {
        console.log('Singing');
    };
    return Sings;
})();

var Dances = (function () {
    function Dances() {
    }
    Dances.prototype.dance = function () {
        console.log('Dancing');
    };
    return Dances;
})();

var Acts = (function () {
    function Acts() {
    }
    Acts.prototype.act = function () {
        console.log('Acting');
    };
    return Acts;
})();
