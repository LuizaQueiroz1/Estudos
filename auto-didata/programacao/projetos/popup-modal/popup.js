let button = document.querySelector("button")
let modal = document.querySelector("dialog")

let fechar = document.querySelector("#fechar")

button.onclick = function(){
    modal.showModal()
}

fechar.onclick = function(){
    modal.close()
}

