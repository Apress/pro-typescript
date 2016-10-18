// Assignment of different types
var dynamic = 'A string';

// Cannot convert 'number' to 'string'.
//dynamic = 52;
// Operations with different types
var days = '7';
var hours = '24';

// 168 (luckily, the hours string is coerced)
// The right-hand side of an arithmatic operation must be of type 'any', 'number' or an enum type.
//var week = days * hours;
// 77 (concatenate 7 and 7)
var fortnight = days + days;

// Calling functions
function getVolume(width, height, depth) {
    return width * height * depth;
}
