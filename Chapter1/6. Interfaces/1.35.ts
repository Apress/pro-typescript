module Listing1_35 {

    interface NodeList {
        length: number;
        item(index: number): Node;
        [index: number]: Node;
    }

} 