//1. Create a file named fileManager.js.

/*2.  Inside fileManager.js, define a module that exports functions for reading and writing files.

a. Export functions named readFile and writeFile.

b. Implement the readFile function to read the content of a specified file using the fs module.

c. Implement the writeFile function to write content to a specified file using the fs module.*/

const fs = require("fs");

function readFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
}

function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
}

module.exports = {
  writeFile,
  readFile,
};

//3. Create a file “Hello World.txt” containing the sentence “Hello World !! “

//4. Create a file “Bye World.txt” containing the sentence “Bye World !! “
