"use strict";
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}
console.log("Addition:", Calculator.add(5, 3));
console.log("Subtraction:", Calculator.subtract(10, 4));
