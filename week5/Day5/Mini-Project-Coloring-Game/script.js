//STEP 1: CALL THE PALETTE AND THE CANVAS

let palette = document.getElementById("palette");
let canvas = document.getElementById("canvas");

//STEP 2: SET THE SQUARES FOR THE CANVAS (ALSO IN CSS):
//PS: AFTER I CHANGED FROM i<300 TO i<1000 IT COVERED THE WHOLE CANVAS, BEFORE THE SQUARES WERE ONLY APPEARING IN THE TOP PART OF THE CANVAS
for (let i = 0; i < 1000; i++) {
  // 20 columns * 50 rows = 1000 squares
  //CREATED A SQUARE VARIABLE AND ADDED IT TO THE CANVAS DIV PARENT
  let square = document.createElement("div");
  square.classList.add("square");
  canvas.appendChild(square);
}

// ADDED AN EVENT WITH MOUSEDOWN WHENEVER WE PRESS ON THE SQUARES TO START PAINTING
canvas.addEventListener("mousedown", (event) => {
  isMouseDown = true;
  paint(event);
});

//TO CONTINUE PAINTING WHILE WE ARE PRESSING AND TO FOLLOW THE MOUSE
canvas.addEventListener("mousemove", paint);

//WHEN THE STOP CLICKING ON THE MOUSE
canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
});

canvas.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

// Function to paint squares
function paint(event) {
  if (isMouseDown) {
    const target = event.target;
    if (target.classList.contains("square")) {
      target.style.backgroundColor = selectedColor;
    }
  }
}
// TO PICK THE COLOR FROM THE COLOR PALETTE
palette.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("color-square")) {
    selectedColor = target.style.backgroundColor;
    let selected = document.querySelector(".selected");
    if (selected) {
      selected.classList.remove("selected");
    }
    target.classList.add("selected");
  }
});

// Clear button
let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
  //I needed to call the square variable we created so the clear button would work!!
  let square = document.querySelectorAll(".square");
  // needed also to create a forEach function since the square.style.background by itself did not let me delete the colors
  square.forEach((square) => {
    square.style.backgroundColor = "#fff";
  });
});
