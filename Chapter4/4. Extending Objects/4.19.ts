interface NodeList {
    each(callback: (element: HTMLElement) => any): void ;
}

if (!NodeList.prototype.each) {
    NodeList.prototype.each = function (callback) {
        for (var i = 0; i < this.length; i++) {
            callback.call(null, this[i]);
        }
    };
}

var getParagraphText = function (element: HTMLElement) {
    console.log(element.innerHTML);
};

var paragraphs = document.querySelectorAll('p');
paragraphs.each(getParagraphText);
