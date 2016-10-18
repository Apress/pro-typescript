import Shipping = require('./1.53');

export class Dock {
    private dockedShips: Shipping.Ship[] = [];

    arrival(ship: Shipping.Ship) {
        this.dockedShips.push(ship);
    }
}
 