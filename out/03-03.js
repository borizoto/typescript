"use strict";
// Simple inheritance
class Vehicle {
    brand;
    constructor(b) {
        this.brand = b;
    }
    drive() {
        return `Driving ${this.brand}`;
    }
}
class Car extends Vehicle {
    model;
    constructor(b, m) {
        super(b);
        this.model = m;
    }
    drive() {
        return `Driving ${this.brand} ${this.model}`;
    }
}
const car = new Car("Toyota", "Corolla");
console.log(car.drive());
//# sourceMappingURL=03-03.js.map