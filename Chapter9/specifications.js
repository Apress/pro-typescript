var _this = this;
describe('A FizzBuzz generator', function () {
    beforeEach(function () {
        _this.fizzBuzz = new FizzBuzz();
        _this.FIZZ = 'Fizz';
        _this.BUZZ = 'Buzz';
        _this.FIZZ_BUZZ = 'FizzBuzz';
    });

    it('should return the number 1 when 1 is played', function () {
        var result = _this.fizzBuzz.generate(1);

        expect(result).toBe(1);
    });

    it('should return the number 2 when 2 is played', function () {
        var result = _this.fizzBuzz.generate(2);

        expect(result).toBe(2);
    });

    it('should return "Fizz" when 3 is played', function () {
        var result = _this.fizzBuzz.generate(3);

        expect(result).toBe(_this.FIZZ);
    });

    it('should return "Fizz" when 6 is played', function () {
        var result = _this.fizzBuzz.generate(6);

        expect(result).toBe(_this.FIZZ);
    });

    it('should return "Buzz" when 5 is played', function () {
        var result = _this.fizzBuzz.generate(5);

        expect(result).toBe(_this.BUZZ);
    });

    it('should return "Buzz" when 10 is played', function () {
        var result = _this.fizzBuzz.generate(10);

        expect(result).toBe(_this.BUZZ);
    });

    it('should return "FizzBuzz" when 15 is played', function () {
        var result = _this.fizzBuzz.generate(15);

        expect(result).toBe(_this.FIZZ_BUZZ);
    });

    it('should return "FizzBuzz" when 30 is played', function () {
        var result = _this.fizzBuzz.generate(30);

        expect(result).toBe(_this.FIZZ_BUZZ);
    });
});
