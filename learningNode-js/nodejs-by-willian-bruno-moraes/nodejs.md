# Node js

O node js é uma ferramenta poderosa que permite construir fácil e rapidamente aplicações de redes escaláveis. O nodeJs usa uma arquitetura orientada a objetos e tudo é processado como single thread(é uma 'linha' em que tudo é processado sequencialmente, não precisando abrir outra thread ) Por ter sido uma ferramenta desenvolvida para a construção de aplicações de redes, é possível desenvolver qualquer protocolo: DNS, FTP, HTTP, HTTPS, SSH, TCP, UDP ou WebSockets. O nodeJs é, portanto, um runtime JavaScript, open source e multiplataforma que nos permite executar programas fora do browser.

## Javascript (relembrando conceitos e conhecendo outros)

Escopo de função: O escopo de função permite o comportamento chamado closure, por meio do qual as váriaveis acima podem ser acessadas por um escopo específico, ou seja, numa função interna.

Diferente do escopo de função, que delimita a acessibilidade de uma variável a um bloco acessível de código, geralmente definido por chaves.

Hosting em javaScript é o comportamento de mover a declaração de variáveis e funções para o topo, permitindo usar variáveis antes de ser declarada. É só com a variável _var_ pode fazer isso.

## Funções

Funções em javascript podem ser declaradas, atribuídas, passadas por referência ou retornadas, por isso dizemos que elas são objetos(cidadãos) de primeira classe.
Formas diferentes de declarar funções:

```js
function bar() {}
const foo = function () {};
const foo = () => {};
(function () {});
(() => {})();
```

Tendo em vista a possibilidade de criar uma função sem nome e o escopo baseado em funções , conseguimos criar uma closure com uma função anônima auto executável (IIFE - Imediately-inoked Function Expression)

Arrow function é uma sintaxe alternativa a declaração das funções coma palavra reservada _function_. Não possui o seu próprio _this_ e não pode ser utilizado como uma função construtora. Como seria uma função para contar quantos caracteres tem um array utilizando as duas declarações:

```js
  //como é com uma declaração de função normal
  const studios = ['20th century fox', 'warner bros', 'walt disney pictures']

  studios.map(function(s)) {return s.length}
  [16, 12, 20]

  // como é com uma arrow function
  const studios = ['20th century fox', 'warner bros', 'walt disney pictures']

  studios.map(s => s.length)
  [16, 12, 20]
```

## ENtendendo .bind(), .call(), .apply()

### .bind()

No browser o objeto root é o _window_ e no nodeJs é o _global_. A função .bind() muda o objeto root de uma função que contém o this com um outro objeto:

```js
function sith() {
  console.log(this);
}

sith();
//window.object

var lordSith = sith.bind({ name: "Darth Bane" });

lordSith();
//O bind() retorna uma nova função com um novo escopo
//{name: Darth Bane}
```

Podemos enviar qualquer coisa como argumento para a função bind()

### .call()

Diferente do bind(), o call() executa a função mudando o objeto root.

```js
function sith2() {
  console.log(this);
}
sith2();

sith2.call({ name: "Lulu brito" });
```

### .apply()

A função apply tem o mesmo comportamento que a função call(). A única diferença entre as duas é que se for passado vários argumentos a função, o this é obviamente o objeto e o restante dos argumentos com o .bind() podem ser passados normalmente, mas com a apply só pode ser passados em um array.

```js
function sith3(arg1, arg2, arg3, arg4) {
  console.log(this), console.log('' arg1 + arg2 + arg3 + arg4);
}

sith3.call({name: 'lulu'}, 1, 2, 3, 4);

sith3.apply({name: 'lulu'}, [1, 2, 3, 4]);

```

Em se tratando de usar o bind com arrow functions, ele não funciona da mesma forma. Tanto executando diretamente a função que foi o resultado da atibuição da arrow function, quanto executando após um .bind de outro objeto , o this continua sendo uma referência ao objeto superior(no nodeJs seria o _global_ e no browser é o _window_).
Por isso foi criada a propriedade _globalThis_. Esta sempre retorna o objeto global de mais alto nível.
Com o comando: $ node --v8-options|grep "harmony" A lista de flags e o estado de cada funcionalidade serão listados.

## Operadores: +, -, \*, /, %

A comparação feita com dois sinais de == compara apenas o valor, fazendo a coerção do tipo, podendo resultar que uma string é igual a number:
24 == '42'
true

Já a comparação feita com três sinais de === compara o tipo e o valor, fazendo com que a comparação acima retorne false.

O operador ??(nullish coalescing) somente executa a segunda parte se e somente se a operação da esquerda for null, diferente do || que executa para qualquer valor(seja da esquerda ou direita) que seja entendido como falso.

```js
const noTry = false || "doNot";
noTry;
("doNot");
```

O operador && executa a segunda parte da expressão se a primeira for verdade; senão, retorna a primeira.

## Controles de fluxo

O bloco switch/case serve, basicamente como uma cadeia de if, elseif, else.

```js
const nome = "lulu";

switch (nome) {
  case "lulu": {
    console.log("do");
    break;
  }
  default:
    console.log("do not");
    break;
}
```

## JSON

A estrutura de dados JSON é a Notação de Objeto do JavaScript. Utilizamos na comunicação entre aplicações(APIs REST, mensagens em filas, armazenagem de dados etc.). Consiste na sintaxe de objeto literal.
{"title": "build a new universe"}

JSON is a Data representation Format
Commonly used to API and configs
LightWeight to read and write
And is used in javaScript because is its superset

Json types:
Number, strings, booleans, null, array, object

A forma correta de comparar objetos em javascript é comparar os valores de cada atributo, de forma recursiva(pois um objeto pode ter níveis aninhados)

## Map

Map são coleções únicas identificadas por chave.

```js
const places = {
  Coruscant: "Capital da República Galática",
};
```

## WeakSet e WeakMap.

Ambos são ideiais para guardar referencias de objetos, durante verificações em loop ou recursivas, pois idicamos ao interpretador que os valores logo serão apagados pelo garbaje colletor.
O valor dentro desse WeakSet é único, assim como no WeakMap também o é, e a tentativa de reatribuir esse valor, na realidade, vai realizar uma troca.

## Desctructuring assignment:

Atribuição via desestruturação é uma nova sintaxe para extrair dados de arrays ou objetos em novas variáveis.

```js
const [a, b] = [1, 2];
```

## Spread:

O operador spread permite expandir arrays ou objetos, fazendo cópias destes para outro destino.
