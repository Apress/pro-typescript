define(["require", "exports"], function(require, exports) {
    var Product = (function () {
        function Product(productId, name) {
            this.productId = productId;
            this.name = name;
        }
        return Product;
    })();

    
    return Product;
});
