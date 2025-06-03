"use strict";
class Person1 {
    firstName;
    lastName;
    age;
    constructor(fn, ln, a) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = a;
    }
    introduce() {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
}
const person = new Person1("John", "Doe", 30);
console.log(person.introduce());
//# sourceMappingURL=01-03.js.map