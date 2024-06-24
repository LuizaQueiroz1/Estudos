// este arquivo JavaScript está controlando o pádiga no arquivo index.html

// tags em html > são os nomes dos elementos
// ex.1 -> um botão tem está contido na tag "button"
// ex.2 -> uma lista não ordenada está contida na tag "ul"

// para acessar um elemento da árvore de elementos da página utilizamos a interface DOM. 
// link de referência para quando esquecer-me: https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction

const interactiveSectionByTagName_1 = document.getElementsByTagName("section")[0]
const interactiveSectionByTagName_2 = document.getElementsByTagName("section")[1]
const interactiveSectionByTagName_3 = document.getElementsByTagName("section")[0]

// printando no console
console.log(interactiveSectionByTagName_1)

// atulizando elemento específico no dom
interactiveSectionByTagName_1.innerText = "Oi, eu sou o Goku"


// adicionando elemento ao dom 
// adicinando elemento à section 2 no DOM

const paragrafo = document.createElement("p")
paragrafo.innerText = "eu sou um lindo parágrafo!"

interactiveSectionByTagName_2.appendChild(paragrafo)



//criando uma div
const div = document.createElement("div")
div.innerHTML = "Hello, world!"

//atribuindo a div a section 1
interactiveSectionByTagName_3.appendChild(div)

//criando uma conts para guardar a div
const interactiveDivByTagName = document.getElementsByTagName("div")[0]

//criando uma ul
const ul = document.createElement("ul")
ul.innerHTML = "hi, i'm a unurdenated list" 



//adicionando a ul a div
interactiveDivByTagName.appendChild(ul)


const li = document.createElement("li")
li.innerHTML = "hello, it's me again"


// const interactiveUlByTagName = document.getElementsByTagName("ul");

// interactiveUlByTagName.appendChild(li)


//FORMAS DE PEGAR ELEMENTOS:

//pegando por id
let myElementById = document.getElementById("intro")
console.log(myElementById);



//pegando por tag

let elementByTagName = document.getElementsByTagName("p");
console.log(elementByTagName)


//encontra o elementp(tag) com id "intro" e depois encontra todos os elementos h2 dentro de "intro"  

let x = document.getElementById("intro")
let y = x.getElementsByTagName("h2")
console.log(y)


//ENcontrando elementos pelo nome classe
let z = document.getElementsByClassName("interactive_section")
console.log(z);

//encontrando elementos HTML por seletores CSS;
//serve para encontrar elementos que correspondem a seletores específicos(id, nomes de classes, tipos, atributos, valores de atributos, etc...);
//esse exemplo retorna uma lista de todos os elementos "P" com class="zzz".
 
let i = document.querySelectorAll("p.zzz")
console.log(i);


let alterando = document.getElementsByTagName("p")[1]

alterando.innerHTML = "Alterei aqui";
 
console.log(alterando)


// let alterando = document.getElementById("interactive")