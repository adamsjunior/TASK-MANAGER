const taskform = document.getElementById('task-form');
const taskinput = document.getElementById('task-input');
const tasklist = document.getElementById('task-list');


taskform.addEventListener('submit' , function(event){
    event.preventDefault();
    // console.log('hello')
    const tasktest = taskinput.value.trim();

    if(tasktest !== '') {
        addtask(tasktest);
        taskinput.value = '';
        taskinput.focus();
    }
});

function addtask(text) {
    const taskitem = document.createElement('li');
    taskitem.className = 'task-item';
    taskitem.innerHTML = `
    ${text}
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Edit</button>
    `;

    const deleteBtn = taskitem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click' , function(){
        taskitem.remove();
    });

    const editBtn = taskitem.querySelector('.edit-btn');
    editBtn.addEventListener('click',function(){
        const newText = prompt('Enter new task test:', text);
        if (newText !==null && newText.trim() !==''){
            taskitem.firstChild.textContent = newText;
        }
    })
    tasklist.appendChild(taskitem);
}