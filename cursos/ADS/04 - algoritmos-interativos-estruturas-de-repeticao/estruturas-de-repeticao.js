// const soma = 10
// let contador = 1
// while(contador <= 10){
//   console.log(`O número do contador é: ${contador}`)
//   contador = contador + 1
// }

// let multiplicador = 2
// if(contador != 0 / 2){
//     console.log(`O número é ímpar`)

// }    else{
//     console.log(`O número par`)
// }

// const inicial = parseInt(prompt(`Qual valor deseja iniciar a contagem?`))
// const final = parseInt(prompt(`qual valor deseja encerrar a contagem?`))
//    const x = final
//   const restoDaDivisaoPor2 =  final % 2
//   if(restoDaDivisaoPor2 % 2 != 0){
//    console.log(`O número é impar`)
//   }   else{
//    console.log(`o número é par`)
//   }


//   console.log("\n\n\n")

//   let contador = 1
//   const valorMaximo = 10
//   const valorMod = contador % 2 
//       while(contador <= valorMaximo){
//          console.log(`O valor do contador é: ${contador}`)

//          if(contador % 2 == 0){
//             console.log(`Esse número é ímpar`)
//          }  else{
//             console.log(`Esse número é par`)
//          }

         // contador = contador +1 
//          contador += 1 
//       }   contador++ 

//       console.log("\n\n\n")

//       let x
     
//   x = parseInt(prompt("Digite um número maior do que 0"))
//   while(x <= 0){
//       x = parseInt(prompt("Digite um valor maior do que 0"))
//       console.log(`Você digitou Encerrando programa...`) 
//   }

//Utilizando break para encerrar quando o usuário digitar a condilção correta

// let texto 

// const sair = true

// console.log("Digite uma mensagem que irei repetir para você")
// console.log("Para incerrar, digite 'sair'.")
//     while (true){
//       texto = prompt('')
//       console.log(`${texto}`)
//         if(texto == 'sair'){
//          break
//         }
        
//     }
//     console.log("encerrando programa")


for (let i = 0; i <= 100; i++){
   if(i % 2 == 0){
      console.log(i)
   }
}

console.log("\n\n\n")

let soma = 0
let qtd = 0
    for(let i = 1; i != 101; i++){
      if(i % 2 == 0){
         soma += i
         qtd += 1
      }
   media = soma / qtd
   console.log(`A média de números pares de um até cem é ${media}`)  
    }
console.log("\n\n\n")

let i = 1
let tabuada = 1
     while(tabuada <= 10){
      console.log(`Tabuada do  10 ${tabuada} `)
       i += 1

       while(i <= 10){
        console.log(` ${tabuada * i}`)
         i +=1
         tabuada += 1
     }
     }
     