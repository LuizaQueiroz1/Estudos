# Estudos sobre função no MDM WEB DOCS

Uma função é um procedimento em JS - um conjunto de instruções que executa uma tarefa ou calcula um valor.  
Para usa-la, devo defini-la no escopo do qual eu quiser chama-la.

Parâmetros primitivos, como numeros são passados para as funções por valor; o valor é passado para a função, mas se o valor do parâmetro for alterado, não refletirá globalmente ou na função chamada.

Mas se você passar um objeto(um valor não primitivo, tal como uma array ou um objeto definido por você) como um parâmetro e a função alterar as propriedades do objeto, essa mudança é visível fora da função


# Funções com o site miciline.com
As funções são "subprogramas" de um programa principal, por vezes chamadas de código externo/interno de uma aplicação JS

As funções seguem um esquema bem parecido com as estruturas condicionais if/else e as estruturas de repetição for/while, pois também são blocos de código

A diferença entre as funções das estruturas condicionais e iterações, é que no caso das funções, o javaScript passa direto por elas, sem executa-las. A menos que as mesmas sejam invocadas.

### Funções com parâmetros
Os parâmetros de uma função são chamados de argumento da função. 
Podemos passar quantos argumentos para uma função, mas o recomendado pelo livro Código limpo são no máximo 3

É possível passar uma função sem qualquer argumento. Isso é possível por meio de argumentos opcionais, e para declara-los é preciso passar um valor padrão para o argumento 

```js 
    function montaTexto(nome = "Fulano"){
        console.log("Seu nome é:" + nome)
    }
    montaTexto()//retorna "Seu nome é: fulano"

    montaTexto('Luiza')//retorna "Seu nome é: Luiza"
```

Quando existe 3 argumentos, o primeiro e terceiro argumento é obrigatório e o segundo é opcional o JS não tem(ainda) capacidade de entender que o segundo argumento é opcional. Então ele fica como 'Undefined'

Quando declaramos mais argumentos do que a função recebe, o JS os ignora e continua executando a função.

As funções não servem apenas como 'subprogramas' que executa um bloco de código e fica por isso mesmo.

Também é possível chamar uma função e recuperar o valor que é retornado por ela com o "return"

### Declarando funções dentro de variáveis

Uma das possibilidades em JS é a capacidade que nos dar de declarar funções dentro de variáveis e depois chamar a variável como se fosse uma função.

Esse ato também é conhecido como uma função anônima.

CUja finalidade é criar uma função como se ela fosseum objeto comum. Exemplo de como essa função se comporta:

```js

    let anonima = function(){
        console.log("Anônima foi chamada")
    }

    anonima()
```
nesse tipo de função, não precisamos declarar o nome da função, pois o próprio nome da variável é considerado o nome da função. 

Funções anônimas também pode receber argumentos e retornar valor

```js 
    let somaDois = function(numero){
        return numero + 2
    }

    console.log("Resultado é:") somaDois(8); //10
```

# Três tipos de declaração de funções 

## Funtion Constructor:
Conseguimos passar parâmetros para o construtor da função em forma de textos

```js

    let multiplicar = new function('x', 'y', 'return x * y');
    console.log(multiplicar(2,2)); //4
```
    
 É possível escrever mais de uma linha de código dentro do function constructor   

 ```js
 let exemplo = new function("alert('olá mundo!'); alert('Olá lulu'); console.log('resultado é x')")
    exemplo();
```

## Function Declaration

Como visto anteriormente, a function declaration é a forma de declarar uma função atribuída a uma variável de forma anônima
```js
    let multiplicar = function(x, y){
        return x * y
    }

    console.log(multiplicar(5, 5));//25
```

## Function expressions
É a forma de declarar uma função normalmente definindo atributos para ela: 

```js
    function nomeFuncao(x, y){
        return x * y
    }
    nomeFuncao(5,5);//25
```

# Funções dentro de funções 

```js
    function funcaoUm(){
        console.log('função 1 chamada')
        funcaoUmDois()
        function funcaoUmDois(){
            console.log('funcao 2 chamada');
        }
    }
    funcaoUm();
```

Chamamos a funcaoUmDois dentro da funcaoUm. Se tentar chamar a funcaoUmDois fora da funcaoUm dará um erro "função não está definida"

O JS não encontrará a função específica por um problema de escopo de código!

Existem também a possibilidade de declerarmos mais uma função no escopo principal do projeto de modo a fazer com que ela se comuniquem:

```js
    function um(){
        console.log('UM')
    }

    function dois(){
        um()
        console.log('DOIS');
    }

    dois();
```

# Funções do tipo Arrow
É uma forma simplificada de escrever funções, sem a precisão de usar o return. Essa é a sintaxe seguinte: 
          **() => {}**

Função normal em comparação com a função arrow:

```js
    const digaOla = function(nome){
        return `Olá ${nome}!`
    }
```

 Exemplos de funções arrow

```js
    const digaOla = nome => `Olá ${nome}, mundo!`;
```    
```js
    const adicao = (a,b) => a + b;
    constsubtracao = (a,b) => a - b
```
 Quando temos funções arrow que possuem apenas uma linha, o retorno sera feito de forma automática.

 Mas quando temos uma arrow function com mais de uma linha, precisamos usar as chaves e o return

 ```js
    const verificaNome = nome => {
        if(nome == 'micilin'){return true}
        return false
    }
```

# OPerador Yield
No JS temos um operador capaz de pausar e resumir uma função de gerador: o Yield.

Para isso, o nome função tem que ter um * no final

```js
    function* mostraMensagens(){
        console.log('olá...');
        yield 1;
        console.log('Mundo...');
        yield 2;
        console.log('!!!...');
        yield 3;
    }

    let funcao = mostraMensagens()

    console.log(funcao.next());//Olá... {done: false, value: 1}
    console.log(funcao.next());//Mundo... {done: false, value: 2}
    console.log(funcao.next());//!!! {done: false, value: 3}
```
O yield acima está relacionado com o número 1, 2, e 3. Aqueles número representam o valor de retorno retonando cada vez que usamos o comando next(), mas podemos passar qualquer outro valor ali, como uma string, valor booleano ou até uma array. Ex: yield[30, 40, 50].


Todas as funções podem ter os seguintes fatores: 
Chamada, parâmetro(argumento), ação e retorno

Nem toda função tem parametro ou retorno 

Funções são ações executadas assim que são chamadas ou em decorrência de algum evento

Uma função pode receber parâmetros e retornar resultados


## Função callback
Permite executar uma função depois de uma determinada ação
conceito fundamental para entender programação assincrona de JS

As callback functions são recursos imprescindiveis em java Script para operações assincronas, como requisições HTTP, leitura/escrita de arquivos, timers, entre outros...

programaçao assincrona