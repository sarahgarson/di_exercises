//4. Create another file named app.js.

//5. In app.js, import the array of person objects from the data.js module.

import people from "./data.js";

// 6. Write a function that calculates and prints the average age of all the persons in the array.

function avarage() {
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  const avarageAge = totalAge / people.length;

  console.log(`The avarage of them all is ${avarageAge.toFixed(2)} years `);
}

avarage();

// Run app.js and confirm that the average age is correctly calculated and displayed.

//output:

// sarahs-mbp:exercise2 sarahgarson$ node app.js
// The avarage of them all is 30.00 years
// sarahs-mbp:exercise2 sarahgarson$
