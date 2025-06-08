// 8. Readonly Modifier
// Create a class Book with:
// • readonly property title
// • readonly property author
// Once set through the constructor, these values should not be changed.

class Book {
    public readonly title: string;
    public readonly author: string;

    constructor(t: string, a: string) {
        this.title = t;
        this.author = a;
    }
}

const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);

// book.title = "Brave New World";
// book.author = "Terry Pratchet";