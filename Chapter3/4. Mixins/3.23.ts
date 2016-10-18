module Listing3_23 {

    class Acts {
        public message = 'Acting';

        act() {
            console.log(this.message);
        }
    }

    class Actor implements Acts {
        public message: string;
        act: () => void;
    }

    applyMixins(Actor, [Acts]);

    var actor = new Actor();

    // Logs 'undefined', not 'Acting'
    actor.act();

}