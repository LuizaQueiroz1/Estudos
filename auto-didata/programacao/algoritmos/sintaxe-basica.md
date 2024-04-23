# Sintáxe básica de JavaScript

Este arquivo contém anotações sobre a sintáxe básica de JavaScript e é a minha primeira anotação em Markdown.

## Comentários:
Comentários em JS

```js
// Assim se escreve o comentário de uma linha

/* Este é o comentário em multiplas linhas
linha1
linha2
linha3
*/
``` 
## Tipos de dados básicos 
**Números e Textos**

### Números
- `int` numeros inteiros
- `double` or `float` Números com casas decimais (ponto flutuante) `1.1435`

**Obs** Números podem ser positivos ou negativos
números negativos são representado com o sinal `-` como: `-13`

### Textos
- `char` representa um único caractere de texto de ae 8bit 
- `string` é uma sequencia de caracteres e é usada para representar textos

**obs** em JS não existe o tipo `char`, mas em C, C++ E Java, sim.

### Exemplos JS

```js
let int = 4; //Número inteiro
let doubleOuFloat = 1.2345; //Numeros decimais
let string = "Oi, eu sou o Goku!"
```

## Operadores
**Aritméticos, Lógicos e Relacionais**

Os operadores relacionam valores para resultar em outro valor.

### Aritméticos
- `+`
- `-`
- `*`
- `/` 
- `//`  parte inteira da divisão
- `%`  O resto da divisão 

**Div representa a parte inteira do resultado da divisão**

**MOD é o resto da divisão. Quando o número "mod" resulta 0, ele é par, caso contrário, é ímpar.**

### Lógicos 
- `e (and)` 
- `ou (or)`
- `não (not)`
- `não-e (nand)`
- `não-ou (nor)`
- `ou-exclusivo (xor)`
- `não-ou-exclusivo (xnor)`

#### Em Js
- `&&` **and** -> Retorna um valor verdadeiros se **ambos** os operadores for **verdadeiro**

- `||` **or** -> Retorna verdadeiro se ao menos **um dos** operadores for **verdadeiros**

- `!` **not** -> Se o **operando** for **veradeiro**, o resultado será **falso**, e **vice-versa**.

### Relacionais 
São utilizados para comparar valores(de qualquer tipo). O resultado de uma expressão relacional é um valor booleano(Verdadeiro ou Falso).

#### Em JS

- `==` verdadeiro se os operadores forem igual
- `!=` retorna verdadeiro se os operadores nãp forem iguais 
- ` >` maior
- `>=` maior ou igual a
- `<` Menor que
- `<=` Menor ou igual a
- `===` **Estritamente igual** compara valores e os tipos dos dados
- `!==` **Estritamente desigual** Similar ao `===`, mas verifica desigualdade

## Declaração e Atribuição
Declarando e atribuindo variáveis em JS

**Declaração**: é alocar um espaço na memória com uma variável não necessariamente inicializada 

**Atribuição**: é atribuir um valor a uma variável.

```js
let valorVariavel; // a LET variável pode ser declarada sem ser inicializada
valorVariavel = 1;
valorVariavel = 2;  // redeclarando variável LET mutavél

const valorImutavel = 0; // aa CONST não pode ser declarada antes de ser inicializada
let valorAtual = 1;
const valorMaximo = 10;
```

**OBS**: Para atribuir um valor em JS se usa `=` _sinal de atribuição_

## Criando Logs
Logs são formas de mostrar no terminal algo que o programadar queira.
Em JS usa-se o  `console.log` que é uma função nativa.

```js
const a = 5; 
console.log(a)  // 5
// A saida no terminal será o valor atribuído a variável

const b = "Anything"
console.log(b)  // Anything
```

### Logs dinâmicos 
É possível juntar textos com variáveis utilizando template strings.
Template strings são formadas quando juntamos textmos e variáveis. 

**Sintáxe** envolvido em crase forte `, formamos uma string e para adicionar uma variável dentro de uma string utilizamos ${} 

```js
const a = 256;
console.log(`O valor da váriavel a é ${a} do tipo numerico`) // O valor da váriavel a é 256 do tipo numerico 
// O template string vai fazer com que o valor atribuído à variável apareça na tela
```  

## Estruturas condicionais
Em JS as estruturas condicionais são feitas com `if` e `else`
Elas são usadas para tomadas de decisões (como escolher entre um ou dois biscoitos), e nos permite escrever blocos de códigos com istruções específicas.

```js
const a = 2
const b = 4

if (a > b) {
    console.log(`${a} é maior que ${b}`)
} else {
    console.log(`${a} não é maior que ${b}`)
}
```
## Estruturas de repetição WHILE
Executa um bloco de repetição enquanto a condição específica for verdadeira.

```js
const valorMaximo = 10
let contador = 1

while (contador <= valorMaximo) {
    console.log(`o valor do contador é ${contador}`)
    contador = contador + 1
}
```

1. Enquanto o `contador` for menor ou igual ao `valorMaximo`
2. O `console.log` imprime o valor atual do `contador`
3. O `contador` será reatribuído ao `contador + 1`

**conclusão**: E esse código se repetirá enquanto o `contador` for menor ou igual ao `valorMaximo`, que é 10. Ou menor do que 11.


