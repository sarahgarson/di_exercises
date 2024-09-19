"use strict";
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(["hello", 42]));
console.log(getFirstElement([42, "world"]));
console.log(getFirstElement(["TypeScript", "JavaScript", "Python"]));
const mixedArray = [100, "test", 200];
const firstElement = getFirstElement(mixedArray);
console.log(`First element: ${firstElement}`);
console.log(`Length of first element: ${firstElement.length}`);
function getFirstElementSafe(arr) {
    const first = arr[0];
    if (typeof first === "string") {
        return first;
    }
    else if (typeof first === "number") {
        return first.toString();
    }
    throw new Error("Array is empty or contains unsupported type");
}
console.log("Safe approach results:");
console.log(getFirstElementSafe(["safe", 42]));
console.log(getFirstElementSafe([42, "world"]));
console.log(getFirstElementSafe([]));
