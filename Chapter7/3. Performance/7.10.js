define(["require", "exports", './performance'], function(require, exports, perf) {
    var CommunicationLines = (function () {
        function CommunicationLines() {
        }
        CommunicationLines.prototype.calculate = function (teamSize) {
            return (teamSize * (teamSize - 1)) / 2;
        };
        return CommunicationLines;
    })();

    function testCommunicationLines() {
        var communicationLines = new CommunicationLines();

        var result = communicationLines.calculate(4);

        if (result !== 6) {
            throw new Error('Test failed for team size of 4.');
        }

        result = communicationLines.calculate(10);

        if (result !== 45) {
            throw new Error('Test failed for team size of 10.');
        }
    }

    var result = perf.run(testCommunicationLines);

    console.log(result.totalRunTime + ' ms');
});
