// Part 2: Creating a Data Module for Axios

//1. Inside the crud-api directory, create a new directory named data.

//2. Inside the data directory, create a new file named dataService.js.

//3. In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request to the JSONPlaceholder API to fetch data for all posts.

import axios from "axios";

const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    console.error(`ERRORRR:`, error);
  }
};

//5. Export the fetchPosts function.

export { fetchPosts };
