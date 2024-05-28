// First Part

// 1. Create a JS file and link it to the index.html file.

// 2. Take a look at your html file, you should have a button with an “onclick” event. This event is equal to the function playTheGame(). It means that when you will click on the button, the function playTheGame() will be called.
//We will learn more about events next week ;)

// Now let’s create the function:

// 3. In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

// a. If the answer is false, alert “No problem, Goodbye”.

// b. If his answer is true, follow these steps:

// I - Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

//  - If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
//  - If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
//  - Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.

/*function playTheGame() {
  let confirmation = confirm("Hey there, would you like to play a game");

  // a. If the answer is false, alert “No problem, Goodbye”.
  if (confirmation === false) {
    alert(`No problem, Goodbye`);
    return;
  }

  // b. If his answer is true, follow these steps:
  // I - Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :
  let userNumber = prompt(
    `Yay amazing!! So lets get it started: please enter a number from 0 to 10`
  );
  userNumber = parseFloat(userNumber);

  //  - If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”:
  if (isNaN(userNumber)) {
    alert(`Sorry not a number, Goodbye...`);
    return;

    //  - If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”:
  } else if (userNumber < 0 || userNumber > 10) {
    alert("Sorry it's not a good number, Goodbye...");
    return;

    //  - Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded:
  } else {
    let computerNumber = Math.floor(Math.random() * 11);
    compareNumbers(userNumber, computerNumber);
  }
}

playTheGame();*/

// Second Part

//1. Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

// 2. The point of this function is to check if the userNumber is the same as the computerNumber:

//   a. If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

//   b. If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

//   c. If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

//   d. If the user guessed more than 3 times, alert “out of chances” and exit the function.

function compareNumbers(userNumber, computerNumber) {
  let attempts = 0;

  while (attempts < 2) {
    //   a. If userNumber is equal to computerNumber, alert “WINNER” and stop the game.
    if (userNumber === computerNumber) {
      alert(`WINNER!!`);
      return;

      //   b. If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).
    } else if (userNumber > computerNumber) {
      alert(`Your number is bigger then the computer's, guess again`);
      userNumber = prompt(`Please try again: enter a new number from 0 to 10`);
    } else if (userNumber < computerNumber) {
      alert(`Your number is smaller then the computer’s, guess again`);
      userNumber = prompt(`Please try again: enter a new number from 0 to 10`);
    }

    if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
      alert("Sorry, it's not a good number, Goodbye...");
      return;
    }

    attempts++;
  }
  alert(`Out of chances!`);
}

playTheGame();

//Bonus

//In the First Part, instead of stopping the process if the user didn’t enter a valid number. Continue asking for a number until the user enters a valid number.

function playTheGame() {
  let confirmation = confirm("Hey there, would you like to play a game");

  if (confirmation === false) {
    alert(`No problem, Goodbye`);
    return;
  }

  let userNumber;

  while (true) {
    userNumber = prompt(
      `Yay amazing!! So lets get it started: please enter a number from 0 to 10`
    );
    userNumber = parseFloat(userNumber);

    if (isNaN(userNumber)) {
      alert(`Sorry not a number, please try again...`);
    } else if (userNumber < 0 || userNumber > 10) {
      alert("Sorry it's not a good number, please try again...");
    } else {
      break;
    }
  }

  let computerNumber = Math.floor(Math.random() * 11);
  compareNumbers(userNumber, computerNumber);
}
