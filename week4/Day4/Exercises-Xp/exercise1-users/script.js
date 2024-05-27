//🌟 Exercise 1 : Users

//Instructions

/*<div id="container">Users:</div>
<ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul>*/

// 1. Add the code above, to your HTML file

// 2.v Using Javascript:
//  a. Retrieve the div and console.log it
//  b. Change the name “Pete” to “Richard”.
//  c. Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
//  d. Change each first name of the two <ul>'s to your name. (Hint : use a loop)

//a.
let firstDiv = document.body.firstElementChild;

console.log(firstDiv);

//b.
let firstUl = document.querySelector(".list"); // querySelector selets the first .list class in the code.
let secondLi = firstUl.children[1]; // access the second child [0] is the first and [1] is the second, so Pete
secondLi.textContent = "Richard"; // to change the value of the element we use textContent and assign it to Richard.

console.log(secondLi);

//c.
let secondUl = document.querySelector(".list").nextElementSibling;
let secondLiSecondUl = secondUl.children[1];
secondUl.removeChild(secondLiSecondUl);

console.log(secondLiSecondUl);

// d.
let allUls = document.querySelectorAll(".list");
let myName = "Sarah";

for (i = 0; i < allUls.length; i++) {
  allUls[i].children[0].textContent = myName;
}

console.log(allUls);

// 3. Bonus - Using Javascript:
//  a. Add a class called student_list to both of the <ul>'s.
//  b. Add the classes university and attendance to the first <ul>.

let ulParents = document.querySelectorAll(".list");

ulParents.forEach((ul) => ul.classList.add("student_list"));

ulParents[0].classList.add("university", "attendance");
