module Listing3_9 {

    interface Printer {
        copyDocument();
        printDocument(document: Document);
        stapleDocument(document: Document, tray: number);
    }

}