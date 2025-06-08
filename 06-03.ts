// 6. Access Modifiers
// Create a class Employee with:
// • public property name
// • protected property position
// • private property salary
// Implement methods:
// • getDetails – to return information about name and position(see format output)
// • showSalary – to return information about salary(see format in output)

class Employee {
    public name: string;
    protected position: string;
    private salary: number;

    constructor(n: string, p: string, s: number) {
        this.name = n;
        this.position = p;
        this.salary = s;
    }

    getDetails() {
        return `Name: ${this.name}, Position: ${this.position}`;
    }

    showSalary() {
        return `Salary: $${this.salary}`;
    }
}

const emp = new Employee("Alice", "Manager", 5000);
console.log(emp.getDetails());
console.log(emp.showSalary());
console.log(emp.name)
// console.log(emp.salary)
// console.log(emp.position)
