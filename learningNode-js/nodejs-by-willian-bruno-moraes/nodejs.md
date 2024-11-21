# Node js

O node js é uma ferramenta poderosa que permite construir fácil e rapidamente aplicações de redes escaláveis. O nodeJs usa uma arquitetura orientada a objetos e tudo é processado como single thread(é uma 'linha' em que tudo é processado sequencialmente, não precisando abrir outra thread ) Por ter sido uma ferramenta desenvolvida para a construção de aplicações de redes, é possível desenvolver qualquer protocolo: DNS, FTP, HTTP, HTTPS, SSH, TCP, UDP ou WebSockets. O nodeJs é, portanto, um runtime JavaScript, open source e multiplataforma que nos permite executar programas fora do browser.

## Javascript (relembrando conceitos e conhecendo outros)

Escopo de função: O escopo de função permite o comportamento chamado closure, por meio do qual as váriaveis acima podem ser acessadas por um escopo específico, ou seja, numa função interna.

Diferente do escopo de função, que delimita a acessibilidade de uma variável a um bloco acessível de código, geralmente definido por chaves.

Hosting em javaScript é o comportamento de mover a declaração de variáveis e funções para o topo, permitindo usar variáveis antes de ser declarada. É só com a variável _var_ pode fazer isso.

### Funções

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

## Entendendo .bind(), .call(), .apply()

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

### Operadores: +, -, \*, /, %

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

### Controles de fluxo

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

### JSON

A estrutura de dados JSON é a Notação de Objeto do JavaScript. Utilizamos na comunicação entre aplicações(APIs REST, mensagens em filas, armazenagem de dados etc.). Consiste na sintaxe de objeto literal.
{"title": "build a new universe"}

JSON is a Data representation Format
Commonly used to API and configs
LightWeight to read and write
And is used in javaScript because is its superset

Json types:
Number, strings, booleans, null, array, object

A forma correta de comparar objetos em javascript é comparar os valores de cada atributo, de forma recursiva(pois um objeto pode ter níveis aninhados)

### Map

Map são coleções únicas identificadas por chave.

```js
const places = {
  Coruscant: "Capital da República Galática",
};
```

### WeakSet e WeakMap.

Ambos são ideais para guardar referencias de objetos, durante verificações em loop ou recursivas, pois indicamos ao interpretador que os valores logo serão apagados pelo garbage collector.
O valor dentro desse WeakSet é único, assim como no WeakMap também o é, e a tentativa de reatribuir esse valor, na realidade, vai realizar uma troca.

### Destructuring assignment:

Atribuição via desestruturação é uma nova sintaxe para extrair dados de arrays ou objetos em novas variáveis.

```js
const [a, b] = [1, 2];
```

### Spread:

O operador spread permite expandir arrays ou objetos, fazendo cópias destes para outro destino.

### Operador chaining

permite a leita de um valor de um objeto sem causar erro se esse valor não existir, retornando undefined.

### Default Argument

Argumentos padrões permitem que funções sejam invocadas sem valores. Isso explica a diferença entre undefined e null, pois se essa função for chamada, o valor ficará como undefined. Null é um valo, enquanto undefined é a falta de valor.

### Use Strict

O useStrict é uma declaração que deve ser colocada na primeira linha de um arquivo com extensão javaScript para dizer que o código seguirá boas práticas. Assim o interpretador nos avisará alguns erro como: não declarar variáveis, desabilitar o uso de palavras reservadas em variáveis ou funções(arguments, eval etc.)

### ESlint

Os lints são ferramentas que verificam tipos de falhas que uma linguagem não compilada, como no caso de javaScript, deixem passar erros como de sintaxe, variáveis, argumentos e funções não utilizadas, complexidade e aninhamento máximos, blocos implícitos que devem ser definidos como chaves, comparações não estritas e a falta de padronização do código em um time de desenvolvedores.

Comandos para instalar o ESlint:

**npm install eslint --save-dev; npm i --global eslint**
executar o comando **eslint --init** e responder umas perguntas
**eslint (nome do arquivo) --fix** para corrigir erros nesse arquivo.

## NodeJs

### Versionamento semântico

O versionamento semântico define uma série de regras e funciona da seguinte forma:

- 0.0.X - PATCH: identifica as versões com correções de bugs, patchs ou pequenas melhorias, conhecidas como patch ou bug fixes.
- 0.x.0 - MINOR: identifica versões com novas funcionalidades, mas sem quebrar a compatibilidade com as demais versões anteriores. Conhecidas como _minor_, _breaking_ ou _features_ .
- x.0.0 - MAJOR: identifica grandes alterações: quando este número se altera, indica que a versão atual não é compatível com a anterior. O primeiro release em que o major é igual a 1 indica que a API está estável, e não se esperam mais grandes mudanças que quebrem os clientes por certo tempo

### Módulo n e nvm

Esses módulos servem para atualizar novas versões, reinstalar uma versão antiga ou alterar entre NodeJs e io.js com ajuda dos módulos n e/ou nvm.

### Arquivo package.json

Todo projeto nodeJs tem o arquivo package.json na raiz. Esse aquivo guarda informações sobre a aplicação, como nome, versão, descrição repositórios Git e dependências.
Comando para criar estrutura inicial do package.json:
**npm init --yes**

Com o parâmetro -e(evaluate script), conseguimos executar códigos NodeJs em linha, para, por exemplo, ler o atributo version do arquivo package.json:
**node -e "console.log(require('.package.json').version)**

#### Scripts do arquivo package.json:

NO arquivo package.json, existe uma seção chamada scripts. Nessa seção do JSON, configuramos atalhos para comando que queremos executar e definimos como a aplicação reage aos comandos do npm, como start e test.

##### Package-lock.json ou yarn-lock.json:

Esses arquivos vão aparecer após instalar o primeiro módulo npm no projeto. Eles servem para garantir a instalações exatas das dependências(e dependências internas das dependências) que você usou projeto. Dessa maneira, quando for feita a integração com o github Actions, Jenkins etc, você terá certeza que oq você desenvolveu localmente será o mesmo na máquina em produção.

### NPM(Node Package Manager)

O NPM é uma ferramenta de linha de comando, que gerencia pacotes do registry npmjs.

1. Lado bom: O lado bom é que dispõe de vários módulos a disposição.
2. Lado ruim: O lado ruim é também que dispõe de vários módulos, pois vou encontrar diversos módulos com o mesmo proposito ou que realizam as mesmas tarefas. Então vale se atentar as seguintes características necessárias que devemos levar em conta quando for usar um módulo:

- Procurar um módulo que está sendo regularmente mantido(com frequentes atualizações)
- Verificar se outros desenvolvedores estão usando(número de estrelas, forks, issues abertas e fechadas, etc).
- É importante ter uma boa documentação, para que não precise olhar o código fonte em um projeto simples.
- procurar testes de performance em que são comparados módulos alternativos.
  COMANDO PARA INSTALAR ALGUMA VERSÃO DE MÓDULO ESPECÍFICA:
  **npm i cowsay@1.1.19 --save**

#### npm update/npm-check

A todo momentos, as versões dos módulos que utilizamos estão sendo atualizadas, com correções, melhorias de performance e novas funcionalidades. Para atualizar, podemos utilizar os seguintes comandos:
**npm update --save**

A tag --save vai se encarregar de escrever no package.json a nova versão dos módulos que foram atualizados.

Diferença entre os símbolos que pode vir na frente da versão de cada módulo no package.json:

- o ~ é mais restritivo e so permite atualizações patch(último número da versão), enquanto o ^ permite que atualizações minor(segundo dígito do número da versão) sejam realizadas.

Outras formas de verificar se há outras novas versões disponíveis das dependências listadas no package.json do seu projeto é utilizando o npm-check. Exemplo:
**npx npm-check -u**

### Console do nodeJS(REPL)

o nodeJS disponibiliza uma forma para acessar as propriedades e funções utilizando o terminal(desde que seja uma distribuição Linux) do sistema operacional sem que seja preciso escrever e salvar códigos em um arquivo.
Uma alternativa que dará uma experiência mais próxima a sistemas operacionais baseados em Unix é o Git Bash.

### Programação síncrona e assíncrona

A programação síncrona é aquele que acontece uma operação após o término de outra. Já na assíncrona, o programa que também é lido de cima para baixo, se uma ação demorar certo tempo para ser encerrado, a linha após esse procedimento será executada antes de o procedimento assíncrono terminar.

Rotinas síncronas são bloqueantes, pois ocupam o processador até estarem finalizadas.
Pelo fato do nodeJS é single-thread, o mesmo não é adequado para trabalhar com processamento pesado, como tratamento de imagens, parser de arquivos gigantes, etc.

### Promises

As promises são um recurso fundamental para lidar com operações assíncronas, como requisições de rede, leituras de arquivos e outras tarefas que podem demorar tempo para serem concluídas.

#### Conceitos Essenciais

- Estados da promise: Uma promise pode estar em três estados: pending(pendente), fulfilled(resolvida) ou rejected(rejeitada);
- then(): é o método utilizado para usar com uma promise resolvida
- catch(): é o método utilizado para lidar com erros(rejeições) de uma promise.
- finally(): método utilizado independente do resultado da promise(resolvida ou rejeitada)

### Entendendo o prototype

Todos os objetos JS são descendentes de Object, e todos os objetos herdam métodos e propriedades de Object.prototype. Esses objetos e propriedades podem ser sobrescritos.

#### Entendendo o objeto literal

Cada vez que invocamos o operador **new** para uma função construção, obtemos uma nova instância de um objeto, ou seja, uma nova referência de memória. No entanto, para objetos criados com a notação literal, teremos sempre a mesma instância, a mesma referência de memória.

### Programação funcional

O paradigma da programação funcional trabalha unicamente com funções e requer que sejam limpas. As funções puras tem que atender dois pré-requisitos:

1. ela tem que retornar sempre a mesma coisa e não podem depender de dados globais
2. Tem que ser imutável

### Closures

O escopo de javaScript é baseado em funções ou blocos. O fato de uma função interna poder acessar variáveis acima de um escopo acima do seu é chamado de closure.

## Ferramentas de linha de comando:

São programas geralmente escritos em shell script(UNIX), em C#(Windows), python, Ruby ou NodeJs, para automatizar tarefas executadas dentro do terminal

### TCP

O TCP ou Protocolo de Controle de Transmissão é um dos protocolos de comunicação de rede de computadores.
Uma característica importando de uma ferramenta de linha de comando é que, após te sido executada, o processo devolve o cursor do terminal ao usuário para que ele possa continuar trabalhando, digitando outros comandos ou invocando novamente a ferramenta. NO caso de servidores, nãp acontece isso. O processo não pode simplesmente fechar. Ele precisa continuar aberto, aguardando conexões, para poder responder o que for solicitado.

### Servidor HTTP

Bem parecido com o chat TCP, um servidor HTTP também é um processo que fica aberto aguardando conexões.
Os dois parâmetros da função createServer() são os objetos request e response, que representam uma requisição HTTP e consistem sempre em um pedido e uma resposta, respectivamente.

### Módulos Express Generator e Fastify Generate

#### Express

O módulo Express cria uma estrutura inicial bem bacana para começar projetos, baseado no framework ExpressJs.
Ao executar: npx express-generator : será gerado a estrutura

#### Fastify generate

Também existe o fastify-cli, que possui um método generate, e inicia um projeto com o framework fastify, que é equivalente ao expressjs:
npx fastify-cli generate .
npm i.

## REST (Representational State Transfer)

O Estado de Transferência Representacional(REST) é uma design de arquitetura criado para que API'S se conecte umas com as outras. O REST foi utilizado para criar o protocolo HTTP, e quando seguimos as restrições descritas pela especificação, pode-se dizer que foi feito um web service RESTful.
Um Web Service é uma solução de integração e comunicação entre aplicações diferentes através da internet. Essa arquitetura permite que sistemas disponibilizem , com segurança, dados para consumidores. São preceitos que um web Service deve garantir autenticidade, privacidade, integridade.
É uma forma de permitir que outras aplicações façam queries no seu banco de dados mas apenas se você permitir e se aquele cliente tiver permissão de acesso suficiente para realizar essa operação.

Uma API(Application Public Interface) é a interface que expomos ao mundo. É a forma de deixar que outras aplicações manipulem a nossa aplicação, os nossos dados, seja editando ou apenas filtrando alguma informação.

Logar em redes sociais só é possível porque as empresas disponibilizam um Web service que faz a integração com a API para se conectar com o banco de dados para fazer a autenticação dos dados de login.

Num contexto corporativo, que nem sempre é disponibilizado uma API publicamente, também é importante que use API, pois, por meio dessa arquitetura, conseguimos desacoplar sistemas. Conseguimos quebrá-los em sistemas menores, escaláveis e fáceis de serem mantidos , em vez de ter uma única aplicação monolítica, em que uma alteração de uma regra de negócio pode afetar uma terceira parte que parecia desconectada

**Diferença entre o Estado Representacional e o Stateless:**
O estado representacional guarda todas as alterações feitas com um PUT refletindo as mudanças feitas no backend. O statelessness significa que cada requisição é tratada de forma independente pelo servidor, sem a necessidade de lembrar das interações anteriores além do estado persistido dos recursos.

### Estrutura da requisição HTTP

Uma requisição é um pedido que fazemos a um web service. O protocolo HTTP é baseado em pedido e resposta. Quando um navegador acessa um site, ele está pedindo um conteúdo para o servidor daquele site. Esse conteúdo que vem em forma de HTML é a resposta do servidor.
Atualmente, utilizamos o protocolo HTTP/1.1 e HTTP/2. Nele temos que uma requisição gera uma resposta. Porém, essa requisição pode ser bem detalhada especificando muitas coisas, como qual tipo de mídia queremos como retorno, quais tipos de dados e em qual quantidade etc.

#### Estrutura De Requisição:

1. Endpoint - é o URL, um endereço web. Ex.: **https://site.com.br/livros**
2. QueryString: é o trecho da URI após o caractere ? (ponto de interrogação). Ex.: ?param=value&param2=value2;
3. Recurso: é um caminho. Ex.: **http://site.com.br/livros** (a palavra livros é o recurso);The Peanut Butter Falcon (2019)'
4. parâmetros: são variáveis enviadas na URI. Ex.: **https://site.com.br/livros/** 1 (o número 1 é o parâmetro);
5. Cabeçalho: são dados adicionais enviados na requisição. Ex.: tipo de mídia que aceitamos como retorno, token para autenticação, cookies etc.
6. Método: é o tipo de requisição, chamado também de verbo. Os métodos existentes no HTTP são: **OPTIONS, GET, HEAD, POST, PUT, PATCH, DELETE, TRACE, CONNECT.**
7. Dados: é o corpo da requisição. Exemplo.: quando enviamos um formulário via post, os dados nos input são o corpo da requisição.

#### Estrutura de resposta:

A resposta é o retorno, ou seja, resultado da requisição

- Status code: é um número de 100 a 599. Ex.: 404 para página não encontrada.
- dados: é o corpo do retorno. Ex.: ao visitar um site, o HTML é o corpo do retorno.
- cabeçalho: são informações extras enviadas pelo servidor. Ex.: tempo de expiração de um recurso.

##### Status code

O status code é a representação numérica da resposta, um inteiro de três dígitos que informa o estado do retorno. Nós os classificamos em cinco tipos, de acordo com o número de centenas:

- 1xx: indica uma resposta provisória
- 2xx: indica que a requisição foi recebida, entendida e aceitamos
- 3xx: indica que futuras ações precisam ser feitas para que a requisição seja completada;
- 4xx: indica algum erro do cliente
- 5xx: indica algum erro do servidor, como que ele não foi capaz de processar a requisição.

##### dados

O dado é corpo da requisição. Pode ser imagem, texto, video etc. Dependendo da requisição que estamos fazendo, essa é a parte mais importante da resposta.

##### Cabeçalho

Assim como a cabeçalho da requisição, o cabeçalho de resposta traz informações adicionais: se o conteúdo foi devolvido com algum tempo de compressão(gzip), informações sobra qual tecnologia do servidor respondeu à solicitação, o tamanho do conteúdo respondido, informações sobre o cache etc.

##### Cookies

Fazem parte da resposta, são arquivos temporários, gravados no navegador, com escopo do site que os criou, para gravar e manipular informações.

### Princípios/Restrições do REST

Uma API RESTful é uma interface de programação de aplicações que segue os princípios da arquitetura REST(Representational state transfer):

1. Client-server
   Separa a responsabilidade do CLient(interface do usuário) e o server(armazenamento e manipulação de dados), permitindo que cada um evolua de forma independente.

2. Stateless
   Cada requisição feito pelo cliente ao servidor deve conter todas a informações necessárias para entender e processar as requisições.
   O servidor não deve armazenar nenhum contexto entre a requisição.

3. cacheability(capacidade de cache)
   As respostas das requisições devem ser classificadas como cacheadas ou não, para que os clientes possam usar a respostas na requisições subsequentes, melhorando a eficiência e a performance.

4. Sistemas de camada(layed-system)
   As arquiteturas devem conter várias camadas(servidores, intermediários, proxies etc), cada uma com um objetivo específico. Isso ajuda a melhorar a escalabilidade e modularidade do sistema.

5. Interface uniforme(Uniform Interface)
   Uma interface uniforme que simplifica e desacopla a arquitetura. Inclui aspectos como identificação de recursos, manipulação dos recursos através de representações, mensagens autodescritivas e hipermídia como motos do estado do aplicativo(HETEOAS).

6. Código sob demanda(código em demanda) [opcional]
   Permite que os servidores forneçam códigos executáveis aos clientes sob demando, expandindo a funcionalidade dos clientes, como scripts javaScript.

### Testando requisição

Para fazer requisições fora do navegador, de todos os métodos HTTP que uma API RESTful suporta, antes de desenvolvermos o frontend que vai fazer essa integração, precisamos de uma ferramenta como o curl, postman, Insomnia pu outras.

#### CURL

O curl é uma ferramenta de linha de comando que nos possibilita transferir dados de um servidor para outro, utilizando os protocolos de URL para fazer requisições via terminal. Ele é amplamente utilizado para fazer requisições HTTP, FTP, SMTP, e muitos outros tipos de protocolos.

**Funcionalidades Principais:**

1. requisições HTTP/HTTPS
2. Transferência de arquivos
3. Suporte a vários protocolos
4. autenticação
5. configuração de proxies

Em resumo, o curl é uma ferramenta poderosa e versátil para transferir dados pela rede de forma eficiente e flexível.

## Bancos de dados

O que é um banco de dados?

São um conjunto de dados que se ralacionam.
Propriedades:

- coleção logica e coerente de dados com um significado inerente
- projetado, construído e populado com dados para um propósito específico
- possui um conjunto pre-definido de usuários e aplicações.
- representa algum aspecto no mundo real - "mini-mundo". E qualquer alteração efetuada nesse "mini-mundo" é automaticamente refletida no banco de dados.

SGBD(Sistema Gerenciador de Banco de Dados)
Beneficios no uso de um SGBD:

- implementação do conceito de transação(garantir que determida transação vai ser realizada ou não)
- controle de concorrência
- mecanismo de acesso aos dados
- mecanismos de recuperação (Tolerância a falhas)
- maior segurança

Um banco de dados é um sistema para armazenar, gerenciar e recuperar dados de forma eficiente. Eles são essenciais desde sistema de gerenciamentos em empresas até serviços online e aplicativo móveis.

### Conceito de banco de dados

- Armazenamento estruturado: os dados são estruturados de uma forma que possam ser facilmente acessados, gerenciados e atualizados.
- Gerenciamento de dados: ferramentas e interfaces são disponibilizadas para inserir, atualizar excluir e consultar dados.
- Segurança e integridade: mecanismos para proteger e assegurar a precisão e a consistência dos dados.

Diferença de banco de dados relacional e não relacional.

#### Banco de dados relacional

é baseado no modelo relacional, que consiste em **entidade** e **relação**.
A **entidade** é um elemento que é caracterizado por seus dados(informalmente chamamos de tabela).
A **relação** determina como cada registro na tabela se associam com o registro de outras tabelas. Chaves primárias( que identifica unicamente cada registro dentro de uma tabela) e estrangeiras(são as colunas fazem relação com colunas ou chaves primárias de outras tabelas)

##### Vantagens do banco de dados relacional:

- evita redundância(não tem dados duplicados se o banco foi modelado corretamente).
- O crescimento de um banco de dado relacional pode ser tanto vertical quanto horizontal. 1. Crescimento vertical(poder de processamento de cada máquina) 2. Crescimento horizontal(quantidade de máquinas necessárias para armazenar dados). Por não ter redundância, o banco relacional é mais propenso de crescer na vertical. 3.
- A grande velocidade de consulta em banco relacional vai até um milhão de registros, quando passa dessa patamar, a velocidade vai ficando mais lenta se não forem feitas correções pelo programador

Desvantagens do banco de dados relacional: não escalável

#### banco de dados não-relacional

##### Vantagens de um banco de dados não-relacional(noSQL)

- Estrutura fácil de se escalar, de aumentar.
- Consegue se expandir sem prejudicar as estruturas anteriores armazenadas. - Tem um crescimento tanto horizontal, como vertical, mas seu crescimento é mais horizontal. Isso se dá pelo fato da capacidade de escalar.
- Consulta mais rápida, justamente pelo fato de não precisar relacionar tabelas, construindo uma tupla virtual para mostrar a resposta ao usuário.

**Quatro modelos de bancos de dados não-relacionais:**

1. modelo orientado a documentos,
2. modelo chave: valor,
3. modelo orientado a grafos(complicado)
4. modelo família de colunas.

##### Desvantagens do banco não-relacional:

redundância(vai ter a mesma informação armazenada várias vezes).

##### A diferença entre o banco relacional e o não relacional

Se dá pelo fato de o banco relacional não ter escalabilidade para outros tipos de dados de armazenamento e o não-relacional, sim.
O relacional utiliza apenas SQL e o não relacional não utiliza apenas SQL(noSQL)
A escalabilidade não está relacionada a quantidade de registros e sim a diversificação dos mesmos.

mySQL e mongoDB

#### Esquema em banco de dados

Esquema em banco de dados é a especificação da estrutura de um banco de dados.

O termo esquema no banco de dados é usado na mesma conotação que modelo(como produto final da atividade de modelagem).
MOdelo apenas referentes ao aspecto estrutural do mundo real
O esquema é onde os dados serão armazenados

#### InstânCia

A instancia no banco de dados nada mais é que a observação do que está sendo visto naquele momento

#### Projeto de banco de dados

É o processo de:

- determinar a organização de um banco de dados, incluindo a estrutura, conteúdo e aplicações.
- desenvolver a estrutura do banco de dados
- Projetar a estrutura lógica e física de um ou mais bancos de dados com a finalidade de acomodar as informações necessárias a um usuário da organização, para um definido conjunto de aplicações

##### fase 1

Projeto conceitual de Banco de Dados:
ELaboração de um modelo abstrato de um "mini-mundo" - totalmente independente de qualquer tecnologia da informação

- modelo, entidade, relacionamento
- requisitos de informação

##### fase 2

Projeto lógico de banco de dados:

- Elaboração de um modelo implementável durante o qual endereçamos uma classe de tecnologia da informação (ex.: banco de dados Relacionais)
- elaboração do modelo implementável, a partir de um modelo abstrato
- esquema conceitual de dados globais

##### fase 3

Projeto físico do banco de dados

- Elaboração de um modelo processável, durante a qual endereçamos uma tecnologia da informação específica (ex.: banco de dados relacional ORACLE)
- Elaboração de um modelo processável a partir do modelo implementável
- esquema lógico de dados

oneroso, instância

### Construindo uma API RESTful

Uma API(Application Programing Interface) é um conjunto de rotinas e padrões estabelecidos por um software para a utilização de suas funcionalidades por aplicativos que não pretendem envolver-se em detalhes da implementação, mas apenas usar seus serviços.

O framework express é minimalista e flexível para o desenvolvimento web. Nós o utilizamos para gerenciar rotas da nossa aplicação.

Uma rota é um caminho até um recurso. É onde declaramos em qual endereço vamos interpretar as requisições que serão enviadas para as nossa aplicação web, e aí responder o que foi solicitado

#### Middlewares

Um Middlewares é uma função que intercepta cada requisição que a aplicação recebe e realiza algum processamento, podendo delegar ao próximo middleware o restante da execução, ou responder, finalizando assim o ciclo de vida desse request. Um middleware pode:

Um middleware, assim como um garçom, atua como intermediário entre o client e o servidor, para garantir que as respostas sejam entregues aos clientes de formas adequadas. Os middleware pode adequar os pedidos para atender as necessidades do servidor e vice-versa.

- executar qualquer código
- alterar os objetos request e response
- chamar o próximo middleware da cadeia, por meio da função next
- terminar o ciclo request response

Pelo método app.use, declaramos os middlewares do express. Toda requisição é respondida po um callback do tipo:

```js
  function (request, responde, next) {}
    OU
  (request, response, next) => {}
```

Detalhando cada um dos parâmetros:

- Object err - é um objeto de erro do tipo Error e so aparece como primeiro argumento do middleware de erros. Ex.:

```js
const err = new Error('something happened') err.status = 501
```

- Object request - nesse objeto, temos acesso as informações da solicitação que chegou à nossa aplicação, como cabeçalho, corpo, método, URL, querystring, parâmetros, user agent, IP etc.
- Object response - é nosso para manipular da forma que quisermos. Tem funções para responder à requisição, então conseguimos devolver um status code, escrever na saída, encerrar, enviar JSON, texto, cabeçalhos, cookies etc.
- Função next - essa função repassa a requisição para outro middleware na cadeia, caso precisemos, por exemplo, manipular alguma coisa do request e então repassar para outro middleware terminar de responder a requisição.

##### Entendendo a Utilidade de middlewares

Usamos middlewares para tratar requisições(requests) que o servidor vai receber.

#### CORS (Cross-origin resource sharding)

A sigla CORS significa compartilhamento de recursos entre origens desconhecidas, que é o fato de uma aplicação solicitar informações de um domínio ou subdomínio diferente do seu próprio. O comportamento padrão dos navegadores hoje em dia é bloquear esse tipo de requisição, impedindo que a aplicação seja afetada por uma resposta não confiável.

Se quisermos permitir esse tipo de recurso, precisamos liberar o cabeçalho CORS da nossa API, para que qualquer cliente possa utilizar, de qualquer domínio, incluindo alguns cabeçalhos nas respostas HTTP. Para que isso seja viável, precisamos habilitar isso utilizando as seguintes configurações antes das definições de rota. Ex.:

```js
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-COntrol-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
```

é importante notar que o asterisco libera para todas as origens.

Outra forma de utilizar é o pacote cors, que faz a mesma coisa, e tira essa complexidade. Ex.:

```js
import cors from "cors";
app.use(cors());
```

// Variáveis de ambiente
