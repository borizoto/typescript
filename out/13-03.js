"use strict";
// 13. Inventory System
// Create a class Product with:
// • static property productCount to track how many products were created, protect it from being changed
// outside the class
// • readonly id: number (auto-incremented using productCount)
// • name: string – ensure a products name is at least 1 characters long
// • price: number – ensure the price is > 0
// • getDetails(): string method to print info about the product in format "ID: <id>, Name: <name>, Price:
// $<price>"
// Create another class Inventory with:
// • private products: Product[]
// • method addProduct(product: Product): void
// • method listProducts(): string - returns formatted info about products in the inventory each on a new line
// and then on the final line prints the number of total products in the format "Total products created:
// <products count>"
// Use readonly, private, static, getters and setters and encapsulation appropriately.
class Product {
    static productCount = 0;
    id;
    _name;
    _price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        Product.productCount++;
        this.id = Product.productCount;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    set name(value) {
        if (value.length < 1) {
            throw new Error('Product name must be at least 1 character long.');
        }
        this._name = value;
    }
    set price(value) {
        if (value < 1) {
            throw new Error('Product price must be greater than 0.');
        }
        this._price = value;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}
class Inventory {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        const details = this.products.map(p => p.getDetails()).join('\n');
        return `${details}\nTotal products created: ${this.products.length}`;
    }
}
const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());
// Product.productCount = 10;
// const product = new Product("", 800);
// const product2 = new Product("Phone", 0);
// product.id = 5;
//# sourceMappingURL=13-03.js.map