const { DESTRUCTION } = require("dns");
const fs = require("fs");
const path = require("path");

const FILE_NAME = path.join(__dirname, "tasks.json");

function loadTasks() {
  if (!fs.existsSync(FILE_NAME)) return [];
  const data = fs.readFileSync(FILE_NAME, "utf8");
  return data ? JSON.parse(data) : [];
}

const saveTasks = (tasks) => {
  fs.writeFileSync(FILE_NAME, JSON.stringify(tasks, null, 2));
};

const getTimeStamp = () => {
  return new Date().toISOString();
};

const generateId = (tasks) => {
  return tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
};

const addTask = (description) => {
  const tasks = loadTasks();
  const newTask = {
    id: generateId(tasks),
    description,
    status: "todo",
    createdAt: getTimeStamp(),
    uodatedAt: getTimeStamp(),
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log(`Task added successfully (ID: ${newTask.id}`);
};

const updateTask = (id, description) => {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) return console.log("Task not found");
  task.description = description;
  task.updatedAt = getTimeStamp();
  saveTasks(tasks);
  console.log("update successful");
};

const deleteTask = (id) => {
  const tasks = loadTasks();
  const filtered = tasks.filter((t) => t.id !== id);
  if (filtered.length === tasks.length) console.log("task not found");
  saveTasks(filtered);
  console.log("delete successful");
};

const markStatus = (id, status) => {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) return console.log("Task not found");
  task.status = status;
  task.updatedAt = getTimeStamp();
  saveTasks(tasks);
  console.log(`Task marked as ${status}`);
};

const listTasks = (status) => {
  const tasks = loadTasks();
  const filtered = status ? tasks.filter((t) => t.status === status) : tasks;
  if (!filtered.length) return console.log("No tasks found");
  filtered.forEach((t) =>
    console.log(
      `[${t.id}] ${t.description} (${t.status}) - Created: ${t.createdAt}`
    )
  );
};

module.exports = {
  addTask,
  updateTask,
  deleteTask,
  markStatus,
  listTasks,
};
