// Write a type predicate function that receives exactly one parameter of type unknown and narrows it down to a
// string[], but only if the array has at least 1 element.
// Your type predicate function should return a single Boolean value:
// • If the provided parameter was a valid string[] with at least 1 entry , it returns true.
// • Otherwise returns false.

function isNonEmptyStringArray(param: unknown): param is string[] {
    return Array.isArray(param) && param.length > 0 && param.every(el => typeof el === 'string');
}

let arr: unknown = ['1', '2', '3'];

if (isNonEmptyStringArray(arr)) {
    console.log(arr.length); // allowed
}