//EXERCISES XP//

/*Instructions


1. Store your favorite food into a variable.

2. Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

3. Console.log I eat <favorite food> at every <favorite meal>*/

//Exercise 1

let favoriteFood = "sushi";
let favoriteMeal = "lunch";
let favorite = "I eat " + favoriteFood + " at every " + favoriteMeal;
console.log(favorite);

//Exercise 2

//Instructions
/*Part I
Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

1. Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

2. Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
For example : black mirror, money heist, and the big bang theory

3. Console.log a sentence using both of the variables created above
For example : I watched 3 series : black mirror, money heist, and the big bang theory*/

//part I

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.toString(
  "black mirror, money heist, and the big bang theory"
);
let fullSentence =
  "I watched " + myWatchedSeriesLength + " series: " + myWatchedSeriesSentence;
console.log(fullSentence);

//part II

/*
1. Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.

2. Add, at the end of the array, the name of another series you watched.

3. Add, at the beginning of the array, the name of your favorite series.

4. Delete the series “black mirror”.

5. Console.log the third letter of the series “money heist”.

6. Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.*/

myWatchedSeries[2] = "friends";
myWatchedSeries.push("House");
myWatchedSeries.splice(0, 1, "The Witcher");
let moneyHeist = myWatchedSeries[1];
console.log(moneyHeist[2]);
console.log(myWatchedSeries);

//Exercise 3

//Instructions

//1. Store a celsius temperature into a variable.

let celsiusTemp = 20;
//2. Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.

//Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)

//Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

let fahrenheitTemp = (20 / 5) * 9 + 32;
console.log(celsiusTemp + "°C" + " is " + fahrenheitTemp + "°F");

/* Exercise 4 : Guess The Answers #1


Instructions


For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.*/

let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: Its going to be 55, because both variables are numbers and the '+' sign will add the two.
// Actual:55

a = 2;

console.log(a + b); //second expression
// Prediction: Its going to be 23 since the value of the a variable was reasigned to 2.
// Actual:23

//What is the value of c?
// no value assigned to the variable c.

//4. Analyse the code below, what will be the outcome?

console.log(3 + 4 + "5");
//Its going to be 75, 7 will be a number and 5 a string, but theres no space in the 5 string so they'll appear together as a string.
//actual: 75 as a string.

/*Exercise 5 : Guess The Answers #2

Instructions


For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.

Then run the expression in the console of your browser (NOT IN VS CODE).

Note the actual output in a comment and compare it with your prediction.*/

// 1.What is the output of each of the expressions below?

typeof 15;
// Prediction:Number
// Actual:number

typeof 5.5;
// Prediction:Number
// Actual:number

typeof NaN;
// Prediction:Object
// Actual:number

typeof "hello";
// Prediction: string
// Actual:string

typeof true;
// Prediction: Boolean
// Actual:boolean

typeof (1 != 2);
// Prediction:True
// Actual:boolean

"hamburger" + "s";
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s";
// Prediction: hamburger
// Actual: NaN

"1" + "3";
// Prediction:13 (string)
// Actual: '13'

"1" - "3";
// Prediction:-2 (number)
// Actual: -2

"johnny" + 5;
// Prediction: johnny5
// Actual:'johnny5'

"johnny" - 5;
// Prediction: error
// Actual:Nan

99 * "hello";
// Prediction:error
// Actual:Nan

1 != 1;
// Prediction: False
// Actual: false

1 == "1";
// Prediction: True
// Actual:true

1 === "1";

// Prediction:True
// Actual:Flase

/*Exercise 6 : Guess The Answers #3

Instructions


For each expression, in a Javascript file in VS CODE, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.

Then run the expression in the console of your browser (NOT IN VS CODE).

Note the actual output in a comment and compare it with your prediction.



What is the output of each of the expressions below?*/

5 + "34";
// Prediction:'534'
// Actual: '534'

5 - "4";
// Prediction: 1
// Actual: 1

10 % 5;
// Prediction: 0 or 2
// Actual: 0

5 % 10;
// Prediction: 5
// Actual: 5

" " + " ";
// Prediction: just two empty spaces, so nothing
// Actual: '   '

" " + 0;
// Prediction: "  0"
// Actual: ' 0'

true + true;
// Prediction: true true
// Actual: 2

true + false;
// Prediction: 1
// Actual: 1

false + true;
// Prediction: 1
// Actual:

false - true;
// Prediction: -2
// Actual: -1

!true;
// Prediction: False
// Actual:

3 - 4;
// Prediction: -1
// Actual: -1
