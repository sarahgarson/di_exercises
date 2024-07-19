//4.  Create another file named read-directory.js.

//5.  In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.

import fs from "fs";

// Read the current directory
fs.readdir(".", "utf8", (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  console.log("Files in the directory:");
  files.forEach((file) => {
    console.log(file);
  });
});

//6. Open a terminal in the file-explorer directory.

//7. Run node copy-file.js to copy the content from source.txt to destination.txt.
//the output:

// sarahs-mbp:file-explorer sarahgarson$ node copy-file.js
// File copied from source.txt!!! you can relax now :)
// sarahs-mbp:file-explorer sarahgarson$

//8. Run node read-directory.js to list the files in the directory.

//output:

// sarahs-mbp:file-explorer sarahgarson$ node read-directory.js
// Files in the directory:
// copy-file.js
// destination.txt
// package.json
// read-directory.js
// source.txt
// sarahs-mbp:file-explorer sarahgarson$

//obs: have to add type: module in the package.json so the last output would run
