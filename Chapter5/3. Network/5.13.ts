import Ajax = require('../Scripts/Ajax');

var ajax = new Ajax();

// The function to execute when the response is received
function onGetResponse(status: number, data: string) {
    document.getElementById('content').innerHTML = data;
}

// Making a GET request
ajax.httpGet('Data.html', onGetResponse);