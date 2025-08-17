document.getElementById('addButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Do nothing if input is empty

    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">-</button>
    `;

    // Mark task as completed
    li.querySelector('.task-text').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Delete task
    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Add task to list
    taskList.appendChild(li);
    
    // Clear the input field
    taskInput.value = '';
}
