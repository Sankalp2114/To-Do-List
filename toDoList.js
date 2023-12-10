let newTask = "";
let inputTask = document.getElementById('input');
let submitBtn = document.getElementById('submit');
function addTask() {
    let taskText = inputTask.value.trim();
    if (taskText !== '') {
        let newTask = document.createElement('li');
        let taskSpan = document.createElement('span');
        taskSpan.innerText = taskText;
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteTask(newTask);
        });
        newTask.appendChild(checkbox);
        newTask.appendChild(taskSpan);
        newTask.appendChild(deleteButton);
        let taskList = document.getElementById('taskList');
        taskList.appendChild(newTask);
        inputTask.value = '';
    }
}


function toggleTaskCompletion(task) {
    task.classList.toggle('completed');
}

function deleteTask(task) {
    task.remove();
}
taskList.addEventListener('change', function (event) {
    if (event.target.type === 'checkbox') {
        let task = event.target.closest('li');
        if (task) {
            toggleTaskCompletion(task, event.target);
        }
    }
});
