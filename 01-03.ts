class Person1 {
    public firstName: string;
    public lastName: string;
    public age: number;

    constructor(fn: string, ln: string, a: number) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = a;
    }

    introduce() {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`
    }
}

const person = new Person1("John", "Doe", 30);
console.log(person.introduce());