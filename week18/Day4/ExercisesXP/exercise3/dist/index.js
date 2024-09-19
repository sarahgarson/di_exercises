"use strict";
let someValue = "Hello, TypeScript!";
let strLength = someValue.length;
console.log(`The length of the string is: ${strLength}`);
let alternativeStrLength = someValue.length;
console.log(`The length of the string (alternative syntax): ${alternativeStrLength}`);
someValue = 42;
console.log(`someValue can be reassigned to a number: ${someValue}`);
// Type assertion vs type casting here
let definitelyAString = "I am definitely a string";
let stringLength = definitelyAString.length;
console.log(`Length of definitelyAString: ${stringLength}`);
