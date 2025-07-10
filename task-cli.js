#!/usr/bin/env node
const {
  addTask,
  updateTask,
  deleteTask,
  markStatus,
  listTasks,
} = require("./taskManager");

const args = process.argv.slice(2);

const command = args[0];

switch (command) {
  case "add":
    if (args.length < 2) {
      console.log('Usage: task-cli add "description"');
    } else {
      addTask(args.slice(1).join(" "));
    }
    break;

  case "delete":
    if (args.length !== 2) {
      console.log("Usage: task-cli delete <id>");
    } else {
      deleteTask(Number(args[1]));
    }
    break;

  case "update":
    if (args.length < 3) {
      console.log('Usage: task-cli update <id> "new description"');
    } else {
      updateTask(Number(args[1]), args.slice(2).join(" "));
    }
    break;

  case "mark-in-progress":
    markStatus(Number(args[1]), "in-progress");
    break;
  case "mark-done":
    markStatus(Number(args[1]), "done");
    break;

  case "list":
    const status = args[1] || null;
    if (status && !["todo", "done", "in-progress"].includes(status)) {
      console.log("Invalid status, Use todo, done or in-progress");
    } else {
      listTasks(status);
    }
    break;

  default:
    console.log("Unknown command.");
    break;
}
