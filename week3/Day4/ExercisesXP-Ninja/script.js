//Exercise 1 : Age Difference

// Instruction

// 1. Given the years two people were born, find the date when the younger one is exactly half the age of the older.
//Notes: The dates are given in the format YYYY

let person1BirthYear = 1993;
let person2BirthYear = 2001;

let agePerson1 = 2024 - person1BirthYear;
let agePerson2 = 2024 - person2BirthYear;

let calcAge = person2BirthYear + agePerson1;
console.log(calcAge);

// Exercise 2 : Zip Codes

// Instruction

//Harder exercise

//Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

//While working in a Post Office you must have the clients’ zip code in order to send them their letters.

let zipCode = prompt("hey there, please entender your zip code");

// 2. Ask the client for their zip code and console.log “success” or “error” based on the following rules.

// a. Zip codes consists of 5 numbers

let zipCode5digits = /^\d{5}$/;

if (zipCode5digits.test(zipCode)) {
  console.log("success");
} else {
  console.log("error");
}

// b. Must only contain numbers

let zipCodeNumb = /[0-9]/;

if (zipCodeNumb.test(zipCode)) {
  console.log("success");
} else {
  console.log("error");
}

// c. Must not contain any whitespace (spaces)

if (zipCode.indexOf(" ") !== -1) {
  console.log("error");
} else {
  console.log("success");
}

// d. Must not be greater than 5 digits in length

if (zipCode.length > 5) {
  console.log("error");
} else {
  console.log("success");
}

// Exercise 3 : Secret Word

// Instruction

// Harder exercise
//Hint : Use Regular Expressions

// 1. Prompt the user for a word and save it to a variable.

let word = prompt("write a word");

// 2. Delete all the vowels of the word and console.log the result.

let wordVowelsGone = word.replace(/[aeiou]/gi, " ");

console.log(wordVowelsGone);

// 3. Bonus: Replace the vowels with another character and console.log the result

let numbAsVowels = {
  a: "1",
  e: "2",
  i: "3",
  o: "4",
  u: "5",
};

let wordVowelsAsNumb = word.replace(
  /[aeiou]/gi,
  (match) => numbAsVowels[match.toLowerCase()]
);
console.log(wordVowelsAsNumb);
