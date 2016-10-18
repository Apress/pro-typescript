var Lemur = (function () {
    function Lemur(name) {
        this.name = name;
    }
    return Lemur;
})();

var lemur = new Lemur('Sloth Lemur');

Object.seal(lemur);

// new property
lemur.isExtinct = true;

// undefined
console.log(lemur.isExtinct);
