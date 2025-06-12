// 4. Conditional Number
// Write a generic function that accepts a single parameter, the type of the accepted parameter depends on the
// generic argument of the function:
// • If the generic argument is number, the function should accept a number parameter and print it formatted to
// the 2nd decimal place
// • If the generic argument is anything else, the function should accept a string argument and print it as is.
// Hint: You should use conditional types

type InputType<T> = T extends number ? number : string;

function conditionalNumber<T>(param: InputType<T>): void {
    if (typeof param === "number") {
        console.log(param.toFixed(2));
    } else {
        console.log(param);
    }
}

conditionalNumber<number>(20.3555);
conditionalNumber<string>('wow');
conditionalNumber<boolean>('a string');

// conditionalNumber<boolean>(30);
// conditionalNumber<number>('test');