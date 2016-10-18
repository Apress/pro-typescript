module Listing1_29 {

    class HandlerFactory {
        getHandler(type: 'Random'): RandomHandler;
        getHandler(type: 'Reversed'): ReversedHandler;
        getHandler(type: string): Handler; // non-specialized signature
        getHandler(type: string): Handler { // implementation signature
            switch (type) {
                case 'Random':
                    return new RandomHandler();
                case 'Reversed':
                    return new ReversedHandler();
                default:
                    return new Handler();
            }
        }
    }

    class Handler {
        handle() {
            console.log('Handled!');
        }
    }

    class ReversedHandler extends Handler {
        handle() {
            console.log('!deldnaH');
        }
    }

    class RandomHandler extends Handler {
        handle() {
            console.log('daH!denl');
        }
    }

} 