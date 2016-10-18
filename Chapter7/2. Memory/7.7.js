var sensorChange = function (reading) {
    var proximity = reading.near ? 'Near' : 'Far';
    alert(proximity);
};

var readProximity = function () {
    var sensor = new ProximitySensor();
    try  {
        sensor.open();

        var reading = sensor.read();

        sensorChange(reading);
    } finally {
        sensor.close();
    }
};

window.setInterval(readProximity, 500);
