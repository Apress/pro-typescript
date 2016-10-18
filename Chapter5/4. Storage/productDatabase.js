define(["require", "exports", './product'], function(require, exports, Product) {
    var ProductDatabase = (function () {
        function ProductDatabase(name, version) {
            this.name = name;
            this.version = version;
            var openDatabaseRequest = indexedDB.open(this.name, this.version);
            openDatabaseRequest.onupgradeneeded = this.upgrade;
        }
        ProductDatabase.prototype.getProduct = function (productId, callback) {
            // Open the database
            var openDatabaseRequest = indexedDB.open(this.name, this.version);

            openDatabaseRequest.onsuccess = function () {
                // The database is open
                var db = openDatabaseRequest.result;

                // Start a transaction on the products store
                var productStore = db.transaction(['products']).objectStore('products');

                // Request the query
                var query = productStore.get(productId);
                query.onsuccess = function () {
                    callback(query.result);
                };
            };
        };

        ProductDatabase.prototype.addProduct = function (product) {
            // Open the database
            var openDatabaseRequest = indexedDB.open(this.name, this.version);

            openDatabaseRequest.onsuccess = function () {
                // The database is open
                var db = openDatabaseRequest.result;

                // Start a transaction on the products store
                var productStore = db.transaction('products', 'readwrite').objectStore('products');

                // Add the product
                productStore.add(product);
            };
        };

        ProductDatabase.prototype.deleteProduct = function (productId) {
            // Open the database
            var openDatabaseRequest = indexedDB.open(this.name, this.version);

            openDatabaseRequest.onsuccess = function (event) {
                // The database is open
                var db = openDatabaseRequest.result;

                // Start a transaction on the products store
                var productStore = db.transaction('products', 'readwrite').objectStore('products');

                // Add the product
                var deleteRequest = productStore.delete(productId);
            };
        };

        ProductDatabase.prototype.upgrade = function (event) {
            var db = event.target.result;

            // The keyPath specifies the property that contains the id
            var objectStore = db.createObjectStore('products', { keyPath: 'productId' });

            objectStore.createIndex('name', 'name', { unique: false });
        };
        return ProductDatabase;
    })();

    
    return ProductDatabase;
});
