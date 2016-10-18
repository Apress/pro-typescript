function test() {
    var testStart = performance.now();

    window.setTimeout(function () {
        console.log(performance.now() - testStart);
    }, 50);
}

test();
