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
    const carro = {
        marca: "toyota",
         cor: "azul",
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


```js

let carros = ["BMW", "Auston Martim", "Ferrari", "Buggati"]

console.log(carros)

// modificar qualquer item de um array
carros[1] = "Lamborghini"

console.log(carros) //"BMW", "Lamborghini", "Ferrari", "Buggati"
```
///

```js

let carros = ["BMW", "Auston Martim", "Ferrari", "Buggati"]

let carrosUm = carros[2] //é como declacar uma string com o valor Ferrari

console.log(carrosUm)// Ferrari
```
não será salvo um item do array dentro da variável, mas sim o valor que o item armazena. É como se estivessemos criando uma variável do tipo string.

        let carroUm = "Ferrari"
        console.log(carroUm) //Ferrari


# Array X Objetos

O array em JS é um tipo especial de objeto. Siginifica dizer que o array em JS é um objeto.

```js
    let carros = ["BMW", "Auston Martin", "Ferrari", "Bugatti"];
    console.log(typeof carros)//object
```
Apesar disso, as arrays em JS são melhores descritas como arrays mesmo.

Inicialmente os arrays utilizam número para agrupar seus elementos -- Os objects usam nomes para agrupar seus membros

```js
let carros = ["BMW", "Auston Martin", "Ferrari", "Bugatti"];
console.log(carros[0])//BMW

let person = {nome: "luiza", idade: 20}
console.log(person.nome)//luiza
```
Nesse caso os itens do array podem ser chamados de elementos, enquanto os objetos são chamados de membros.

# Funções dentro de Objects e arrays

```js
    const meuObjeto = {
        meuMetodo: function meuMetodo(){
            console.log('Meu metódo foi criado');
        },
        meuOutroMetodo: function meuOutroMetodo(nome){
            return nome
        }
        metodosAninhados: {
            meuMetodoAninhado: function meuMetodoAninhado(nome){
                console.log('Metódo aninhado chamado,' + nome)
            }
        }
    }

    meuObjeto.meuMetodo()
    console.log(meuObjeto.meuOutroMetodo.meuOutroMetodo("Lulu"))
    meuObjeto.metodosAninhados.meuMetodoAninhado()
```
A mesma estratégia se aplica as arrays, mas no caso das arrays a função é declarada forma anônima:

```js
    let arrayFuncoes = [
        function(){ console.log('Função 1');}
        function(nome){ console.log(nome);}
    ]

    arrayFuncoes[0]()
    arrayFuncoes[1]'lulu'
```

# Interagindo com objetos e array (for...in)
```js
    let dadosObjeto = {
        nome: "lulu"
        idade: 20,
        endereco: "Rua Guarajuba"
    }

    for(dados in dadosObjeto){ //Aqui ele vai armazenar dentro da variável temporariamente 'dado'cada item existente dentro do objeto 'dadosObjeto' a cada vez que repetir o loop
        console.log('Chave: ' + dados + ', Valor: '  + dadosObjeto[dados])
    } //a variável temporária mostra apenas a chave, o objeto com a variável dados é o valor.
```    
As chaves(keys) armazenam valores(values) nos objetos

O for...in também funciona com arrays!

```js
    let dadosObjeto = ['luiza', 20, 'Rua Guarajuba', 'site'];

    for (dado in dadosObjeto){
        console.log('chave:' + dado + 'valor:' + dadosObjeto[dado])
    }
```

Outra forma de iterar sobre array e objetos é com o for...of

No caso dele, conseguimos interar sobre o objeto e retornar somente o valor de cada item existente dentro dele(array ou objeto)

```js
     let dadosObjeto = {
        nome: "lulu"
        idade: 20,
        endereco: "Rua Guarajuba"
    }

    for(dados of dadosObjeto){
        console.log(dados)//Resulta: 'lulu', 20, 'Rua Guarajuba'
    }
```

A diferença entre o laço for...in e for...of:

Ambas são istrulções da linguigem JS capazes de iterar(estruturas de laços/loops) com objetos e arrays.

No caso do for...in ele itera sobre o objeto e retorna a os índices e  chaves(keys)


```js 
let nomes = ['miciline', 'João', 'Maria']
for(dedo in nomes){
    console.log(dedo)//aqui retorna os índices. 0, 1, 2
}
```

```js
    let people = {nome: 'Anderson', idade: 21, profissao: 'Programador'}

    for(dadoz in people){
    console.log(dadoz)// retorna os valores(values)
}
```
**Nos arrays ele retorna o índice, nos objetos retona os valores(values)**

Também é possível retornar os elementos com o iterador for...in:

Exemplo com objetos
```js
    let bebida = { 
        a: 'Cevada',
        b: 'Suco',
        c: 'Café'
    }

    for(bebidas in bebida){
        console.log(bebida[bebidas])
    }
```

Exemplo com array

```js
    console.log('EXEMPLO COM ARRAY')
let bebidas = ['Cevada',
    'Suco',
    'Café']


for (bebiz in bebida) {
    console.log(bebida[bebiz])
}
```

Já no caso do for...of, ele itera sobre um array ou objeto e os valores(values):
```js
    let nomes = ['miciline', 'joão', 'maria']
    
    for(nome of nomes){
        consoloe.log(nome)// Resultado: 'Micilini', 'João', 'Maria'
    }
```

```js
    let bebidas = {a: "Coca-cola", b: "Guaraná", c: "Sprite"}
    for(bebida of bebidas){
        console.log(bebida);//Resultado: 'Coca-Cola', 'Guaraná', 'Sprite'
    }
```

# Arrays Associativos ou Hashes
Oferecem suporte a arrays com índices nomeados, isso quer dizer que em outras linguages é possível criar um array e onde as chaves(keys) são representas por índice.
     
    //Exemplo de Array Associativo na linguagem PHP
    $idade['Peter'] = "35";
    $idade['Ben'] = "37";
    $idade['Joe'] = "43";
O JS não tem esse suporte, ou seja, ele não suporta arrays com índices nomeados. Portanto, se tentarmos fazer:

        var pessoa = []
        pessoa["nome"] = 'micilini;
        pessoa["sobrenome"] = 'Roll'
O JS redefinirá o array para um objeto padrão, fazendo com que metódos e propriedades produzam resultados incorretos.


# Propriedades e metódos de Arrays
Metódos e propriedades fortalecem o desenvolvimento.

- length: é uma das propriedades mais utilizadas, pois ela retorna o número de elementos que existe no array:
```js
    let nomes = ['micilini', 'joão ', 'Maria']
    console.log(nomes.length)// retorna 3
```
Também é usado muito para verificar se o array está vázio.
```js
    let names = ['micilini', 'joão ', 'Maria']
    console.log(names.length)

    if(names.length > 0){
        console.log("O array está cheio")
    } else{ console.log("O array está vazio")}
```

Também é muito usada em conjunto de estruturas de iteração como é do FOR e o WHILE:
```js
    let nomes = ['Micilini', 'João', 'Maria'];
    let i = 0 
    while(i < nomes.length){
        console.log(nomes[i])
        i++;
    }
or
    let nomes = ['Micilini', 'João', 'Maria'];
    for(let i = 0; i < nomes.length; i++){
        console.log(nomes[i])
    }
```

- at(): esse metódo permite que você capture os elementos por seus respectivos índices
```js
    let nomes = ['Micilini', 'João', 'Maria'];
    console.log(nomes.at(1))// João
```

- concat(): esse metódo é usado para unir/mesclar dois ou mais arrays dentro de um unico array
```js
    let arr1 = ['a', 'b', 'c',]
    let arr2 = ['d', 'e', 'f']

    console.log(arr1.concat(arr2))
```

- copyWithin: esse metódo é usado para copiar parte do array para uma outra posição no mesmo array e o retorna sem modificar seu comprimeto:
```js
    const array1 = ['a', 'b', 'c', 'd', 'e']
    const array2 = array1.copywithin(1,3);
    //0) comando copyWithin faz o seguinte:
    //1) O argumento '1' diz para o JS selecionar todos os elementos que vão até o index '1', que nesse caso são os itens 'a' e 'b'.
    //2) Em seguida ele irá substituir esses valores pelo valor existente no index '3' que é o 'd'
    //3) Nessa altura do campeonato o array que estava setado como ['a', 'b', 'c', 'd', 'e'] agora está como ['d', 'd', 'c', 'd', 'e']
    //4) Em seguida a posição 3 do array, será substituída pelo índice '4' que é o 'e', resultando em: ['d', 'd', 'e', 'd', 'e']
    //5) Os demais índices permanecem o mesmo intactos

   console.log(array2)//["d", "d", "e", "e", "d"]

   const array1 = ['a', 'b', 'c', 'd', 'e'];

   const array2 = array1.copyWithin(0, 3, 4);//Copia para o índice 0 o elemento existente no índice 3

  console.log(array2);//["d", "b", "c", "d", "e"]
```

- entries(): esse metódo retorna um novo objeto iterador que contém pares chaves/valor em para cada índice do array.

No caso desse objeto iterador nós fazemos o uso next() para seguir a diante no loop e do value para pegar o valor:
```js
    const array1 = ['a', 'b', 'c']
    const iterador = array1.entries();

    console.log(iterador.next().value) //retorna o array [0, "a"]
    console.log(iterador.next().value) //retorno o array [1, "b"]
```


- every(): testam se todos os elementos do array passam por um teste imprementado através de uma função criada, que retorna true ou false


```js
    //verifica se as idades são menores que 30. se sim, retorna true, else return false
    function verificaIdade(valor){
    return valor < 30
}
    const idades = [23, 25, 17, 28, 29,]
    console.log(idades.every(verificaIdade)) //Note que não precisamos passar o argumento quando chamamos a função 'verificaIdade' pois o próprio JS faz isso
```
Obs: Todos os elementos devem passar no teste da função para o retorno ser verdadeiro.


- fill(): é usado para preencher um valor começando de um índice e indo até o outro
```js
let array = [1,2,3,4,]
    console.log(array.fill(7))//preenche todas as posições com o valor 7

    console.log(array.fill(7,1))//preenche da posição 1 em diante

    console.log(array.fill(15,1,4))//preenche como o 15 da posição 1 ao 4
```

- filter(): o metódo filter retorna um filtro a partir da função que você criou, de modo a retornar somente os elementos que retornarem true.
```js
    function somenteNomesCom5Caracteres(valor){
        return valor.length <= 0;
    }

    let nomes = ['Micilini', 'Gabriele', 'Matheus', 'Edu', 'José']
    const resultado = nomes.filter(somenteNomesCom5Caracteres);
    console.log(resultado)//resultado: ['edu, josé']
```


- find(): o metódo find retorna o primeiro elemento que retorna true através de uma função que você criou. 
```js
    function maiorQueDez(valor){
        return valor > 10
    }    

    const resultado = menorQueDez([7, 5, 6, 10, 20, 21, 30])
    console.log(resultado.find())//20
    //mesmo que haja numeros maiores que 20, eles não são retonados, pois retorna somente o primeiro que for verdadeiro.
```

findeIndex(): retorna o indice do primeiro true que resultar da função.
```js
    function menorQueDez(valor){
        return valor < 10
    }

    const resul = menorQueDez([5, 9, 10, 7, 12])//12
    console.log(resul.findIndex())
```

- findLast() - encontra o valor do último elemento que retornar true através de uma função.
```js
    function menorQueDez(valor){
        return valor < 10
    }

    const resul = menorQueDez([5, 9, 10, 7, 1, 12, 3, 50])
    console.log(resul.findLast())//50
```

- findLastIndex: retorna o índice do último elemento que retorna true através de uma função
```js
    function maiorQueDez(valor){
       return valor > 10;
    }

    let array1 = [1, 7, 9, 33, 10, 45];

   const resultado = array1.findLastIndex(maiorQueDez);

   console.log(resultado);//5, pois o 45 está localizado no índice 5
```

- flat(): o metódo flat pega todos os possíveis elementos aninhados dentro de um array e os desaninha
```js
    let arr = [2,3,5[8,10,13], [16,18]]
    console.log(arr.flat())
```
Quando o flat é usado sem argumento, o JS entende que só queremos desaninhar somente o primeiro aninhamento que ele encontrar. Então, se tivermos aninhamentos dentro de aninhamentos, devemos passar o argumento(número) para que o JS faça o "desaninhamento" de forma mais profunda.
```js
     let arr = [2,3,5,[8,10,13,[2,3,4]], [16,18]]
    console.log(arr.flat(2))
```

- flatMap: o metódo flatMap retornará outro array a partir de um array existente. Aqui ele chama uma função que eu mesmo criarei:
```js
    function verificaSeNumeroDois(valor){
        if(valor === 2){
            return [9,9]
        } else{
            return 0 
        }
    }

   let array11 = [3,4,5,2,7,8,2]
   let resultado = array11.flatMap(verificaSeNumeroDois)
   
   console.log(resultado)//[0,0,0,9,9,0,0,9,9]
```

- forEach: o metódo executa uma função que você criou de modo a enviar cada elemento de um array de forma separada. Esse metódo é muito mais usado e trabalha de forma semelhante ao for, for...in, for...of e while.
```js
    function mostraValor(valor){
        console.log(valor)
    }

    let arr111 = ['lulu', 20]

    arr111.forEach(mostaValor)
```
Podemos difinir um outro argumento na função para achar a chave dos elemento também    
```js
        function mostraValor(valor, chave){
        console.log('Chave' + valor + , 'valor' + valor)
    }

    let arr111 = ['lulu', 20]

    arr111.forEach(mostaValor)
```
É mais comum ver funções declaradas dentro do forEach:
```js
    let arr111 = ['lulu', 20]

    arr111.forEach(function(valor,chave){console.log('Chave ' + valor + , 'valor ' + valor)})
 ```
Outra forma de fazer:
```js
    let arr111 = ['lulu', 20]

    arr111.forEach(function(valor,chave) => console.log('Chave ' + valor + , 'valor ' + valor))
```


- form(): o metódo form, inicialmente, ele pode criar um novo array a partir de uma string
```js
    consolo.log(array.form('micilini'))//["M", "i", "c", "i", "l", "i", "n", "i"]
```
Ou ele pode criar através de outra array onde este obedece a uma determinada função que devo criar 
```js
    function soma(valor){
        return valor * valor // retorna a multiplicação de  cada elemento do array consigo mesmo. 
    }

    console.log(arra.form([1,2,3], soma))//[1, 2, 9]
