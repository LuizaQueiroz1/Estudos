

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

## Components em React

Um componente é um pedaço da UI(user Experience) que tem sua própria lógica e aparência. Um componente pode ser pequeno como um botão ou grande como uma página inteira. React componente são funções javaScript que retorna tags(markup)

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

#### Regras dos hooks

Os hooks só pode ser chamado no topo. Não chamar hooks dentro de loops, condições e nested Functions
Apenas cham hooks em funções reacts components

### Nested components

Nested components are any child component linked to a parent component

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

### Context API

- É um recurso que facilita o compartilhamento de um estado entre componentes
- Ou seja, quando precisamos de dados globais, utilizaremos o context API
- O Context precisa encapsular os containers que receberão os seus valores, geralmente colocamos no App.jsx ou index.jsx
- os contexts ficam geralmente na pasta context

### Um uso interessante do style

```jsx
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
```

In the above example, **style={{}}** it's not an special syntax, but a regular object inside of **style={ }** JSX curly braces. you can use the styles attribute when your styles depend on Javascript variables

## Thinking in React

### Step 1: Break the UI into a component hierarchy

Start by drawing boxes around every component and subcomponent in the mockup and naming them. If you work with a designer, they may have already named these components in their design tool. Ask them!

Depending on your background, you can think about splitting up a design into components in different ways:

Programming—use the same techniques for deciding if you should create a new function or object. One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.
CSS—consider what you would make class selectors for. (However, components are a bit less granular.)
Design—consider how you would organize the design’s layers.
If your JSON is well-structured, you’ll often find that it naturally maps to the component structure of your UI. That’s because UI and data models often have the same information architecture—that is, the same shape. Separate your UI into components, where each component matches one piece of your data model.

### Step 2: Build a static version in React

Now that you have your component hierarchy, it’s time to implement your app. The most straightforward approach is to build a version that renders the UI from your data model without adding any interactivity… yet! It’s often easier to build the static version first and add interactivity later. Building a static version requires a lot of typing and no thinking, but adding interactivity requires a lot of thinking and not a lot of typing.

To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props. Props are a way of passing data from parent to child. (If you’re familiar with the concept of state, don’t use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.)

You can either build “top down” by starting with building the components higher up in the hierarchy (like FilterableProductTable) or “bottom up” by working from components lower down (like ProductRow). In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up.

### Step 3: Find the minimal but complete representation of UI state

To make the UI interactive, you need to let users change your underlying data model. You will use state for this.

Think of state as the minimal set of changing data that your app needs to remember. The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself). Figure out the absolute minimal representation of the state your application needs and compute everything else on-demand. For example, if you’re building a shopping list, you can store the items as an array in state. If you want to also display the number of items in the list, don’t store the number of items as another state value—instead, read the length of your array.

Now think of all of the pieces of data in this example application:

The original list of products
The search text the user has entered
The value of the checkbox
The filtered list of products
Which of these are state? Identify the ones that are not:

Does it remain unchanged over time? If so, it isn’t state.
Is it passed in from a parent via props? If so, it isn’t state.
Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!
What’s left is probably state.

Let’s go through them one by one again:

The original list of products is passed in as props, so it’s not state.
The search text seems to be state since it changes over time and can’t be computed from anything.
The value of the checkbox seems to be state since it changes over time and can’t be computed from anything.
The filtered list of products isn’t state because it can be computed by taking the original list of products and filtering it according to the search text and value of the checkbox.

### Step 4: Identify where your state should live

After identifying your app’s minimal state data, you need to identify which component is responsible for changing this state, or owns the state. Remember: React uses one-way data flow, passing data down the component hierarchy from parent to child component. It may not be immediately clear which component should own what state. This can be challenging if you’re new to this concept, but you can figure it out by following these steps!

For each piece of state in your application:

1. Identify every component that renders something based on that state.
2. Find their closest common parent component—a component above them all in the hierarchy.
3. Decide where the state should live:

- Often, you can put the state directly into their common parent.
- You can also put the state into some component above their common parent.
- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

### Step 5: Add inverse data flow

Currently your app renders correctly with props and state flowing down the hierarchy. But to change the state according to user input, you will need to support data flowing the other way: the form components deep in the hierarchy need to update the state in FilterableProductTable.

React makes this data flow explicit, but it requires a little more typing than two-way data binding. If you try to type or check the box in the example above, you’ll see that React ignores your input. This is intentional. By writing ` <input value={filterText} />`, you’ve set the value prop of the input to always be equal to the filterText state passed in from FilterableProductTable. Since filterText state is never set, the input never changes.
