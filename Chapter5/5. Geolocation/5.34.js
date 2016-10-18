function watchLocation(pos) {
    console.log('You are here: Lat=' + pos.coords.latitude + ' Long=' + pos.coords.longitude + ' Altitude=' + pos.coords.altitude + ' (Accuracy=' + pos.coords.altitudeAccuracy + ')' + ' Heading=' + pos.coords.heading + ' Speed=' + pos.coords.speed);
}

function watchFailed() {
    console.log('Position information not available.');
}

var watch = navigator.geolocation.watchPosition(watchLocation, watchFailed);
