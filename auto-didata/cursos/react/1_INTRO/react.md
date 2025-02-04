# React - introdução

O react é uma biblioteca javascript utilizada para o desenvolvimento de aplicações frontend.
Essa aplicações são chamadas de SPA (Single Page Application - significa que o projeto todo renderiza apenas uma página da aplicação, mesmo que na aplicação tenha mais páginas)
A arquitetura REACT é baseada em components
Pode ser inserida em aplicações ou podemos criar a aplicação apenas com REACT
É mantido sobre o Facebook

## NodeJs

o NodeJs é um runtime do javascript;
ou seja, uma biblioteca utilizada pelo compilador durante a execução do programa

Escrevemos nosso código em JavaScript e o compilador transforma em C++ para garantir alta performance

## EStrutura base

node_modules: onde as dependências do projeto ficam
public: assets estáticos e HTML de inicialização
src: onde vamos programar os nossos apps
src/index.js: arquivo de inicialização do REact
src/App.js: Component principal da aplicação

## Avançando em React

### Imagens no React

### imagens em public

- As imagens públicas do nosso projeto pode ficar na pasta public
- De lá elas podem ser chamadas pelas tags img diretamente pelo /nome.jpg
- Pois a pasta public fica linkada com o src da imagem

### imagens em assets

- é um padrão muit utilizado para as imagens do projeto é colocar em uma pasta chamada assets, em src
- em assets precisamos importar as imagens e o src é dinâmico com o nome da importação

interpolação de dados = {City(const)}

### Hooks

- Hooks são recursos do react que tem diversas funções
- Como: guardar e alterar o estado de algum dado na nosso aplicação
- Todos os hooks começam com use, por exemplo: useState
- Podemos criar os nossos hooks. Isso é chamado de custom hook
- Geralmente são úteis em todas as aplicações

### useState hook

- o hook useState é um dos mais utilizados
- utilizamos para gerenciar o estado de algum dado, variáveis não funcionam corretamente, o componente não re-renderiza
- para guardar o dado, definimos o nome da variável e para alterar vamos utilizar o setName, onde nome é o nome do nosso dado

### Renderização de listas

- Uma outra ação bem comum e renderizar listas de dados no template
- Fazemos isso com os dados com tipo array
- Utilizamos o método map para nos auxiliar
- além dos dados, conseguimos inserir JSX em cada iteração

quando retorna um objeto em JSX é utilizado ()

### A propriedade key

- iterar listas sem a propriedade key nos gera um erro
- O react precisa de uma chave única em cada um do itens iterados
- isso serve para ajuda-lo na renderização do componente
- geralmente teremos um array de objetos e podemos colocar key como alguma chave única, como id de algum dado
- em último caso devemos utilizar o index do método map

### Previous State

- Previous state é um recurso que nos permite pegar o dado em seu valor original dentro de um set de dados
- Isso é muito utilizado para modificar listas, pois temos o valor antigo e transformamos em um novo valor
- O primeiro argumento de um set sempre será o previous state

### Renderização condicional

- Renderização condicional é quando uma parte do template baseado em uma condição
- ou seja, utilizando uma checagem com if
- Isso é interessante para situações de: usuários autenticado/não autenticado

### Props

- Props é outro recurso fundamental em JavaScript
- Nos permite passar valores de um componente pai para um componente filho
- isso será muito útil para quando os dados forem carregados via banco de dados, por exemplo
- As props vem em um objeto no argumento da função do componente

### Renderização de lista em componente

- Os array de dados podem ter muitos itens também
- Então é correto utilizado uma estrutura de loop (map) para a sua exibição
- E com isso conseguimos conciliar os três conceitos: Renderização de listas, reaproveitamento de componentes e props.

### React Fragments

- Os reacts Fragments são interessantes para quando queremos ter mais de um elemento pai em um componente;
- Criamos uma tag vazia: <> ... </>
- E ela serve como elemento pai, não alterando a estrutura HTML com um elemento pai, por exemplo.

### Children props

- Children props é um recurso utilizado para quando um component precisa ter JSX dentro dele
- Esse JSX vem do componente pai
- Então o componente age como container, abraçando estes elementos
- E children é considerada como uma prop do componente

### Funções em props

- As funções em props podem ser passadas par as props normalmente
- Basta criar a prop no componente pai e enviar para o componente
- No componente filho ele pode ser ativada por um evento, por exemplo.

### Elevação de state (state lift)

- É quando um valor é elevado do componente filho para o componente pai.
- geralmente temos um componente que usa o state e o outro que alterando
- então precisamos passar a alteração para o componente pai, e este passa para o componente que usa o state.

## React e CSS

### CSS Global

- O CSS global é utilizado para estilizar diversos objetos em comum ou para fazer um reset no CSS
- Utilizamos o index.css para isso, que está na pasta src

### CSS de componente

- O CSS de componente é utilizado para um componente específico
- Geralmente é criado um arquivo com o mesmo nome do componente e este é importado dentro do componente
- Note que esse método não é scoped, ou seja, o CSS vaza para outros componentes se houver uma regra de colisão

### CSS modules

- O CSS modules é um recurso do CSS scoped
- Ou seja, ele vai ser exclusivo do componente
- O nome do arquivo é: Componente.module.css
- precisamos importa-lo também no componente

## Formulários em React

- No React vamos utilizar o tag form para os formulários;
- As labels dos inputs contém o atributo htmlFor, que deve ter o valor do nome do inputs
- Não utilizaremos o action, pois o processamento será feito de form assíncrona

### Label envolvendo o input

- Em React, um padrão comum é a tag label envolvendo o input
- Isso faz com que o atributo for se torne opcional
- Simplificando nossa estrutura HTML sem perder a semântica

### Manipulação de valores

- Para manipular os valores de um input vamos utilizado o hook useState;
- Ou seja, podemos armazenar na variável e usar o set para alterar o valor;
- vamos criar uma função para alterar o valor no evento on change;
- Deixando nosso código fácil de trabalhar nas próximas etapas: como envio de dados para DB e validação

#### Simplificando a manipulação

- Quando temos vários inputs podemos realizar a manipulação de forma mais simples;
- basicamente criamos uma função inline no onChange;
- Ele vai alterar o valor de state com o método set, da mesma forma que a função isolada

### Envio do formulário

- Para enviar o formulário vamos utilizar o evento onSubmit
- Ele chamará uma função, e nesta devemos lembrar de parar a submissão com o preventDefault
- Nesta etapa podemos realizar validações, envio de form para o servido, reset de form e outras ações

### Controlled input

- Controlled input é um recurso que nos permite mais flexibilidade nos forms do react;
- precisamos apenas igualar o valor ao state;
- Um uso muito comum: formulários de edição, que os dados vem do backend, conseguiremos preencher o input mais facilmente

### input de textarea

- O textarea pode ser considerado um input de texto normal
- Utilizaremos o value para alterar o state inicialização
- E o evento onChange para modificar o valor do state

Pesquisar esse erro: 'React' refere-se a uma UMD global, mas o arquivo atual é um módulo. Considere adicionar uma importação.

## Requisições HTTP com React

### Json Server

- O json Server é um pacote npm
- Ele simula uma API, e isso nos possibilita testar requisições HTTP

### A importância do useEffect

- O useEffect faz com que uma alteração seja executada apenas uma vez
- isso é importante porque os componentes estão sempre se re-renderizando, então precisamos ter opções únicas às vezes
- O useEffect ainda tem um array de dependências, que deve conter os dados que ativem a execução da função de forma automática
- O useEffect estará sempre em requisições assíncronas!

### Resgatando dados com React

- para trazer dados, temos que utilizar vários recursos:
- primeiramente ter um local para salva-los (useState);
- Renderizar a chamada apenas uma vez (useEffect);
- um meio de fazer a requisição assíncrona (fetch API)

### Adicionando dados

- Para adicionar um item vamos precisar resgatar os dados do form com useState
- Reunir eles em uma função após o submit e enviar um request de post para a nossa API
- O processo é bem parecido com o resgate de dados, mas agora estamos enviando dados.

### Custom hook para o fetch

- é normal dividir funções que podem ser reaproveitadas em hooks
- essa técnica é chamada de custom hook, e vamos criar um para o resgate de dados
- os hooks geralmente ficam na pasta hooks
- devemos utilizar o padrão useName
- basicamente criamos uma função e exportamos ela

### Estado de Loading

- Quando fizermos requisições para API's é normal que haja um intervalo de reload entre as requests e responses
- Podemos fazer isso no nosso hook também
- identificar quando começa e termina esse estado

#### Estado de loading no post

- Podemos bloquear ações indevidas em outras requests também, como o post
- Uma ação interessante é remover a ação de adicionar outro item enquanto o request ainda não finalizou

## React Router

- Serve para fazer projetos com paginação
- Permite que nossas SPAs tenham múltiplas páginas
- também temos outras funções como: Redirect, Nested Routes, Not Found Routes e outros

### Configurando o React Router

- para configurar o react router temos que importar três elementos do react-router-dom;
- Browser Router: define onde é a área do nosso app que vai trocar as páginas
- Routes: define as rotas
- Route: cada rota tem esse elemento, onde se define o path o componente da rota;

### Nested Routes

- As nested routes indicam URLs mais complexas, como: /products/:id/something
- Neste caso vamos precisar de um componente que corresponda com o padrão indicado e também a URL em App.js
- Na Nested routes teremos o acesso ao parâmetros da URL também.

### Search Params

- É um recurso que permite obter o que vem na URL em forma de parâmetro, ex: produtos?q=camisa
- Utilizamos o hook useSearchParams para obtê-los
- Com esse recurso fica fácil fazer uma funcionalidade de busca no sistema

### Redirect

- Serve para redirecionar para páginas eventualmente;
- exemplo: uma página antiga do sistema responde agora a uma nova URL

## Context API

- É um recurso que facilita o compartilhamento de um estado entre componentes
- Ou seja, quando precisamos de dados globais, utilizaremos o context API
- O Context precisa encapsular os containers que receberão os seus valores, geralmente colocamos no App.jsx ou index.jsx
- os contexts ficam geralmente na pasta context
