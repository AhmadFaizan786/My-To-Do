const myInputBar = document.querySelector("#inputbar");
const addBtn = document.querySelector("#add");
const taskList = document.querySelector("#taskList");
const completedList = document.querySelector("#completedList");
const completedBtn = document.getElementById("completedBtn");
const completedSection = document.getElementById("completedSection");

// Function to check if a day has passed since the last refresh and clear data if needed
function checkAndClearData() {
  const lastRefreshTime = localStorage.getItem("lastRefreshTime");
  if (lastRefreshTime) {
    const lastRefreshDate = new Date(lastRefreshTime);
    const currentDate = new Date();
    if (currentDate.getDate() !== lastRefreshDate.getDate() || currentDate.getMonth() !== lastRefreshDate.getMonth() || currentDate.getFullYear() !== lastRefreshDate.getFullYear()) {
      localStorage.clear(); // Clear all data if a day has passed
    }
  }
  localStorage.setItem("lastRefreshTime", new Date().toString()); // Update last refresh time
}

// Check and clear data when the page loads
checkAndClearData();

// Retrieve saved tasks from local storage or initialize empty array
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// Retrieve saved completed tasks from local storage or initialize empty array
const savedCompletedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

// Display saved tasks
savedTasks.forEach(task => displayTask(task));
// Display saved completed tasks
savedCompletedTasks.forEach(task => displayCompletedTask(task));

// Initially hide the completed tasks section if there are no completed tasks
completedSection.style.display = savedCompletedTasks.length > 0 ? "block" : "none";

// Function to display a task in a list
function displayTask(task) {
  const newListItem = createListItem(task);
  newListItem.querySelector(".remove-btn").addEventListener("click", () => moveTaskToCompleted(task));
  taskList.appendChild(newListItem);
}

// Function to create a list item
function createListItem(task) {
  const newListItem = document.createElement("li");
  newListItem.innerText = task;
  newListItem.appendChild(createRemoveButton());
  return newListItem;
}

// Function to create a remove button
function createRemoveButton() {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.innerText = "X";
  return removeBtn;
}

// Function to move a task to the completed list
function moveTaskToCompleted(task) {
  const index = savedTasks.indexOf(task);
  if (index !== -1) {
    savedTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    savedCompletedTasks.push(task);
    localStorage.setItem("completedTasks", JSON.stringify(savedCompletedTasks));
    taskList.innerHTML = ""; // Clear the task list
    completedSection.style.display = "block";
    savedTasks.forEach(task => displayTask(task));
  }
  displayCompletedTask(task);
}

// Function to display a completed task
function displayCompletedTask(task) {
  const newListItem = createListItem(task);
  newListItem.classList.add("completed");
  completedList.appendChild(newListItem);
}

// Function to add a new task
function addNewTask() {
  const newTask = myInputBar.value.trim();
  if (newTask) {
    savedTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    displayTask(newTask);
    myInputBar.value = "";
  } else {
    alert("Please enter a task!");
  }
}

// Event listener for the "Completed Tasks" button to toggle visibility of completed task list
completedBtn.addEventListener("click", () => {
  completedList.style.display = completedList.style.display === "none" ? "block" : "none";
});

// Event listener for the "Add" button to add a new task
addBtn.addEventListener("click", addNewTask);

// Event listener for page refresh to check and clear data
window.addEventListener("beforeunload", checkAndClearData);


const digitalClock = document.getElementById("digitalClock");

// Function to update the digital clock
function updateClock() {
  const now = new Date();
  const days = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Septem', 'Octo', 'Novem', 'Decem'];
  
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  digitalClock.innerHTML = `${day}, ${date} ${month} ${year} <br> ${hours}:${minutes}:${seconds}`;
}

// Update the clock immediately when the page loads
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);





