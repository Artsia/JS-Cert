// Get the container element
const container = document.getElementById('container');

// Function to create a new task
function createTask() {
  // Get the user input
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value;

  if (taskText.trim() !== '') {
    // Create the new task div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create the paragraph
    const taskParagraph = document.createElement('p');
    taskParagraph.textContent = taskText;

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; // Assuming you have a font awesome trash icon

    // Append the elements to the task div
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskParagraph);
    taskDiv.appendChild(deleteButton);

    // Append the task div to the container
    container.appendChild(taskDiv);

    // Clear the input
    taskInput.value = '';
  }
}

// Add event listener to the add button
const addButton = document.getElementById('taskbtn');
addButton.addEventListener('click', createTask);
