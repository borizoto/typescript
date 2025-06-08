"use strict";
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
class Shape {
    color;
    constructor(c) {
        this.color = c;
    }
}
class Circle extends Shape {
    radius;
    constructor(color, r) {
        super(color);
        this.radius = r;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Rectangle extends Shape {
    a;
    b;
    constructor(color, a, b) {
        super(color);
        this.a = a;
        this.b = b;
    }
    getArea() {
        return this.a * this.b;
    }
}
const circle = new Circle("red", 5);
console.log(circle.getArea());
const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());
//# sourceMappingURL=09-03.js.map