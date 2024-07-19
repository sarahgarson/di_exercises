//1. Create a directory named file-explorer.

//2. Inside the file-explorer directory, create a file named copy-file.js.

//3. In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.

const fs = require("fs");

fs.readFile("source.txt", "utf8", (err, data) => {
  if (err) {
    console.error("ERRORRRR:", err);
    return;
  }

  fs.writeFile("destination.txt", "utf8", (err) => {
    if (err) {
      console.error("Errorrr:", err);
      return;
    }
    console.log("File copied from source.txt!!! you can relax now :) ");
  });
});
