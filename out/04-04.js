"use strict";
// 4. Conditional Number
// Write a generic function that accepts a single parameter, the type of the accepted parameter depends on the
// generic argument of the function:
// • If the generic argument is number, the function should accept a number parameter and print it formatted to
// the 2nd decimal place
// • If the generic argument is anything else, the function should accept a string argument and print it as is.
// Hint: You should use conditional types
function conditionalNumber(param) {
    if (typeof param === "number") {
        console.log(param.toFixed(2));
    }
    else {
        console.log(param);
    }
}
conditionalNumber(20.3555);
conditionalNumber('wow');
conditionalNumber('a string');
//# sourceMappingURL=04-04.js.map