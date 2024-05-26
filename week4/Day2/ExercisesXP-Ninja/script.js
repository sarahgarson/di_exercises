// Exercise 1: Random Number

//Instructions

// 1. Get a random number between 1 and 100.

let randomNumber = Math.floor(Math.random() * 100) + 1; // Math.floor is for rounding down the number in this case to 99 (and then we added the +1 to be 100) - Math.random gives us a random number from 0 to 1, and we multipled by 100 so 99.9999.

// 2. Console.log all even numbers from 0 to the random number.

for (i = 0; i <= randomNumber; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Exercise 2: Capitalized Letters

// Instructions

// 1. Create a function that takes a string as an argument.

// 2. Have the function return:
//  a. The string but all letters in even indexes should be capitalized.
//  b. The string but all letters in odd indexes should be capitalized.

function stringCases(string) {
  string = string.toLowerCase().replace(/\s/g, "");

  let evenCase = "";
  let oddCase = "";

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      evenCase += string[i].toUpperCase();
      oddCase += string[i].toLowerCase();
    } else {
      oddCase += string[i].toUpperCase();
      evenCase += string[i].toLowerCase();
    }
  }

  return { evenCase: evenCase, oddCase: oddCase };
}

let sentence = stringCases(`Hello There guys!`);
console.log(sentence.evenCase);
console.log(sentence.oddCase);

//Note:

// - Index 0 will be considered even.
// - The argument of the function should be a lowercase string with no spaces.

//Exercise 3 : Is Palindrome?

//Instructions

// 1. Write a JavaScript function that checks whether a string is a palindrome or not.

//Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.

function palindrome(string1) {
  let lowCaseString = string1.toLowerCase();

  let reverseString = lowCaseString.split("").reverse().join("");

  if (lowCaseString === reverseString) {
    console.log(true);
  } else {
    console.log(false);
  }
}

palindrome(`Hannah`);

// Exercise 4 : Biggest Number

//Instructions

// 1. Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
//Note : This function should work with any array;

function biggestNumberInArray(arrayNumber) {
  let biggestNumber = arrayNumber[0];

  for (i = 1; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > biggestNumber) {
      biggestNumber = arrayNumber[i];
    }
  }

  return biggestNumber;
}

let numbers = [5, 3, 11, 2, 7];
console.log("The biggest number is:", biggestNumberInArray(numbers));

//Exercise 5: Unique Elements

//Instructions

//Write a JS function that takes an array and returns a new array with only unique elements.

function arrayOldNew(array) {
  let uniqueArray = new Set(array);
  let newArray = Array.from(uniqueArray);

  return newArray;
}

let arrayResult = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
console.log(arrayResult);
console.log(arrayOldNew(arrayResult));
