// 🌟 Exercise 1 : Scope

// Instructions

// 1. Analyse the code below, and predict what will be the value of a in all the following functions.

// 2. Write your prediction as comments in a js file. Explain your predictions.

// #1
// function funcOne() {
//   let a = 5;
//   if (a > 1) {
//     a = 3;
//   }
//   alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console:
// funcOne();

// #1.2 What will happen if the variable is declared with const instead of let ?

//my answer: const variables cannot be changed, it will appear an error saying the variable cant be changed.

//the right answer: TypeError: Assignment to constant variable.
// at funcOne (script.js:5:7)
//at script.js:11:1

//----------------------------------------//

//#2
// let a = 0;
// function funcTwo() {
//   a = 5;
// }

// function funcThree() {
//   alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree();
// funcTwo();
// funcThree();

// #2.2 What will happen if the variable is declared with const instead of let ?

//my answer: function three will work fine but function two will get an error

//right answer: 'inside the funcThree function 0' and 'TypeError: Assignment to constant variable.
// at funcTwo (script.js:34:5)
// at script.js:43:1'

//------------------------------------------//

//#3

// function funcFour() {
//   window.a = "hello";
// }

// function funcFive() {
//   alert(`inside the funcFive function ${a}`);
// }

//#3.1 - run in the console:
// funcFour();
// funcFive();

//my answer: a was changed to hello but not console.logged so alert a value will be hello in fucntion 5

//right answer: 'inside the funcFive function hello'

//----------------------------------------//

//#4
// let a = 1;
// function funcSix() {
//   let a = "test";
//   alert(`inside the funcSix function ${a}`);
// }

// #4.1 - run in the console:
//funcSix();
// #4.2 What will happen if the variable is declared
// with const instead of let ?

//my answer: nothing since its being changed inside the function

//right answer: nothing happens

//----------------------------------------//

//#5

// const a = 2;
// if (true) {
//   const a = 5;
//   alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console

// #5.2 What will happen if the variable is declared with const instead of let ?

//my answer: inside the if statement the a will be 5 and outside the a will be 2

//right answer: 'in the if block 5' and 'in the if block 5'

//----------------------------------------//

// 🌟 Exercise 2 : Ternary Operator

// Instructions

// Using the code below:

// 1. Transform the winBattle() function to an arrow function.

//const winBattle = () => true;

//2. Create a variable called experiencePoints.

// 3.Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.

// const experiencePoints = winBattle() ? 10 : 1;

//4. Console.log the experiencePoints variable.

//console.log(experiencePoints);

//----------------------------------------//

// 🌟 Exercise 3 : Is It A String ?

// Instructions

// 1. Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false.

// const isString = (value) => {
//   return typeof value === "string";
// };

// console.log(isString("Hello"));
// console.log(isString(123));

//----------------------------------------//

// 🌟 Exercise 4 : Colors

// Instructions

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

// colors.forEach((color, index) => {
//   console.log(`${index + 1}# choice is ${color}.`);
// });

// 2. Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")

// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// if (colors.includes("Violet")) {
//   console.log("Yeah");
// } else {
//   console.log("No...");
// }

//----------------------------------------//

// 🌟 Exercise 5 : Colors #2

// Instructions

// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// const ordinal = ["th", "st", "nd", "rd"];

//1.  Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

// Hint : Use the array methods taught in class and ternary operator.

// const getOrdinalSuffix = (index) => {
//   if (index === 0) return ordinal[1];
//   if (index === 1) return ordinal[2];
//   if (index === 2) return ordinal[3];
//   return ordinal[0];
// };

// colors.forEach((color, index) => {
//   const ordinalSuffix = getOrdinalSuffix(index);
//   console.log(`${index + 1}${ordinalSuffix} choice is ${color}.`);
// });

//----------------------------------------//

// Exercise 6 : Bank Details

// Instructions

// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

//1. Create a global variable called bankAmount which value is the amount of money currently in your account.

let bankAmount = 1000;

//2. Create a variable that saves the % amount of VAT (In Israel, it’s 17%).

const VAT = 0.17;

//3. Create an array with all your monthly expenses, both positive and negative (money made and money spent).
//Example : const details = ["+200", "-100", "+146", "+167", "-2900"]

const details = ["+500", "+6100", "+646", "+100", "-4000"];

//5. Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).

//I used the map method to create a new array where each expense is multiplied by 1 + VAT (1.17) to get the VAT added to each

const modifiedExpenses = details.map((expense) => {
  let amount = parseFloat(expense);
  return amount * (1 + VAT);
});

modifiedExpenses.forEach((expense) => {
  bankAmount += expense;
});

//6. Display your current bankAccount standing at the end of the month.

console.log(
  `Your current bank account standing at the end of the month is: ${bankAmount.toFixed(
    2
  )}`
);
