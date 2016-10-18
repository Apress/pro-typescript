var Publisher = (function () {
    function Publisher() {
        this.subscribers = [];
    }
    Publisher.prototype.addSubscriber = function (subscriber) {
        this.subscribers.push(subscriber);
    };

    Publisher.prototype.notify = function (message) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].apply(message);
        }
    };
    return Publisher;
})();

var publisher = new Publisher();

publisher.addSubscriber(function () {
    console.log('A: ' + this);
});

publisher.addSubscriber(function () {
    console.log('B: ' + this);
});

// A: Test message
// B: Test message
publisher.notify('Test message');
