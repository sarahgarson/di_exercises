//Part I
// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2. The function will alert “Hello World”.

setTimeout(helloWorldTimeout, 2000);

function helloWorldTimeout() {
  alert(`Hello World`);

  //Part II
  // 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
  // 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

  let newParagraph = document.createElement(`p`);
  newParagraph.textContent = `Hello World`;
  let containerParent = document.getElementById(`container`);
  containerParent.appendChild(newParagraph);
}
//Part III
// 1. In your Javascript file, using setInterval, call a function every 2 seconds.
// 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// 3. The interval will be cleared (ie. clearInterval), when the user will click on the button.
// 4. Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// 1. In your Javascript file, using setInterval, call a function every 2 seconds.
let clear = setInterval(helloWorldInterval, 2000);

//The interval will be cleared (ie. clearInterval), when the user will click on the button.
let buttonClear = document.getElementById(`clear`);
buttonClear.addEventListener(`click`, function () {
  clearInterval(clear);
});

function helloWorldInterval() {
  // 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
  let newParagraph2 = document.createElement(`p`);
  newParagraph2.textContent = `Hello World`;
  let containerParent2 = document.getElementById(`container`);
  containerParent2.appendChild(newParagraph2);

  // 4. Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
  if (containerParent2.getElementsByTagName(`p`).length >= 5) {
    clearInterval(clear);
  }
}
