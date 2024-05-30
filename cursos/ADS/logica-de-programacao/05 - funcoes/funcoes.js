//Exercícios que vi no chat GPT

// function soma(a, b){
//     return a + b;
// }
// let resultado = soma(3, 4);
// console.log(`O resultado é: ${resultado}`)

// console.log("\n\n\n")

// function ehpar(numero){
//     return numero % 2 == 0;
// }

// console.log(ehpar(4));
// console.log(ehpar(9))

// console.log("\n\n\n")

// function saudacao(nome){
//     console.log("Olá," + nome + "! Seja bem vindo!");
// }
// saudacao("Luiza");

// console.log("\n\n\n")

// function saudacoesPeriodoDoDia(){
//     let hora = new Date().getHours();
//     if (hora < 12) {
//         return "Bom dia!";
//     }
//     else if (hora < 18){
//         return "Boa tarde!";
//     }  
//     else {
//         return "Boa noite!";
//     }

// }
// console.log(saudacoesPeriodoDoDia());


// console.log("\n\n\n")

// function sub2(x, i){
//     res = x - i;
//     console.log(res)
// }

// console.log(sub2(x = 7, y = 5));

//Exercicios da aula Uninter

// function borda(s1){
//     let tam = len(s1)
//     //Só imprime se houver algum caractere
//     if(tam){
//     console.log('+', '-' * tam, '+')
//     console.log('|', s1, '|')
//     console.log('+', '-' * tam, '+')
//     }
// }
// //programa pricipal
// let len = s1
// let s1 = len
// console.log(borda('Olá, mundo!'))
// console.log(borda('Lógica de programação e algoritmos'))

// console.log('\n\n\n')

// function comida(){
//     console.log(ovos)
// }
// let ovos = 12
// console.log(comida())

// console.log('\n\n\n')

// function soma3(x = 0, y = 0, z = 0){
//     res = x + y + z
//     return res
// }
// retornado = soma3(1, 4, 3)
// retornado2 = soma3(4, 5, 6)
// retornado3 = soma3(3, 5)
// console.log(`Somatórios: ${retornado}, ${retornado2} e ${retornado3}`)

// console.log('\n\n\n')

// function valida_string(pergunta, max, min, len){
//     s1 = prompt(pergunta)
//     tam = len,(s1)

//     while (tam < min) or (tam > max);{
//         s1 = prompt(pergunta)
//         tam = len,(s1)
//         return(s1)
//     }


// }
// x = valida_string(`Digite uma string`, 10, 30)
// console.log(`Você digitou a string: ${x}. \n Dado válido. Encerrando o programa...`)

// console.log("\n\n\n")



// while (true) {

//     try{
//         x = parseInt(prompt("Por favor, digite um número:"))
//         break
//     }
//      catch(erro){
//     console.error("Oops! Número inválido, tente novamente...", erro)
//     } 

// }

// // Quando você passa uma array como parametro, se a função alterar algum valor da array, essa não constará dentro da função, mas sim fora

// function myFunc(theArr) {
//     theArr[0] = 30;
//   }

//   const arr = [45];

//   console.log(arr[0]); // 45
//   myFunc(arr);
//   console.log(arr[0]); // 30



//   const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1);
//   };

//   console.log(factorial(3)); // 6

// console.log("\n\n\n")

//   function map(f, a) {
//     const result = new Array(a.length);
//     for (let i = 0; i < a.length; i++) {
//       result[i] = f(a[i]);
//     }
//     return result;
//   }

// //No código a seguir, a função recebe uma função definida por uma expressão de função e a executa para cada elemento do array recebido como segundo argumento:
// // const cube = function(x){
// //     return array = x * x * x   
// // };

// // const array = [3, 5, 8, 9];
// // console.log((cube, array));

// function calcular_numero(numero1, numero2, operador) {
//   let operacao

//   if (operador === "+") {
//     operacao = numero1 + numero2

//   } else if (operador === "-") {
//     operacao = numero1 - numero2

//   } else if (operador === "*") {
//     operacao = numero1 * numero2

//   } else if (operador === "/") {
//     operacao = numero1 / numero2
//   }
//   //  console.log(operacao)
//   return operacao
// }
// // const resultadoSoma = calcular_numero(4, 7, '+',);
// // const resultadoDivisao = calcular_numero(4, 7, "/")
// // const resultadoSubtracao = calcular_numero(10, 5, "-")
// // const resultadoMulti = calcular_numero(5, 5, "*")

// // console.log(resultadoSoma)
// // console.log(resultadoDivisao)
// // console.log(resultadoSubtracao)
// // console.log(resultadoMulti)


// function mundo() {
//   console.log("Bom dia, mundo!")
// }
// // mundo()

// function cubo(numero) {
//   let calculoCubo
//   calculoCubo = numero * numero * numero
//   return calculoCubo
// }

// // const resultadoCubo = cubo(3)
// // console.log(resultadoCubo)








// function areaTriangulo(base, altura) {
//   const area = 1 / 2 * base * altura
//   return area
// }

// // const resultadoArea = areaTriangulo(8, 6)
// // console.log(resultadoArea)

// // valor de Pi 3,14.... Pi descrito em fração22/7

// function calcAreadPerimetro(raio) {
//   const PI = 22 / 7
//   const area = PI * raio * raio

//   const perimetro = PI * 2 * raio

//   console.log(area)
//   console.log(perimetro)
// }

// // const resultadoAreaPerimetro = calcAreadPerimetro(5)

// function inversaoValores() {

// }

// // console.log(
// //   "Subi no onibus".split('').reverse().join('')
// // )

// console.log("\n\n\n\n\n\n\n\n")


// function ehPalindromo(stringToVerify) {
//   const stringToVerifyArray = stringToVerify.split('')
//   const tamanhoDoArray = stringToVerifyArray.length
//   const invertedStringArray = []


//   for (let i = 0; i < tamanhoDoArray; i++) {
//     console.log(i)
//     const valorAtualPorIndice = stringToVerifyArray[i]

//     invertedStringArray.unshift(valorAtualPorIndice)
//   }

//   const invertedString = invertedStringArray.join("")

//   const ePalindromo = stringToVerify === invertedString
//   return ePalindromo
// }

// // const palindromo = ehPalindromo('ana') 
// // console.log(palindromo)


// console.log("\n\n\n\n\n\n\nnumeros\n")

// function InversaoDeNumeros(InvertNumber) {
//   const ToVerifyArray = InvertNumber.split('')
//   const invertedStringArrayNumber = []

//   for (let i = 0; i < ToVerifyArray.length; i++) {
//     const valorAtualPorIndice = ToVerifyArray[i]
//     invertedStringArrayNumber.unshift(valorAtualPorIndice)
//   }
//   const inverterNumber = invertedStringArrayNumber.join('')
//   return inverterNumber

// }

// // const StringComnumero = "243";
// // console.log(StringComnumero)
// // const numbers = InversaoDeNumeros(StringComnumero)
// // console.log(numbers)

// console.log("\n\n\n\n")

// function contagemDeVogais(arr) {
//   let vogais = []
//   const todasAsVogais = ['a', 'e', 'i', 'o', 'u'];

//   for (let i = 0; i < arr.length; i++) {
//     const palavra = arr[i].toLowerCase();
//     for (let j = 0; j < palavra.length; j++) {
//       if (todasAsVogais.includes(palavra[j])) {
//         vogais.push(palavra[j])
//       }
//     }
//   }
//   return vogais
// }

// const resultadoVogais = contagemDeVogais(["Anderson"])
// console.log(resultadoVogais)


// console.log("\n\n\n\n")


// function retornoDeInvestimento(C, I, T) {
//   let montante

//   montante = C * Math.pow(1 + I, T);// A função Math.pow serve para calcular a potencia de um número elevado a outro numero. ELe recebe 2 parâ: a base e o expoente

//   return montante
// }

// const resultadoInvestimento = retornoDeInvestimento(1.200, 0.023, 3)
// console.log(resultadoInvestimento)




// console.log("\n\n\n\n")






// function verificandoNumeroPrimo(arr) {
//   const primosEncontrados = []

//   for (let i = 0; i < arr.length; i++) {
//     const num = parseInt(arr[i])
//     if (num <= 1) {
//       continue
//     }

//     let isPrimo = true;

//     for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
//       if (num % divisor === 0) {
//         isPrimo = false;
//         break;
//       }
//     }

//     if (isPrimo) {
//       primosEncontrados.push(num)
//     }
//   }
//   return primosEncontrados.join(",")
// }



// const resultadoNumerosPrimos = verificandoNumeroPrimo([1, 3, 4, 2, 5, 7, 11, 13, 18, 17])
// console.log(resultadoNumerosPrimos)
// console.log("Esses são números primos")



// console.log("\n\n\n\n")


// function contagemCaractere(arr, carac) {
//   let array = []

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == carac) {
//       array.push(arr[i])
//     }
//   }
//   for (let j = 0; j < array.length; j++) {
//     return array
//   }
//   return array

// }

// const resultadoContagemCaractere = contagemCaractere([3, 3, 3, 3, 4, 5, 5,], [5])
// console.log(resultadoContagemCaractere)


// console.log("\n\n\n\n")


// const boasVindas = function (nome) {
//   console.log(`Seja bem vindo(a), ${nome}`)
// }

// boasVindas('Luiza')



// console.log("\n\n\n\n\n")


// const mediaAritmetica = function (arr) {
//   let soma = 0

//   for (let i = 0; i < arr.length; i++) {
//     soma += arr[i]
//   }

//   const resultado = soma / arr.length
//   return resultado
// }
// const resultadoMediaAritmetica = mediaAritmetica([2, 5, 6, 8, 9,])
// console.log(resultadoMediaAritmetica);



// console.log("\n\n\n\n");


// const caixaAlta = function (string) {
//   console.log("Deixando palavras em caixa alta")
//   const resultado = string.toUpperCase()
//   return resultado
// }

// const resultado = caixaAlta('luiza Larissa')
// console.log(resultado)



// console.log("\n\n\n\n\n")


// const invertendoArray = function (arr) {
//   let arrayVazia = []

//   for (let i = 0; i < arr.length; i++) {
//     arrayVazia.unshift(arr[i])
//     console.log("Invertendo array")
//   }
//   return arrayVazia
// }
// const resultadoInvertendoArray = invertendoArray([3, 6, 7])
// console.log(resultadoInvertendoArray)



// console.log("\n\n\n\n\n")


// console.log("luiza".split('').reverse().join(''))

// //  "Subi no onibus".split('').reverse().join('')



// console.log("\n\n\n\n\n")


// const porcentagem = function (valor, porcentagem) {
//   console.log('calculando a porcentagem de valor')
//   return (valor * porcentagem) / 100

// }


// const resultadoPorcentagem = porcentagem(50, 25)
// console.log(resultadoPorcentagem)


// console.log("\n\n\n\n\n")


// const somaDePares = function (arr) {
//   let soma = 0
//   let currentArray = []
//   const divisor = 2

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % divisor == 0) {

//       soma += arr[i]
//       console.log("Soma dos números pares")
//       currentArray = soma

//     }
//   }
//   return currentArray
// }

// const resultSomaPares = somaDePares([2, 8, 4, 6, 3, 7])
// console.log(resultSomaPares)


// console.log("\n\n\n\n")


// function convertBinary(n) {
//   let num = n;
//   let binary = (num % 2).toString()

//   while (num > 1) {
//     num = parseInt(num / 2)
//     binary = (num % 2) + binary
//   }
//   return binary
// }

// const resultadoBinary = convertBinary(25)
// console.log(resultadoBinary)



// console.log("\n\n\n\n")




function fatorial(n) {

  let resultadoFatorial = n
  for (let i = n - 1; i > 0; i--) {
    resultadoFatorial = resultadoFatorial * i
  }

  return resultadoFatorial
}

const resultadoFatorial = fatorial(5)
console.log(resultadoFatorial)



// console.log("\n\n\n\n")



// console.log("\n\n\n\n\n")


// function quadradoPerfeito(n) {

//   let raiz = Math.sqrt(n)
//   // let raizEmString = "" + raiz
//   let raizEmString = `${raiz}`


//   const ehQuadradoPerfeito = !raizEmString.includes(".")


//   return ehQuadradoPerfeito
// }

// const resultadoQuadradoPerfeito = quadradoPerfeito(36)
// console.log(resultadoQuadradoPerfeito)


// // se a a raiz do número for um resultado exato, printar na tela



// function somenteNomesCom5Caracteres(valor) {
//   return valor.length <= 0;
// }

// let nomes = ['Micilini', 'Gabriele', 'Matheus', 'Edu', 'José'];

// const resultados = nomes.filter(somenteNomesCom5Caracteres);

// console.log(resultados)


// function veridicaSeEhPrimo(valor) {


//   if (valor <= 1) {
//     return false
//   }

//   for (let j = 2; j <= Math.sqrt(valor); j++) {
//     if (valor % j === 0) {
//       return false
//     }
//   }


//   return true

// }

// const resultadoEhPrimo = veridicaSeEhPrimo(0)
// console.log(resultadoEhPrimo)


// console.log("\n\n\n\n\n")


// function existenciaDeNumero(valor) {

//   return valor.includes(2)

// }

// const resultadoExistencia = existenciaDeNumero([3, 4, 5, 6])
// console.log(resultadoExistencia)


// console.log("\n\n\n\n\n")

// const binaryToDecimal = function (n) {
//   let resultado = 0
//   const potencia = 2

//   for (let i = 0; i < n.length; i++) {
//     const resultadoMath = potencia ** i * parseInt(n[n.length - 1 - i]);
//     resultado += resultadoMath;
//   }

//   return resultado

// }
// const resultadoDecimal = binaryToDecimal("111111")
// console.log(resultadoDecimal)


// console.log("\n\n\n\n\n")



// // percorri os número menores que o fornecido e fiz a adição do número ímpares
// const somaImpares = function (numero) {
//   let resultado = 0;

//   //percorre todos os números menores que o fornecido
//   for (let i = 1; i < numero; i++) {

//     //verifica se o número é ímpar
//     if (i % 2 === 1) {
//       resultado += i  //adiciona o número ímpar a soma
//     }

//   }
//   return resultado
// }

// const numeroFornecido = 11;

// const resultadoSomaDosImpares = somaImpares(numeroFornecido)
// console.log(resultadoSomaDosImpares)


// console.log("\n\n\n\n\n")

let celcius = 0
let fahreinheit = 0

// execução da função

// const escolha = escolhaDeConversao()
// console.log(escolha)

// const resultadoMedia = mediaDosNumerosSomados(resultadoSoma, arrayDeNumeros).toFixed(2)
// console.log(resultadoMedia)

// const resultadoFahreiheit = fahreinheitToCeusius().toFixed(2)
// console.log(resultadoFahreiheit)



// function escolhaDeConversao() {
//   console.log("Escolha uma opção")
//   let menu = console.log("Opcao 1: Celcius para fareinheit",
//     "opcao 2: Farenheit para celcius"
//   )
//   let repetir = true

//   const opcao1 = 1
//   const opcao2 = 2
//   const opcao3 = 3

//   while (repetir) {

//     let escolha = prompt("Escolha a opção 1(Celsius para Farenheit), 2(Farenheint para celsius) ou 3(Voltar para o menu)")

//     if (escolha === opcao1) {

//       console.log(`Sua escolha foi fahreinheit`)
//       fahreinheit = ceusiusToFahreiheit()
//       console.log(fahreinheit)

//     } else if (escolha === opcao2) {

//       console.log(`Sua escolha foi celsius `)
//       celcius = fahreinheitToCeusius().toFixed(2)
//       console.log(celcius)

//     } else if (escolha === opcao3) {
//       repetir = true
//     } else {
//       console.log("opção errada")
//     }
//     repetir = true
//   }

// }




// console.log("\n\n\n\n\n")




// function ceusiusToFahreiheit(celcius) {

//   celcius = prompt("Escolha uma temperatura")
//   const fahreiheit = (celcius * 1.8) + 32
//   return fahreiheit
// }
// const resultadoCelsius = ceusiusToFahreiheit()
// console.log(resultadoCelsius)


// console.log("\n\n\n\n\n")


// function fahreinheitToCeusius(fahreinheit) {

//   fahreinheit = prompt("Escolha uma temeperatura C")
//   const celcius = (fahreinheit - 32) * (5 / 9)
//   return celcius
// }




// console.log("\n\n\n\n\n")



// // Execução das Funções
// const arrayDeNumeros = [15, 2, 30]
// const resultadoSoma = somaValoresDeUmArray(arrayDeNumeros)
// console.log(resultadoSoma)

// console.log("\n\n")




// Funções 


function somaValoresDeUmArray(array) {
  console.log(`Somas dos valores: ${array}`)

  let resultado = 0

  for (let i = 0; i < array.length; i++) {
    resultado += array[i]
  }
  return resultado

}


function mediaDosNumerosSomados(soma, array) {
  console.log("Media dos valores somados")

  let resultado = 0

  resultado = soma / array.length

  return resultado
}


console.log("\n\n\n\n")



function maiorNumero(array) {
  let maior = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i]
    }
  }

  return maior



}

const numeroMenor = [30, 20, 10]
const resultMaiorNumero = maiorNumero(numeroMenor)
console.log(resultMaiorNumero)


const resultMenorNumero = menorNumero();
console.log(resultMenorNumero)


function menorNumero() {
  let menor = numeroMenor[0]

  if (numeroMenor === 0) {
    return undefined
  }

  for (let j = 1; j < numeroMenor.length; j++) {
    if (numeroMenor[j] < menor) {
      menor = numeroMenor[j]
    }
  }

  return menor
}

console.log("\n\n\n\n")


function valorMaximo() {
  let idades = [40, 50, 20]
  let total = 0
  for (idadeeee in idades) {
    total = total + idades[idadeeee]

  }
  return total
}

const valorMaximun = valorMaximo()
console.log(valorMaximun)


// como o mercado é dividido. Quais os termos em que o mercado é dividido. O que é o backend, o frontend. termeos tecnicos da programaçã e do mercado de trabalho.
//organizar o horário

console.log("\n\n\n\n")

function factororial(n) {

  let resultado = 1


  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      resultado = resultado * i
    }
  } else {
    resultado = 0
    console.log("digite um numero inteiro")
  }
  return resultado
}

const factorialll = parseInt(factororial(-5))
console.log(factorialll)


console.log("\n\n\n\n")

//Os dados de entrada necessarios são o numero aleatório(de 1 a 10) que o programa vai gerar e o chute que o usuário tem que dar

//Devo camparar os dois dados e dizer se se o numero chutado pelo usuário está abaixo do numero gerado pelo programa, acima ou se é igual.

//As restrições desse programa são: o valor tem que ser de 1 a 10

//resultado esperado: izer se se o numero chutado pelo usuário está abaixo do numero gerado pelo programa, acima ou se é igual.

function chuteDeNumero() {





  const numeroAleatorio = 6
  // let tentativas = 0
  let acertou = false

  while (acertou == false) {
    let n = parseInt(prompt("chute um numero"))

    if (n < numeroAleatorio) {
      console.log("Ops, chutou baixo")
    } else if (n > numeroAleatorio) {
      console.log("Ops, chutou alto")
    } else if (n === numeroAleatorio) {
      acertou = true

      console.log(`PARABÉNS, VOCÊ ACERTOU O numero aleatório ${numeroAleatorio}.`)
    }

  }



}

// const resultChuteNumero = chuteDeNumero()
// console.log(resultChuteNumero)


console.log("\n\n\n\n")


function velocidadePermitida() {
  let velocidade = parseInt(prompt("Digite sua velocidade"))
  const velocidadeMaxima = 80
  let repetir = false

  if (velocidade <= velocidadeMaxima) {
    console.log("Não levou multa")
  } else if (velocidade > velocidadeMaxima && velocidade <= velocidadeMaxima + 10) {
    console.log("Levou multa leve")
  } else if (velocidade >= velocidadeMaxima + 11 && velocidade <= velocidadeMaxima + 20) {
    console.log("Levou multa grave")
  } else if (velocidade > velocidadeMaxima + 20) {
    console.log("Levou multa gravissíma")
  }

}

// const ResultadoVelocidade = velocidadePermitida()
// console.log(ResultadoVelocidade)





//passos para resolver o algoritmo:

// 1. prompt da velocidade do usuário
// 2. armazenar velocidade
// 3. comparar a velocidade permitida com a velocidade fornecida pelo usuário
// 4. se estiver abaixo da velocidade permitida, exibir "Não levou multa"
// 5 se estiver 10km acima da velocidade permitida, exibir "Levou multa leve"
//6. se estiver de 11 a 20km acima da velocidade permitid, exibir "Levou multa grave"
//7. se estiver acima de 20km, exibir "levou multa gravissima"




// Metódo 5Qs:
// Quais são os dados necessários?
// Os primeiros números da sequência FIbonacci

// Oque devo fazer com esses dados?
// somar cada número ao anterior

// Há alguma restrição?


// resultado esperado
//gerar os primeiros números primos

// quais os passos lógicos para resolver esse algoritmo
// 1. criar um array com números de 0 a 10
// 2. fazer um laço de repetição com o for() para que o contador itere sobre o array
// 3. somar cada número aos doi numeros anteriores 
// retornar cada soma.



function sequenciaDeFibonacci() {
  const n = 10
  let penultimo = 0
  let ultimo = 1



  for (let i = 0; i < n; i++) {
    let proximo = penultimo + ultimo;
    penultimo = ultimo;
    ultimo = proximo;

    console.log(proximo)
  }

  return ultimo

}

const reusltadoFibonacci = sequenciaDeFibonacci()
console.log(reusltadoFibonacci)


