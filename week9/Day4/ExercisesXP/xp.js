// 🌟 Exercise 3 : JSON Mario

// Instructions

// Using this code:

const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

//1. Convert this JS object into a JSON object. What happens to the nested objects ?

const jsonObject = JSON.stringify(marioGame);

console.log(jsonObject);

//they are automatically converted because JSON support nested objects :)

//2. Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.

const jsonObject2 = JSON.stringify(marioGame, null, 2);

console.log(jsonObject2);

//3. Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
//added breakpoint and checked out debugger showed jsonObject and jsonObject2 which are the above which the right objects
