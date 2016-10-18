var Listing3_11;
(function (Listing3_11) {
    var Light = (function () {
        function Light() {
        }
        Light.prototype.switchOn = function () {
            //...
        };

        Light.prototype.switchOff = function () {
            //...
        };
        return Light;
    })();

    var LightSwitch = (function () {
        function LightSwitch(light) {
            this.light = light;
            this.isOn = false;
        }
        LightSwitch.prototype.onPress = function () {
            if (this.isOn) {
                this.light.switchOff();
                this.isOn = false;
            } else {
                this.light.switchOn();
                this.isOn = true;
            }
        };
        return LightSwitch;
    })();
})(Listing3_11 || (Listing3_11 = {}));
