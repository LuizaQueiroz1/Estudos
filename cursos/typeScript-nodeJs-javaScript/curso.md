# NPM

O NMP é um gerenciador de pacotes para a plataforma node.js. O NPM permite que os desenvolvedores instalem, compartilhem e gerenciem as dependências do seu projeto de forma fácil e eficiente.
O NPM essencialmente é um repositório online de pacotes de código-fonte aberto, que podem ser instalados em projetos node.js. Ele é utilizado no mundo inteiro para utilizar ferramentas de software, bibliotecas em seus projetos, economizando tempo e esforço.

O NPM também fornece uma interface de linha de comando(CLI) que permite os desenvolvedores gerenciem seus projetos, instalem e desinstalem pacotes, criem e publiquem seus próprios projetos, entre outras funcionalidades.

## Dentro do package.json há tres tipos de dependências:

- dependencies: são geralmente utilizados para declarar os pacotes necessarios para executar seu projeto em um ambiente de execução como produção(vai na build).
- devDependencies: são geralmente utilizados para indicar pacotes necessarios para executar o seu projeto em cenário de desenvolvimento e testes.(como pacotes relacionados a testes e formatação do código-fonte do seu projeto). (vai globalmentecl)

//Atualizando pacotes:

- verifica a versão dos pacotes desatualizados: npm outdated
- Atualiza o pacote: npm i <nome-do-pacote>@latest (ex: npm i express@latest)

//Deletando pacotes:

- npm uninstall express(exemplo)

## package-lock.json

O arquivo package-lock.json é criado automaticamente quando você instala ou atualiza as dependências do projeto com o gerenciador de pacotes npm(node package Manager)

O NPM é uma ferramenta de linha de comando que permite instalar, gerenciar e compartilhar bibliotecas e módulos de código javaScript produzidos por terceiros.

O packaje.json é uma especie de "contrato" entre o seu projeto e as suas dependências, garantindo que todas as pessoas trabalhem no projeto ou que o execute em diferentes máquinas, obtenham as mesmas versões das dependências instaladas

pinterst, dribbble

HUb?
