//Task 1

// step 4(create file app.js),5 ( require module from greeting.js and use the greet funtion to greet an user)
//this is commonjs
import { greet } from "./greeting.js";

console.log(greet("Marry"));

//automatically running console.log using NODEMON on macs
//sudo npm i -g nodemon (we add this in mac terminal so we can add nodemon)
//nodemon app.js (then we write nodemon and the file we want to run automatically once safed, in this case inside the folder Daily-Challenge and asked for app.js to be automatically)

//TASK 2

import {
  displayColorMessage,
  displayErrorMessage,
} from "./colorful-message.js";

console.log(displayColorMessage(greet("Sarah")));
console.log(displayErrorMessage("error"));

//TASK 3
// I can use in node.js ( after version 2018) await outside async funtion but in a block
try {
  let data = await read_file("./files/file-data.txt");
  console.log(displayErrorMessage(data));
} catch (error) {
  console.log(error.message);
}
