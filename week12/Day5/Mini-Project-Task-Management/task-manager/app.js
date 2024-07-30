//creating the app.js file of the folder

import express from 'express';
import taskRoutes from './routes/taskRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const PORT = 3003;

// Using built-in Express middleware to parse JSON request bodies
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded


app.use('/api', taskRoutes); // Using the task routes for any requests to /api

app.use(errorHandler);// Using the error handler middleware for any errors


//starting the server!!
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


//and last but not least: testing the API in Postman:

 
// GET http://localhost:3003/api/tasks
// 404
// 20 ms
// Network
// Request Headers
// User-Agent: PostmanRuntime/7.40.0
// Accept: */*
// Cache-Control: no-cache
// Postman-Token: 11385c43-ad12-4d45-91cf-edc3a1d159ab
// Host: localhost:3003
// Accept-Encoding: gzip, deflate, br
// Connection: keep-alive
// Response Headers
// X-Powered-By: Express
// Content-Type: application/json; charset=utf-8
// Content-Length: 36
// ETag: W/"24-kZ+RlzZEeTGfIb+3x2kk5VnWyN0"
// Date: Tue, 30 Jul 2024 17:31:09 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5
// Response Body
// {"message":"The task was not found"}
