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