//6. Create a file named app.js in the same directory.

//7. In app.js, require the lodash package and the custom math module.

const package = require("lodash");
const math = require("./math.js");

//8. Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.

const sumAdd = math.addition(5, 5);
const sumMulti = math.multiply(5, 5);

const resultAdd = package.startCase(package.toLower(`Sum is ${sumAdd}`));
const resultMuilt = package.startCase(
  package.toLower(`Product is ${sumMulti}`)
);

console.log(resultAdd);
console.log(sumMulti);

//Run app.js using Node.js and verify that the calculations are correct.

//output:

// sarahs-mbp:math-app sarahgarson$ node app.js
// Sum Is 10
// 25
// sarahs-mbp:math-app sarahgarson$
