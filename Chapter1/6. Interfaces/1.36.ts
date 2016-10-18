interface NodeList {
    onclick: (event: MouseEvent) => any;
}

var nodeList = document.getElementsByTagName('div');

nodeList.onclick = function (event: MouseEvent) {
    alert('Clicked');
};
 