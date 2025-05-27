"use strict";
// Write a function that takes in exactly one parameter of unknown type, a response object that may or may not
// contain a value and returns a string based on its contents:
// • The parameter provided will always be a valid object, that has code and text properties
// • If the provided object has a value property of type string, return the value.
// • Otherwise return '-'.
// • Hint: If you know information that TypeScript cannot deduce, it may be acceptable to ignore type checks.
function unknownResponse(param) {
    const obj = param;
    if (typeof obj.value !== "string") {
        return '-';
    }
    return obj.value;
}
console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(unknownResponse({ code: 201, text: 'Created', value: { name: 'Test', age: 20 } }));
console.log(unknownResponse({ code: 201, text: 'Created', value: 'Object Created' }));
console.log(unknownResponse({ code: 404, text: 'Not found' }));
//# sourceMappingURL=07-01.js.map