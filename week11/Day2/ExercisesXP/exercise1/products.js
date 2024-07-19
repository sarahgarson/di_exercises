// 🌟 Exercise 1: Multiple Exports And Import Using CommonJS Syntax

//1. Create a file named products.js.

//2. Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

const products = [
  {
    name: "Smartphone",
    price: 2500,
    category: "Electronics",
  },
  {
    name: "Running Shoes",
    price: 590,
    category: "Footwear",
  },
  {
    name: "Sunglasses",
    price: 200,
    category: "Accessories",
  },
  {
    name: "Coffee Maker",
    price: 800,
    category: "Home Appliances",
  },
];

//3. Export this array using the Common JS syntax.

module.exports = products;
