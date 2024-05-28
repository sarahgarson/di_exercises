//Instructions

//In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
//We will provide the HTML page.
//You only have to work with a JS file.

// 1. Create an array which value is the planets of the solar system.

let planets = [
  `Earth`,
  `Mars`,
  `Uranus`,
  `Jupiter`,
  `Neptune`,
  `Mercury`,
  `Saturn`,
  `Venus`,
];

// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".

// 3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).

let arrayOfColors = [
  "blue",
  "red",
  "lightblue",
  "orange",
  "darkblue",
  "gray",
  "yellow",
  "lightgreen",
];

// 4. Finally append each div to the <section> in the HTML (presented below).

let moons = [1, 2, 5, 79, 14, 0, 62, 0];

let listPlanetsSection = document.querySelector(".listPlanets");

planets.forEach((planet, index) => {
  let planetDiv = document.createElement("div");

  planetDiv.className = "planet";

  planetDiv.style.backgroundColor = arrayOfColors[index];

  listPlanetsSection.appendChild(planetDiv);

  // 5. Bonus: Do the same process to create the moons.

  // Be careful, each planet has a certain amount of moons. How should you display them?

  // Should you still use an array for the planets ? Or an array of objects ?

  let moonCountDiv = document.createElement("div");
  moonCountDiv.className = "moon-count";
  moonCountDiv.textContent = `Moons: ${moons[index]}`;
  planetDiv.appendChild(moonCountDiv);
});
