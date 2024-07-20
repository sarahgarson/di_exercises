// Part 1: Setting Up the Express Server

//1. Create a new directory named crud-api.

//2. Inside the crud-api directory, initialize a new Node.js project and install the express and axios packages.

/* note: had an issue saying i couldnt download axios:
used ' sudo chown -R $(whoami) $(npm config get cache) ' on the terminal and then tried installing it again and it worked.*/

//3. Create a new file named app.js in the crud-api directory.

//4. In app.js, import the express module and create an instance of an Express app.

import express from "express";
const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the CRUD API!");
});

// Part 3: Using the Data Module in the Express App

//1. Inside app.js, import the dataService module you created.

import { fetchPosts } from "./data/dataService.js";

//2. Create an endpoint in your Express app that uses the fetchPosts function from the dataService module to retrieve data from the JSONPlaceholder API.

app.get("/api/posts", async (req, res) => {
  try {
    //3. Respond with the fetched data from the JSONPlaceholder API. https://jsonplaceholder.typicode.com/posts
    const posts = await fetchPosts();
    //4. Print a message in the console to indicate that the data has been successfully retrieved and sent as a response.
    res.json(posts);
    console.log("Data was retrieved successfully and sent as a response");
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

//Part 1: Setting Up the Express Server

//5. Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

const PORT = 5002;

app.listen(PORT, (req, res) => {
  console.log(
    `Hey there, the server you are connected to at the moment is: ${PORT}`
  );
});
