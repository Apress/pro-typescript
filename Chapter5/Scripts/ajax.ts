class Ajax {
    private READY_STATUS_CODE = 4;

    private isCompleted(request: XMLHttpRequest) {
        return request.readyState === this.READY_STATUS_CODE;
    }

    httpGet(url: string, callback: (status: number, response: string) => any) {
        // Create a request
        var request = new XMLHttpRequest();

        // Attach an event listener
        request.onreadystatechange = () => {
            var completed = this.isCompleted(request);
            if (completed) {
                callback(request.status, request.responseText);
            }
        };

        // Specify the HTTP verb and URL
        request.open('GET', url, true);

        // Send the request
        request.send();
    }

    httpPost(url: string, data: string, callback: (status: number, response: string) => any) {
        var request = new XMLHttpRequest();

        request.onreadystatechange = () => {
            var completed = this.isCompleted(request);
            if (completed) {
                callback(request.status, request.responseText);
            }
        };

        request.open('POST', url, true);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.send(data);
    }

}

export = Ajax;
