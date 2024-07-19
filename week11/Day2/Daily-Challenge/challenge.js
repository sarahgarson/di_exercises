//CHALLENGE TASK

import { greet } from "./greeting.js";

import {
  displayErrorMessage,
  displayColorMessage,
} from "./colorful-message.js";

import { read_file } from "./read-file.js";

console.log(displayColorMessage(greet("Hannah")));
console.log(displayErrorMessage("error2"));
console.log(greet("Alex"));

//the outpur from the terminal was:

//sarahgarson@sarahs-mbp Daily-Challenge % node challenge.js
// hello,Hannah
// error2
// hello,Alex
// sarahgarson@sarahs-mbp Daily-Challenge %
