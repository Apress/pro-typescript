var ApplicationError = (function () {
    function ApplicationError(name, message) {
        this.name = name;
        this.message = message;
    }
    return ApplicationError;
})();

throw new ApplicationError('Example Error', 'An error has occurred');
