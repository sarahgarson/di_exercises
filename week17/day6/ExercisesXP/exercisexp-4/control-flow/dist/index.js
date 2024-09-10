"use strict";
// here is to check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        return "positive";
    }
    else if (num < 0) {
        return "negative";
    }
    else {
        return "zero";
    }
}
console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));
