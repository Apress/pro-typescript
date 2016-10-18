interface NodeList {
    each(callback: () => any): void;
}

NodeList.prototype.each = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback.call(this[i]);
    }
};

var logParagraphText = function () {
    console.log(this.innerHTML);
};

var paragraphs = document.querySelectorAll('p');
paragraphs.each(logParagraphText);
