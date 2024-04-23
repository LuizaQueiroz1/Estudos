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
        
// Quando você passa uma array como parametro, se a função alterar algum valor da array, essa não constará dentro da função, mas sim fora

function myFunc(theArr) {
    theArr[0] = 30;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30
  


  const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(3)); // 6
  
console.log("\n\n\n")

  function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }

//No código a seguir, a função recebe uma função definida por uma expressão de função e a executa para cada elemento do array recebido como segundo argumento:
  const cube = function(x){
      return x * x * x  
  };

  const array = [3, 5, 8, 9];
  console.log(map(cube, array));
