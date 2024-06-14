# DOM pela documentação do site MDN WEB DOCS

O DOM é uma estrutura que trasforma o código estatico em experiências dinamica com JS(ou qualquer outra linguagem)

Quando uma pagina web é carregada, o navegador cria um modelo de objeto de documento da página.
O modelo HTML DOM é construido como uma árvore de objetos

- O DOM é uma interface de programação para os documentos HTML e XML. Representa a pagina da forma que as linguagens de programações possam alterar a estrutrura do documento, alterar estilos e conteúdos.
O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar a página.

Todos as propriedades, metódos e eventos são organizados em objetos(por exemplo, o objeto de document que representa o próprio elemento, o objeto de table que implementa a interface especial DOM HTMLTableElement para acessar tabelas no HTML e assim por diante )

- O DOM moderno é constrído por várias APIS que trabalham juntas. O DOM principal define os objetos que descrevem fundamentalmente um documento e os objetos dentro dele. Isso é expandido quando necessario por outras APIS que adicionam novos recursos e capacidades ao DOM.

- O DOM não é uma linguagem de programacão, mas sem ela, o JS não teria nenhuma noção de paginas web, documento HTML, documentos XMl e suas partes componentes(por exemplo, os elementos.)

- O JS e o DOM estavam fortemente ligados, mas, eventualmente, evoluiram como entidades separadas. Portanto, as implementações DOM podem ser contruidas em qualquer idioma. Equação aproximada do DOM:

API(pagina HTML ou XML) = DOM + JS(linguagem de Script)

## Tipos de dados fundamentais

- Document: quando um membro retorna um objeto tipo do elemento **document** (por exemplo, a propriedade **ownerDocument** de um elemento retorna a qual documento ele pertence), esse object é o o proprio objeto do document raiz

- Node: todo objeto localizado em um documento é um nó de algum tip. Em documento HTML um objeto pode ser um nó de elemento, mas também um nó de texto ou atributo. 

- Element: o tipo de element é baseado no node. Isso se refere a um elemento ou nó do tipo elemento, retornado por um membro do DOM API. Ao invés de dizer que o document.create.Element() retorna um objeto de referencia para nó, nós apenas dizemos que esse elemeto acabou de ser criado pelo DOM 

- NodeList é um array de elementos como os retornados pelo metodo document.getElementsByName. Itens em uma node.list são acessados por ídice das duas seguintes formas: 
. list.item(1)
. list(1) 

- Attribute: quando um attribute é retornado por um element (por exemplo, pelo metódo create a attribute), é um objeto de referência que expõe uma interface especial, (embora pequena) para atributos

- NamedNodeMap: é como um array, mas os itens são acessados por nome ou índice, embora no último caso seja opcional, pois os não estão em ordem específica na lista. 

## Interfaces na disponibilização DOM e como são disponibilizadas

### Interfaces e objetos
Muitos objetos pegam emprestados de interfaces diferentes. O objeto table, por exemplo, implementa uma interface especializada HTMLTableElement, que inclui metódos como insertRow e createCaption. Mas como é também um elemento HTML, table implementa a interface element

### Interfaces core do DOM
Os objetos window e document são os mais usados. O window representa algo como o browser e o objeto document é a raiz de todo documento em si. 
  
Element herda dessa interface Node genírica, e juntamente com essas duas interfaces fornece muitos dos metódos e propriedades que utilizo em elementos individuais. 

## Definição de API

Uma API é um intermediário entre um sistema maior e terceiros(sejam eles, progrmadore, usuários...) 
Ex.: a API é como um garçom, pois ele é o intermediário entre você e a cozinha.

As Application Programing Interface(interface de programação de aplicações) são um conjunto de ferramentas, definições, protocolos e funções para a criação de aplicação de software.


### Como funcionam
APIs conectam serviços e soluções sem a necessidade de saber  como esses elementos foram implantados. Isso simplifica as aplicações reduzindo custos e economizando tempo. As APIs fornecem flexibilidade para simplificar o design, administração e o uso, além de trazer oportunidade de inovação. 

As APIs funcionam como um contrato, com documentações que representam um acordo entre as partes interessadas. Se uma dessas partes enviar uma solicitação remota estruturada de uma forma específica, isso determinará como a aplicação da outra parte responderá. 


## OBS.: sobre elementos, tags e tributos: 
o elemento HTML é um item da: faz parte da dela. Uma TAG HTML altera a maneira que esse elemento aparece e o atributo são as característica desse elemento.


Uma **propriedade** é um valor que você pode obter ou atribuir(como alterar o conteúdo de um elemento HTML)

Um metódo é uma ação que você pode realizar(como adicionar ou excluir um elemento HTML)

A maneira mais facil de obter o conteúdo de um elemento é usando o innerHTML propriedade.
O innerHTML propriedade pode ser usada para obter qualquer elemento html, incluindo <html> e <body>

O objeto document representa a paǵina web
Para acessar qualquer elemento em uma página HTML, primeiro preciso acessar o objeto documento.

## Alterando elementos HTML:

**Propriedades**
- element.innerHTML = new HTML content 
- element.attribute = new value
- element.style.property = new style

**Metodo**
- element.set.attribute(attribute, value) -  change the attribute value of an element

## Adicionando e excluindo elementos

**Metodos**
- document.createElement                       (element)                                                                                              
- document.removeChild(element)
- document.appendChild(element)  - add an HTML element
- document.replaceChild(new, old)  - replace an HTML element 


OBS.: Estudar como utilizar operador ternário em JS
