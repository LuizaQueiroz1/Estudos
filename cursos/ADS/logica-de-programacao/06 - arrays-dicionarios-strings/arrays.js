let x = [3, 5, 7, 9, 12];
let y = x;
y [0] = 2
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
       if(s1 == 'Lógica'){
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
            if ( (i !== j) && (arr[i] === arr[j])) {
                isDuplicated = true
            }
        }

        if (!isDuplicated) {
            arrayFiltrado.push(arr[i])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const elemento =  arr[i]

        if(!arrayFiltrado.includes(elemento)){
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

function concatenarArray(array1, array2){
    const array3 = array1.concat(array2)
    return array3
}

const resultadoConcatenar = concatenarArray([0, 7, 0, 7], [2, 0, 0, 3])
console.log(resultadoConcatenar)