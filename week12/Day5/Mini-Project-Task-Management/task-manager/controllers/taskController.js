
//creating controllers

import fs from 'fs-extra';
import path, { parse } from 'path';
// Defining the path to the JSON file where the tasks are gonna be stored
const tasksFilePath = path.join(__dirname, '../data/tasks.json');




//controller function for all the tasks
export const getAllTasks = async (req,res, next) => {
  try{

    //reading the tasks from the json file
    const tasks = await fs.readJson(tasksFilePath);

    res.json(tasks);
  }catch(err){

    //error handling middleware
    next(err);

  }
};

//controller function to get the tasks by id
export const getTaskById = async (req,res,next) => {
  try{

   const tasks = await fs.readJson(tasksFilePath);

   // To find the task with the specified ID
const task = tasks.find(t => t.id === parseInt(req.params.id));

if(!task) return res.status(404).json({message: 'The task was not found'})

   res.json(task);

  }catch(err){

    next(err);
  }
};




//controllers function to create a new task
export const createTask = async (req,res,next) => {
try{

  const tasks = await fs.readJson(tasksFilePath);

    // Creating new tasks object with a unique ID and the request body data
  const newTask = {id:Date.now(), ...req.body};

  //adding the new tasks to the tasks array above:
tasks.push(newTask);

//putting the new taks in the json file too
await fs.writeJson(tasksFilePath,tasks);

//new tasks as response
res.status(201).json(newTask)

}catch(err){

  next(err);
}
};




//controller function to update a task by ID
export const updateTask = async (req,res,next) => {
try{

  const tasks = await fs.readJson(tasksFilePath);

  //finding the index of each task id
  const index = tasks.findIndex( t => t.id === parseInt(req.params.id));

  //if not found: error 404
  if (index === -1) return res.status(404).json({message: 'Task not found'});

  //updating the task structure
  tasks[index]= {...tasks[index], ...req.body};

  //adding the updated task to the json file
  await fs.writeJson(tasksFilePath,tasks);

   // Send the updated task as the response
  res.json(tasks[index]);

}catch(err){

  next(err);
}
};



//controller function to delete tasks by Id
export const deleteTask = async (req,res,next) => {
  try{

    const tasks = await fs.readJson(tasksFilePath);

    //filtering out the tasks with the ids
    const newTasks = tasks.filer(t => t.id !=== parseInt(req.params.id));

    //if no tasks got deleted: erro 404
    if(newTasks.length === tasks.length) return res.status(404.).json({message:'Task not found'});

    //adding the new tasks to the Json file
    await fs.writeJson(tasksFilePath, newTasks);

    //this time responsing with a message 
    res.json({message: 'Task was deleted!'});

  }catch(err){

    next(err);
  }
}








