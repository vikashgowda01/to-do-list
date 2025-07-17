const taskForm=document.getElementById('taskForm');
const taskInput=document.getElementById('taskInput');
const taskList=document.getElementById('taskList');

taskForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();

    if(taskText !== ''){
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText){
    const li = document.createElement('li');

    const taskName = document.createElement('span');
    taskName.className='task-name';
    taskName.textContent=taskText;

    const editButton = document.createElement('button');
    editButton.className='edit';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(taskName));

    const deleteButton = document.createElement('button');
    deleteButton.className='delete';
    deleteButton.textContent='Delete';
    deleteButton.addEventListener('click', () => deleteTask(li));
    
    li.appendChild(taskName);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

function editTask(taskName){
    const newTaskTeaxt=prompt('Edit Task:',taskName.textContent);
    if (newTaskTeaxt!== null && newTaskTeaxt.trim() !== ''){
        taskName.textContent= newTaskTeaxt.trim();
    }
}

function deleteTask(taskItem){
    taskList.removeChild(taskItem);
}