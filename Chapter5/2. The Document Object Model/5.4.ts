// HTMLElement
var a = document.getElementById('content');

// Element
var b = document.querySelector('#content');

// HTMLDivElement (due to type assertion)
var c = <HTMLDivElement> document.querySelector('#content');


// When logging, the browser knows all of these are HTMLDivElements
console.log('a: ' + a);
console.log('b: ' + b);
console.log('c: ' + c);