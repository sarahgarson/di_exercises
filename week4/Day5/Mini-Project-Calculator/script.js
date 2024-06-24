// Instructions:

//1. Create a HTML file for your calculator and a JS file for the calculator’s functionality.(in the HTML FILE)

// 2. You must create 3 functions in the js file:
//a. number(num)
//b. operator(operator)
//c. equal()
// Hint : you can use the eval() method to help with your calculations.

//3. Before coding, take your time to understand all the parts to the exercise and their process. You can write it down somewhere if it helps (recommended).

//4. Bonus : create the RESET and CLEAR buttons.

let currentOperand = "";
let currentOperator = "";
let prevOperand = "";
let result = "";

//a. number(num)
function number(num) {
  if (currentOperand === "0" && num === "0") return;
  if (currentOperand === "0" && num !== ".") {
    currentOperand = num;
  } else {
    currentOperand += num;
  }
  updateScreen(currentOperand);
}

//b. operator(operator)
function operator(op) {
  if (currentOperand === "") return;
  if (prevOperand !== "") {
    calculate();
  }
  currentOperator = op;
  prevOperand = currentOperand;
  currentOperand = "";
}

//c. equal()
function equal() {
  if (currentOperand === "" || prevOperand === "") return;
  calculate();
  currentOperand = result.toString();
  prevOperand = "";
  currentOperator = "";
  updateScreen(currentOperand);
}

function calculate() {
  let prev = parseFloat(prevOperand);
  let current = parseFloat(currentOperand);
  switch (currentOperator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  currentOperand = result.toString();
}

//4. Bonus : create the RESET and CLEAR buttons.
function clearScreen() {
  currentOperand = "";
  updateScreen("0");
}

function resetCalculator() {
  currentOperand = "";
  prevOperand = "";
  currentOperator = "";
  result = "";
  updateScreen("0");
}

function updateScreen(value) {
  document.getElementById("screen").innerText = value;
}
