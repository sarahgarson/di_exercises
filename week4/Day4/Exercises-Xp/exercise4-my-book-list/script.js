//Exercise 4 : My Book List

//Instructions

// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// 1. In the body of the HTML page, create an empty div:
//<div class="listBooks"></div>

// 2. In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// a. title,
// b. author,
// c. image : a url,
// d. alreadyRead : which is a boolean (true or false).

const allBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/800px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    alreadyRead: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1kRj1nnXtv-dZUhSj2n_xUDvtQFf5MzNXXcZouIU1FU_hY4A",
    alreadyRead: false,
  },
];

// 3. Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

let arrayOfBooks = document.querySelector(`.listBooks`);

// 4. Requirements : All the instructions below need to be coded in the js file:
// a. Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).

let table = document.createElement(`table`);

//For each book :
// 1. You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// II - The width of the image has to be set to 100px.
// III - If the book is already read. Set the color of the book’s details to red.

for (i = 0; i < allBooks; i++) {
  let book = allBooks[i];
  let row = document.createElement(`tr`);

  const titleAuthorCell = document.createElement("td");
  titleAuthorCell.textContent = `${book.title} written by ${book.author}`;

  const imageCell = document.createElement("td");
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";
  imageCell.appendChild(img);

  row.appendChild(titleAuthorCell);
  row.appendChild(imageCell);

  if (book.alreadyRead) {
    titleAuthorCell.style.color = "red";
  }

  table.appendChild(row);
}

arrayOfBooks.appendChild(table);
