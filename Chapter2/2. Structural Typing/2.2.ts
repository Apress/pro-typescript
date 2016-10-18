module Listing2_2 {

    interface ObjectId {
        getValue(): number;
    }

    class CustomerId {
        constructor(public customerIdValue: number) {

        }

        getValue() {
            return this.customerIdValue;
        }
    }

    class ProductId {
        constructor(public productIdValue: number) {

        }

        getValue() {
            return this.productIdValue;
        }
    }

    class Example {
        static avoidAccidentalEquivalence(id: CustomerId) {
            // Implementation
        }

        static useEquivalence(id: ObjectId) {
            // Implementation
        }
    }

    var customerId = new CustomerId(1);
    var productId = new ProductId(5);

    // Allowed
    Example.avoidAccidentalEquivalence(customerId);

    // Errors 'Supplied parameters do not match signature of call target'
    //Example.avoidAccidentalEquivalence(productId);

    // Allowed
    Example.useEquivalence(customerId);

    // Allowed
    Example.useEquivalence(productId);

} 