const todoInput = document.getElementById('add')
const uncheckedBnt = document.getElementById('unchecked-png')
const bntInput = document.getElementById('btn')

const li = document.querySelector('#li')

//functions

function addToDo(){
    let todos = getTodos()

    if(todoInput){
        todos.push(todoInput)

        localStorage.setItem('todo', JASON.stringify(todos))

        document.getElementById('add').value = ''
    }
    document.location.reload(true)
}

function getTodos(){
    let todos = []

    let todosString = localStorage.getItem('todos')

    if(todosString != null){
        return JASON.parse(todosString)
    }
}

function showTodos(){
    let todos = getTodos()

    let html = "<ul>"

    todos.forEach(function(elemento, index) {
        html + '<li>' + elemento  + '<button class="remove" id="' + index +'">remover</button></li>'
    });

    html += '</ul>';

    let buttons = document.getElementsByClassName("remove")

    for(let i = 0; i < buttons.length; i++ ){
        buttons[i].addEventListener('click', removeTodo)
    }
}

function removeTodo(){
    let id = this.getAttribute('id')
}



//Events

bntInput.addEventListener('click', () =>{
    li.innerHTML = todoInput.value
    
})


