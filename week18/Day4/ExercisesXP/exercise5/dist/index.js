"use strict";
function logLength(arg) {
    console.log(`Length: ${arg.length}`);
}
logLength("Hello, TypeScript!");
logLength([1, 2, 3, 4, 5]);
logLength({ length: 10 });
// Custom types
class CustomList {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    get length() {
        return this.items.length;
    }
}
const numberList = new CustomList();
numberList.add(1);
numberList.add(2);
numberList.add(3);
logLength(numberList);
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));
