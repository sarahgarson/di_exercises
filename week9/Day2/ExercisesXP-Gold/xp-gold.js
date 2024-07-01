// Exercise 1 : Print Full Name

// Instructions

//1.  Create a function called printFullName.

//2. The function should return a string like the example below

// 'Your full name is Elie Schoppik`

// Destructure this object directly from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)

// The output of the printFullName function should be the exact same as the displayStudentInfo function. (Exercise XP)

function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

// Example usage:
console.log(printFullName({ first: "Elie", last: "Schoppik" }));

//-----------------------------------------//

// Exercise 2 : Keys And Values

// Instructions

//1. Create a function that takes an object and returns the keys and values as separate arrays.

function keysAndValues(obj) {
  const keys = Object.keys(obj).sort();
  const values = keys.map((key) => obj[key]);
  //2. Return the keys sorted alphabetically, and their corresponding values in the same order.

  return [keys, values];
}

// Example usage:
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

//-----------------------------------------//

// Exercise 3 : Counter Class

// Instructions

// Analyze the code below, what will be the output?

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);

// my answer: 3
// right answer: 3
