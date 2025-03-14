const API_URL = "http://127.0.0.1:8000/todos/";

async function toggleComplete(id, isChecked) {
  const taskElement = document.querySelector(`#task-${id}`);
  const task = taskElement ? taskElement.innerText : "";
  //console.log(id, task, isChecked);
  const response = await fetch(`${API_URL}${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task: task,
      completed: isChecked,
    }),
  });

  if (response.ok) {
    taskElement.classList = isChecked ? "line-through" : "";
    //loadTasks();
  } else {
    console.error("Erreur lors de la mise à jour de l'état de la tâche");
  }
}

const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task-btn");

async function loadTasks() {
  taskList.innerHTML = "";
  const response = await fetch(API_URL);
  const tasks = await response.json();
  tasks.forEach((task) => addTaskToDOM(task));
}

function addTaskToDOM(task) {
  taskList.appendChild(createItem(task));
}

function createItem(task) {
  const taskItem = document.createElement("li");
  taskItem.className =
    "flex justify-between items-center bg-gray-100 px-4 py-2 rounded shadow";
  taskItem.innerHTML = `
      <label class="flex items-center space-x-2">
        <input 
          type="checkbox" 
          ${task.completed ? "checked" : ""} 
          onchange="toggleComplete(${task.id},this.checked)"
          class="form-checkbox h-5 w-5 text-green-500"
        />
        <span id=task-${task.id} class="${
    task.completed ? "line-through text-gray-500" : ""
  }">
          ${task.task}
        </span>
      </label>
      <div class="space-x-2">
        <button class="edit-btn text-blue-500 hover:text-blue-700">✏️</button>
        <button class="delete-btn text-red-500 hover:text-red-700">🗑️</button>
      </div>
    `;

  taskItem.querySelector(".delete-btn").addEventListener("click", async () => {
    await deleteTask(task.id);
  });

  taskItem.querySelector(".edit-btn").addEventListener("click", () => {
    editTask(task);
  });
  return taskItem;
}

async function createTask(task) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, completed: false }),
  });

  if (response.ok) {
    taskList.prepend(createItem({ task, completed: false }));
    //loadTasks();
  }
}

async function updateTask(id, task, completed) {
  const response = await fetch(`${API_URL}${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, completed }),
  });

  if (response.ok) {
    let elemt = document.getElementById(`task-${id}`);
    elemt.innerHTML = task;
    //loadTasks();
  }
}

async function deleteTask(id) {
  const response = await fetch(`${API_URL}${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    let elemt = document.getElementById(`task-${id}`);
    elemt.parentElement.parentElement.remove();
  }
}

addTaskButton.addEventListener("click", () => {
  const task = newTaskInput.value.trim();
  if (task) {
    createTask(task);
    newTaskInput.value = "";
  }
});

function editTask(task) {
  const newTask = prompt("Modifier la tâche :", task.task);
  if (newTask !== null) {
    updateTask(task.id, newTask, task.completed);
  }
}

loadTasks();
