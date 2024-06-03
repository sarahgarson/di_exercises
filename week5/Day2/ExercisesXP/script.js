//-------------------------------------------------------------------------------//

//hey there! to check the code please just delete the /* */ from the beginning of the code of the exercise and it will show organized, what is supposed to be a comment will stay a comment :)
//ps: dont forget to do the same with the html and css.

//---------------------------------------------------------------------------------//

/*//Exercise 1

// 1. Using a DOM property, retrieve the h1 and console.log it.

let header1 = document.body.firstElementChild.firstElementChild;
console.log(header1);


//--



// 2. Using DOM methods, remove the last paragraph in the <article> tag.

let removeLastParagraph = document.body.firstElementChild.lastElementChild;

removeLastParagraph.remove();


//--



// 3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

let colorChangingH2 =
  document.body.firstElementChild.firstElementChild.nextElementSibling;

colorChangingH2.addEventListener(`click`, colorRed);

function colorRed() {
  colorChangingH2.style.backgroundColor = `red`;
}


//--



// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

let hideH3 = document.body.firstElementChild.querySelector(`h3`);

hideH3.addEventListener("click", hide);

function hide() {
  hideH3.style.display = "none";
}



//--



// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

let parentElement = document.body.firstElementChild;

let newButton = document.createElement("button");

newButton.textContent = "Bold";

newButton.addEventListener(`click`, boldClick);

function boldClick() {
  let textsHTML = document.querySelectorAll("p");

  textsHTML.forEach(function (paragraph) {
    paragraph.style.fontWeight = "bold";
  });
}

parentElement.appendChild(newButton);



//--



// 6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

let headerRandomPixelSize = document.body.firstElementChild.firstElementChild;

headerRandomPixelSize.addEventListener(`mouseover`, hover);

function hover() {
  let randomFontSize = Math.floor(Math.random() * 100);

  headerRandomPixelSize.style.fontSize = randomFontSize + "px";
}


//--




// 7. BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

let parentElement2 = document.body.firstElementChild;

let paragraphsAll = document.querySelectorAll(`p`);

let secondParagraph = paragraphsAll[1];

console.log(secondParagraph);

secondParagraph.addEventListener(`mouseover`, fadingHover);
secondParagraph.addEventListener(`mouseout`, clearHover);

function fadingHover() {
  secondParagraph.classList.add("fade-out");
}

function clearHover() {
  secondParagraph.classList.remove("fade-out");
}*/

//----------------------------------------------------------------------------------//

/*// Exercise 2 : Work With Forms

// Instructions

//1. Retrieve the form and console.log it.

let formElement = document.body.firstElementChild;
console.log(formElement);

//--

//2. Retrieve the inputs by their id and console.log them.

let firstNameInput = document.getElementById(`fname`);
let lastNameInput = document.getElementById(`lname`);
let submitInput = document.getElementById(`submit`);

console.log(firstNameInput);
console.log(lastNameInput);
console.log(submitInput);

//--

//3. Retrieve the inputs by their name attribute and console.log them.

let firstNameInput2 = document.getElementsByName(`firstname`);
let lastNameInput2 = document.getElementsByName(`lastname`);

console.log(firstNameInput2);
console.log(lastNameInput2);

//--

// 4. When the user submits the form (ie. submit event listener)

//  a. use event.preventDefault(), why ?

formElement.addEventListener("submit", submitting);

function submitting(e) {
  e.preventDefault();

  //  b. get the values of the input tags,

  let firstName = firstNameInput.value.trim();
  let lastName = lastNameInput.value.trim();

  //  c. make sure that they are not empty,

  if (firstName && lastName) {
    //  d. create an li per input value,
    let ul = document.querySelector(".usersAnswer");
    ul.innerHTML = ""; // Clear previous entries if needed

    //  e. then append them to a the <ul class="usersAnswer"></ul>, below the form.

    let liFirstName = document.createElement("li");
    liFirstName.textContent = firstName;
    ul.appendChild(liFirstName);

    let liLastName = document.createElement("li");
    liLastName.textContent = lastName;
    ul.appendChild(liLastName);
  } else {
    alert("Both fields are required!");
  }
}*/

//----------------------------------------------------------------------------------//

/*// 🌟 Exercise 3 : Transform The Sentence
//Instructions

// 1. Declare a global variable named allBoldItems.

let allBoldItems;

//--

// 2. Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

let paragraph = document.querySelector("p");

function getBoldItems() {
  let boldItems = paragraph.querySelectorAll("strong");

  //all bold items to the allBoldItems variable
  allBoldItems = boldItems;
}

//--

// 3. Create a function called highlight() that changes the color of all the bold text to blue.

function highlight() {
  allBoldItems.forEach((item) => {
    item.style.color = "blue";
  });
}

//--

// 4. Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

function returnItemsToDefault() {
  allBoldItems.forEach((item) => {
    item.style.color = "black";
  });
}

getBoldItems();

//--

// 5. Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph)

paragraph.addEventListener("mouseover", highlight);

// Call the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph)

paragraph.addEventListener("mouseout", returnItemsToDefault);




//--*/

//----------------------------------------------------------------------------------//

//🌟 Exercice 4 : Volume Of A Sphere

//Instructions

// 1. Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

// this one is new for me, had to do a lot of reasearch but it basically means that we are making sure the DOM is fully loaded before the code runs, its a function that included all of our code below. we close it at the end of the code only.
document.addEventListener("DOMContentLoaded", function () {
  let myForm = document.getElementById("MyForm");

  myForm.addEventListener("submit", submitting);

  function submitting(e) {
    e.preventDefault();

    //here we are taking all the values and putting them inside variables, the last one we use trim() to make sure that there are not going to be white spaces/blank spaces.
    let radiusInput = document.getElementById("radius");
    let volumeInput = document.getElementById("volume");
    let radiusValue = radiusInput.value.trim();

    //this is for the next funtion to run
    let volume = calculateVolume(radiusValue);

    //if the volume variable is not blank, then its the proper value.
    if (volumeInput !== "") {
      document.getElementById("volume").value = volume;
    }
  }

  function calculateVolume(radius) {
    //makes sure the radius value is a number and not a string, it changes it to a string basically.
    let parsedRadius = parseFloat(radius);

    //quite simple, if the input is not a number or less then 0 or equal to 0, not good for us, alert the message to the user.
    if (isNaN(parsedRadius) || parsedRadius <= 0) {
      alert(
        "That's not a valid number. Please enter a positive number for the radius."
      );
      return null; // Return null for invalid input
    }

    //thats what I found so we can calculate the volume of a sphere
    let volume = (4 / 3) * Math.PI * Math.pow(parsedRadius, 3);
    return volume.toFixed(2);
  }
});
