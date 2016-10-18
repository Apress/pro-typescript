module Listing1_44 {

    class ClickCounter {
        private count = 0;

        registerClick = () => {
            this.count++;
            alert(this.count);
        }
    }

    var clickCounter = new ClickCounter();

    document.getElementById('target').onclick = function () {
        clickCounter.registerClick();
    };

} 