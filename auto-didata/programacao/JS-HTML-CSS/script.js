function eventoClick() {
    alert("Acionou um evento de click");
    document.body.style.background = "purple";
}

function eventodblClick() {
    alert("evento de clique duplo")
}

function eventoMouseOver() {
    let d = document.getElementById("onmouseoverANDonmouseout")
    d.style.borderRadius = "50%"
    d.style.background = "red"
}

function eventoMouseOut(){
    let d = document.getElementById("onmouseoverANDonmouseout");
    d.style.width = "300px"
    d.style.height = "200px"
    d.style.background = "blue"
    d.style.borderRadius = "0%"
}

// function eventoMouseMove(){
//     let p = document.getElementById("texto")
//     p.append("Moveu o mouse")

// }

function limpaTexto(){
    document.getElementById("campoTexto").value = "";

}

function mudou(){
    console.log("Mudou")

}

function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input)

}

