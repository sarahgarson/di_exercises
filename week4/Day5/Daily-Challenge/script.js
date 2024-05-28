//Instructions

/*Have you heard the infamous song “99 Bottles of Beer?”
In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.

==============================
Example
==============================

99 bottles of beer on the wall
99 bottles of beer
Take 1 down, pass it around
98 bottles of beer on the wall

98 bottles of beer on the wall
98 bottles of beer
Take 2 down, pass them around
96 bottles of beer on the wall

96 bottles of beer on the wall
96 bottles of beer
Take 3 down, pass them around
93 bottles of beer on the wall

ect …

==============================*/

//1. Prompt the user for a number to begin counting down bottles.

let userNumber = prompt(
  `Hello thereeee!! Could you please enter a number for me? Thankssss!`
);
userNumber = parseInt(userNumber);

//----------------------------------------------------------------------------//

//4. Note : Make sure you get the grammar correct.

//For 1 bottle, you pass “it” around.
//For more than one bottle, you pass “them” around.

function pronounsItThem(number) {
  return number === 1 ? "it" : "them";
}

function pluralOrNot(number) {
  return number === 1 ? "bottle" : "bottles";
}

//----------------------------------------------------------------------------//

/* 2. In the song, everytime a bottle drops,
the subtracted number should go up by 1.// <-- you meant down?
For example,

    We start the song at 99 bottles
    -> Take _1_ down, pass it around
    -> we have now 98 bottles

    -> then, Take _2_ down, pass them around
    -> we have now 96 bottles

    -> then, Take _3_ down, pass them around
    -> we have now 93 bottles

    ... ect*/

//3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.

function song(number) {
  if (number === 0) {
    console.log(`No bottle of beer on the wall`);
  } else {
    let bottles = pluralOrNot(number);
    let nextBottles = pluralOrNot(number - 1);
    let pronouns = pronounsItThem(number);
    let nextBottlesPronouns = pronounsItThem(number - 1);

    console.log(`${number} ${bottles} of beer on the wall`);
    console.log(`${number} ${bottles} of beer`);
    console.log(
      `Take ${number === 1 ? "it" : "one"} down, pass ${pronouns} around`
    );
    console.log(`${number - 1} ${nextBottles} of beer on the wall.`);
  }
}

for (let i = userNumber; i >= 0; i--) {
  song(i);
}
