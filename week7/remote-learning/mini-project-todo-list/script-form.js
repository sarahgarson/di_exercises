// As soon as the user submits the form, the task should be saved.

// By default, the status of the task is “uncompleted” (ie. isCompleted: false)

document
  .getElementById("taskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    // IMPORTANT : The todo list items should be stored in your localStorage - You should use an array of objects - each object contains a task

    const task = {
      name: taskName,
      description: taskDescription,
      startDate: startDate,
      endDate: endDate,
      isCompleted: false,
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    window.location.href = "tasks.html";
  });
