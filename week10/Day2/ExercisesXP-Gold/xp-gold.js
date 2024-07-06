// Exercise 1 : Promise.All()

// Instructions

//1. Use the Promise.all that will accept the 3 promises below.
// The method should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });

//Explanation of how Promise.all works:

// Promise.all takes an array of promises as an input, then it returns a single Promise that resolves when all of the promises in the iterable argument were resolved, or rejects with the reason of the first promise that rejects.
//so all promises are consoled.

// Exercise 2 : Analyse Promise.All()

// Instructions

// Analyse the code below - what will be the output ?

function timesTwoAsync(x) {
  return new Promise((resolve) => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr).then((result) => {
  console.log(result);
});

//my answer: 2,4,6
//right answer: [2, 4, 6]
