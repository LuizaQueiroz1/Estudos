
// let i = 1

// doSmething (() => {
//     i = 5
// })

// console.log(i)

// metódo DOM innerHTML -> retorna o texto de um elemento html. 
// elemento.style.cssText -> para adicionar vários tipos de estilos a um elemento html
// estudar requisição HTTP

// Arrow Function
let soma = (numero1, numero2) => numero1 + numero2;

console.log(soma(5, 5))

//

function iterandoArray(arr) {

    let posArray = []
    for (const element of arr) {

        if (element % 2 === 0) {
            posArray.push(element)
        }

    }

    return posArray
}

const resultaIteando = iterandoArray([4, 6, 5, 7, 8, 2])
console.log(resultaIteando)


console.log("\n\n\n\n")
/// callback function

function somaa(numero1, numero2, callback) {
    const result = numero1 + numero2;
    callback();

    return result
}

function showAlert() {
    console.log("This is a calback function");
}

console.log(somaa(5, 5, showAlert));


console.log("\n\n\n\n")


function arr(callback) {
    setTimeout(() => {
        let arr = [999159503];
        callback(arr)
    }, 2000)
}

function Ntelefone(arr) {
    console.log("Número de telefone retornado", arr)
}
arr(Ntelefone)


console.log("\n\n\n\n")

function inverterdString(arr) {

    const nome = arr;
    const arr2 = nome.split("");
    let arrVoid = []

    let i = 0

    arr2.forEach((number) => {
        arrVoid.unshift(number.toString().toUpperCase())
    })
    return arrVoid
}

console.log(inverterdString("lari"))


console.log("\n\n\n\n")

function biggestNumber(callback) {
    let arr = [3, 6, 10, 50, 30]
    let i = 0
    let bigger = 0

    bigger = arr.map((number) => {
        
            if (number >= i) {
                i = number


            }
            setTimeout(() => {
                callback(i)
          }, 3000)
    })

    


}

function resultadoBiggestNumber(number) {
    console.log("Esse é o número maior", number)
}

biggestNumber(resultadoBiggestNumber)

