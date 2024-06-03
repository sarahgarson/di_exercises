// 1. Copy the code above, to a structured HTML file.
// 2. In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
//Hint : use clearInterval as soon as the box reaches the right end side of the container
//Hint : check out the demonstration in the Course Noted named JS Functions

//we needed to create a function called onclick="myMove()" because thats what was created on the html file.
function myMove() {
  let divContainer = document.getElementById(`container`);
  let divAnimate = document.getElementById(`animate`);
  // Getting the width of the container div and the width of the animated div
  let divContainerWidth = divContainer.offsetWidth; //
  let divAnimateWidth = divAnimate.offsetWidth;
  // positioning the start of the box as 0.
  let position = 0;

  //calling the setInterval for 1 millisecond, placing the setInterval inside a variable so we can clear it later on :)
  let interval = setInterval(containerBox, 1);

  function containerBox() {
    //If the condition is true, clearInterval will stop the interval, stopping the animation on the other side of the containerBox
    if (position >= divContainerWidth - divAnimateWidth) {
      clearInterval(interval);
    } else {
      // If it hasn't, we increment the position by 1 pixel
      divAnimate.style.left = position + `px`;
      position++;
    }
  }
}
