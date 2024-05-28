// Instructions

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// 1.Using the .toString() method convert the array to a string.

let numbersString = numbers.toString();
console.log(numbersString);

// 2.Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)

let numbersString2 = numbers.join(", ");
let numbersString3 = numbers.join("");
let numbersString4 = numbers.join("+");
console.log(numbersString2, numbersString3, numbersString4);

/* 3. Bonus : To do this Bonus look up how to work with nested for loops
Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
The output should be: [9,8,7,6,5,4,3,2,1,0]
Hint: The algorithm is called “Bubble Sort”*/
// a. Use a temporary variable to swap values in the array.
// b. Use 2 “nested” for loops (Nested means one inside the other).
// c. Add comments and console.log the result for each step, this will help you understand.
// d. Requirement: Don’t copy paste solutions from Google

// Bubble Sort algorithm
for (let i = 0; i < numbers.length; i++) {
  //nested for loop, using j
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] < numbers[j + 1]) {
      // Swap values using a temporary variable
      let temporaryVariable = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temporaryVariable;
    }
  }
  console.log(`Iteration ${i + 1}:`, numbers);
}

console.log("Sorted array:", numbers);
