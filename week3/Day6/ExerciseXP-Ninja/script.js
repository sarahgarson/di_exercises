//Exercise 1 : Checking The BMI

//Instructions

//Hint:
//- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// 1. Create two objects, each object should hold a person’s details. Here are the details:
// a. FullName
// b. Mass
// c.Height

// 2. Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person.

let jack = {
  fullName: "Jack Jackson",
  mass: 85,
  height: 1.85,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

let anna = {
  fullName: "Anna Klark",
  mass: 55,
  height: 1.65,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

// 3. Outside of the objects, create a JS function that compares the BMI of both objects.

// 4. Display the name of the person who has the largest BMI.

function compareBMI(personA, personB) {
  let bmiA = personA.calcBMI();
  let bmiB = personB.calcBMI();

  if (bmiA > bmiB) {
    console.log(
      `${personA.fullName}'s BMI is ${bmiA.toFixed(2)} and the highest.`
    );
  } else if (bmiA < bmiB) {
    console.log(
      `${personB.fullName}'s BMI is ${bmiB.toFixed(2)} and the highest.`
    );
  } else {
    console.log(
      `${personA.fullName} and ${
        personB.fullName
      } have the same BMI (${bmiA.toFixed(2)}).`
    );
  }
}

compareBMI(jack, anna);

// Exercise 2 : Grade Average

// Hint:
//- This Exercise is trickier then the others. You have to think about its structure before you start coding.
//- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// 1. Create a function called findAvg(gradesList) that takes an argument called gradesList.

// 2. Your function must calculate and console.log the average.

// 3. If the average is above 65 let the user know they passed

// 4. If the average is below 65 let the user know they failed and must repeat the course.
//Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
//Hint One function must call the other.

function calculateAverage(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  let average = sum / gradesList.length;
  return average;
}

function checkPassOrFail(average) {
  if (average > 65) {
    console.log(`The average is ${average}. You passed!`);
  } else {
    console.log(
      `The average is ${average}. You failed and must repeat the course.`
    );
  }
}

function findAvg(gradesList) {
  let average = calculateAverage(gradesList);
  checkPassOrFail(average);
}

let grades = [76, 85, 92, 55, 64];
findAvg(grades);
