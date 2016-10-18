module Listing1_45 {

    class ClickCounter {
        private count = 0;

        registerClick = () => {
            this.count++;
            alert(this.count);
        }
    }

    var clickCounter = new ClickCounter();

    var clickHandler = clickCounter.registerClick.bind(clickCounter);

    document.getElementById('target').onclick = clickHandler;

} 