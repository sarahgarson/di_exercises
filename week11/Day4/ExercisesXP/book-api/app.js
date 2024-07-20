//1. Create a new directory named book-api.

//2. Inside the book-api directory, initialize a new Node.js project and install the express package.

//3. Create a new file named app.js in the book-api directory.

//4. In app.js, import the express module and create an instance of an Express app.

import express from "express";
const app = express();

//5. Define a basic data array containing a few book objects. Each book object should have properties like id, title, author, and publishedYear.

app.use(express.json());

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813,
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
  {
    id: 5,
    title: "Moby-Dick",
    author: "Herman Melville",
    publishedYear: 1851,
  },
];

//7. Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.

app.get("/", (req, res) => {
  res.send("Hello there friend");
});

app.get("/api/books", (req, res) => {
  res.json(books);
});

//8. Implement the “Read” route by defining a route at GET /api/books/:bookId.

//Extract the bookId parameter from the URL and use it to find the corresponding book in the books array.

//If the book is found, send a JSON response with the book details and a status code of 200 (OK).

//If the book is not found, send a 404 status with a “Book not found” message.

app.get("/api/books/:booksId", (req, res) => {
  const extractBookId = parseInt(req.params.booksId);
  const book = books.find((book) => book.id === extractBookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

//9. Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content.

// Inside the route handler, create a new book object with an incremented ID and the data from the request body.

// Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).

app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

//OBS: this part should always be added to the end of the code so all the routes are set and then the server can start listening to requests.

//6. Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

//had to write 5001 since I was getting an error from the 5000 already being used

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//output: sarahs-mbp:book-api sarahgarson$ node app.js
//Server is running on http://localhost:5001
