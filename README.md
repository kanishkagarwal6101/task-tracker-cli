# 📝 Task Tracker CLI

A simple Command Line Interface (CLI) application to manage your daily tasks — built with **Node.js** using only native modules. Add, update, delete, and track your tasks right from the terminal. I coded this to practice and revise js and backend using roadmap.sh and their projects: https://roadmap.sh/projects/task-tracker. A great resource

---

## 🚀 Features

- Add new tasks
- Update existing tasks
- Delete tasks
- Mark tasks as **in progress** or **done**
- List all tasks or filter by status
- Stores tasks in a local `tasks.json` file

---

## 🛠 Setup

### 1. Clone the Repository

git clone https://github.com/your-username/task-tracker-cli.git
cd task-tracker-cli

### 2 Make the CLI Executable (Optional)

Add this shebang line at the top of task-cli.js:

`   #!/usr/bin/env node   `

Make it executable:

`   chmod +x task-cli.js   `

Then run it like this:

`   ./task-cli.js add "Buy groceries"   `

Or create a shell alias (optional):

`   alias task-cli="node /full/path/to/task-cli.js"   `

📦 Usage
--------

### Add a new task

`   node task-cli.js add "Buy groceries"   `

### Update an existing task

`   node task-cli.js update  "New task description"   `

### Delete a task

`node task-cli.js delete` 

### Mark a task as in progress

`node task-cli.js mark-in-progress` 

### Mark a task as done

`node task-cli.js mark-done` 

### List all tasks

`   node task-cli.js list   `

### List tasks by status

`   node task-cli.js list todo  node task-cli.js list in-progress  node task-cli.js list done   `

📂 Task Structure
-----------------

Each task saved in tasks.json looks like this:

`   {    "id": 1,    "description": "Buy groceries",    "status": "todo",    "createdAt": "2025-07-10T18:00:00.000Z",    "updatedAt": "2025-07-10T18:00:00.000Z"  }   `

📁 File Overview
----------------

*   task-cli.js — CLI entry point and command handler
    
*   taskManager.js — Task logic (add, update, delete, list)
    
*   tasks.json — JSON database (auto-created if not found)
    

⚠️ Constraints
--------------

*   Uses only **built-in Node.js modules**
    
*   Stores tasks locally in tasks.json
    
*   Works on **Linux**, **macOS**, and **Windows**
    

🧪 Example Commands
-------------------

node task-cli.js add "Finish project report"  # Output: Task added successfully (ID: 1)  
node task-cli.js mark-in-progress 1  # Output: Task marked as in-progress.  
node task-cli.js list in-progress  # Output:  # [1] Finish project report (in-progress) - Created: 2025-07-10T18:00:00Z   `


**Kanishk Agarwal**Built with ❤️ and the power of simplicity.
