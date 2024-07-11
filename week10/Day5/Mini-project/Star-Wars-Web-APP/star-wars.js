// What You Will Create

// Star Wars Web App Using AJAX API

// In this project you will have to build a single page application that uses AJAX to retrieve information and display it on your website as follows:

// Instructions

// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// 1. Create your HTML file, and add the relevant elements.

//2.  In your JS file, create your functions :

// 3.  Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message:

//1.  to retrieve the elements from the DOM.

document
  .getElementById("find-character")
  .addEventListener("click", getRandomCharacter);

function getRandomCharacter() {
  const characterInfoDiv = document.getElementById("character-info");
  characterInfoDiv.innerHTML =
    //couldnt get the spinner to work from font awesome: (NEVER MIND JUST FORGOT TO ADD THE FONT AWESOME LINK TO THE HTML FILE)
    '<div class="loading"><i class="fa-solid fa-spinner fa-spin"></i> Loading...</div>';

  // randomId is a random number between 1 and 82, representing the range of character IDs available in the API, from the total_records that appear in it

  // apiUrl is constructed using this random ID to fetch data for a specific character.

  const randomId = Math.floor(Math.random() * 82) + 1; // There are 82 characters in the API
  const apiUrl = `https://www.swapi.tech/api/people/${randomId}`;

  //b. to get the data from the API (star wars characters).

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const character = data.result.properties;
      return fetch(character.homeworld)
        .then((response) => response.json())
        .then((homeworldData) => {
          character.homeworld = homeworldData.result.properties.name;
          displayCharacterInfo(character);
        });
    })
    // If there is an error getting the data, display a message as follows:
    .catch((error) => {
      characterInfoDiv.innerHTML =
        '<div class="error">Error retrieving data</div>';
      console.error("Error:", error);
    });
}

//c. to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

function displayCharacterInfo(character) {
  const characterInfoDiv = document.getElementById("character-info");
  characterInfoDiv.innerHTML = `
    <h2>${character.name}</h2>
    <p>Height: ${character.height}</p>
    <p>Gender: ${character.gender}</p>
    <p>Birth Year: ${character.birth_year}</p>
    <p>Home World: ${character.homeworld}</p>
  `;
}
