// Task model
class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

// Array to store tasks
let tasks = [];

// Function to add a new task
const addTask = (name, description) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    tasks.push(new Task(id, name, description));
    console.log(`Task added: ${JSON.stringify(tasks[tasks.length - 1])}`);
};

// Function to view all tasks
const viewTasks = () => {
    console.log("All tasks:");
    tasks.forEach(task => console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`));
};

// Function to update a task
const updateTask = (id, newName, newDescription) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log(`Task updated: ${JSON.stringify(task)}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
};

// Function to delete a task
const deleteTask = (id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        console.log(`Task deleted: ${JSON.stringify(tasks.splice(index, 1)[0])}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
};

// Example usage
addTask("Task 1", "Description for Task 1");
addTask("Task 2", "Description for Task 2");
viewTasks();
updateTask(1, "Updated Task 1", "Updated Description for Task 1");
viewTasks();
deleteTask(2);
viewTasks();