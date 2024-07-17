// 1 - inserir dados no browser
localStorage.setItem('name', 'luiza')

// 2 -  restart sem perder dados


// 3 - resgatar item 

let nome = localStorage.getItem('name')

console.log(nome)

// resgate de item inexistente

const lastName = localStorage.getItem('lastname')

console.log(lastName)

if(!lastName){
    console.log('não há sobrenome')
}

// 4 - removendo um item 

localStorage.removeItem('name')

// 5 - limpar todos os itens

localStorage.setItem('a', 1)
localStorage.setItem('b', 2)

localStorage.clear()



// SESSION STORAGE

// 1 - Inserir dados no browser
sessionStorage.setItem('a', 1)


// 2 - Reiniciar e perder dados

let a = sessionStorage.getItem('a')

console.log(a)

sessionStorage.clear()

// Como salvar um objeto

let person = {
    name: "luiza",
    age: 21,
    job: "programmer",
    aspiration: "become a software engenner"
}

localStorage.setItem('person', JSON.stringify(person))

// Pegar o objeto

let getPerson = localStorage.getItem('person')

const personObject = JSON.parse(getPerson)

console.log(typeof personObject)

console.log(personObject.job,  personObject.aspiration)

localStorage.clear()
sessionStorage.clear()