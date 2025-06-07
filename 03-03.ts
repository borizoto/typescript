// Simple inheritance

class Vehicle {
    public brand: string;

    constructor(b: string) {
        this.brand = b;
    }

    drive(): string {
        return `Driving ${this.brand}`;
    }
}

class Car extends Vehicle {
    public model: string;

    constructor(b: string, m: string) {
        super(b);
        this.model = m;
    }

    override drive() {
        return `Driving ${this.brand} ${this.model}`;
    }
}

const car = new Car("Toyota", "Corolla");
console.log(car.drive());