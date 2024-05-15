let x = [3, 5, 7, 9, 12];
let y = x;
y[0] = 2
console.log(`X ${x}  É  Y ${y}`)

console.log('\n\n\n')

let mochila = ["machado", "camisa", "bacon", "abacate"]
console.log(`${mochila}`)

//adicionando um item a lista




//removendo item no inicio da lista
mochila.shift('machado')
console.log(`${mochila}`)

console.log('\n\n')

mochila.pop('travesseiro')
console.log(`${mochila}`)
//adicionando sempre no começo do array


console.log('\n\n\n')

// dupla indexação
console.log(mochila[0][4])


const s1 = "Lógica de programação e Algoritmos"
s1.startsWith('Lógica')
if (s1 == 'Lógica') {
    console.log(s1)
}

let arr = ["Anderson", "Luiza", "Grimmjow"]

arr.push("Hannah")
console.log(arr)

// arr.pop()

// console.log(arr)
// arr.unshift("Hannnah")
// console.log(arr)

// arr.shift()

// console.log(arr)

// console.log(arr[2])

function inverterArray(arr) {
    const arrayLength = arr.length // retorna o tamanho do array
    const invertedArray = []

    for (let i = 0; i < arrayLength; i++) {//Enquanto contador for menor que o tamanho da array(começando do índice 0), será adicionado 1 ao contador até chegar no tamanho do array
        const valorAtual = arr[i] //a const valorAtual recebe a arr com o contador servindo como indice para acessar um elemento do arr.
        invertedArray.unshift(valorAtual) // adicionando cada elemento do arr iterado pelo contador pela condição 'for' sempre no começo do array na const invertedArray(array vazia)
    }

    return invertedArray  // retornando o resultado da const invertedArray
}

const result = inverterArray([1, 2, 3, 10, 15, 123])
console.log(result)


console.log("\n\n\n\n")


function maiorNumero(arr) {
    let maior = 0

    for (let valorAtual = 0; valorAtual < arr.length; valorAtual++) {
        if (arr[valorAtual] > maior) {
            maior = arr[valorAtual]
        }
    }
    return maior
}

const resultado = maiorNumero([10, 40, 60])
console.log(resultado)

console.log("\n\n\n\n\n")

function numerosPares(arr) {
    const divisor = 2
    let voidArray = []

    for (let i = 0; i < arr.length; i++) { // os indices de array começam em 0 e vão até arr.length -1
        if (arr[i] % divisor === 0) { // para verificar se o número é par devo adicionar % no proprio número, não no array inteiro
            const arrayAtual = arr[i]
            voidArray.push(arrayAtual) // adicionar os elementos no final do array

        }
    } return voidArray
}

const resultadoNumeroPar = numerosPares([2, 7, 10, 5, 9, 4, 6])
console.log(resultadoNumeroPar)


console.log("\n\n\n\n\n")


function somaDeElementos(arr) {
    let resultado = 0


    for (let i = 0; i < arr.length; i++) {
        resultado += arr[i]
    } return resultado
}

const resultadoSoma = somaDeElementos([10, 10, 5])
console.log(resultadoSoma)


console.log("\n\n\n\n\n")


function existenciaDeElemento(arr, elemento = "Luiza") {
    let vazia = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elemento) {
            const actualArray = arr[i]
            vazia.push(actualArray)
            console.log(arr)
        }

    } return vazia
}

const resultadoElemento = existenciaDeElemento(["Anderson", "Luiza", "Matheus"])
console.log(resultadoElemento)

console.log("\n\n\n\n")


function ocorrenciaDeValor(arr, valor) {

    let contador = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == valor) {
            // const arrayValue = arr[i]
            contador = contador + 1
        }
        // se eu quisesse que o programa procurasse de forma automatica os números repetidos
        // for (let j = 0; j < arr.length; j++){
        //     // lógca que verifica se o indice J === indice I. Se for não fazer nada
        //     // contrário, verifica se o elemento em j == i, verdadeiro, entã salva no array de numeros repetidos
        // }
    } return contador
}



const resultOcorrencia = ocorrenciaDeValor([2, 2, 5, 6, 6, 7], 6)
console.log(resultOcorrencia)

console.log("\n\n\n\n")

function removendoDuplicadas(arr = []) {
    const arrayFiltrado = []

    for (let i = 0; i < arr.length; i++) {
        let isDuplicated = false

        for (let j = 0; j < arr.length; j++) {
            if ((i !== j) && (arr[i] === arr[j])) {
                isDuplicated = true
            }
        }

        if (!isDuplicated) {
            arrayFiltrado.push(arr[i])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const elemento = arr[i]

        if (!arrayFiltrado.includes(elemento)) {
            arrayFiltrado.push(elemento)
        }
    }

    return arrayFiltrado

    // const filteredArray = arr.filter((elemento, index) => {

    //     let duplicated = false
    //     for (let i = 0; i < arr.length; i++) {
    //         if (index !== i) duplicated = elemento === arr[i];
    //         if (duplicated) break;
    //     }

    //     return !duplicated
    // })

    // return arr.reduce((prev, curr) => {
    //         console.log(prev)
    //         console.log(curr)

    //         return (prev.includes(curr) ? prev : prev.push(curr))
    //     }, filteredArray)
}

const resultadoDuplicadas = removendoDuplicadas([2, 2, 3, 4, 4, 4, 5])
console.log(resultadoDuplicadas)

console.log("\n\n\n\n")

function concatenarArray(array1, array2) {
    const array3 = array1.concat(array2)
    return array3
}

const resultadoConcatenar = concatenarArray([0, 7, 0, 7], [2, 0, 0, 3])
console.log(resultadoConcatenar)


console.log("\n\n\n\n\n")


let carros = ["BMW", "Auston Martim", "Ferrari", "Buggati"]

console.log(carros)

// modificar qualquer item de um array
carros[1] = "Lamborghini"

console.log(carros)

let carrosUm = carros[2] //é como declacar uma string com o valor Ferrari

console.log(carrosUm)


console.log("\n\n\n\n\n")

let dadosObjeto = {
    nome: "lulu",
    idade: 20,
    endereco: "Rua Guarajuba"
}

for (dados in dadosObjeto) {
    console.log('Chave: ' + dados + ', Valor: ' + dadosObjeto[dados])
}


console.log("\n\n\n\n\n")


let dadoObjeto = ['luiza', 20, 'Rua Guarajuba', 'site'];

for (dado in dadoObjeto) {
    console.log('valor:' + dadoObjeto[dado])
}


console.log("\n\n\n\n")

let dadoObject = ['luiza', 20, 'Rua Guarajuba', 'site'];

for (dado of dadoObject) {
    console.log(dado)
}


console.log("\n\n\n\n")

let nomes = ['miciline', 'João', 'Maria']
for (dedo in nomes) {
    console.log(dedo)
}

let people = { nome: 'Anderson', idade: 21, profissao: 'Programador' }

for (dadoz in people) {
    console.log(dadoz)// retorna os valores(values)
}

console.log("\n\n\n\n")

//mostrando os valores dos objetos 
let bebida = {
    a: 'Cevada',
    b: 'Suco',
    c: 'Café'
}

for (bebi in bebida) {
    console.log(bebida[bebi])
}


console.log("\n\n\n\n")

//mostrando os valores dos objetos no array
console.log('EXEMPLO COM ARRAY')
let bebidas = ['Cevada',
    'Suco',
    'Café']


for (bebiz in bebida) {
    console.log(bebida[bebiz])
}

console.log("\n\n\n\n")

//verificando o tamanho do array
let names = ['micilini', 'joão ', 'Maria']
console.log(names.length)

if (names.length > 0) {
    console.log("O array está cheio")
} else { console.log("O array está vazio") }



console.log("\n\n\n\n")

//unindo arrays
let arr1 = ['a', 'b', 'c',]
let arr2 = ['d', 'e', 'f']

console.log(arr1.concat(arr2))


const array1 = ['a', 'b', 'c', 'd']
const array2 = array1.copyWithin(0,1)//mandando o elemendo do índice '1' para o '0' 
console.log(array2)


console.log("\n\n\n\n")

//retornando um objeto com chave(key) e valor(value) de uma array.
const arra1 = ['a', 'b', 'c']
const iterador = arra1.entries();

console.log(iterador.next().value) 
console.log(iterador.next().value)
console.log(iterador.next().value)


console.log("\n\n\n\n")

//verificação como o every
function verificaIdade(valor){
    return valor < 30
}
    const idades = [23, 25, 17, 28, 29,]
    console.log(idades.every(verificaIdade))

let array = [1,2,3,4,]
console.log(array.fill(7,1))

function somenteNomesCom5Caracteres(valor){
        return valor.length <= 0;
    }

    let nomez = ['micilini', 'lulu','edu']
    const results = nomez.filter(somenteNomesCom5Caracteres);
    console.log(results)    

    function somenteNomesCom5Caracteres(valor){
        return valor.length <= 0;
        }
        
        const resultss = somenteNomesCom5Caracteres([ 'lulu', 'edu'])   
        console.log(resultss)
    
        
console.log("\n\n\n\n\n")

function maiorQueDez(valor){
    return valor > 10
}    

const resultadoz = [7, 5, 6, 10, 19, 20, 21, 30]
console.log(resultadoz.find(maiorQueDez))


console.log("\n\n\n\n\n")

function maiorQueDez(valor){
    return valor > 10
}


const resul = [5, 9, 10, 7, 12, 50]
console.log(resul.findLast(maiorQueDez))



let arry = [2,3,5,[8,10,13], [16,18]]
    console.log(arry.flat())



     let arryy = [2,3,5,[8,10,13,[2,3,4]], [16,18]]
    console.log(arryy.flat(2))


function verificaSeNumeroDois(valor){
        if(valor === 2){
            return [9,9]
        } else{
            return 0 
        }
    }

   let array11 = [3,4,5,2,7,8,2]
   let resultadoss = array11.flatMap(verificaSeNumeroDois)
   
   console.log(resultadoss)//[0,0,0,9,9,0,0,9,9]


   let arr111 = ['lulu', 20]

    arr111.forEach(function(valor,chave){console.log('Chave: ' + chave + ', Valor: ' + valor)})

