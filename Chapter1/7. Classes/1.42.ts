module Listing1_42 {

    class ClickCounter {
        private count = 0;

        registerClick() {
            this.count++;
            alert(this.count);
        }
    }

    var clickCounter = new ClickCounter();

    document.getElementById('target').onclick = clickCounter.registerClick;

} 