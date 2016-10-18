var example = [
    { a: 'A', b: 1, c: true },
    { a: 'B', b: 2 },
    { b: 3 }
];

for (var i = 0; i < bestCommonTypeExample.length; i++) {
    var value = bestCommonTypeExample[i];

    // The property 'a' does not exist on value of type '{ b: number }'.
    // console.log(value.a);
    // OK
    console.log(value.b);
    // The property 'c' does not exist on value of type '{ b: number }'.
    // console.log(value.c);
}
