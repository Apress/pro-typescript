function errorsOnThreeStill(input: number) {
    if (input === 3) {
        throw new InputError('Three is not allowed');
    }

    return input;
}

try {
    var result = errorsOnThreeStill(3);
} catch (err) {
    console.log('Error caught, no action taken');
}

