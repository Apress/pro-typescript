var webSocket = new WebSocket('ws://localhost:8080/WS');

webSocket.onmessage = function (message) {
    // Log message from server
    console.log(message.data);
};

webSocket.send('Message To Server');
