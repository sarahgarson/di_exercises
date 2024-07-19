//TASK 3

// import fs from 'fs';
//        or
import { promises as fs } from "fs";

// export const read_file = (path) => {
//   try {
//     return fs.readFileSync(path, "utf-8");
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

//                 or
export const read_file = async (path) => {
  try {
    return await fs.readFile(path, "utf-8");
  } catch (error) {
    throw new Error(error.message);
  }
};

//in node.js an async function will be automatically sent to the event loop, and it wont block our code!!!!!!!!!!!!!!!! ( the function above as example)
