// let x = [3, 5, 7, 9, 12];
// let y = x;
// y [0] = 2
// console.log(`${x} é ${y}`)

// console.log('\n\n\n')

// let mochila = ["machado", "camisa", "bacon", "abacate"]
// console.log(`${mochila}`)

// //adicionando um item a lista
// mochila.push('travesseiro')
// console.log(`${mochila}`)

// console.log('\n\n\n')

// //removendo item da lista
// let ultimoItem = mochila.pop();
// console.log(`${ultimoItem}`)
// console.log(`${mochila}`)

// console.log('\n\n')

// mochila.unshift('novoItem')
// console.log(`${mochila}`)

// let primeiroItem = mochila.shift();
// console.log(primeiroItem)
// console.log(mochila)


// console.log('\n\n')

// // dupla indexação
// console.log(mochila[0][4])


// const s1 = "Lógica de programação e Algoritmos"
//     s1.startsWith('Lógica')
//        if(s1 == 'Lógica'){
//         console.log(s1)
//        }

// let arr = ["Anderson", "Luiza", "Grimmjow"]

//  arr.push("Hannah")
//  console.log(arr)

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

    for (let i = 0; i < arrayLength; i++) {//Enquanto contador for menor que o tamanho da array(começando do índice 0), será adicionado 1 ao contador até chegar no tamano do array
        const valorAtual = arr[i] //a const valorAtual recebe a arr com o contador servindo como indice para acessar um elemento do arr.
        invertedArray.unshift(valorAtual) // adicionando cada elemento do arr iterado pelo contador pela condição for sempre no começo do array na const invertedArray(array vazia)
    }

    return invertedArray  // retornando o resultado da const invertedArray
}

const result = inverterArray([1, 2, 3, 10, 15, 123])
console.log(result)


