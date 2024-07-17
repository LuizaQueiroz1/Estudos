const nameForm = document.querySelector('#name-form')
const welcomeDiv = document.querySelector('#welcome')
const logOut = document.querySelector('#logout')


function checkUser(){
    let userName = localStorage.getItem('name')

    if(userName){
        nameForm.style.display = "none"

        welcomeDiv.style.display = "block"

        const userNameElement = document.querySelector('.username')

        userNameElement.innerHTML = userName;
    } else {
        nameForm.style.display = 'block';
        welcomeDiv.style.display = 'none'
    }
}


nameForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const nameInput = document.querySelector('#name')

    localStorage.setItem('name', nameInput.value)

    nameInput.value = '';

    checkUser()
})

checkUser()


logOut.addEventListener('click', ()=> {

localStorage.removeItem("name");
checkUser()

}) 
checkUser()




















localStorage.removeItem('person')