 let tasks = [];

    function renderTasks() {
           const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = "flex justify-between items-center bg-gray-50 p-2 mb-2 rounded shadow";
        
        const taskTitle = document.createElement('span');
        taskTitle.innerText = task.title + (task.completed ? ' (Completed)' : '');
        
        const completeButton = document.createElement('button');
        completeButton.innerText = 'Mark Complete';
        completeButton.className = "bg-green-500 text-white px-2 rounded mr-2 hover:bg-green-600 transition";
        completeButton.onclick = (e) => {
            e.stopPropagation();
            toggleTask(task.id);
        };

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = "bg-red-500 text-white px-2 rounded hover:bg-red-600 transition";
        deleteButton.onclick = (e) => {
            e.stopPropagation();
            deleteTask(task.id);
        };

        li.appendChild(taskTitle);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
    }

    function addTask() {
        const taskInput = document.getElementById('taskInput');
        if (taskInput.value) {
            tasks.push({ id: tasks.length + 1, title: taskInput.value, completed: false });
            taskInput.value = '';
            renderTasks();
        }
    }

    function toggleTask(id) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            renderTasks();
        }
    }

    function deleteTask(id) {
        tasks = tasks.filter(t => t.id !== id);
        renderTasks();
    }

    renderTasks();