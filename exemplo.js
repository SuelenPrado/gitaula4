document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a delete button for each task
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = '❌';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    taskInput.value = ''; // Clear input after adding task
});
