//1. Create a directory named blog-api.

//2. Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

//3. Install the express package by running npm install express in the terminal.

//4. Create a file named server.js.

//5. In server.js, require the express package and set up an Express app.
//OBS: had to change again from require to import since it wasnt running with it, now with import its working.

import express from "express";
const app = express();

//6. Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

let posts = [
  {
    id: 1,
    title: "Hawaii Vacation",
    content: "Hey there! First time traveling to Hawaii!!",
  },
  {
    id: 2,
    title: "Yoga Class",
    content: "Another morning of Yoga class. Namaste.",
  },
];

app.use(express.json());
// Middleware to parse JSON bodies

//7. Implement the following routes using Express:
//it wasnt working before as well because i didnt add this function of defining the root to avoid the 404 error.

app.get("/", (req, res) => {
  res.send("Hello there friend");
});

//a.  GET /posts: Return a list of all blog posts.

app.get("/posts", (req, res) => {
  res.json(posts);
});

// GET /posts/:id: Return a specific blog post based on its id.

app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

//b. POST /posts: Create a new blog post.

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

//c. PUT /posts/:id: Update an existing blog post.
app.put("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const post = posts.find((post) => post.id === postId);

  if (post) {
    post.title = title;
    post.content = content;
    res.json(post);
  } else {
    res.json(404).json({ error: "Post not found" });
  }
});

//d. DELETE /posts/:id: Delete a blog post.

app.delete("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  posts = posts.filter((post) => post.id !== postId);
  res.sendStatus(204);
});

//13.  Implement error handling for invalid routes and server errors.

// Error handling for invalid routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

//14. Start the Express app and listen on a specified port (e.g., 3000).

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//output:

// sarahs-mbp:blog-api sarahgarson$ node server.js
// Server is running on http://localhost:3000
