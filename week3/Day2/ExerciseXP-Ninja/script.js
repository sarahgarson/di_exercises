//Exercise 1 : Evaluation

//Instructions

/*For each expression, predict what you think the output will be in a comment (//) without first running the command.

Of course, explain each prediction.

Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

Evaluate the comparisons found below:*/

5 >= 1;
//prediction: True, 5 is bigger than 1
//actual output: true

0 === 1;
//prediction: False, they are both from the same type but not the same
//actual output: false

4 <= 1;
//prediction: False, one is not bigger or the same as 4.
//actual output: false

1 != 1;
//prediction: False, one is not different than 1
//actual output: false

"A" > "B";
//prediction; False, B is 066 and A 065 according to the ASCII Code
//actual output:false

"B" < "C";
//prediction: True, C = 067 and B = 066
//actual output:true

"a" > "A";
//prediction:True, a = 097 and A = 065
//actual output:true

"b" < "A";
//prediction: False, A is 065 and b 098, which means b is bigger
//actual output: false

true === false;
//prediction:False, they are both booleans (same type) but not the same value
//actual output: false

true != true;
//prediction:False, they are the same thing.
//actual output: false

//Exercise 2 : Ask For Numbers

//Instructions

//1. Ask the user for a string of numbers separated by commas.

let numbers = prompt("string of numbers separated by comas");

//2. Console.log the sum of the numbers.

let numbersArray = numbers.split(",");
let sum = parseInt(numbersArray[0]) + parseInt(numbersArray[1]);

console.log(sum);

//Hint: use some string methods

//Exercise 3 : Find Nemo

//Instructions

//Hint: if statement (tomorrow’s lesson)

// 1. Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"

let sentence = prompt(
  "Please give me a phrase with the word Nemo in it... Make it fun!!"
);

// 2. Find the word “Nemo”

let name = "Nemo";
let position = sentence.indexOf("Nemo");

// 3. Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".

console.log("We found Nemo in the " + position + " position");

// 4. If you can’t find Nemo, console.log “I can’t find Nemo”.

if (position === -1) {
  console.log("I can't find Nemo");
}

//Exercise 4 : Boom

//Instructions

//Hint: if statement (tomorrow’s lesson)

//Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

let number = parseInt(prompt("Please enter your number"));

//If the number given is less than 2 : return “boom”

if (number < 2) {
  console.log("boom");
}

//If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
else if (number > 2) {
  let os = "o".repeat(number);
  let string = "b" + os + "m";
  console.log(string);
}

//If the number given is evenly divisible by 2, add a exclamation mark to the end.
else if (number % 2 === 0) {
  let result1 = string + "!";
  console.log(result1);
}

//If the number given is evenly divisible by 5, return the string in ALL CAPS.
else if (number % 5 === 0) {
  let result2 = string.toUpperCase();
  console.log(result2);
}

//If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
else if (number % 2 === 0 && number % 5 === 0) {
  let result3 = string + "!";
}
console.log(result3);
