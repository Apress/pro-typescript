function errorsOnThree(input) {
    if (input === 3) {
        throw new InputError('Three is not allowed');
    }

    return input;
}

var result = errorsOnThree(3);
