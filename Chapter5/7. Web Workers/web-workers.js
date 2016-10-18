define(["require", "exports", '../Scripts/addEvent'], function(require, exports, addEvent) {
    var worker = new Worker('worker.js');

    function workerMessageReceived(event) {
        var response = event.data;

        console.log('(' + response.id + ') ' + response.message);
    }
    ;

    addEvent(worker, 'message', workerMessageReceived);

    worker.postMessage('Start');
});
