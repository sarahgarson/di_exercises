//creating controllers

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Defining the path to the JSON file where the tasks are gonna be stored
const tasksFilePath = path.join(__dirname, '../data/tasks.json');

// Controller function for all the tasks
export const getAllTasks = async (req, res, next) => {
  try {
    // Reading the tasks from the JSON file
    const tasks = await fs.readJson(tasksFilePath);

    res.json(tasks);
  } catch (err) {
    // Error handling middleware
    next(err);
  }
};

// Controller function to get the tasks by ID
export const getTaskById = async (req, res, next) => {
  try {
    const tasks = await fs.readJson(tasksFilePath);

    // To find the task with the specified ID
    const task = tasks.find((t) => t.id === parseInt(req.params.id));

    if (!task) return res.status(404).json({ message: 'The task was not found' });

    res.json(task);
  } catch (err) {
    next(err);
  }
};

// Controller function to create a new task
export const createTask = async (req, res, next) => {
  try {
    const tasks = await fs.readJson(tasksFilePath);

    // Creating new tasks object with a unique ID and the request body data
    const newTask = { id: Date.now(), ...req.body };

    // Adding the new tasks to the tasks array above
    tasks.push(newTask);

    // Putting the new tasks in the JSON file too
    await fs.writeJson(tasksFilePath, tasks);

    // New tasks as response
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

// Controller function to update a task by ID
export const updateTask = async (req, res, next) => {
  try {
    const tasks = await fs.readJson(tasksFilePath);

    // Finding the index of each task ID
    const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));

    // If not found: error 404
    if (index === -1) return res.status(404).json({ message: 'Task not found' });

    // Updating the task structure
    tasks[index] = { ...tasks[index], ...req.body };

    // Adding the updated task to the JSON file
    await fs.writeJson(tasksFilePath, tasks);

    // Send the updated task as the response
    res.json(tasks[index]);
  } catch (err) {
    next(err);
  }
};

// Controller function to delete tasks by ID
export const deleteTask = async (req, res, next) => {
  try {
    const tasks = await fs.readJson(tasksFilePath);

    // Filtering out the tasks with the IDs
    const newTasks = tasks.filter((t) => t.id !== parseInt(req.params.id));

    // If no tasks got deleted: error 404
    if (newTasks.length === tasks.length) return res.status(404).json({ message: 'Task not found' });

    // Adding the new tasks to the JSON file
    await fs.writeJson(tasksFilePath, newTasks);

    // This time responding with a message
    res.json({ message: 'Task was deleted!' });
  } catch (err) {
    next(err);
  }
};








