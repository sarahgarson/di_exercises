//EXERCISES XP GOLD

//Exercise 1 : Favorite Color

//Instructions;

let sentence = ["my", "favorite", "color", "is", "blue"];

/*Write some simple Javascript code that will join all the items in the array above, and console.log the result.*/

let sentenceString = sentence.toString();
console.log(sentenceString);

//Exercise 2 : Mixup

//Instructions

/*1. Create 2 variables. The values should be strings. For example:

let str1 = "mix";
let str2 = "pod";*/

let firstWord = "hey";
let secondWord = "mom";

//2. Slice out and swap the first 2 characters of the two strings from part 1.

let firstWord2 = firstWord.substring(0, 2);
let secondWord2 = secondWord.substring(0, 2);

firstWord = secondWord2 + firstWord.substring(2);
secondWord = firstWord2 + secondWord.substring(2);

console.log(firstWord);
console.log(secondWord);

//3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).

let sentenceNewWords = firstWord + " " + secondWord;

//4. Finally console.log the new concatenated string.

console.log(sentenceNewWords);

//Exercise 3 : Calculator

//Instructions

//Make a Calculator. Follow the instructions:

//1. Prompt the user for the first number.

let firstNumb = prompt("first number");

// 2. Store the first number in a variable called num1.

let num1 = firstNumb;

// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?

// 3. Prompt the user for the second number.

let secondNumb = prompt("second number");

// 4. Store the second number in a variable called num2.

let num2 = secondNumb;

// 5. Create an Alert where the value is the SUM of num1 and num2.

let sum = Number(firstNumb) + Number(secondNumb);

alert("The total is: " + sum + "!");

// 6. BONUS: Make a program that can subtract, multiply, and also divide!

let subtract = Number(firstNumb) - Number(secondNumb);
let divide = Number(firstNumb) / Number(secondNumb);
let multiply = Number(firstNumb) * Number(secondNumb);

alert("The total is: " + subtract);
alert("The total is: " + divide);
alert("The total is: " + multiply);
