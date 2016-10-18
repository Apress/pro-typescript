define(["require", "exports", '../Scripts/addEvent'], function(require, exports, addEvent) {
    var storageKey = 'Example';

    localStorage.setItem(storageKey, 'Stored value ' + Date.now());

    addEvent(window, 'storage', function (event) {
        console.log(event.key + ' "' + event.oldValue + '" changed to "' + event.newValue + '"');
    });
});
