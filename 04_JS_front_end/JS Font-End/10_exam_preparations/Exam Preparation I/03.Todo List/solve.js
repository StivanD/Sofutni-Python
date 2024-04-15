function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/tasks';
    const loadAllButton = document.getElementById('load-button');
    const addButton = document.getElementById('add-button');
    const titleInput = document.getElementById('title');
    const todoList = document.getElementById('todo-list');

    async function loadTasks(e) {
        try {
            if (e) {
                e.preventDefault();
            }
            const response = await fetch(baseUrl);
            if (!response.ok) throw new Error('Failed to load tasks');
            const data = await response.json();
            renderTasks(data);
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    }

    function renderTasks(tasks) {
        todoList.innerHTML = '';
        Object.values(tasks).forEach(task => {
            const taskLiElement = createTaskLiElement(task);
            todoList.appendChild(taskLiElement);
        });
    }

    function createTaskLiElement(task) {
        const liElement = document.createElement('li');
        const spanElement = document.createElement('span');
        const removeButton = document.createElement('button');
        const editButton = document.createElement('button');

        spanElement.textContent = task.name;
        removeButton.textContent = 'Remove';
        editButton.textContent = 'Edit';

        removeButton.addEventListener('click', e => removeTask(task._id, liElement));
        editButton.addEventListener('click', e => editTask(task, liElement));

        liElement.appendChild(spanElement);
        liElement.appendChild(removeButton);
        liElement.appendChild(editButton);

        return liElement;
    }

    async function removeTask(taskId, taskLiElement) {
        try {
            const response = await fetch(`${baseUrl}/${taskId}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Failed to delete task');
            taskLiElement.remove();
        } catch (error) {
            console.error('Error removing task:', error);
        }
    }

    function editTask(task, taskLiElement) {
        const spanEl = taskLiElement.querySelector('span');
        spanEl.remove();

        const inputField = document.createElement('input');
        inputField.value = task.name;
        taskLiElement.insertBefore(inputField, taskLiElement.childNodes[0]);

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        taskLiElement.appendChild(submitButton);

        const editButton = taskLiElement.querySelector('button:nth-child(3)');
        editButton.remove();

        submitButton.addEventListener('click', e => submitEditedTask(task._id, inputField.value));
    }

    async function submitEditedTask(taskId, newName) {
        try {
            const response = await fetch(`${baseUrl}/${taskId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ name: newName }),
            });
            if (!response.ok) throw new Error('Failed to edit task');
            await loadTasks();
        } catch (error) {
            console.error('Error submitting edited task:', error);
        }
    }

    addButton.addEventListener('click', async e => {
        e.preventDefault();
        try {
            if (!titleInput.value) return;
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ name: titleInput.value }),
            });
            if (!response.ok) throw new Error('Failed to add task');
            titleInput.value = '';
            await loadTasks(e);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    });

    loadAllButton.addEventListener('click', loadTasks);

}

attachEvents();
