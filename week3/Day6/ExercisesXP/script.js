//🌟 Exercise 1 : List Of People
//Instructions

const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays

// 1. Write code to remove “Greg” from the people array.

let removeGreg = people.shift();
console.log(people);

// 2. Write code to replace “James” to “Jason”.

let replaceNames = people.splice(2, 1, "Jason");
console.log(people);

// 3. Write code to add your name to the end of the people array.

let myName = people.push("Sarah");
console.log(people);

// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

let maryIndex = people.indexOf("Mary");
console.log(maryIndex);

// 5. Write code to make a copy of the people array using the slice method.

// a. The copy should NOT include “Mary” or your name.

// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];

// Hint: Check out the documentation for the slice method

let newArray = people.slice(1);
console.log(newArray);

// 6. Write code that gives the index of “Foo”. Why does it return -1 ?

let fooIndex = people.indexOf("Foo");
console.log(fooIndex);

// ANSWER : because it is not part of the array.

// 7. Create a variable called last which value is the last element of the array.

//Hint: What is the relationship between the index of the last element in the array and the length of the array?

let last = people.length - 1;
console.log(last);

//ANSWER : the last value will be the length of the array -1 since js counts the array length from 1 and the index is started with the number 0, so the last value of an array will always be the length -1.

// Part II - Loops

// 1. Using a loop, iterate through the people array and console.log each person.

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .

//Hint: take a look at the break statement in the lesson.

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

// 🌟 Exercise 2 : Your Favorite Colors

//Instructions

// 1. Create an array called colors where the value is a list of your five favorite colors.

// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

// 3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.

//Hint : create an array of suffixes to do the Bonus
