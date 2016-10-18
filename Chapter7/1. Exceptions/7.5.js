function errorsOnThreeAgain(input) {
    if (input === 3) {
        throw new InputError('Three is not allowed');
    }

    return input;
}

try  {
    var result = errorsOnThreeAgain(3);
} catch (err) {
    if (!(err instanceof ApplicationError)) {
        throw err;
    }

    console.log('Error caught, no action taken');
}
