"use strict";
//Write a simple function that calculates whether the sum of 3 numbers is even. Your function should receive three
//integers (whole) numbers, calculate their sum and return a Boolean value that is true if the sum is even or false
//otherwise. 
function evenSum(a, b, c) {
    const result = (a + b + c) % 2 === 0;
    return result;
}
console.log(evenSum(1, 2, 3));
console.log(evenSum(2, 2, 3));
//# sourceMappingURL=01-01.js.map