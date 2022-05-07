const task = document.querySelectorAll(".task");
const priorities = document.querySelectorAll(".priority");
var dragTask = null;

//unused
task.forEach((task) => {
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
});

priorities.forEach((priority) => {
  priority.addEventListener("dragover", dragOver);
  priority.addEventListener("dragenter", dragEnter);
  priority.addEventListener("dragleave", dragLeave);
  priority.addEventListener("drop", dragDrop);
});

function dragStart() {
  dragTask = this;
}

function dragEnd() {
  dragTask = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  //change the current targets opacity to show where object will land
  this.style.opacity = 0.5;
}

function dragLeave() {
  //resets the previous targets opacity after being dragged over
  this.style.opacity = 1;
}

function dragDrop() {
  //resets the previous targets opacity after being dragged over
  this.style.opacity = 1;
  this.appendChild(dragTask);
}

//pop up modal
const addTaskModal = document.getElementById("addTaskModal");
const closeModal = document.getElementById("closeModal");
const addTaskButton = document.getElementById("addTask");
const overlay = document.querySelector(".overlay");

addTaskButton.onclick = function () {
  addTaskModal.style.display = "block";
  overlay.style.display = "block";
};

//exit modal on click button
closeModal.onclick = function () {
  addTaskModal.style.display = "none";
  overlay.style.display = "none";
};

//exit modal on click overlay
window.onclick = function (event) {
  if (event.target === overlay) {
    addTaskModal.style.display = "none";
    overlay.style.display = "none";
  }
};

//add new task event listener
const addTaskSubmitButton = document.getElementById("addTaskSubmit");

addTaskSubmitButton.onclick = function () {
  //add new task
  const newTaskContainer = document.createElement("div");
  const close = document.getElementById("taskCloseButton");
  const closeClone = close.cloneNode(true);
  const undefined = document.getElementById("undefined");

  //get content from modal forms
  const taskTitleContent = document.getElementById("addTaskTitleInput").value;
  const taskDescContent = document.getElementById("addTaskDescInput").value;

  //create new elements and add to container
  const taskTitleText = document.createElement("p");
  const taskDescText = document.createElement("p");

  taskTitleText.innerText += taskTitleContent;
  taskDescText.innerText += taskDescContent;

  newTaskContainer.appendChild(taskTitleText);
  newTaskContainer.appendChild(taskDescText);
  newTaskContainer.appendChild(closeClone);
  newTaskContainer.classList.add("task");
  newTaskContainer.setAttribute("draggable", "true");

  //event listeners
  newTaskContainer.addEventListener("dragstart", dragStart);
  newTaskContainer.addEventListener("dragend", dragEnd);
  closeClone.addEventListener("click", removeTask);

  undefined.append(newTaskContainer);

  //probably make a function for this
  addTaskModal.style.display = "none";
  overlay.style.display = "none";

  function removeTask() {
    newTaskContainer.style.display = "none";
  }
};
