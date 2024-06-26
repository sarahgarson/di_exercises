//Instructions

//Exercise 1:

//Using this array :

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove Banana from the array.

fruits.splice(0, 1);

// 2. Sort the array in alphabetical order.

fruits.sort();

// 3. Add “Kiwi” to the end of the array.

fruits.push("Kiwi");

// 4. Remove “Apples” from the array. Don’t use the same method as in part 1.

fruits.shift(0);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])

// At the end you should see this outcome:
//["Kiwi", "Oranges", "Blueberries"]

fruits.reverse();
console.log(fruits);

//Exercise 2:

//Using this array :

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

//1. Access and then console.log “Oranges”.

let oranges = moreFruits[1][1][0];
console.log(oranges);
