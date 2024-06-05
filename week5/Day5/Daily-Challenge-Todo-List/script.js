const tasks = [];

let formField = document.getElementById(`form`);
let tasksList = document.querySelector(`.list-tasks`);

formField.addEventListener(`submit`, addTask);

//e.preventDefault prevents the page from reloading and deleting what was written by the user when we press enter/or the button
function addTask(e) {
  e.preventDefault(); // so the page doesnt delete the input values every time we press enter

  let task = document.querySelector(`input`).value;
  if (task === ``) {
    return; // if the value is empty it wont appear in the array tasks
  }
  tasks.push(task); // we are pushing the input values inside the tasks empty array
  formField.reset(); // so the input field gets cleared after we press enter or click the button add
  console.log(`task:`, tasks);

  // Create a new list item element
  const li = document.createElement(`li`);
  li.classList.add(`list-item`); // so its easier when writting the css
  li.style.listStyle = `none`; // so we dont have the bullet points

  // Create a checkbox element
  const checkbox = document.createElement(`input`);
  checkbox.type = `checkbox`;

  // Create a label element
  //explanation from the internet: The label code is used to create a text element that displays the task text. In the context of the addTask function, the label element is used to display the task text that the user enters in the input field.

  const taskText = document.createElement(`label`);
  taskText.textContent = task;

  // Create a delete button element
  const deleteButton = document.createElement(`button`);
  deleteButton.innerHTML = `<i class="fa-solid fa-square-xmark"></i>`;
  deleteButton.classList.add(`delete-button`);

  //added also if you click on the button to delete the task :)
  deleteButton.addEventListener(`click`, function () {
    // we got the parent li element and remove it from the DOM
    const li = this.parentNode;
    li.parentNode.removeChild(li);
  });

  // Append the checkbox, label, and delete button to the list item
  //IMPORTANT: THE ORDER WE APPEND THE CHILDREN WILL DEFINE THE ORDER IN THE PAGE: for example not the delete button comes first, then the check box and then the list
  li.appendChild(deleteButton);
  li.appendChild(checkbox);
  li.appendChild(taskText);

  // Append the list item to the listTasks div
  tasksList.appendChild(li);
}
