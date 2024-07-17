const todoInput = document.getElementById('add')
const uncheckedBnt = document.getElementById('unchecked-png')
const bntInput = document.getElementById('btn')
const listContainer = document.getElementById('list-container')






//functions


function addTodo() {
    let span = document.createElement('span')

    if (todoInput.value === '') {
        alert('You must write something')
    } else {
        const li = document.createElement('li')
        li.classList.add('removeItem')
        li.innerHTML = todoInput.value
        listContainer.appendChild(li)
        li.style.listStyleType = 'none'


        span.innerHTML = '\u00d7'
        li.appendChild(span)

    }

    todoInput.value = '';

    saveData();
    
}

function saveData(){
    localStorage.setItem('todos', JSON.stringify(listContainer.innerHTML))
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('todos')
}

showTask()


//Events

bntInput.addEventListener('click', () => {
    addTodo()

})


listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked')
        saveData()

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)







