if (typeof document !== "undefined" && !("classList" in document.documentElement)) {
    var elementPrototype = (HTMLElement || Element).prototype;
    if (elementPrototype) {
        Object.defineProperty(elementPrototype, 'classList', {
            get: function () {
                var list = this.className ? this.className.split(/\s+/) : [];
                console.log('Polyfill: ' + list);
            }
        });
    }
}

var elem = document.getElementById('example');

console.log(elem.classList);
