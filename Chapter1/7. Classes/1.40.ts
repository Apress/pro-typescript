module Listing1_40 {

    interface StockItem {
        description: string;
        asin: string;
    }

    class WarehouseLocation {
        private _stockItem;

        constructor(public aisle: number, public slot: string) {

        }

        get stockItem() {
            return this._stockItem;
        }

        set stockItem(item: StockItem) {
            this._stockItem = item;
        }
    }

    var figure = { asin: 'B001TEQ2PI', description: 'Figure' };

    var warehouseSlot = new WarehouseLocation(15, 'A6');

    warehouseSlot.stockItem = figure;

} 