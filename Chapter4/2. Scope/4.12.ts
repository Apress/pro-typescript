interface Subscriber {
    (): any;
}

class Publisher {
    private subscribers: Subscriber[] = [];

    addSubscriber(subscriber: Subscriber) {
        this.subscribers.push(subscriber);
    }

    notify(message: string) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].apply(message);
        }
    }
}

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
