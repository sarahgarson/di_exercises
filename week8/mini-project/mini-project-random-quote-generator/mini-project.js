//PART I: QUOTE GENERATOR

// 2. In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…

//3. Populate the array with a few quotes that you like.

const quotes = [
  {
    id: 0,
    author: "Steve Jobs",
    quote: "The only way to do great work is to love what you do.",
  },
  {
    id: 1,
    author: "Abraham Lincoln",
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
  },
  {
    id: 2,
    author: "Franklin D. Roosevelt",
    quote: "The only thing we have to fear is fear itself.",
  },
];

//4.When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.

// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.

let previousQuoteId = -1;

const generatingQuotes = () => {
  let randomIndex;

  // here I am making sure that the new quote is different from the previous one
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === previousQuoteId);

  previousQuoteId = randomIndex;

  const section = document.querySelector("section");
  section.innerHTML = `<p>"${quotes[randomIndex].quote}"</p><p> - ${quotes[randomIndex].author}</p>`;
};

const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", generatingQuotes);

//PART II: ADD BUTTON (JS PART)

// In the HTML file, under the displayed quote, create a few more buttons:
// A button that gives the number of character inside each quote (space included)
// A button that gives the number of character inside each quote (space NOT included)
// A button that gives the number of words in each quote
// A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.

const quoteInput = document.getElementById("quote-input");
const authorInput = document.getElementById("author-input");
const addBtn = document.getElementById("add-btn");
const characterCountBtn = document.getElementById("character-count");
const characterCountNoSpacesBtn = document.getElementById(
  "character-count-no-spaces"
);
const wordCountBtn = document.getElementById("word-count");
const likeBtn = document.getElementById("like-btn");

// Function to calculate character count including spaces
const getCharacterCount = (quote) => {
  return quote.length;
};

// Function to calculate character count excluding spaces
const getCharacterCountNoSpaces = (quote) => {
  return quote.replace(/\s/g, "").length;
};

// Function to calculate word count
const getWordCount = (quote) => {
  return quote.split(" ").filter((word) => word !== "").length;
};

// Event listener to add a new quote
addBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  const newQuote = {
    id: quotes.length,
    author: authorInput.value,
    quote: quoteInput.value,
    likes: 0,
  };
  quotes.push(newQuote);
  previousQuoteId = newQuote.id; // Update previousQuoteId to the new quote's id
  quoteInput.value = "";
  authorInput.value = "";
  generatingQuotes(); // Display the newly added quote
});

// Event listeners for character count buttons
characterCountBtn.addEventListener("click", () => {
  if (previousQuoteId === -1) return;
  const currentQuote = quotes[previousQuoteId].quote;
  const characterCount = getCharacterCount(currentQuote);
  alert(`Character Count (with spaces): ${characterCount}`);
});

// Event listeners for character count (no spaces) button
characterCountNoSpacesBtn.addEventListener("click", () => {
  if (previousQuoteId === -1) return;
  const currentQuote = quotes[previousQuoteId].quote;
  const characterCountNoSpaces = getCharacterCountNoSpaces(currentQuote);
  alert(`Character Count (without spaces): ${characterCountNoSpaces}`);
});

// Event listener for word count button
wordCountBtn.addEventListener("click", () => {
  if (previousQuoteId === -1) return;
  const currentQuote = quotes[previousQuoteId].quote;
  const wordCount = getWordCount(currentQuote);
  alert(`Word Count: ${wordCount}`);
});

// Event listener for like button
likeBtn.addEventListener("click", () => {
  if (previousQuoteId === -1) return;
  quotes[previousQuoteId].likes++;
  alert(`Liked! Total Likes: ${quotes[previousQuoteId].likes}`);
});

// Part 3 : Filter Form

// 1.Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.

// 2. Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.

let filteredQuotes = [];
let currentQuoteIndex = 0;

const filterForm = document.getElementById("filter-form");
const filterInput = document.getElementById("filter-input");
const filterBtn = document.getElementById("filter-btn");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const quoteDisplay = document.getElementById("quote-display");

// Function to filter quotes by author
const filterQuotes = (author) => {
  filteredQuotes = quotes.filter(
    (quote) => quote.author.toLowerCase() === author.toLowerCase()
  );
  currentQuoteIndex = 0;
  showCurrentQuote();
};

// Function to display the current quote
const showCurrentQuote = () => {
  if (filteredQuotes.length === 0) {
    quoteDisplay.textContent = "No quotes found for this author.";
  } else {
    quoteDisplay.textContent = `"${filteredQuotes[currentQuoteIndex].quote}" - ${filteredQuotes[currentQuoteIndex].author}`;
  }
};

// Event listener for filter button
filterBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  const author = filterInput.value;
  filterQuotes(author);
});

// Event listener for previous button
previousBtn.addEventListener("click", () => {
  if (currentQuoteIndex > 0) {
    currentQuoteIndex--;
    showCurrentQuote();
  }
});

// Event listener for next button
nextBtn.addEventListener("click", () => {
  if (currentQuoteIndex < filteredQuotes.length - 1) {
    currentQuoteIndex++;
    showCurrentQuote();
  }
});
