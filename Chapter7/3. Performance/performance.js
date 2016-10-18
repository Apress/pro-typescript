define(["require", "exports"], function(require, exports) {
    var Performance = (function () {
        function Performance(func, iterations) {
            this.func = func;
            this.iterations = iterations;
        }
        Performance.prototype.runTest = function () {
            if (!performance) {
                throw new Error('The performance.now() standard is not supported in this runtime.');
            }

            var errors = [];

            var testStart = performance.now();

            for (var i = 0; i < this.iterations; i++) {
                try  {
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
        };

        Performance.run = function (func, iterations) {
            if (typeof iterations === "undefined") { iterations = 10000; }
            var tester = new Performance(func, iterations);
            return tester.runTest();
        };
        return Performance;
    })();

    
    return Performance;
});
