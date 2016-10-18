(function () {

    function errorsOnThree(input: number) {
        if (input === 3) {
            throw new Error('Three is not allowed');
        }

        return input;
    }

    var result = errorsOnThree(3);

} ());