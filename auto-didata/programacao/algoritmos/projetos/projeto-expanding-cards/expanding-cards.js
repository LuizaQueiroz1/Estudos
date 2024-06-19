


let div = document.querySelectorAll("card")

console.log(div)

div.addEventListener("onClick", function() {
    let card = document.querySelector(".card");
    card.classList.toggle('.active')
})