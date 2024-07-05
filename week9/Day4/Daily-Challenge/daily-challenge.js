//When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

document.getElementById("submitBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const data = { name, lastName };
  const jsonData = JSON.stringify(data, null, 2);
  document.getElementById("jsonData").innerText = jsonData;
});
