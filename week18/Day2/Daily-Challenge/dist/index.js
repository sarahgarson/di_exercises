"use strict";
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookDetails(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }
}
class DigitalLibrary extends Library {
    constructor(website) {
        super();
        this.website = website;
    }
    listBooks() {
        return this.books.map(book => book.title);
    }
}
const myLibrary = new DigitalLibrary("www.mylibrary.com");
myLibrary.addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    publishedYear: 1925,
    genre: "Classic"
});
myLibrary.addBook({
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780446310789",
    publishedYear: 1960
});
const bookDetails = myLibrary.getBookDetails("9780743273565");
console.log("Book Details:", bookDetails);
const bookTitles = myLibrary.listBooks();
console.log("All Book Titles:", bookTitles);
console.log("Library Website:", myLibrary.website);
