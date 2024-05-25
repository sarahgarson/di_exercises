// Instructions

// 1. Prompt the user for several words (separated by commas).

let userInput = prompt(`please enter a few words separated by commas:`);

// 2. Put the words into an array.

let userWords = userInput.split(",");

// 3. Console.log the words one per line, in a rectangular frame as seen below.

// 4. Check out the Hints and Requirements below.
/*For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:*/

//Hint
//The number of stars that wraps the sentence, must depend on the length of the longest word.

let longestWordLength = 0;

for (let word of userWords) {
  if (word.length > longestWordLength) {
    longestWordLength = word.length;
  }
}

let frameWidth = longestWordLength + 4; //had to put +4, if not the top and bottom wouldnt cover the whole box

console.log("*".repeat(frameWidth));

for (let word of userWords) {
  console.log(`* ${word.padEnd(longestWordLength, " ")} *`);
}

console.log("*".repeat(frameWidth));
