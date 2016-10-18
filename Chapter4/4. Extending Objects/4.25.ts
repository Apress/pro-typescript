class Elements {
    static getClassList(elem) {
        if ('classList' in elem) {
            return elem.classList;
        }
        return elem.className ? elem.className.split(/\s+/) : [];
    }
}

var elem = document.getElementById('example');

console.log(Elements.getClassList(elem));
