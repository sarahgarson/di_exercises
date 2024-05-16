//Exercise 1 : The World Translator

//Instructions

//Hint: Use Switch Case

// 1. Ask the user which language they speak.

let language = prompt("What language do you speak?");

// 2. Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

let answer = language.toLowerCase();

// 3. Create a few conditions :

// a. If the user speaks French : display “Bonjour”

switch (answer) {
  case "french":
    console.log("Bonjour");
    break;

  // b. If the user speaks English : display “Hello”
  case "english":
    console.log("Hello");
    break;
  // c. If the user speaks Hebrew : display “Shalom”
  case "hebrew":
    console.log("Shalom");
    break;
  // d. If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
  default:
    console.log("01110011 01101111 01110010 01110010 01111001");
}

// Exercise 2 : The Grade Assigner

//Instructions

// 1. Ask the user for their grade.

let grade = prompt("What grade did you get?");

// 2.  If the grade is bigger than 90, console.log “A”

if (grade > 90) {
  console.log("A");
}

// 3. If the grade is between 80 and 90 (included), console.log “B”
else if (grade > 80 && grade <= 90) {
  console.log("B");
}

// 4. If the grade is between 70(included) and 80 (included), console.log “C”
else if (grade >= 70 && grade <= 80) {
  console.log("C");
}

// 5. If the grade is lower than 70, console.log “D”
else {
  console.log("D");
}

// Exercise 3 : Verbing

// Instructions

// 1. Prompt the user for a string. It must be a verb.

let verb = prompt("add your favorite verb");

// 2. If the length of the string is at least 3 and the string doesn’t end with “ing”, add “ing” to the end of the string.

if (verb.length >= 3 && !verb.endsWith("ing")) {
  console.log(verb + "ing");
}

// 3. If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
else if (verb.length >= 3 && verb.endsWith("ing")) {
  console.log(verb + "ly");
}

// 4. If the length of the string is less than 3, leave it unchanged.
else {
  console.log(verb);
}
