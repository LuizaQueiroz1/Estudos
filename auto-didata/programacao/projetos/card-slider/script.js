
const slider = document.querySelectorAll('.slider img')
let currentSlider = 0

inicialeSlider()

function inicialeSlider(){
    if(slider.length > 0){
        slider[currentSlider].classList.add('displayslider')    
    }
}

function showSlider(index){
    
    if(index >= slider.length){
        currentSlider = 0
    } else if(index < 0){
        currentSlider = slider.length - 1 
    }

    slider.forEach(slide => {
        slide.classList.remove('displayslider')
    });

    slider[currentSlider].classList.add('displayslider')
}

function prevSlider(){
    currentSlider--
    showSlider(currentSlider)
}

function nextSlider(){
    currentSlider++
    showSlider(currentSlider)
}

