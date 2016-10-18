((self: Worker) => {

    var id = 0;

    function start() {
        (<any>self).setInterval(() => {
            id++;
            var message = {
                'id': id,
                'message': 'Message sent at ' + Date.now()
            };

            self.postMessage(message);
        }, 1000);
    }

    self.onmessage = (event) => {
        if (event.data === 'Start') {
            start();
        } else {
            console.log(event.data);
        }
    }

})(<any>self);