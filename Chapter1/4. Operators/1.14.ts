module Listing1_14 {

    enum Size {
        S,
        M,
        L,
        XL
    }

    var size = Size.S;
    ++size;
    console.log(Size[size]); // M

    var size = Size.XL;
    --size;
    console.log(Size[size]); // L

    var size = Size.XL;
    ++size;
    console.log(Size[size]); // undefined

} 