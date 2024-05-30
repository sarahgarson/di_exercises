// Create A Hangman Game:

//Instructions:

// Create the “Hangman” game. Your game will run in the console.

//You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.

//Check it out here

// 1. Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).

let playerOneWord = prompt(
  `Welcome to the Hangman Game! Please pick an awesome word so we can start this party:`
);

playerOneWord.toLocaleLowerCase();

while (playerOneWord.length < 8) {
  playerOneWord = prompt(
    `Nahhh your word needs to have 8 letters or more, enter a word more awesome than the last one:`
  );
}

let hiddenWord = "*".repeat(playerOneWord.length); // tried using .replace instead, but it just replaced the word with one '*' instead of switching the amount of letters to '*'. So we need to use .repeat in situations like this!

console.log(hiddenWord);

// 2. At this point continuously prompt player 2 for a letter.

let playerTwoLetter = prompt(
  `Hey there player two, want to make a guess? Give us a letter:`
);

// 3. If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).

let wordArray = word.split("");

function updateHiddenWord(letter) {
  let isCorrectGuess = false;
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === letter) {
      hiddenWord[i] = letter;
      isCorrectGuess = true;
    }
  }
  console.log(hiddenWord.join(""));
  return isCorrectGuess;
}

// 4. If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).

// 5. If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.

let maxTimeOfTries = 10;
let wrongGuesses = 0;

for (i = 1; i < maxTimeOfTries; i++) {
  wrongGuesses++;
  if (wrongGuesses < 10) {
    prompt(
      `Nope, but try again dont give up you have ${
        maxTimeOfTries - wrongGuesses
      }:`
    );
  }
}

console.log(`OHHH NOOOO... YOU LOSE`);

// 6. Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.

// 7. If player 1 wins, display a message that says CONGRATS YOU WIN.
