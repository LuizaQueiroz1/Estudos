# Aula 2 - Primeiros passos com JS.

## Tema 2 - Ciclo de processamento de dados
Entrada: obter dados para o meu programa via teclado, conexão de rede ou software. -> 

     Ler(x, y)

Processamento: realizando operações aritmética, lógicas...

    res = x+y

Saída: saida na tela para o usuário, uma led piscando, um material sendo impresso, uma informação enviada por alguma rede.

    Escrever (res)

/////////////
```js
    console.log("Hello world")

    console.log("\n\n\n")

    console.log(3+4) // calculo é sem aspas

    console.log("3+4") // as aspas são para impressão de texto na tela

    console.log("3" + "4") //isso é uma concatenação, que sigifica colar dois textos

    //outro exemplo de concatenação
    console.log("Hellow" + "world!")
    //ou
    console.log("Hello", "world")

    //concatenando mensagens e textos
    console.log("O resultado da soma de 3 + 4 é:", 3+4)
```

## Tema 3 - Variáveis, dados e seus tipos

Um dado é toda e qualquer informação que eu consiga manipular no meu programa e que fica armazenado na memória.
"Sequência de simbolos quantificados ou quantificáveis"(Puga, 2009)

Os dados ficam na **memória**, a memória é um **conjunto de endereços**. É aí que entra a **variável**: é um nome para um **conjunto de endereços na memória**. Um conjunto que vai manter um dado. E sempre vamos usar o nome dessa váriavel quando a quisermos usar no nosso programa após declarada.

Não começar uma variável por número, é permitido apenas no meio ou no final do nome.

**Tipos de dados**:
Numérico (INteiro ou flutuante)
Caractere
Literal/booleano


### Dados não primitivos:
O que são objetos?
é um tipo de dado não primitivo que permite que você armazene mais de um tipo de dado dentro de uma mesma variável.

Um objeto é como se fosse uma caixa, onde dentro existe várias subdivizões com seus respectivos nome.

Cada subdivisão representa uma propriedade, onde o nome dessa subdivisão é considerada como uma chave(key) e o valor contido dentro dessa subdivisão é considerado um valor(value).
A propriedade chave(key) é considerado uma string, enquanto o valor(value) pode ser qualquer outro tipo de dado(strings, number, booleanos)

A sintaxe para criar objetos:
```js
let pessoa = {"nome": "Luiza", "Idade": "20", "Ocupação": "Estudante de TI"} //não preciso de aspas para declarar a chave(é opcional)

console.log(pessoa.nome)//selecionar objeto

```

Alterando o valor dos objetos 

```js
    let carro = {nome: "BMW X8"}

    carro.nome = "Luiza Brito"

    console.log(carro.nome)// Luiza Brito
```

Podemos alterar o valor do objeto por qualquer outro dado primitivo

É possível altera a chave de um objeto em uma constante:
```js
    const pessoa = {
        "nome": "Luiza", 
        "Idade": "20", 
        "Ocupação": "Estudante de TI"
        } //não preciso de aspas para declarar a chave(é opcional)

   console.log(pessoa.nome)//selecionar objeto
```

O que não é possível é redeclarar um objeto para uma constante já declarada:

```js
const pessoa = {
nome: "Micilini",
site: "https://micilini.com"
}

pessoa = {
nome: "Fulano de Tal",
site: "https://sitequalquer.com.br"
}//Este código vai dar erro!
```

Objetos dentro de objetos:

```js
    let pessoa = {
        nome: "Lulu",
        endereco:{ Rua: "Guarajuba", numero: 51, https: true}
    }
    pessoa.endereco.https = false //alterando um objeto que está dentro de um objeto 
```

OPerador Delete:

```js
    let pessoa = {
        nome: "Luiza",
        sobrenome: "Queiroz"
    }

    console.log(pessoa.nome)

    delete pessoa.nome

    console.log(pessoa.nome) //undefined
```

#### Metódos de objetos
- assign(): é usado para copiar todos os elementos do primeiro objeto com o segundo objeto, mantendo os elementos que já existem no segundo objeto.
```js
    const objeto1 = {a: 1, b: 2}
    const objeto2 = {b:4, c:5}

    const objetoTres = Object.assign(objeto1, objeto2);//   {a: 1, b: 4, c: 5}
```
b ficou com 4, pois existe nos dois objetos e o objeto2 tem prioridade.

- create(): cria um novo objeto, utilizando outro objeto existente como protótipo para o novo objeto a ser criado:
```js
    const pessoa = {
        nome: "lulu",
        empresa: false
    }

    const meuObjeto = Object.create(pessoa)
    meuObjeto.empresa = true

    console.log(meuObjeto.empresa)//true
    console.log(pessoa.empresa)//false
```
- defineProperies(): define uma nova propriedade ou modifica uma existente no objeto, retornando o objeto:
```js
    let obj = {}
    Object.defineProperie(
        obj, {'propriedadeUm':{ value: "Lulu", writable: true}, 
        'propriedadeDois': {value: "João", writable: false} /*etc, etc*/} )
    
    console.log(obj); {propriedadeUm:'Lulu', propriedadeDois: 'João'}
    object.propriedadeUm = 77
    object.propriedadeDois = 5

    console.log(obj);{propriedadeUm: 77, propriedadeDois: 'João'}
```
dentro de cada propriedade acima nós podemos definir duas chaves , o Value, que nada mais é do que o valor que será armazenado por essa propriedade. 
E o writable, que diz se essa propriedade pode receber novos valores ou não.

- dedinePropety(): define uma nova propriedade de um novo objeto
```js
    const obj = {} //criar um novo objeto
    Object.defineProperty(obj, 'propriedadeUm', {
        value: 'miciline', 
        writable: true,
        enumerable: true,
        configurable: true
    })

    console.log(obj); {propriedadeUm: 'miciline'}
```

value: o valor associado com a propriedade. pode ser qualquer valor válido em JS. valor padrão é undefined

configurable: true se e somente se o tipo de descritor dessa propriedade pode ser alterado se essa propriedade pode se deletada do objeto correspondente. valor padrão é false

enumerable: true se e somente se esta propriedade aparece durante a enumerçãodas propriedades  no objeto correspondente. valor padrão é false.

writable: true se e somente se o valor associado com a propriedade pode ser modificada com um operador de atribuição(en-US). valor padrão é false.


- entries(): o metódo entries retorna uma array dos proprios pares [key/value] enumeráveis de um dado objeto, na mesma ordem dos objetos providos através do loop for...in
```js

let objUm = {foo: 'bar', baz: 42}
console.log(Object.entries(objUm))/ // [['foo', bar], [baz, 42]]

let objDois = {0: 'a', 1: 'b', 2:'c'}
console.log(Object.entries(objDois))
```

- freeze(): impede que novas propriedades sejam adicionadas a ele; impede que as propriedades existentes sejam removidas; e impede que propriedade existentes, ou sua inumerabilidade, configurabilidade, ou a capacidade que sejam escritas ou alterada. Em essência o objeto é imutável.
```js
    var obj = {
        nome: "lulu",
        empresa: true
    }

    Object.freeze(obj)

    obj.nome = 'João';//Não funciona
    obj.idade = 15;//Não funciona
    obj.empresa = false;//Não funciona

    console.log(obj); {nome: "lulu", empresa: true}
```

- isFrozen: o metódo determina se um objeto está congelado(frozen)
```js
    var obj = {
        propriedadeUm: 42
    }

    console.log(Object.isFrozen(obj))//false

    Object.frezze(obj)
    
    console.log(Object.isFrozen(obj))//true
```

- fromEntries(): o metódo fromEntries() transforma uma lista de pares chave-valor em um objeto:
```js
    const entries = new Map([
        ['foo', 'bar'],
        ['baz', 42]
    ]) 

    const obj = Object.fromEntries(entries);

    console.log(obj); {foo: 'bar', baz: 42}
```
    

## Tema 4 - Manipulações avançadas com Strings
Composições 
 **Lista de marcadores de posição**

 |Marcador|Tipo|
 | --- | ---|
 |%d ou %i|Números inteiros|
 |%f|Números de ponto flutuante|
 |%s| Strings

 //exemplo de composição

 ```js 
 const nota = 9.5
const disciplina = "Lógica de Programação e algoritmos"

console.log("Disciplina:", `${disciplina}`)
console.log("nota:", `${nota}`)

console.log("Você tirou {} na disciplina {}", `${nota}`, `${disciplina}`)
```


## Função de entrada e fluxo de execução do programa
A função de entrada em JS é prompt