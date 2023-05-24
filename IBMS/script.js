// Get the container element
const container = document.getElementById('container');

// Function to create a new task
function createTask() {

  const maxStringLength = 7;

  // Get the user input
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value;

  if (taskText.trim() !== '') {
    // Create the new task div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const maindiv = document.createElement('div');
    maindiv.classList.add('maindiv');
    //maindiv.style.overflowY = 'scroll';

    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create the paragraph
    const taskParagraph = document.createElement('p');
    taskParagraph.classList.add('task-paragraph')
    taskParagraph.textContent = taskText;

    if (taskParagraph.textContent.length > maxStringLength) {
      //wordwrap or add scrollbar
      taskParagraph.style.overflowX = 'scroll';
    }

    // Create the delete button with image
    const delimg = document.createElement('img');
    delimg.src = './del.png';
    delimg.classList.add('task-image')

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('del-btn')
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; // Assuming you have a font awesome trash icon
    deleteButton.appendChild(delimg);

    // Append the elements to the task div
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskParagraph);
    taskDiv.appendChild(deleteButton);

    //maindiv.appendChild(taskDiv)

    // Append the task div to the container
    container.appendChild(taskDiv);

    container.classList.add('container')
    container.style.overflowY = 'scroll';


    // Clear the input
    taskInput.value = '';
  }
}







// Add event listener to the add button
const addButton = document.getElementById('taskbtn');
addButton.addEventListener('click', createTask);
