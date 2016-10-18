define(["require", "exports", '../Scripts/addEvent', 'product', 'productDatabase'], function(require, exports, addEvent, Product, ProductDatabase) {
    var db = new ProductDatabase('ExampleDatabase', 20);

    // Example static data
    var products = [
        new Product(1, 'My first product'),
        new Product(2, 'My second product'),
        new Product(3, 'My third product')
    ];

    for (var i = 0; i < products.length; i++) {
        db.addProduct(products[i]);
    }

    // Wait for entry in the productId input
    addEvent(document.getElementById('productId'), 'keyup', function () {
        // Get the id entered by the user, convert to number
        var productId = +this.value;

        // Search the database with the id
        db.getProduct(productId, function (product) {
            document.getElementById('content').innerHTML = product ? 'The result for product id: ' + product.productId + ' is: ' + product.name : 'No result';
        });
    });
});
