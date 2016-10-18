class Totalizer {
    private total = 0;
    private taxRateFactor = 0.2;

    addDonation(amount: number) {
        if (amount <= 0) {
            throw new Error('Donation exception');
        }

        var taxRebate = amount * this.taxRateFactor;
        var totalDonation = amount + taxRebate;

        this.total += totalDonation;
    }

    getAmountRaised() {
        return this.total;
    }
}

var totalizer = new Totalizer();

totalizer.addDonation(100.00);

var fundsRaised = totalizer.getAmountRaised();

// 120
console.log(fundsRaised);
