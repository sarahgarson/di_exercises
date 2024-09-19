"use strict";
function formatInput(input) {
    //making sure thi s is set a string
    const stringValue = input;
    return `Formatted: ${stringValue.toUpperCase()}`;
}
// Test cases
console.log(formatInput("hello"));
// Custom class exampless 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `${this.name} (${this.age} years old)`;
    }
}
const person = new Person("Alice", 30);
console.log(formatInput(person));
