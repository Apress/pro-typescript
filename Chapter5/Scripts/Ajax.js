define(["require", "exports"], function(require, exports) {
    var Ajax = (function () {
        function Ajax() {
            this.READY_STATUS_CODE = 4;
        }
        Ajax.prototype.isCompleted = function (request) {
            return request.readyState === this.READY_STATUS_CODE;
        };

        Ajax.prototype.httpGet = function (url, callback) {
            var _this = this;
            // Create a request
            var request = new XMLHttpRequest();

            // Attach an event listener
            request.onreadystatechange = function () {
                var completed = _this.isCompleted(request);
                if (completed) {
                    callback(request.status, request.responseText);
                }
            };

            // Specify the HTTP verb and URL
            request.open('GET', url, true);

            // Send the request
            request.send();
        };

        Ajax.prototype.httpPost = function (url, data, callback) {
            var _this = this;
            var request = new XMLHttpRequest();

            request.onreadystatechange = function () {
                var completed = _this.isCompleted(request);
                if (completed) {
                    callback(request.status, request.responseText);
                }
            };

            request.open('POST', url, true);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.send(data);
        };
        return Ajax;
    })();

    
    return Ajax;
});
