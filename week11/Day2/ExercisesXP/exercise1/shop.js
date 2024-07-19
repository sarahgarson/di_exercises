//4. Create another file named shop.js.

//5. In shop.js, require the product objects from the products.js module.

const products = require("./products.js");

//6. Create a function that takes a product name as a parameter and searches for the corresponding product object.

function searchProduct(productName) {
  const product = products.find(
    (p) => p.name.toLowerCase() === productName.toLowerCase()
  );
  if (product) {
    return product;
  } else {
    return `Product with name "${productName}" not found sorry`;
  }
}

//7. Call this function with different product names and print the details of the products.

const productName = "Running Shoes";
const result = searchProduct(productName);
console.log(result);

//8. Run shop.js and verify that the correct product details are displayed.

//the output:

// sarahs-mbp:ExercisesXP sarahgarson$ node shop.js
// { name: 'Running Shoes', price: 590, category: 'Footwear' }
// sarahs-mbp:ExercisesXP sarahgarson$
