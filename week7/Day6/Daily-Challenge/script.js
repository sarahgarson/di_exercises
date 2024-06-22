// Instructions

// Using this array:

const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//1. Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
//The new array should look like
//const usernames = ["john!", "becky!", "susy!", "tyson!"]

//empty array usernames:
const usernames = [];
//I used forEach to iterate over gameInfo and push each player.username with "!" into the usernames array
gameInfo.forEach((player) => {
  usernames.push(`${player.username}!`);
});

console.log(usernames);

//2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
//The new array should look like this :
//const winners = ["becky", "susy"]

//empty array winners:
const winners = [];
//I used forEach to iterate over gameInfo and check if player.score is bigger than 5 and if true, we push player.username into the winners array
gameInfo.forEach((player) => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});

console.log(winners);

//3. Find and display the total score of the users. (Hint: The total score is 71)

//I use reduce to iterate over gameInfo and get the total score (total) starting from 0
const totalScore = gameInfo.reduce((total, player) => {
  return total + player.score;
}, 0);

console.log(`The total score of all users is: ${totalScore}`);
