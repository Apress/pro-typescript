enum Size {
    S,
    M,
    L,
    XL
}

function acceptNumber(input: number) {
    return input;
}

// number
acceptNumber(1);

// enum
acceptNumber(Size.XL);

// null
acceptNumber(null);
 