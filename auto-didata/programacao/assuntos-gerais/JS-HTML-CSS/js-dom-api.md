# Estudando JS para Web

## JS language

### O que é o JS:

O JS é uma linguagem de alto-nível usada para desenvolver aplicações, sistemas e serviços de alta complexidade. Pode ser utillizada para criar sites, apps e jogos.
O JS é quem controla o comportamento da pagina como: animações, controle de mídia, funções dinâmicas...

### Vantagens do JS

1. é mais fácil de aprender que outras linguagens;
2. Não precisa de um compilador, pois os navegadores interpetram a linguagem por conta própria;
3. executa comportamentos específicos em uma página.

### As desvantagens do JS

1. É vulnerável a brechas de segurança;
2. pode ser usada para executar programas maliciosos sem que o usuário saiba.

### funcionalidades do JS

#### Node.js: o JavaScript no back-end

é uma plataforma completa de desenvolvimento que permite aos programadores a criação de aplicações a nível backend e frotnend(tanto do lado do cliente e do servidor)

#### Js no mobile:

usando os frameworks vuewJS e Ionic

#### Js no desktop:

com o electronJs ex.: visual studio code

## DOM (Document Object Model) API

- O modelo de documento por objetos(DOM) é uma interface padronizada criada para colocar ordem na navegação WEB. É uma interface de programação para HTML.

1. Permeite que o HTML, CSS, HML e o JS possam manipular para construir páginas e conteúdos através dos navegadores.

- Quem coloca ordem no DOM e em outros padrões da internet é a W3C(World Wide Web Consortium) - que dentro dela tem a Web platform work Group(que controla diretamente o DOM)

- Varias empresas se juntaram para desenvolver uma linguagem de script padronizada - daí surgiu o ECMAScript(1997) depois disso veio o nascimento do JavaScript

- O DOM nos dá margem para fazer muitas besteiras, por isso é bom utilizar libs e frameworks como uma camada extra para aumentar a performance do nosso trabalho.

- O DOM torna possível criar elementos HTML, deletar, acessar, trocar por meio de metódos

- O DOM é um facilitador para dar acesso aos elementos da nossa página diretamente ao JavaScript. Árvore DOM

Tecnicas

- tagName
- id
- class
- ClassName
- querySelector

## Eventos DOM

Eventos são alterações que posso fazer em um elemento

## Eventos JS:

Eventos são ações disparadas pela interação do usuário na página. É o correto manejo desses eventos que tornam as paginas interativas e dinâmicas.
Extem muitos eventos que pode ser acionado no JS. Abaixo estão os principais:

1. foco em mouse

- onclick -> disparado quando recebe um click

- ondblclick -> disparado quando recebe dois clicks

- onmouseover -> disparado quando o mouse está sobre

- onmouseout -> disparado quando o mouse é movido para fora do elemento

- onmousemove -> disparado quando o mouse é movido no elemento

- onmousedown -> disparado quando o clique no botão foi pressionado.

- onmouseup -> disparado quando o clique do botão é liberado

///

2. foco em input

- onfocus -> disparado quando o elemento recebe foco. Válido para input

- onchange -> dispara quando há mudança de conteúdo. "Ao mudar"

- onblur -> disparado quando o elemento perder o foco

///

3. Teclas pressionadas

- onkeydown -> disparado quando uma tecka pé pressionada

- onkeypress -> disparado quando uma tecla é prossionada e solta

- onkeyup -> disparado quando uma tecla é solta sobre um elemento

///

4. disparado na tag body quando a pagina é carregada completamente

- onload -> disparado quando a pagina teminou de ser carregada. body.

- onresize -> disparado quando a um redimencionamento da tela

CAMELCASE
browsers
