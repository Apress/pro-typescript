var element = document.querySelector('#content');

var newElement1 = document.createElement('div');
newElement1.textContent = 'Hello World';

element.appendChild(newElement1);

var newElement2 = document.createElement('div');
newElement2.textContent = 'Greetings Earth';

element.appendChild(newElement2);
