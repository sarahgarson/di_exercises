document.addEventListener("DOMContentLoaded", () => {
  let mainBoxes = document.querySelectorAll(".mainBox");
  let container = document.getElementById("container");

  mainBoxes.forEach((mainBox) => {
    mainBox.addEventListener("click", () => {
      // Clone the mainBox
      let clonedBox = mainBox.cloneNode(true);
      container.appendChild(clonedBox);

      // Calculate left position for the cloned box
      let leftPosition = mainBox.offsetLeft + mainBox.offsetWidth;

      // Set the left position for the new boxes
      clonedBox.style.left = leftPosition + "px";

      // Append the cloned box to the container
      container.appendChild(clonedBox);
    });

    mainBox.addEventListener("mouseover", () => {
      // Change cursor to pointer
      mainBox.style.cursor = "pointer";
    });
  });
});

//NEEDS TO BE FIXED. SEE IN CLASS HOW PEOPLE DID IT
