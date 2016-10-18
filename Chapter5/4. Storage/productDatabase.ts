import Product = require('./product');

class ProductDatabase {

    constructor(private name: string, private version: number) {
        var openDatabaseRequest = indexedDB.open(this.name, this.version);
        openDatabaseRequest.onupgradeneeded = this.upgrade;
    }

    getProduct(productId: number, callback: (result: Product) => void) {
        // Open the database
        var openDatabaseRequest = indexedDB.open(this.name, this.version);

        openDatabaseRequest.onsuccess = () => {
            // The database is open
            var db = openDatabaseRequest.result;

            // Start a transaction on the products store
            var productStore = db.transaction(['products']).objectStore('products');

            // Request the query
            var query = productStore.get(productId);
            query.onsuccess = () => {
                callback(query.result);
            };
        };
    }

    addProduct(product: Product) {
        // Open the database
        var openDatabaseRequest = indexedDB.open(this.name, this.version);

        openDatabaseRequest.onsuccess = () => {
            // The database is open
            var db = openDatabaseRequest.result;

            // Start a transaction on the products store
            var productStore = db.transaction('products', 'readwrite').objectStore('products');

            // Add the product
            productStore.add(product);
        };
    }

    deleteProduct(productId: number) {
        // Open the database
        var openDatabaseRequest = indexedDB.open(this.name, this.version);

        openDatabaseRequest.onsuccess = (event: any) => {
            // The database is open
            var db = openDatabaseRequest.result;

            // Start a transaction on the products store
            var productStore = db.transaction('products', 'readwrite').objectStore('products');

            // Add the product
            var deleteRequest = productStore.delete(productId);
        };
    }

    upgrade(event: any) {
        var db = event.target.result;

        // The keyPath specifies the property that contains the id
        var objectStore = db.createObjectStore('products', { keyPath: 'productId' });

        objectStore.createIndex('name', 'name', { unique: false });
    }
}

export = ProductDatabase;
