// Instructions

//1. Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

//2. In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.

//3. In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).

//4. The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.

//5. Allow the user to delete a specific gif by clicking the DELETE button.

//6. Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

//3.
const api = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gifForm");
const container = document.getElementById("gifContainer");
const deleteButtonAll = document.getElementById("deleteAll");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchInput = document.getElementById("input");
  const apiUrl = `https://api.giphy.com/v1/gifs/random?tag=${searchInput}&api_key=${api}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const gifUrl = data.data.images.original.url;

    const gifElement = document.createElement("img");
    gifElement.src = gifUrl;

    //4. The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
    //5. Allow the user to delete a specific gif by clicking the DELETE button.
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      gifElement.remove();
      deleteButton.remove();
    });

    container.appendChild(gifElement);
    container.appendChild(deleteButton);
  } catch (error) {
    console.error("Ops something happened:", error);
  }
});

deleteButtonAll.addEventListener("click", () => {
  container.innerHTML = "";
});
