const section2List = document.querySelectorAll('.section2')
const buttonList = document.querySelectorAll('span')
const section1 = document.querySelectorAll('.section1')

console.log(section1)

const buttons = buttonList
console.log(buttons)

section2List.forEach(element => {
    element.classList.add('hidden')
})

buttonList.forEach((element, index) => {
    element.addEventListener('click', () => {

        
        
        const classListBtn = buttonList[index].classList
        if(classListBtn.contains('material-symbols-outlined')){
            buttonList[index].innerHTML = '-'
             
        } else if(!classListBtn.contains('material-symbols-outlined')) {
            buttonList[index].innerHTML = classListBtn
        }

        const classList = section2List[index].classList

       

        if (classList.contains("visible")) {
            section2List[index].classList.remove('visible')
            section2List[index].classList.add('hidden')            
        } else {
            section2List[index].classList.remove('hidden')
            section2List[index].classList.add('visible')
        }

        section1.forEach((element, index) => {
            if(classList.contains("visible")){
                element[index].classList.add('border-radius-left')
                element[index].classList.add('border-radius-right')
            } else {
                element[index].classList.remove('border-radius-left')
                element[index].classList.remove('border-radius-right')
            }
            
            
        })
    })
});




