function test2() {
    var testStart = performance.now();

    window.setTimeout(function () {
        console.log(performance.now() - testStart);
    }, 50);

    // Simulated long running process
    var start = +new Date();
    while (true) {
        if (+new Date() - start > 500) {
            break;
        }
    }
}

test2();
