// Exercise 1 : Calculate The Tip

// Instructions

//Clone or Download this repository.
//Follow the instructions below :
//In this exercise you will calculate how much your tip would be after eating in a restaurant.

//First Part :

// 1.Create a js file name main.js.

// - done

// 2. Create a function called calculateTip() that takes no parameter.

function calculateTip() {
  //   a. Create a variable called billAmount that fetches the value of the input, which id is billAmt (check the HTML file) –> It’s the amount of the bill.
  let billAmount = document.getElementById(`billamt`).value;

  //   b. Create a variable called serviceQuality that fetches the value of the input, which id is serviceQual (check the HTML file) –> It’s the quality of the service.
  let serviceQuality = document.getElementById(`serviceQual`).value;

  //   c. Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople (check the HTML file) –> It’s the number of people sitting at the table.
  let numberOfPeople = document.getElementById(`peopleamt`).value;

  //   d. Create a condition :
  //     I. If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values.

  if (serviceQuality === 0 || billAmount === "") {
    alert(
      `Hey there, please enter the Service Quality and Bill Amount so we can get the math started`
    );
    return;
  }

  //   e. Create another condition after the first one :
  //     II. If the input numberOfPeople is empty or is smaller than 1, set a default value of 1 to numberOfPeople and make sure that the tag which id is each, is not displayed (check the end of the HTML file).
  if (numberOfPeople === "" || numberOfPeople < 1) {
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //   f. Create a variable named total: the value should be ( billAmount \* serviceQuality ) / numberOfPeople (the outcome is the average tip each person should pay)

  let total = (billAmount * serviceQuality) / numberOfPeople;

  //   g. Use the toFixed method to round total to two decimal points.

  total = total.toFixed(2);

  //   h. Add the CSS property “display:block” to the tag which id is totalTip.
  document.getElementById(`totalTip`).style.display = `block`;

  //   i. Display the variable total in the tag which id is tip.

  document.getElementById(`tip`).textContent = total;
}

// Second Part:

//1. To avoid displaying the total if the function calculateTip() is not called, add the CSS property “display:none” to the tag which id is totalTip.
//document.getElementById("totalTip").style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("totalTip").style.display = "none";
});

// 2. Call the function calculateTip() when the tag which id is calculate is clicked.
//Hint : use the method onclick.

document.getElementById("calculate").addEventListener("click", calculateTip);
