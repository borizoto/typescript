"use strict";
// 8. Readonly Modifier
// Create a class Book with:
// • readonly property title
// • readonly property author
// Once set through the constructor, these values should not be changed.
class Book {
    title;
    author;
    constructor(t, a) {
        this.title = t;
        this.author = a;
    }
}
const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);
//# sourceMappingURL=08-03.js.map