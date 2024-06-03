/*Exercise 1 : Animation With The Alphabet

Instructions*/
// 1. Create multiple squares/boxes with letters inside. There should be 26 squares/boxes for all the letters (A to Z) next to each other.

// 2. Make all the squares draggable.

// 3. You should be able to drag and drop the letters depending on their coordinates x and y.

document.addEventListener("DOMContentLoaded", () => {
  let container = document.getElementById("container");

  // Create squares with letters A to Z
  for (let i = 0; i < 26; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.textContent = String.fromCharCode(65 + i); // Corrected to generate A to Z
    square.draggable = true;
    square.style.left = `${(i % 10) * 60}px`; // Initial x position
    square.style.top = `${Math.floor(i / 10) * 60}px`; // Initial y position
    container.appendChild(square);

    // Add drag event listeners
    square.addEventListener("dragstart", dragStart);
    square.addEventListener("dragend", dragEnd);
  }

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.textContent);
    setTimeout(() => {
      e.target.style.visibility = "hidden";
    }, 0);
  }

  function dragEnd(e) {
    e.target.style.visibility = "visible";
  }

  document.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  // Allow dropping anywhere on the page
  document.addEventListener("drop", (e) => {
    e.preventDefault();
    const letter = e.dataTransfer.getData("text");
    const draggedSquare = Array.from(container.children).find(
      (square) => square.textContent === letter
    );

    if (draggedSquare) {
      // Adjust position based on the drop coordinates
      draggedSquare.style.left = `${e.clientX - draggedSquare.offsetWidth}px`;
      draggedSquare.style.top = `${e.clientY - draggedSquare.offsetHeight}px`;
    }
  });
});
