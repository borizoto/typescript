// 1. Optional Multiplier
// Write a function that receives 3 optional parameters of type string | number, the function should multiply the 3
// parameters and return the result, using the following logic:
// • If a string is passed as a parameter, parse it to a number and use it in the multiplication.
// o Any passed string will always represent a valid integer number.
// • If one or more parameters are passed, return their multiplication
// • If no parameters are passed return 1
// The outputshould be a single number

function multiplier(param1?: string | number, param2?: string | number, param3?: string | number): number {

    const num1 = param1 === undefined ? 1 : Number(param1);

    const num2 = param2 === undefined ? 1 : Number(param2);

    const num3 = param3 === undefined ? 1 : Number(param3);

    const result = num1 * num2 * num3;

    return result;
}

console.log(multiplier('3', 5, '10'))
console.log(multiplier('2', '2'))
console.log(multiplier(undefined, 2, 3))
console.log(multiplier(7, undefined, '2'))
console.log(multiplier())