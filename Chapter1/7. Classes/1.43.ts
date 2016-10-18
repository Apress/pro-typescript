module Listing1_43 {

    class ClickCounter {
        private count = 0;

        registerClick = () => {
            this.count++;
            alert(this.count);
        }
    }

} 