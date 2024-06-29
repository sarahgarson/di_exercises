// Exercise 1 : Dog Age To Human Years

// Instructions

// Using the following data

const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Cuty",
    age: 5,
    type: "rabbit",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
  {
    name: "Rex",
    age: 10,
    type: "dog",
  },
];

//1.  Use a loop to find the sum of the dogs’ ages in human years.

//2.  Using the reduce() method, find the sum of the dogs’ ages in human years.

// Hint: 1 dog year equals 7 human years

const sumHumanYears = data.reduce((acc, animal) => {
  if (animal.type === "dog") {
    acc += animal.age * 7;
  }
  return acc;
}, 0);

console.log(sumHumanYears);

//------------------------------------------------------------------------//

// Exercise 2 : Email

// Instructions

// Clean up this email to have no whitespaces. Do it in a single line (return a new string).

const userEmail3 = " cannotfillemailformcorrectly@gmail.com ";

const cleanedEmail = userEmail3.trim();

console.log(cleanedEmail);

// Exercise 3 : Employees #3

// Instructions

// Using this array

const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.

// Example: { 'Bradley Bouley': 'Full Stack Resident' }

// Hint: Step one, create an empty object.

const usersWithFullNameAsKey = {};

users.forEach((user) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  usersWithFullNameAsKey[fullName] = user.role;
});

console.log(usersWithFullNameAsKey);

//------------------------------------------------------------------------//

// Exercise 4 : Array To Object

// Instructions

// Using this array

const letters = ["x", "y", "z", "z"];

// Use a for loop to get this output { x: 1, y: 1, z: 2 };

const letterCount1 = {};

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  if (letterCount1[letter]) {
    letterCount1[letter]++;
  } else {
    letterCount1[letter] = 1;
  }
}

console.log(letterCount1);

// Use the reduce() method to get this output { x: 1, y: 1, z: 2 };

const letterCount2 = letters.reduce((acc, letter) => {
  if (acc[letter]) {
    acc[letter]++;
  } else {
    acc[letter] = 1;
  }
  return acc;
}, {});

console.log(letterCount2);
