const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const form=document.querySelector("form")

function addTodo(event) {

    event.preventDefault();

    const todoText = todoInput.value;

    if (todoText.trim() === '') {
        return;
    }

    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = todoText;

    todoList.appendChild(newTodoItem);

    todoInput.value = '';
}

form.addEventListener("submit",addTodo);