// Progarama que lê dois valores inteiros e compara se o primeiro é maior que o segundo

//condicional composta
 let inteiro1 = 10
 let inteiro2 = 5

 if (inteiro1 >= inteiro2) {
     console.log(`O numero ${inteiro1} é maior que ${inteiro2}`)
   }   else{
    console.log(`O número ${inteiro1} não é maior que o número ${inteiro2} `)
 }



//descobrindo se o número é par ou impar/ let contador = 1
 const valorMaximo = 10

 while(contador <= valorMaximo){
     const valorMultiplicado = 
     console.log(`O valor do contador é ${contador} `)
     contador = contador + 1
 }

 if (contador % 2 == 0){
     console.log(`O número ${contador} é ímpar`)
 }

 contador = (prompt("digite um número"))
     if(contador != 0){
         console.log(`O número ${contador} é impar`)
     }

 contador = 1

 console.log("\n\n\n")

 let numero1 = parseInt(prompt("Digite um número inteiro"))
 let numero2 = parseInt(prompt("Digite mais um numero inteiro"))
 let soma = numero1 + numero2

 console.log(`A soma do ${numero1} + ${numero2} é = ${soma}`)


 alert(soma)


 soma = 0

 
// Programa que verifica a média do aluno

const mediaAprovacao = 7
const alunoEmRecuperacao = 4

const nota1 = parseInt(prompt(`Escreva sua primeira nota `))
   console.log(`A primeira nota foi ${nota1}`)
const nota2 = parseInt(prompt(`Escreva sua segunda nota `))
   console.log(`A segunda nota foi ${nota2}`)
const nota3 = parseInt(prompt(`Escreva sua terceira nota `))
   console.log(`A terceira nota foi ${nota3}`)

   const mediaDoAluno = ((nota1 + nota2 + nota3) / 3)

   if(mediaDoAluno >= mediaAprovacao) {
      console.log("Parabéns! Você foi aprovado")

   }  else if(mediaDoAluno >= alunoEmRecuperacao){
      console.log("Você está em recuperação")

   }   else {
      console.log("Você é irrecuperável!")
   }

 console.log(((1 == 2) || (5 > 4)) && (10 == 10) && ( 2 != 1 )) 
    
//little problem: O programa não está cumprindo a condição corretante, pois está deixando o aluno passar com uma nota meno que 7.


// verifica de o número digitado é par ou ímpar

const numero3 = parseInt(prompt("Digite um numero inteiro"))
const numero4 = parseInt(prompt("Digite mais um número inteiro"))

    if (numero1 % 2 == 0 ){
      console.log(`O primeiro número é par: ${numero1}`)
    }   else{
      console.log(`O primeiro  numero é impar:${numero1}`)
    }

    if(numero2 % 2 == 0){
      console.log(`O segundo número é par: ${numero2}`)
    }    else{
      console.log(`O segundo numero é impar:${numero2}`)
    }
 

