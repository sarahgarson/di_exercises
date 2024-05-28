// 🌟 Exercise 3 : Change The Navbar

//Instructions

/*<div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div>*/

// 1. Add the code above, to your HTML file

// 2. Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let currentId = document.getElementById(`navBar`);

currentId.setAttribute(`id`, `socialNetworkNavigation`);

console.log(currentId);

// 3. We are going to add a new <li> to the <ul>.
//  a. First, create a new <li> tag (use the createElement method).
//  b. Create a new text node with “Logout” as its specified text.
//  c. Append the text node to the newly created list node (<li>).
//  d. Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

//a.
let ul = document.querySelector(`ul`); // before I had written document.body.firstElementChild.nextElementSibling and it was giving me the <script> instead of the `ul` - ask about that
let newLi = document.createElement(`li`);

//b.
let textNode = document.createTextNode(`Logout`);

//c.
newLi.appendChild(textNode);

//d.
ul.appendChild(newLi);

console.log(ul);

// 4. Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;

console.log(firstLi.textContent);
console.log(lastLi.textContent);
