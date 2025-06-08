// 9. Abstract Class
// Create an abstract class Shape with:
// • property color: string
// • abstract method getArea(): number
// Create two subclasses that implement getArea.
// • Circle with property
// o radius: number
// • Rectangle with properties:
// o sideA: number
// o sideB: number

abstract class Shape {
    public color: string;

    constructor(c: string) {
        this.color = c;
    }

    abstract getArea(): number
}

class Circle extends Shape {
    public radius: number;

    constructor(color: string, r: number) {
        super(color);
        this.radius = r;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle extends Shape {
    public a: number;
    public b: number;

    constructor(color: string, a: number, b: number) {
        super(color);
        this.a = a;
        this.b = b;
    }

    getArea(): number {
        return this.a * this.b;
    }
}

const circle = new Circle("red", 5);
console.log(circle.getArea());

const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());