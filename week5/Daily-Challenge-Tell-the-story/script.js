//Instructions

//In todays exercise we will be creating a Mad Libs game.

//If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

//In this exercise you work with the HTML code presented below.

//Follow these steps :

// 1. Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()

document.addEventListener(`DOMContentLoaded`, function () {
  let form = document.getElementById(`libform`);

  form.addEventListener(`submit`, displayStory);

  function displayStory(e) {
    e.preventDefault();

    // NEW THINGY FOR US: try... catch block!! it helps us wrap an error if it occurs, catch catches the error and logged to the console and an alert is shown to the user! actually pretty cool.

    try {
      let noun = document.getElementById(`noun`).value.trim();
      let adjective = document.getElementById(`adjective`).value.trim();
      let person = document.getElementById(`person`).value.trim();
      let verb = document.getElementById(`verb`).value.trim();
      let place = document.getElementById(`place`).value.trim();

      // 2. Make sure the values are not empty

      if (!noun || !adjective || !person || !verb || !place) {
        alert(
          `Heyyy nooo, these are empty, can you please fill them up to I dont get sad?`
        );
        return;
      }

      let story = document.getElementById(`story`);

      // 3. Write a story that uses each of the values.
      story.textContent = `Once upon a time in a ${adjective} ${place}, there was a ${noun} who loved to ${verb} with ${person}.`;
      // 4. Make sure you check the console for errors when playing the game. thats the try..catch I used
    } catch (error) {
      console.error("An error occurred:", error.message);
      alert("We have an error! Please check the console for details.");
    }

    // 5. Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

    let shuffleButton = document.createElement(`button`);

    shuffleButton.textContent = `shuffle button`;
    shuffleButton.id = `shuffle-button`;

    shuffleButton.addEventListener(`click`, shuffle);

    document.body.appendChild(shuffleButton);

    let storyTemplates = [
      "Once upon a time, a [adjective] [noun] met [person] in [place]. They decided to [verb] together.",
      "There was a [adjective] [noun] who lived in [place]. One day, they met [person] and they decided to [verb] together.",
      "In [place], there was a [adjective] [noun]. [person] came along and they decided to [verb] together.",
    ];

    function generateRandomStory() {
      let randomIndex = Math.floor(Math.random() * storyTemplates.length);
      let randomStory = storyTemplates[randomIndex];
      return randomStory;
    }

    function shuffle() {
      let randomStory = generateRandomStory();

      let noun = document.getElementById(`noun`).value.trim();
      let adjective = document.getElementById(`adjective`).value.trim();
      let person = document.getElementById(`person`).value.trim();
      let verb = document.getElementById(`verb`).value.trim();
      let place = document.getElementById(`place`).value.trim();

      randomStory = randomStory.replace("[noun]", noun);
      randomStory = randomStory.replace("[adjective]", adjective);
      randomStory = randomStory.replace("[person]", person);
      randomStory = randomStory.replace("[verb]", verb);
      randomStory = randomStory.replace("[place]", place);

      let story = document.getElementById(`story`);
      story.textContent = randomStory;
    }
  }
});

//little bug where not all the words are correctly changed to their right place.
