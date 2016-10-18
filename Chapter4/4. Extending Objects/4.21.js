var Lemur = (function () {
    function Lemur(name) {
        this.name = name;
    }
    return Lemur;
})();

var lemur = new Lemur('Sloth Lemur');

// new property
lemur.isExtinct = true;

// true
console.log(lemur.isExtinct);
