//Exercise 1 : Is_Blank

//Instructions

//Write a program to check whether a string is blank or not.

//console.log(isBlank('')); --> true
//console.log(isBlank('abc')); --> false

function blank(string) {
  if (string.trim().length === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

blank("hello there");
blank("");
blank("  ");

// Exercise 2 : Abbrev_name

//Instructions

//Write a JavaScript function to convert a string into an abbreviated form.

//console.log(abbrevName("Robin Singh")); --> "Robin S."

function abbrevName(name) {
  let nameParts = name.trim().split(" ");

  let firstName = nameParts[0];
  let lastName = nameParts[nameParts.length - 1];

  let initialLastName = lastName.charAt(0).toUpperCase();

  let abbreviatedName = `${firstName} ${initialLastName}.`;

  return abbreviatedName;
}

console.log(abbrevName(`Sarah Garson`));

// Exercise 3 : SwapCase

// Instructions

// Write a JavaScript function which takes a string as an argument and swaps the case of each character.

/*For example :

if you input 'The Quick Brown Fox' 
the output should be 'tHE qUICK bROWN fOX'.*/

function swapCases(string2) {
  let upperCases = "";

  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];

    if (letter === letter.toUpperCase()) {
      upperCases += letter.toLowerCase();
    } else {
      upperCases += letter.toUpperCase();
    }
  }

  return upperCases;
}

let test = `Hello There`;

console.log(swapCases(test));

// Exercise 4 : Omnipresent Value

// Instructions

// 1. Create a function that determines whether an argument is omnipresent for a given array.
//A value is omnipresent if it exists in every subarray inside the main array.
//To illustrate:

/*[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.

Examples

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false*/

function omnipresent(array, val) {
  for (let subarray of array) {
    if (!subarray.includes(val)) {
      return false;
    }
  }

  return true;
}

let array1 = [
  [1, 2],
  [2, 2],
  [2, 5],
  [2, 7],
  [2, 10],
];

let val1 = 2;
console.log(omnipresent(array1, val1));

let array2 = [
  [1, 1],
  [2, 3],
  [4, 4],
  [5, 5],
  [6, 6],
];

let val2 = 1;
console.log(omnipresent(array2, val2));
