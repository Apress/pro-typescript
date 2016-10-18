function goWithApply(callback: (arg: string) => void) {
    callback('Example Argument');
}


function callbackFunction2(arg: string) {
    alert(arg);
}

goWithApply(callbackFunction2);
