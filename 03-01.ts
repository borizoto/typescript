// Write a function that takes in a tuple with exactly two elements:
// 1. The first parameter is a string and represents the person’s name.
// 2. The second parameter is a number and represents the person’s age.
// In case a correct tuple is passed, your function should return a string with the following format:
// 'Hello, my name is <name> and my age is <age>'. In case an invalid tuple is passed, TS should mark it as an error.

function formatPerson(personInfo: [name: string, age: number]): string {
    const [name, age] = personInfo;

    const result = `Hello, my name is ${name} and my age is ${age}`;

    return result;
}

console.log(formatPerson(['Ivan', 20]))
console.log(formatPerson(['Joro', 30]))
// console.log(formatPerson(['Joro', '25']))