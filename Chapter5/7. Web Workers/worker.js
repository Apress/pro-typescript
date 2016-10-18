(function (self) {
    var id = 0;

    function start() {
        self.setInterval(function () {
            id++;
            var message = {
                'id': id,
                'message': 'Message sent at ' + Date.now()
            };

            self.postMessage(message);
        }, 1000);
    }

    self.onmessage = function (event) {
        if (event.data === 'Start') {
            start();
        } else {
            console.log(event.data);
        }
    };
})(self);
