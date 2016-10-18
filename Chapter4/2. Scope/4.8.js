function go(callback) {
    callback.call(this, 'Example Argument');
}

function callbackFunction(arg) {
    alert(arg);
}

go(callbackFunction);
