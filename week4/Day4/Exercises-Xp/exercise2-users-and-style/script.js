//🌟 Exercise 2 : Users And Style

//Instructions

/*<div>Users:</div>
<ul>
    <li>John</li>
    <li>Pete</li>
</ul>*/

// 1. Add the code above, to your HTML file

// 2. Using Javascript:
//  a. Add a “light blue” background color and some padding to the <div>.
//  b. Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
//  c. Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
//  d. Change the font size of the whole body.

//a.
let firstChild = document.body.firstElementChild;
firstChild.style.background = "lightblue";
firstChild.style.padding = `30px`;

console.log(firstChild);

//b.
let ul = document.body.firstElementChild.nextElementSibling;
let firstLi = ul.children[0];

firstLi.style.display = `none`;

console.log(firstLi);

//c.
let secondLi = ul.children[1];

secondLi.style.border = `2px solid lightblue`;

console.log(secondLi);

//d.
let wholeBody = document.body;
wholeBody.style.fontSize = `30px`;

// 3. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

let firstLiText = firstLi.textContent;
let secondLiText = secondLi.textContent;

if (firstChild.style.background === "lightblue") {
  alert(`Hello ${firstLiText} and ${secondLiText}`);
}
