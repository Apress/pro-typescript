module Listing1_59 {

    function reverse<T>(list: T[]): T[] {
        var reversedList: T[] = [];

        for (var i = (list.length - 1); i >= 0; i--) {
            reversedList.push(list[i]);
        }

        return reversedList;
    }

    var letters = ['a', 'b', 'c', 'd'];
    var reversedLetters = reverse<string>(letters); // d, c, b, a


    var numbers = [1, 2, 3, 4];
    var reversedNumbers = reverse<number>(numbers); // 4, 3, 2, 1

}