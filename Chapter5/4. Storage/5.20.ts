import addEvent = require('../Scripts/addEvent');

var storageKey = 'Example';

localStorage.setItem(storageKey, 'Stored value ' + Date.now());

addEvent(window, 'storage', (event: StorageEvent) => {
    console.log(event.key +
        ' "' + event.oldValue + '" changed to "' + event.newValue + '"');
});
