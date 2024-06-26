// Instructions

// 1.  Write a JavaScript program that recreates the pattern below.

// 2. Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).

// 3. Do this Daily Challenge by yourself, without looking at the answers on the internet.

//first: using one loop

let star = "";

for (i = 0; i < 6; i++) {
  star += "*";
  console.log(star);
}

//second:using two loops

let stars2 = "";

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= i; j++) {
    stars2 += "*";
  }
  stars2 += "\n";
}

console.log(stars2);
