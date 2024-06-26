// Instructions

// Using this object :

let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// 1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};

displayGroceries();

// 2. Create another arrow function named cloneGroceries.

// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

const cloneGroceries = () => {
  // In the function, create a variable named user that is a copy of the client variable.
  let user = client;

  // Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
  client = "Betty";

  console.log(user);
  console.log(client);
  //doesnt change the user variable,primitive types like strings are passed by value, so changing 'client' doesnt affect 'user'.

  // In the function, create a variable named shopping that is equal to the groceries variable.
  let shopping = { ...groceries };

  // Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
  shopping.totalPrice = "35$";

  console.log(shopping.totalPrice);
  console.log(groceries.totalPrice);

  //doesnt change the value of groceries, since objects are passed by reference in js, modifying 'shopping' doesnt affect 'groceries' at all.

  // Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

  shopping.other.paid = false;

  console.log(shopping.other.paid);
  console.log(groceries.other.paid);
  //nested objects are passed by reference, so modifying 'shopping' also modifies 'groceries'.
};

// 3. Invoke the cloneGroceries function.

cloneGroceries();
