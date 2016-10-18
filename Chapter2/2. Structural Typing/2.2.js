var Listing2_2;
(function (Listing2_2) {
    var CustomerId = (function () {
        function CustomerId(customerIdValue) {
            this.customerIdValue = customerIdValue;
        }
        CustomerId.prototype.getValue = function () {
            return this.customerIdValue;
        };
        return CustomerId;
    })();

    var ProductId = (function () {
        function ProductId(productIdValue) {
            this.productIdValue = productIdValue;
        }
        ProductId.prototype.getValue = function () {
            return this.productIdValue;
        };
        return ProductId;
    })();

    var Example = (function () {
        function Example() {
        }
        Example.avoidAccidentalEquivalence = function (id) {
            // Implementation
        };

        Example.useEquivalence = function (id) {
            // Implementation
        };
        return Example;
    })();

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
})(Listing2_2 || (Listing2_2 = {}));
