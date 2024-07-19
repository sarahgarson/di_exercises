//1. Create a directory named todoApp.

//2. Inside the todoApp directory, create two files: todo.js and app.js.

//3. In todo.js, define an ES6 module that exports a TodoList class.

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  //4. The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  markComplete(taskIndex) {
    if (this.tasks[taskIndex]) {
      this.tasks[taskIndex].completed = true;
    } else {
      console.error("Task not found.");
    }
  }

  listTasks() {
    return this.tasks
      .map(
        (task, index) =>
          `${index}. ${task.task} - ${
            task.completed ? "Completed" : "Not Completed"
          }`
      )
      .join("\n");
  }
}

//5. Export the TodoList class.
//above already done it
