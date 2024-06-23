//As soon as the user submits the form, the new task will be displayed in another HTML page. Every task should be displayed in the following way:

// Name
// Starting date
// How many days left to complete the task.
// Note:
// Example: if a task was set yesterday and the end date is in 5 days, then there are 4 days remaining to complete the task.

// Example: if a task was set to start tommorow and the end date is in 5 days then there are 6 days remaining to complete the task.

//MY NOTE: This code calculates the number of days left to complete a task based on the current date (now), the task's start date (start), and the task's end date (end).

function calculateDaysLeft(startDate, endDate) {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  let daysLeft;
  if (now > start) {
    //google: Math.ceil(): This function rounds the result up to the nearest whole number, ensuring that even partial days are counted as full days.
    daysLeft = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
  } else {
    daysLeft =
      Math.ceil((end - start) / (1000 * 60 * 60 * 24)) +
      Math.ceil((start - now) / (1000 * 60 * 60 * 24));
  }

  return daysLeft;
}

//Toggles the visibility of the task description.
function toggleDescription(event) {
  if (
    //added so the new delete and edit buttons work
    event.target.classList.contains("delete-btn") ||
    event.target.classList.contains("edit-btn")
  )
    return;
  const description = event.currentTarget.querySelector(".description");
  description.style.display =
    description.style.display === "none" ? "block" : "none";
}

function updateTaskStatus(index, isCompleted) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks[index].isCompleted = isCompleted;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

// Add an “X” button next to each task. The user will be able to delete the task. Make sure to show a confirmation popup/modal to the user, to avoid deleting a task by mistake.

function deleteTask(index) {
  const confirmation = confirm("Are you sure you want to delete this task?");
  if (confirmation) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}

// Add an “Edit” button next to each task. The user can edit a task and save the changes. Another possibility is to double click on the task to edit the details.

function editTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = tasks[index];
  const newName = prompt("Edit Task Name", task.name);
  const newDescription = prompt("Edit Task Description", task.description);
  const newStartDate = prompt(
    "Edit Task Start Date and Time (format: YYYY-MM-DD HH:MM:SS)",
    task.startDate
  );
  const newEndDate = prompt(
    "Edit Task End Date and Time (format: YYYY-MM-DD HH:MM:SS)",
    task.endDate
  );

  if (newName && newDescription && newStartDate && newEndDate) {
    task.name = newName;
    task.description = newDescription;
    task.startDate = newStartDate;
    task.endDate = newEndDate;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}

//Function displayTasks: Retrieves tasks from localStorage and displays them in the HTML.
function displayTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  const taskListDiv = document.getElementById("taskList");
  taskListDiv.innerHTML = "";

  tasks.forEach((task, index) => {
    const daysLeft = calculateDaysLeft(task.startDate, task.endDate);
    const now = new Date();
    const end = new Date(task.endDate);

    let taskClass = "";
    if (task.isCompleted) {
      taskClass = "completed";
    } else if (now > end) {
      taskClass = "expired";
    } else {
      taskClass = "uncompleted";
    }

    const taskDiv = document.createElement("div");
    taskDiv.className = `task ${taskClass}`;
    taskDiv.onclick = toggleDescription;
    taskDiv.innerHTML = `
          <input type="checkbox" ${
            task.isCompleted ? "checked" : ""
          } onchange="updateTaskStatus(${index}, this.checked)">
          <h2>${task.name}</h2>
          <p>Start Date: ${task.startDate}</p>
          <p>Days Left to Complete: ${daysLeft}</p>
          <div class="description">${task.description}</div>
          <button class="delete-btn" onclick="deleteTask(${index})">X</button>
          <button class="edit-btn" onclick="editTask(${index})">Edit</button>
      `;
    taskListDiv.appendChild(taskDiv);
  });
}

window.onload = displayTasks;
