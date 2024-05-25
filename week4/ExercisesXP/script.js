//🌟 Exercise 1 : Information

//Instructions

// Part I : function with no parameters

// 1. Create a function called infoAboutMe() that takes no parameter.

// 2. The function should console.log a sentence about you (ie. your name, age, hobbies ect…).

function infoAboutMe() {
  console.log(
    "Hey There, my name is Sarah, I am 22 years old and I love to surf"
  );
}

//3. Call the function.

infoAboutMe();

// Part II : function with three parameters

// 1. Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.

// 2. The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    `Hello There my name is ${personName}, I am ${personAge} and my favorite color is ${personFavoriteColor}`
  );
}

// 3. Call the function twice with the following arguments:

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// 🌟 Exercise 2 : Tips

// Instructions

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// 1. Create a function named calculateTip() that takes no parameter.
// 2. Inside the function, use prompt to ask John for the amount of the bill.

// 3. Here are the rules

function calculateTip() {
  let bill = prompt(
    "Hey John, could you tell us the amount of the bill please? Thanksss"
  );
  bill = Number(bill);

  let tip;

  //If the bill is less than $50, tip 20%.
  if (bill < 50) {
    tip = bill * 0.2;
  }

  //If the bill is between $50 and $200, tip 15%.
  else if (50 <= bill && bill <= 200) {
    tip = bill * 0.15;
  }

  //If the bill is more than $200, tip 10%.
  else {
    tip = bill / 10;
  }

  let finalBillWithTip = bill + tip;

  console.log(`The tip is: ${tip}`);
  console.log(`The final bill is: ${finalBillWithTip}`);
}

// 4. Console.log the tip amount and the final bill (bill + tip).

// 5. Call the calculateTip() function.

calculateTip();

// 🌟 Exercise 3 : Find The Numbers Divisible By 23

//Instructions

// 1. Create a function call isDivisible() that takes no parameter.

// 2. In the function, loop through numbers 0 to 500.

// 3. Console.log all the numbers divisible by 23.

function isDivisible() {
  let sum = 0;

  for (i = 0; i < 501; i++) {
    if (i % 23 === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log(`sum: ${sum}`);
}

// 4. At the end, console.log the sum of all numbers that are divisible by 23.

/*Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313*/

isDivisible();

// 5. Bonus: Add a parameter divisor to the function.

/*Example:
isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
isDivisible(45) : Console.log all the numbers divisible by 45, and their sum*/

function isDivisible2(divisor) {
  let sum = 0;

  for (i = 0; i < 501; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log(`sum: ${sum}`);
}

isDivisible2(5);

// 🌟 Exercise 4 : Shopping List

// Instructions

// 1. Add the stock and prices objects to your js file.

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

// 2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

let shoppingList = ["banana", "orange", "apple"];

// 3. Create a function called myBill() that takes no parameters.

// 4. The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// a. The item must be in stock. (Hint : check out if .. in)
// b. If the item is in stock find out the price in the prices object.

// 6. Bonus: If the item is in stock, decrease the item’s stock by 1

function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item] -= 1;
    } else {
      console.log(`No ${item}s available at the moment`);
    }
  }

  return total;
}

// 5. Call the myBill() function.

let billTotal = myBill();

// 6. TOGETHER ABOVE WITH FUNCTION, ADDED AFTER NO. 4

console.log(stock);

//Exercise 5 : What’s In My Wallet ?

//Instructions

//Note: Read the illustration (point 4), while reading the instructions

// 1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// a. an item price
// b. and an array representing the amount of change in your pocket.

// 2. In the function, determine whether or not you can afford the item.
// a. If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// b. If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// 3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
/*A quarters is 0.25
A dimes is 0.10
A nickel is 0.05
A penny is 0.01*/

function changeEnough(itemPrice, amountOfChange) {
  let sum = 0;

  //3. adding the coin values organized before the for loop to calculate the sum already with quarter,dime,nickel and penny:
  let coinValues = [0.25, 0.1, 0.05, 0.01];

  for (let i = 0; i < amountOfChange.length; i++) {
    //2 - calculating the sum:
    sum += amountOfChange[i] * coinValues[i];
  }

  // 2 a. - if bigger or equal: true!

  if (sum >= itemPrice) {
    console.log(true);

    // 2 b. - if not: false!
  } else {
    console.log(false);
  }

  return sum;
}

changeEnough(4.25, [25, 20, 5, 0]);

// 🌟 Exercise 6 : Vacations Costs

// Instructions

//Let’s create functions that calculate your vacation’s costs:

// 1. Define a function called hotelCost().

// a. It should ask the user for the number of nights they would like to stay in the hotel.
// b. If the user doesn’t answer or if the answer is not a number, ask again.
// c. The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost(numberOfNights) {
  //let sum = 0;
  let totalPerNight = 140;

  /*let numberOfNights = prompt(
    `Please insert the number of nights you would like to stay with us`
  );

  if (!isNaN(numberOfNights) && numberOfNights > 0) {
    sum += totalPerNight * numberOfNights;
    console.log(
      `We got your reservation! The total amount will be $${sum} , thank you and see you soon! `
    );
  } else {
    console.log(`Please enter again, remember entering a number`);
  }*/

  return totalPerNight * numberOfNights;
}

//hotelCost();

// 2. Define a function called planeRideCost().
// a. It should ask the user for their destination.
// b. If the user doesn’t answer or if the answer is not a string, ask again.
// c. The function should return a different price depending on the location.
//  I - “London”: 183$
//  II- “Paris” : 220$
//  III - All other destination : 300$

function planeRideCost(destination) {
  //let destination;
  let cost;

  /*while (true) {
    destination = prompt("Hello There! Where would you like to go?");

    if (typeof destination === "string" && destination.trim() !== "") {
      break;
    } else {
      alert("Please enter a valid destination.");
    }
  }*/

  switch (destination.toLowerCase()) {
    case "london":
      cost = 183;

      break;
    case "paris":
      cost = 220;

      break;
    default:
      cost = 300;
  }

  return cost;
}

//let price = planeRideCost();
//console.log(`The cost of your plane ride is $${price}.`);

// 3. Define a function called rentalCarCost().
// a. It should ask the user for the number of days they would like to rent the car.
// b. If the user doesn’t answer or if the answer is not a number, ask again.
// c. Calculate the cost to rent the car. The car costs $40 everyday.
//  I - If the user rents a car for more than 10 days, they get a 5% discount.
// d. The function should return the total price of the car rental.

function rentalCarCost(daysToRent) {
  //let sum = 0;
  let oneDay = 40;

  /*while (true) {
    daysToRent = prompt(
      `Hey there mate! For how many days would you like to rent this amazing car?`
    );

    if (!isNaN(daysToRent) && daysToRent > 0) {
      break;
    } else {
      console.log(`Please enter again, remember entering a number`);
    }
  }*/

  let sum = oneDay * daysToRent;

  if (daysToRent > 10) {
    sum *= 0.95;
  }

  return sum;
}

//let total = rentalCarCost();
/*console.log(
  `We got your reservation! The total amount will be $${total} , thank you and enjoy your car! `
);*/

// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// 6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

function totalVacationCost() {
  let numberOfNights;
  let destination;
  let daysToRent;

  while (true) {
    numberOfNights = prompt(
      `Please insert the number of nights you would like to stay with us`
    );
    if (!isNaN(numberOfNights) && numberOfNights > 0) {
      break;
    } else {
      console.log(`Please enter again, remember entering a number`);
    }
  }

  while (true) {
    destination = prompt("Hello There! Where would you like to go?");

    if (typeof destination === "string" && destination.trim() !== "") {
      break;
    } else {
      alert("Please enter a valid destination.");
    }
  }

  while (true) {
    daysToRent = prompt(
      `Hey there mate! For how many days would you like to rent this amazing car?`
    );

    if (!isNaN(daysToRent) && daysToRent > 0) {
      break;
    } else {
      console.log(`Please enter again, remember entering a number`);
    }
  }

  let hotelTotalCost = hotelCost(numberOfNights);
  let planeTotalCost = planeRideCost(destination);
  let carTotalCost = rentalCarCost(daysToRent);

  const totalOfEverything = hotelTotalCost + planeTotalCost + carTotalCost;

  console.log(`The car cost: $${carTotalCost}`);
  console.log(`The hotel cost: $${hotelTotalCost}`);
  console.log(`The plane tickets cost: $${planeTotalCost}`);

  console.log(`Here is the total for your vacation: $${totalOfEverything}`);

  return totalOfEverything;
}

// 5. Call the function totalVacationCost()

totalVacationCost();
