var MasterControlPanel = (function () {
    function MasterControlPanel() {
        this.sensors = [];
        // Instantiating the delegate HeatSensor
        this.sensors.push(new HeatSensor(this));
    }
    MasterControlPanel.prototype.start = function () {
        var _this = this;
        for (var i = 0; i < this.sensors.length; i++) {
            // Calling the delegate
            this.sensors[i].check();
        }

        window.setTimeout(function () {
            return _this.start();
        }, 1000);
    };

    MasterControlPanel.prototype.startAlarm = function (message) {
        console.log('Alarm! ' + message);
    };
    return MasterControlPanel;
})();

var HeatSensor = (function () {
    function HeatSensor(controlPanel) {
        this.controlPanel = controlPanel;
        this.upperLimit = 38;
        this.sensor = {
            read: function () {
                return Math.floor(Math.random() * 100);
            }
        };
    }
    HeatSensor.prototype.check = function () {
        if (this.sensor.read() > this.upperLimit) {
            // Calling back to the wrapper
            this.controlPanel.startAlarm('Overheating!');
        }
    };
    return HeatSensor;
})();

var cp = new MasterControlPanel();

cp.start();
