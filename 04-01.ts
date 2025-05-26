// Write a function that takes in an array of strings and returns a tuple, where:
// 1. The first parameter is a string and represents the concatenated text from the entire array.
// 2. The second parameter is a number and represents the length of the concatenated text.
// The input comes as an array of string elements.
// The output is returned as a tuple of exactly 2 elements.

function convertArrays(stringArr: string[]): [string, number] {
    const result = stringArr.join('');

    return [
        result,
        result.length
    ]
}

console.log(convertArrays(['How', 'are', 'you?']))
console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']))