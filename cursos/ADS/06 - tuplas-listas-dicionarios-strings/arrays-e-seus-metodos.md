# Aula 6 - Listas, dicionarios e strings


## Tema 1 - listas(array)
Variáveis simples: armazena apenas um dado

Variáveis compostas: armazena um conjunto de dados

**Para indicar qual dado você quer encontrar em uma variável composta você usa o índice, que vai de [0] a quantos dados tiver**

Estrutura de dados:
é um conjunto de dados distintos que podemos manipular a maneira como os mesmos são organizados na memória, como podem ser buscados e acessados. Isso é o que define e diferencia as estruturas de dados.

**Desempacotamento** de parâmetros em funções:

## Tipos e características de estruturas de dados em JS
Listas em JS são array.
Estruturas de dados embutidas são usadas para armazenar e manipular dados de maneira eficiente. As principais estruturas de dados em JS são:
- Array
- Object
- Map
- Set 
- String

Uma array é uma estrutura de dados que representa uma coleção ordenada de elementos do mesmo tipo. Cada elemento de uma array é acessado por um índice número  específico, que indica a sua posição na array. Uma array pode conter qualquer tipo de dado, incluido números, strings, objetos e até outras arrays.
Maneiras que uma array pode ser declarada e inicializada:
```js
//declarando e inicializando uma array vazia
let minhaArrayVazia = []

//declarando e inicializando uma array com elementos
let minhaArray = [1, 2, 3, 4, 5, 6];
let outraArray = ['maça', 'banana', 'laranja'];

// declarando e inicializando array com números e caracteres
let arrayMultiTipo = [1, 'dois', true]
```

## Strings e listas dentro de listas


## Dicionário(OBJECT em JS)
é uma estrutura de dados que nos permite modelar entidades do mundo real
- Estrutura de dados dinâmica
- Podemos alterar dados e tamanhos
- indexados por chaves(palavra-chave)
- Representados em JS por chaves{}

```js
    const carro {
        marca: "toyota"
         cor: "azul"
        ano: 2010
    }

```

values: trás somente os dados;

keys: tras apenas as chaves;

entries: trás tanto as chaves quanto os dados.

Há como colocar um dicionário dentro de uma lista e listas dentro de dicionários

Metódos de arrays:

- push(): adiciona um ou mais elementos no final de uma array e retorna o novo comprimento da array;
- pop(): remove o último elemento da array e retorna o novo comprimento da array;
- shift(): remove o primeiro elemento de uma array e retorna o comprimento da array

Método idexOf():

é usado em JS para encontrar um elemento em específico dentro de uma array. Ele retorna o índice da primeira ocorrência do elemento, ou -1 se o elemento não for encontrado.

Seus parâmetros são:

elementosDePesquisa: (O elemento a ser pesquisado no array)

pontoInicial(Opcional)

ex:

array.indexOf(elementoDePesquisa, [pontoInicial = 0])


## Trabalhando com metódos de strings
- Uma string é imutável
- Mas, com listas, podemos altera-la