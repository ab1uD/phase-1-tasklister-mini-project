document.addEventListener("DOMContentLoaded", () => {
  init();
});

function init() {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const input = document.getElementById("new-task-description");
  const taskDescription = input.value.trim();

  if (taskDescription !== "") {
    addTaskToList(taskDescription);
    input.value = "";
  }
}

function addTaskToList(description) {
  const tasksList = document.getElementById("tasks");

  const taskItem = document.createElement("li");
  taskItem.textContent = description;

  const deleteBtn = createDeleteButton();
  taskItem.appendChild(deleteBtn);

  tasksList.appendChild(taskItem);
}

function createDeleteButton() {
  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.style.marginLeft = "10px";
  btn.style.color = "red";
  btn.style.fontSize="12px"
  btn.addEventListener("click", handleDeleteTask);
  return btn;
}

function handleDeleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}
