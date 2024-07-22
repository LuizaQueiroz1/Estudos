let slides = document.querySelectorAll('.images')
const btnPrev = document.getElementById('prev-buttom')
const btnNext = document.getElementById('next-buttom')

console.log(slides)

let currentSlider = 0

function hideSlide() {
    slides.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slides[currentSlider].classList.add('on')
}

function nextSlider() {
    hideSlide()
    if(currentSlider === slides.length -1 ){
        currentSlider = 0
    } else{
        slides++
    }

    showSlider
}

function prevSlider() {
    hideSlide()
    if(currentSlider === 0){
        currentSlider = slides - 1;
    } else{
        currentSlider--
    }

    showSlider()
}

btnPrev.addEventListener('click', nextSlider)


btnNext.addEventListener('click', prevSlider)





























// const leftButton = document.querySelector('#button-left')
// const rightButton = document.querySelector('#button-right')
// const slides = document.querySelectorAll('.slide')
// const bottom = document.querySelector('.bottom')
// const images = document.querySelectorAll('.image')

// console.log(images)


// const slideNumber = 1
// const imagesLenght = images.length

// for(let i = 0; i < imagesLenght; i++){
//     const div = document.createElement('div');
//     div.className = 'button'
//     bottom.appendChild(div);
    
// }

// const buttons = document.querySelectorAll('.button')
// buttons[0].style.backgroundColor = "white"

// const resetBg = () => {
//     bottom.forEach((buttom) => {
//         buttom.style.backgroundColor = "transparent"
//     });
// }

// buttons.forEach((bott, i)=> {
//     bott.addEventListener('click', ()=> {
//         resetBg()
//         slideNumber.style.transform = `translateX(-${i * 800}px)`
//         slideNumber = i + 1;
//         bott.style.backgroundColor = "white"
//     });
// });

// const nextSlide = () => {
//     slides.style.transform = `translateX(-${slideNumber * 800}px)`;
//     slideNumber++
// }

// const getFirstSlide = () =>{
//     slides.style.transform = `translateX(0px)`
//     slideNumber = 1
// }

// const prevSlide = () => {
//     slides.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`
//     slideNumber--
// }

// const getLastSlide = () => {
//     slides.style.transform = `translateX(-${(slideNumber - 1) * 800}px)`
//     slideNumber = imagesLenght
// }

// rightButton.addEventListener('click', () => {
//     if(slideNumber < imagesLenght){
//         nextSlide()
//     }  else {
//         getFirstSlide()
//     }
//     changeColor()
// })

// const changeColor = () =>{
//     resetBg()
//     buttons[slideNumber - 1].style.backgroundColor = "white";
// }

// leftButton.addEventListener ('click', ()=>{
//    if(slideNumber > 1){
//     prevSlide()
//    } else {
//     getLastSlide()
//    }

//    changeColor() 
// })

