var Totalizer = (function () {
    function Totalizer() {
        this.total = 0;
        this.taxRateFactor = 0.2;
    }
    Totalizer.prototype.addDonation = function (amount) {
        if (amount <= 0) {
            throw new Error('Donation exception');
        }

        var taxRebate = amount * this.taxRateFactor;
        var totalDonation = amount + taxRebate;

        this.total += totalDonation;
    };

    Totalizer.prototype.getAmountRaised = function () {
        return this.total;
    };
    return Totalizer;
})();

var totalizer = new Totalizer();

totalizer.addDonation(100.00);

var fundsRaised = totalizer.getAmountRaised();

// 120
console.log(fundsRaised);
