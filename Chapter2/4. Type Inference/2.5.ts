function add(a: number, b: number) {
    /* The return value is used to determine 
       the return type of the function */
    return a + b;
}


interface CallsFunction {
    (cb: (result: string) => any): void;
}

// The cb parameter is inferred to be a function accepting a string
var callsFunction: CallsFunction = function (cb) {
    cb('Done');

    // Supplied parameter does not match any signature of the call target
    // cb(1);
};

// The result parameter is inferred to be a string
callsFunction(function (result) {
    return result;
});
 