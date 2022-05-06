const task = document.querySelectorAll(".task");
const priorities = document.querySelectorAll(".priority");
var dragTask = null;

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

function dragEnd() {}

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

closeModal.onclick = function () {
  addTaskModal.style.display = "none";
  overlay.style.display = "none";
};

// //doesnt work
// window.onclick = function (event) {
//   if (event.target === addTaskModal) {
//     addTaskModal.style.display = "none";
//   }
// };
