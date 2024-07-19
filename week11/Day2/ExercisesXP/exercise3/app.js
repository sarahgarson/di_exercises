//5. Create another file named app.js.

//6. In app.js, import the functions from the fileManager.js module.

const { readFile, writeFile } = require("./fileManager");

//7. Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.

readFile("hello-world.txt", (err, data) => {
  if (err) {
    console.error("ERRORRRR:", err);
    return;
  }
  console.log(data);

  // Write "Writing to the file" to "Bye World.txt"
  writeFile("bye-world.txt", "Writing to the file", (err) => {
    if (err) {
      console.error("ERRORRR:", err);
      return;
    }

    console.log("Successfully written content");
  });
});

//8. Run app.js and verify that the file reading and writing operations are successful.

//outpur in the terminal:

// sarahs-mbp:exercise3 sarahgarson$ node app.js
// Hello World !!
// Successfully written content
// sarahs-mbp:exercise3 sarahgarson$
