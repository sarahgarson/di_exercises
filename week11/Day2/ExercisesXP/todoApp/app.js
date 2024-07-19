// 6. In app.js, import the TodoList class from the todo.js module.

import { TodoList } from "./todo.js";

//7. Create an instance of the TodoList class.

const newTodoList = new TodoList();

//8. Add a few tasks, mark some as complete, and list all tasks.

newTodoList.addTask("Finish my exercises for DI");
newTodoList.addTask("Finish data analysis for work");
newTodoList.addTask("Go on a run at night");
newTodoList.addTask("Shabbat dinner this Friday");

newTodoList.markComplete(1);
newTodoList.markComplete(2);

console.log("Todo List");
console.log(newTodoList.listTasks());

// 9. Run app.js and verify that the todo list operations are working correctly.

//output:
// sarahs-mbp:todoApp sarahgarson$ node app.js
// Todo List
// 0. Finish my exercises for DI - Not Completed
// 1. Finish data analysis for work - Completed
// 2. Go on a run at night - Completed
// 3. Shabbat dinner this Friday - Not Completed
// sarahs-mbp:todoApp sarahgarson$
