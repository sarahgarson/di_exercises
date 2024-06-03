//1. Copy the code above, to a structured HTML file.
// 2. In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM
let box = document.getElementById("box");
let target = document.getElementById("target");

//SEARCHED ONLINE EXPLANATION:

/* - offsetX and offsetY store the distance (offset) between the point where you clicked inside the box and the top-left corner of the box.
- offsetX is the horizontal distance from the left edge of the box to the point where you clicked.
- offsetY is the vertical distance from the top edge of the box to the point where you clicked.*/

let offsetX,
  offsetY,
  isDragging = false;

box.addEventListener("mousedown", (e) => {
  isDragging = true;
  //offsetX and offsetY are set to the coordinates of the mouse relative to the box.
  offsetX = e.offsetX;
  offsetY = e.offsetY;
  //for a cool style haha
  box.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    //if isDragging is true, the box will move together with the mouse pointer
    box.style.left = `${e.clientX - offsetX}px`;
    box.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", (e) => {
  if (isDragging) {
    //When the mouse button is released, isDragging is set to false
    isDragging = false;
    //and this will become grab again and not grabbing
    box.style.cursor = "grab";

    /*SEARCHED ONLINE AS WELL, HERE IS THE EXPLANATION FOR getBoundingClientRect:

    The getBoundingClientRect() method returns the size of an element and its position relative to the viewport. It returns a DOMRect object with properties describing the element's position and size, including top, bottom, left, right, width, and height.*/

    let targetRect = target.getBoundingClientRect();
    let boxRect = box.getBoundingClientRect();

    // Check if the box is completely within the target area, if true then it'll follow the adjustment for the box positioning
    if (
      boxRect.left >= targetRect.left && //can also be written with x instead of left
      boxRect.top >= targetRect.top && // can also be written with y instead of top
      boxRect.right <= targetRect.right &&
      boxRect.bottom <= targetRect.bottom
    ) {
      // Adjust the box's position to be relative to the target
      box.style.left = `${boxRect.left - targetRect.left}px`; //made the calculation to px
      box.style.top = `${boxRect.top - targetRect.top}px`;
      // Append the box to the target container
      target.appendChild(box);
    } else {
      // Reset the box position if dropped outside the target
      box.style.left = "10px";
      box.style.top = "230px"; // if I put 0 it'll go straight to the top left corner of the page
      document.body.appendChild(box);
    }
  }
});
