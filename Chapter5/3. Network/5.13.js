define(["require", "exports", '../Scripts/Ajax'], function(require, exports, Ajax) {
    var ajax = new Ajax();

    // The function to execute when the response is received
    function onGetResponse(status, data) {
        document.getElementById('content').innerHTML = data;
    }

    // Making a GET request
    ajax.httpGet('Data.html', onGetResponse);
});
