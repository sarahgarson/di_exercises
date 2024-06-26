// 🌟 Exercise 1 : Find The Sum

// Instructions

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// const sum = (a, b) => a + b;

// console.log(sum(5, 5));

//------------------------------------------------------//

// 🌟 Exercise 2 : Kg And Grams

// Instructions

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// 1. First, use function declaration and invoke it.

// function weightKgToGr(weight) {
//   return weight * 1000;
// }

// console.log(weightKgToGr(10));

// 2. Then, use function expression and invoke it.

// let weightKgToGr2 = function (weight2) {
//   return weight2 * 1000;
// };

// console.log(weightKgToGr2(5));

// 3. Write in a one line comment, the difference between function declaration and function expression.

// function declaration can be invoked before they are called (hoisting) and are not assigned to a variable, while function expression are anonymous functions and cannot be hoisted meaning they need to be invoked after the function is called.

// 4. Finally, use a one line arrow function and invoke it.

// let weightKgToGr3 = (weight3) => weight3 * 1000;

// console.log(weightKgToGr3(20));

//------------------------------------------------------//

// 🌟 Exercise 3 : Fortune Teller

// Instructions

// 1. Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.

// (function (numbChildren, partnersName, geoLocation, jobTtitle) {
//   const sentence =
//     "Ill tell you your future, you will have " +
//     numbChildren +
//     ", your husbands name will be " +
//     partnersName +
//     ", you will live in " +
//     geoLocation +
//     " and you will be a succeful " +
//     jobTtitle;

// 2. The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

//   document.getElementById("future").innerText = sentence;
// })(3, "Jonathan", "Lisbon", "Full-stack Developer");

//------------------------------------------------------//

// 🌟 Exercise 4 : Welcome

// Instructions

// John has just signed in to your website and you want to welcome him.

// 1. Create a Bootstrap Navbar in your HTML file.

// 2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.

// (function (userName) {
//   const navbar = document.querySelector(".navbar");
//   const userDiv = document.createElement("div");
//   userDiv.classList.add("user-info");

//   userDiv.innerHTML = `
//       <span>Welcome, ${userName}</span>
//       <img class="rounded-circle mr-2 profile-pic" src='karl-magnuson-85J99sGggnw-unsplash.jpg' alt="Profile Picture" >
//   `;
//   navbar.appendChild(userDiv);
// })("Sarah");

// 3. The function should add a div in the nabvar, displaying the name of the user and his profile picture.

//------------------------------------------------------//

// 🌟 Exercise 5 : Juice Bar

// Instructions

// You will use nested functions, to open a new juice bar.

// Part I:

// 1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// function makeJuice(size) {
//  2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
//   function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
//     let sentence = `The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}.`;
//     document.getElementById("juice-order").innerText = sentence;
//   }

// 3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

//   addIngredients("apple", "banana", "dates");
// }

// makeJuice("medium");

// Part II:

// 1. In the makeJuice function, create an empty array named ingredients.

// 2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// 3. Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// 4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(size) {
  let ingredients = [];

  function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
    ingredients.push(firstIngredient, secondIngredient, thirdIngredient);
  }
  function displayJuice() {
    let sentence = `The client wants a ${size} juice, containing ${ingredients.join(
      ", "
    )}`;
    document.getElementById("juice-order").innerText = sentence;
  }

  addIngredients("apple", "banana", "dates");
  displayJuice();
}

makeJuice("medium");
