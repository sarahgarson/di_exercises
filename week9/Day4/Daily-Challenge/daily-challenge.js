//When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;

    const formData = {
      name: name,
      lastName: lastName,
    };

    const jsonString = JSON.stringify(formData, null, 2);

    const outputDiv = document.getElementById("output");
    outputDiv.textContent = jsonString;
  });
