//1. Create a directory named npm-beginner.

//2. Inside the npm-beginner directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

//3. Install the chalk package, which provides easy coloring for terminal output, by running npm install chalk in the terminal.

//4. Create a file named app.js inside the npm-beginner directory.

//done all the above

//5. In app.js, require the chalk package and use it to color and style text in the terminal.

//OBS - tried using require and it wasnt working, changed the type to module and used import instead and it worked:

import chalk from "chalk";

//6. Write a simple script that uses chalk to print a colorful message.

function addingColor(name) {
  return chalk.bold.blue(name);
}

console.log(addingColor("Sarah"));

//7. Run app.js using Node.js and observe the colorful output in the terminal.

//output in blue:

// sarahs-mbp:npm-beginner sarahgarson$ node app.js
// Sarah
// sarahs-mbp:npm-beginner sarahgarson$
