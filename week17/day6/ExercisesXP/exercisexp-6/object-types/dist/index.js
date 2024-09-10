"use strict";
// the function that returns a Person object
function createPerson(name, age) {
    return { name, age };
}
const person1 = createPerson("Alice", 30);
console.log(person1);
