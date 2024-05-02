# Aula 5- Funcões

## Tema 1 - Funçoes
Funções são trechos(blocos) de códigos que só são executados quando chamados/invocados.

Não podemos depender de variaveis externas para o funcionamento da função, pois foge do padrão. Corremos o risco de apagar alguma variável que a função utiliza. O melhor é passar tudo o que função tem que executar por parâmetro.

São rotinas de códigos que podem ser executadas quando tem seu nome invocado dentro do programa.
Funções que já utilizei sem saber que eram funções: console.log(), prompt(), parseInt()

 - As funções tem como objetivo deixar o código mais simples
 - Funções confinam nossos bugs dentro delas
 - Funções tornam programas mais portáteis
 - FUnções auxiliam no trabalho colaborativo
 - São usadas para organizar e reutilizar o código

Tipos de funções: 

Função void(que não retorna nada) só para alterar alguma coisa no código

Função com parâmetros(Atribui um valor a função)

Função return

Arrow Function. exemplo:
```js
   //posso escrever a função sem colocar o return, desde que os valores estejam na mesma linha
   const soma = (numero1, numero2) =>{ //numero1 + numero2
      const adicao = numero1 + numero2
       return adicao
   }

   soma(25,5) // 30
```
 A **return** instrução especifica o valor retornado pela função


## Expressões de função
Além da forma sintaticamente correta de usar uma função para uma instrução, há como criar expressões de funções, no qual o nome da função pode ser anonima. Exemplo abaixo:
   ```js
   const contador = function(number){
      return contador * contador 
   }
   console.log(contador(4))
   ```
No entanto, um nome pode ser fornecido em uma expressão de função, facilitando o rastreamento da função no computador e também dá a possibilidade da função referir a si mesma.

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

Expressões de funções são convenientes ao passar uma função como argumento de outra função.
O exemplo a seguir mostra uma mapfunção que deve receber uma função como primeiro argumento e um array como segundo argumento:

```js
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
```
Em JavaScript, uma função pode ser definida com base em uma condição. Por exemplo, a definição de função a seguir define myFunc apenas se num for estritamente igual a 0:

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```
Definir uma função e executa-la. Supunhamos que você fez uma função chamada contador. Para invoca-la deve ser feito assim:
```js 
   contador(5)
```
A função anterior chama a função com um argumento de **5**. A função executa as instruções e retorna o valor **25**   

## Tema 2 - Parâmetros em Funções
   Parâmetros - dados recebidos de uma função.
   O ato de enviar um dado para uma função é chamada de **passagem de parâmetros** 

   #### Os parametros são necessariamente passados para funções por valor — portanto, se o código dentro do corpo de uma função atribuir um valor completamente novo a um parâmetro que foi passado para a função, a mudança não será refletida globalmente ou no código que chamou essa função.  

Parâmetros opcionais: podemos dar flexibilidade as funções permitindo que nem sempre use todos os parametros da invocação da função.

## Tema 3 - Escopo de variáveis
É onde a variável fica alocada e pode ser manipulada.
Refere-se a visibilidade e acessibilidade em diferentes partes do programa

Existem dois tipos de escopo: 
- escopo local (Que só existe no contexto das funções definidas ou pré definidas alí dentro. Ela não existe fora do contexto da função. Criado sempre que uma função é chamada).
- escopo global (É a variável principal do programa e a mesmo existe ao longo de todo o programa. Existe em todas as funções invocadas ao longo do programa)

Um escopo é uma propriedade que determina onde a variável pode ser utilizada dentro do programa

## Tema 4 - Retorno de valores em funções
Função x Procedimento
- Procedimento(procedure) - uma rotina sem retorno
- Função - Uma rotina que retorna um dado a quem a invocou

## Tema 5 - Recursos avançados com função
Erro de sintaxe: caractere trocado, esqueceu de colocar o ; 

Erro de exceção: nesse caso, a sintaxe está correta. O que está errado é o dado ou a forma como o dado foi passado.



