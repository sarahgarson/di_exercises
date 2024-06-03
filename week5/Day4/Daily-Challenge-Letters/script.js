//Daily Challenge : Show Only The Letters
// 1. Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// 2. Hint: use one of the following events to remove any character that is not a letter

// - keyup event
// - or keypress event
// - or keydown event
// - or input event

// Hint : Check out keycodes in Javascript or Regular Expressions

let inputElement = document.createElement(`input`);
inputElement.type = `text`;
inputElement.placeholder = `Please enter letters only to make out lives easier`;
document.body.appendChild(inputElement);

inputElement.addEventListener(`input`, function (e) {
  let inputValue = e.target.value;
  let checkedValue = ``;

  for (let i = 0; i < inputValue.length; i++) {
    let value = inputValue[i];
    if ((value >= `a` && value <= `z`) || (value >= `A` && value <= `Z`)) {
      checkedValue += value;
    } else {
      alert(
        `No you need to write only letter and absolutly nothing else :)!!!!!!!`
      );
    }
  }
  e.target.value = checkedValue;
});
