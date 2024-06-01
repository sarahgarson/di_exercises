//Exercise 1 : Select A Kind Of Music

//Instructions

//1. Display the value of the selected option.

/*let selectedOption =
  document.body.firstElementChild.firstElementChild.nextElementSibling;

let selectedOptionValue = selectedOption.value;

console.log(selectedOptionValue);

//--

// 2. Add an additional option to the select tag:

// <option value="classic">Classic</option>

let selectAll = document.getElementById("genres");

let newOption = document.createElement(`option`);

newOption.value = `classic`;
newOption.textContent = `Classic`;

selectAll.appendChild(newOption);

//--

// 3. The newly added option should be selected by default.

newOption.selected = true;*/

//----------------------------------------------------------------------------------//
// Exercise 2: Delete Colors

// Instructions

// 1. Add a click event listener to the <input type="button">. When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list.

/*let inputTypeButton = document.querySelector(`input`);

inputTypeButton.addEventListener(`click`, removecolor);

function removecolor() {
  let select = document.getElementById(`colorSelect`);
  let selectedColor = select.options[select.selectedIndex];
  select.removeChild(selectedColor);
}*/

//----------------------------------------------------------------------------------//

// Exercise 3 : Create A Shopping List
//Instructions
//For this exercise, you need to work on your js file.
//The one and only element on your HTML file should be:

//<div id="root"></div>

//In your js file:

//1. Create an empty array. For example: let shoppingList=[].

document.addEventListener(`DOMContentLoaded`, function () {
  let shoppingList = [];
  // 2. Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.

  let form = document.createElement(`form`);

  let textInput = document.createElement(`input`);
  textInput.type = `text`;
  textInput.id = `formField`;

  let addButton = document.createElement(`button`);
  addButton.textContent = `Add Item`;
  addButton.type = `button`;
  let listContainer = document.createElement("ul");

  form.appendChild(textInput);
  form.appendChild(addButton);

  let rootDiv = document.getElementById("root");
  rootDiv.appendChild(form);
  rootDiv.appendChild(listContainer);

  // 3. Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).

  addButton.addEventListener("click", addItem);

  function addItem() {
    let item = textInput.value.trim();
    if (item) {
      shoppingList.push(item);
      updatedList();
      textInput.value = ``;
      textInput.focus();
    }
  }

  // 4. Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).

  let clearButton = document.createElement("button");
  clearButton.type = "button";
  clearButton.textContent = "Clear All";

  clearButton.addEventListener(`click`, clearAll);

  form.appendChild(clearButton);

  // 5. Create a function named clearAll() that should clear out all the items in the shopping list

  function clearAll() {
    shoppingList = [];
    updatedList();
  }

  function updatedList() {
    listContainer.innerHTML = ``;
    shoppingList.forEach((item, index) => {
      let listItems = document.createElement(`li`);
      listItems.textContent = item;
      listContainer.appendChild(listItems);
    });
  }
});
