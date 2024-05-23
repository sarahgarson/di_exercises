//Exercise 1 : Checking The BMI

//Instructions

//Hint:
//- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// 1. Create two objects, each object should hold a person’s details. Here are the details:
// a. FullName
// b. Mass
// c.Height

let jack = {
  fullName: "Jack Jackson",
  mass: 85,
  height: 185,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

let anna = {
  fullName: "Anna Klark",
  mass: 55,
  height: 165,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

// 2. Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// 3. Outside of the objects, create a JS function that compares the BMI of both objects.

// 4. Display the name of the person who has the largest BMI.
