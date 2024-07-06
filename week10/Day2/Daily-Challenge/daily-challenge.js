// Instructions

// 1rst Daily Challenge

//1. Create two functions. Each function should return a promise.
//2. The first function called makeAllCaps(), takes an array of words as an argument
//a. If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
//b. else, reject the promise with a reason.
//3. The second function called sortWords(), takes an array of words uppercased as an argument
//a. If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
//b. else, reject the promise with a reason.

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every((word) => typeof word === "string")) {
      resolve(words.map((word) => word.toUpperCase()));
    } else {
      reject("Error: All elements in the array should be strings.");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Error: Array length should be greater than 4.");
    }
  });
}

// Test cases:

// in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) // ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));

// 2nd Daily Challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

//1. Create three functions. The two first functions should return a promise..

//2. The first function is named toJs():
//a. this function converts the morse json string provided above to a morse javascript object.
//b. if the morse javascript object is empty, throw an error (use reject)
//c. else return the morse javascript object (use resolve)

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).lenght === 0) {
        reject("OHHH NOOOO, we got an error: the object is empty");
      } else {
        resolve(morseJS);
      }
    } catch (error) {
      reject(`error`);
    }
  });
}

//3. The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
//a. This function asks the user for a word or a sentence.
//b. if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//c. else return an array with the morse translation of the user’s word.

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const usersInput = prompt(
      `Hey there, could you please add a sentence for us? Thankss!`
    );
    if (usersInput === null) {
      reject(
        `Nope, I need you to add a character we have in our morse code please.`
      );
    }

    const words = usersInput.toLowerCase().split(" ");
    const morseTranslation = [];

    try {
      words.forEach((word) => {
        for (let char of word) {
          if (!(char in morseJS)) {
            reject(
              `Error: Character '${char}' not found in Morse JavaScript object.`
            );
            return;
          }
          morseTranslation.push(morseJS[char]);
        }
        morseTranslation.push("/"); // Separate words with "/"
      });
      resolve(morseTranslation);
    } catch (error) {
      reject("Error processing Morse translation.");
    }
  });
}

// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

//4. The third function called joinWords(morseTranslation), takes one argument: the morse translation array
//a. this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

function joinWords(morseTranslation) {
  const morseOutput = morseTranslation.join(" ").replace(/\//g, "\n");
  const morseOutputElement = document.getElementById("morseOutput");
  if (morseOutputElement) {
    morseOutputElement.textContent = morseOutput;
  } else {
    console.error("Error: Element with id 'morseOutput' not found.");
  }
}
//5. Chain the three functions.

toJs()
  .then((morseJS) => toMorse(morseJS))
  .then((morseTranslation) => joinWords(morseTranslation))
  .catch((error) => console.log(error));
