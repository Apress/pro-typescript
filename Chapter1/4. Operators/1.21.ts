module Listing1_21 {

    interface Caravan {
        rooms: number;
    }

    var caravan: Caravan;

    if (caravan && caravan.rooms > 5) {
        //...
    }

} 