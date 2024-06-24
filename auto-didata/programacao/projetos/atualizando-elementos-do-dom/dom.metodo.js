let button = document.querySelector("#button");
let message = document.querySelector("#message");

button.addEventListener("click", ()=>{
    message.classList.toggle('reveal');
} )