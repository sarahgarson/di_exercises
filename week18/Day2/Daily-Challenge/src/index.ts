interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  protected books: Book[] = [];

  public addBook(book: Book): void {
      this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | undefined {
      return this.books.find(book => book.isbn === isbn);
  }
}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
      super();
      this.website = website;
  }

  public listBooks(): string[] {
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
