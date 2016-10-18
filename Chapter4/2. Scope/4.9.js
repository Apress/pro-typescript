function goWithApply(callback) {
    callback('Example Argument');
}

function callbackFunction2(arg) {
    alert(arg);
}

goWithApply(callbackFunction2);
