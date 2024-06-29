// Exercise 1 : Analyzing The Map Method

// Instructions

// Analyze this code, what will be the output ?

// [1, 2, 3].map((num) => {
//   if (typeof num === "number") return num * 2;
//   return;
// });

//my answer: [2, 4, 6];
//right answer: nothing

//-----------------------------------------------------------------------//

// Exercise 2: Analyzing The Reduce Method

// Instructions

// Analyze this code, what will be the output ?

// [
//   [0, 1],
//   [2, 3],
// ].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2]
// );

//my answer: [1], [3,6], [1,2];
//right answer:(6) [1, 2, 0, 1, 2, 3]

//-----------------------------------------------------------------------//

// Exercise 3 : Analyze This Code

// Instructions

// Using this code:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i);
//   alert(num);
//   return num * 2;
// });

// What is the value of i ?

//my answer: every number of the array normally,then multiplied by 2
//right answer: every number of the array normally

//-----------------------------------------------------------------------//

// Exercise 4 : Nested Arrays

// Instructions

//1. Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].

// Bonus Try to do it on one line.

const array = [[1], [2], [3], [[[4]]], [[[5]]]];

const newArray = array.flat(2);

console.log(newArray);

//2.  Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].

const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];

const newGreeting = greeting.map((subArray) => subArray.join(" "));

console.log(newGreeting);

//3. Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.

const stringGreeting = newGreeting.join("");
console.log(stringGreeting);

//4. Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

const oneArrayNum = trapped.flat(Infinity);

console.log(oneArrayNum);
