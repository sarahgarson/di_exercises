//creating our routes

import express from 'express';

// Import all our controller functions
import{
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';


//creating our router
const router = express.Router();

//writting now all the routes for each of the controller function
router.get('/', getAllTasks);//Retrieve a list of all tasks from a JSON file.
router.get('/:id', getTaskById)//Retrieve a specific task by ID from the JSON file.
router.post('/', createTask);//Create a new task and store it in the JSON file.
router.put('/:id', updateTask);//Update a task by ID in the JSON file.
router.delete('tasks/:id', deleteTask);//Delete a task by ID from the JSON file.

export default router;
