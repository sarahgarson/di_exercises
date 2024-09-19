"use strict";
function describeValue(value) {
    if (typeof value === "number") {
        return "This is a number";
    }
    else if (typeof value === "string") {
        return "This is a string";
    }
    else {
        // This else block is unreachable due to TypeScript's type checking,
        // but adding it for practice 
        throw new Error("Unexpected input type");
    }
}
console.log(describeValue(42));
console.log(describeValue("Hello"));
console.log(describeValue(3.14));
console.log(describeValue("TypeScript"));
