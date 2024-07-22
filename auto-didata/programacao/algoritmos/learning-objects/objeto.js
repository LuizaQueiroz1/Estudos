const input = document.querySelector('#name')
const age = document.querySelector('#age')
const button = document.querySelector('#btn')

const nameForm = document.querySelector('#name-form')

const person = {
    name: ["Maria", "Dionisia"],
    age: 50,
    job: "Jornalist",

    saudacoes: function(){
        alert('Oi, eu sou ' + this.name[0] + ' e tenho ' + this.age + ' anos')
    }


};
// console.log(person.saudacoes())



nameForm.addEventListener('submit', (e)=> {
    e.preventDefault

    localStorage.setItem('age', age.value)
    localStorage.setItem('name', input.value)

    input.value = ''

    const ageValue = localStorage.getItem('age')
    const nameValue = localStorage.getItem('name')

    person[ageValue] = nameValue

    console.log(person.ageValue)

})





