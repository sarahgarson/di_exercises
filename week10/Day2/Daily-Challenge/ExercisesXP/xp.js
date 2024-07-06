// 🌟 Exercise 1 : Comparison

// Instructions

//1.  Create a function called compareToTen(num) that takes a number as an argument.

function compareToTen(num) {
  //2.  The function should return a Promise:

  return new Promise((resolve, reject) => {
    //a. the promise resolves if the argument is less than or equal to 10

    if (num <= 10) {
      resolve(`Yep yep, thats good! The number is ${num}`);

      //b. the promise rejects if argument is greater than 10.
    } else {
      reject(`Nah no no no, not good! The number is ${num}`);
    }
  });
}

compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(result));

compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//--------------------------------------------------------//

//   🌟 Exercise 2 : Promises

// Instructions

// Create a promise that resolves itself in 4 seconds and returns a “success” string.

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }),
    4000;
});

promise.then((message) => {
  console.log(message);
});

// 🌟 Exercise 3 : Resolve & Reject

// Instructions

// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.

const promiseResolve = Promise.resolve(3);

promiseResolve
  .then((value) => {
    console.log("Resolved values:" + value);
  })
  .catch((error) => {
    console.log("Errorrrrr:" + error);
  });

// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promiseReject = Promise.reject("Boo!");

promiseReject
  .then((value) => {
    console.log(`Rejected values:` + value);
  })
  .catch((error) => {
    console.log("Errrorrr:" + error);
  });
