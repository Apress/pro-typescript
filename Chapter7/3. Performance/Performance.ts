class Performance {
    constructor(private func: Function, private iterations: number) {

    }

    private runTest() {
        if (!performance) {
            throw new Error('The performance.now() standard is not supported in this runtime.');
        }

        var errors: number[] = [];

        var testStart = performance.now();

        for (var i = 0; i < this.iterations; i++) {
            try {
                this.func();
            } catch (err) {
                // Limit the number of errors logged
                if (errors.length < 10) {
                    errors.push(i);
                }
            }
        }

        var testTime = performance.now() - testStart;

        return {
            errors: errors,
            totalRunTime: testTime,
            iterationAverageTime: (testTime / this.iterations)
        };
    }

    static run(func: Function, iterations = 10000) {
        var tester = new Performance(func, iterations);
        return tester.runTest();
    }
}

export = Performance;
 