
////////////////////////////////
// crindo programa que conta um valor até outro

let contador = 1
const valorMaximo = 10

while (contador <= valorMaximo) {
    console.log(`o valor do contador é ${contador}`)
    contador = contador + 1
}
console.log("\n\n\n")


// Criando programa calcula os multiplicadores de 9

contador = 1
while (contador <= valorMaximo) { //Enquanto o contador for menor ou = ao valorMaximo
    console.log(`9 x ${contador} = ${9 * contador}`)// O console vai mostrar o número que será multiplicado pelo contador. O que está em laranja faz parte da string e oo que está em azul é uma variável ou uma expressão aritmética. 
    contador = contador + 1 //contador recebe contador + 1
}
console.log("\n\n\n") // pula linhas no terminal

// mostrando números pares e ímpares 
// % -> resto da divisão -> mod
// / -> divisão -> div
// 5 / 2 = 2
// 5 % 2 = 1


contador = 1
while (contador <= valorMaximo) { // Enquanto contador for menor ou = a valorMaximo
    const restoDaDivisaoPor2 =  contador % 2  //Criando e inicializando uma variável e atribuindo o valor do resto da divisão do contador divido por 2 a essa mesma variável
    if ( restoDaDivisaoPor2 != 0) { // se  restoDaDivisaoPor2 for diferente de 0
        console.log(`${contador} é um número ímpar`) //o console vai mostrar que o valor do restoDivisaoPor2 é ímpar
    } else { //caso não
        console.log(`${contador} é um número par`) // o console vai mostrar que o resulatdo do contador é um numéro par
    }
    contador = contador + 1 // reatribuindo contador, adicionando mais 1.
}
console.log("\n\n\n")

// verifica se os multiplicadore de 9 é par ou impar
// criar um programa que mostre se os multiplicadores de nove são número pares ou ímpares

contador = 1 //reatribuindo o valor do contador para 1,  para limpar a contagem do programa acima

while (contador <= valorMaximo) { // Enquanto contador for menor ou = valorMaximo
    const valorMultiplicado = 9 * contador // declarando e inicializando a variável valorMultiplicado com o resultado da expressão de multiplicação 9 x o valor atual do contador

    const restoDivisao = valorMultiplicado % 2 // declarando e inicializando a variável restoDivisão como o resultado da expressão de multiplicação 9 x o valor atual do contador, resto da divisão por 2


    // O valor multiplicado é o 9 vezes o cantador. Preciso dividir o valor multiplicado po 2 e se o resto da divisão for igual a 0, o numero é par, se for maior que zero é ímpar 

    if (restoDivisao != 0) { //se restoDivisao for diferente de 0
        console.log(`9 x ${contador} = ${valorMultiplicado} e é um número ímpar`) //o console vai mostrar o valor "9 x" escrito utilizando uma template string para mostrar o valor atual do contador "=" igual ao "valorMultiplicado" resultado da expressão "9 * contador", dizendo que é impar.
    } else {
        console.log(`9 x ${contador} = ${valorMultiplicado} e é um número par`) //senão o console vai mostrar o valor "9 x" escrito, utilizando uma template string para mostrar o valor atual do contador "=" igual ao "valorMultiplicado" resultado da expressão aritmética "9 x", dizendo que é par
    }

    contador = contador + 1 //atribuindo contador e adicionando 1
 }

 console.log("\n\n\n")

 console.log("Hello, world!")

 console.log("\n\n\n")


 console.log(3+4)

 console.log("\n\n\n")

 console.log("Hellow"  + "world!")
    //ou
    console.log("Hello","world")

    //concatenando mensagens e textos
    console.log("O resultado da soma de 3 + 4 é:", 3+4)

//usando template string

// const nota = 9.5
// const disciplina = "Lógica de Programação e algoritmos"

// console.log("Disciplina:", `${disciplina}`)
// console.log("nota:", `${nota}`)

// console.log("Você tirou %f na disciplina de algorítmos", `${nota}`)

console.log("\n\n\n")
 

//lógica
const a = 3
const b = 8
let resposta

 resposta = a >= b
 console.log(`${resposta}`)

 console.log("\n\n\n")


 const nota = 9.5
 const disciplina = "Lógica de Programação e algoritmos"
 
 console.log("Disciplina:", `${disciplina}`)
 console.log("nota:", `${nota}`)
 
 console.log("Você tirou %f na disciplina %s", `${nota}`, `${disciplina}`)

 console.log("\n\n\n")

 let idade

 idade = prompt("Qual é a sua idade?")

 

