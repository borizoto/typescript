"use strict";
// 2. Operator
// You need to write a function that can perform one of 3 operations
// Write a function that receives 3 parameters:
// · param: string | number | string[]
// · operation: 'Index' | 'Length' | 'Add'
// · operand: number
// If the operation is:
// · Index and the param is string or string[] - return the value at index equal to operand of the string or string[]
// · Length and the param is string or string[] – return the length of the string or string[] mod the operand
// · Add and the param is string or number – return the param parsed to Number and added to the operand
// · Note: Try to solve the problem with minimal type narrowing
function operator(param, operation, operand) {
    if (operation === 'Index' && typeof param !== 'number') {
        return param[operand];
    }
    if (operation === 'Length' && typeof param !== 'number') {
        return param.length % operand;
    }
    if (operation === 'Add' && !Array.isArray(param)) {
        return Number(param) + operand;
    }
    return '';
}
console.log(operator(['First', 'Second', 'Third'], 'Index', 1));
console.log(operator('string', 'Index', 1));
console.log(operator(['Just', 'Two'], 'Length', 5));
console.log(operator('short string1', 'Length', 5));
console.log(operator('7', 'Add', 3));
console.log(operator(11, 'Add', 3));
//# sourceMappingURL=02-02.js.map