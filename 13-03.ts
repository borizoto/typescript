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
    private static productCount = 0;
    public readonly id: number;

    public _name: string;
    public price: number;

    constructor(name: string, price: number) {
        if (name.length < 1) {
            throw new Error('Product name must be at least 1 character long.');
        }

        if (price < 1) {
            throw new Error('Product price must be greater than 0.');
        }

        this._name = name;
        this.price = price;
        Product.productCount++;
        this.id = Product.productCount;
    }


    public get name(): string {
        return this._name;
    }


    public set name(value: string) {
        this._name = value;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}

class Inventory {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    listProducts(): string {
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