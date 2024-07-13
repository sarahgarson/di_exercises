// 🌟 Exercise 1 : Giphy API

// Instructions

// With your knewly accumulated knowledge of the Fetch API lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

//1.  Create a program to retrieve the data from the API URL provided above.

// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.

// Make sure to check the status of the Response and to catch any occuring errors.

const apiUrl =
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

//We use the fetch() method to make a GET request to the Giphy API URL.

fetch(apiUrl)
  .then((response) => {
    //We check the response status, and if it's not ok, we throw an error.
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    //If the response is successful, we parse the JSON data and log it in the console.
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  //but anywaysss any errors that occur during the fetch process are caught and logged to the console ( and also to close up the fetch)
  .catch((error) => {
    console.error("error fetching data", error);
  });

//------------------------------------------------------------------//

// 🌟 Exercise 2 : Giphy API

// Instructions

//1. Read carefully the documention to understand all the possible queries that the URL accept.

//2. Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.

// Make sure to check the status of the Response and to catch any occuring errors.

//3. Console.log the Javascript Object that you receive.

// girf URL with the parameters from developers giphy Search Endpoint:api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

const apiUrl2 =
  "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(apiUrl2)
  .then((response) => {
    if (!response.ok) {
      throw new Error("error retrieving data");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("This specific error appeared:", error);
  });

//--------------------------------------------------------------------//

// 🌟 Exercise 3 : Async Function

// Instructions

// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

//1. Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.

//2. Make sure to check the status of the Response and to catch any occuring errors.

async function starWars() {
  try {
    const url = "https://www.swapi.tech/api/starships/9/";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not good");
    }

    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
  } catch (error) {
    console.log("We found this error:", error);
  }
}

starWars();

//--------------------------------------------------------------------//

// 🌟 Exercise 4: Analyze

// Instructions

// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

//my answer: first the resolveAfter2Seconds function will apear in the console and then the async function will show 'calling' since its awaiting for the promise to be resolved after 2000 mili seconds.

//right answer: calling appears imidiatly and then after 2000 miliseconds the await function is resolved.
