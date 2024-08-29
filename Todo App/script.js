// script.js

// Select the necessary elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    // Mark task as completed on click
    li.onclick = function () {
        li.classList.toggle('completed');
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Event listener for adding a task
addTaskButton.addEventListener('click', addTask);

// Optionally, add tasks with the Enter key
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
