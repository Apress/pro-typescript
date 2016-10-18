var Elements = (function () {
    function Elements() {
    }
    Elements.getClassList = function (elem) {
        if ('classList' in elem) {
            return elem.classList;
        }
        return elem.className ? elem.className.split(/\s+/) : [];
    };
    return Elements;
})();

var elem = document.getElementById('example');

console.log(Elements.getClassList(elem));
