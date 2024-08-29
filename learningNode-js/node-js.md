# Node.js

A necessidade de criação de arquiteturas escaláveis, da entrega de soluções em tempo real, da revolução da IoT(Internet of things), onde é pensado cada vez mais na solução como um todo, levando em consideração o consumo de dados e a disponibilidade da estrutura é que surge, nessa conjuntura supracitada, o node.js como uma solução poderosa e barata para a criação e manutenção de ambientes de tecnologia.

O node.js é um ambiente de execução do código javaScript do lado servidor(_server side_), que ná pratica se reflete a possibilidade de criar aplicações standalone(autossuficientes) em uma maquina servidora, sem a necessidade de um navegador.

O navegador é o ambiente original(nativo) de execução do javaScript(uma linguagem interpretada)

O node é um motor(engine) de interpretação do javaScript fora do navegador, ou seja, tem algumas bibliotecas, APIs, algumas ferramentas que são um pouco diferentes do navegador. NPM é um runtime(é um ambiente de execução desenvolvido em cima da engine v8 do chrome).

O node é Javascript, e o que o node faz é nos permitir rodar códigos javaScript fora do ambiente do navegador .

NVM(ferramenta para gerenciar a versão node.js)

## O package.json:

É o coração da aplicação quando está usando node.js (é o manifesto de qualquer projeto que use node). É nesse arquivo que se dispõem as principais informações do projeto, como: nome, descrição, Autor, versão(utilizando versionamento semântico), repositório github e diversas outras configurações de bibliotecas, de frameworks, o arquivo de ponto de entrada do programa, listas de dependências que estão sendo usadas no programa(todas as bibliotecas)

Dependências/pacote são todo o conjunto de dados que faz uma tarefa

## NPM e YARN

São gerenciadores de pacotes(package managers). NPM e YARN São repositórios de códigos voltados para pacotes do node. Através desses gerenciadores, é possível instalar todos os pacotes de códigos externos que forem preciso(como bibliotecas, frameworks...).
O circunflexo(^) acima da versão("^4.17.2) significa que atualizações do tipo petch e type minor que não causam quebras de códigos(são atualizações de bugs ou algumas outras funcionalidades não tão importantes), podem ser feitas automaticamente.

A partir do arquivo package.json é possível o node instalar localmente no meu projeto todas as dependências desejadas no meu projeto e dentro da pasta node_modules ficam os arquivos necessários para que essas dependências funcionem
package.lock

Porque preciso do node também para o front end? Porque será preciso ter acesso a bibliotecas de fora, frameworks e libs externas

## Node.js

O node.js funciona como uma arquitetura de loops de eventos não-bloqueante, o que significa que as operações de entrada e saídas não são bloqueadas, permitindo que p Node.js processe várias solicitações simultaneamente sem bloquear o fluxo de execução. Isso se torna ideal para a construção de aplicativos que possuem grandes entradas e saídas, somo servidores web, streaming, aplicativo de jogos em tempo real, etc.

O node.js também vem com um conjunto de módulos integrados que facilitam a criação de aplicativos web. Por exemplo, o módulo HTTP permite que desenvolvedores criem serviços web facilmente, enquanto o módulo FyleSistem permite a leitura e a gravação de arquivos

## O que podemos criar com Node.js?

- _Servidor Web_: o node.js pode ser usado para criar servidores altamente escaláveis e eficientes
- _Desenvolvimento de aplicativos de rede_: O node JS é adequado para a criação de aplicativos de rede, como servidores de chat em tempo real, sistemas de mensagens, APIs RESTful e microsserviços.
- _Gerenciamento de pacotes_: com o NPM
- \*Build de ferramentas e automação: o node.js é frequentemente usado para criar ferramentas delinha de comando e automação de tarefas
- _Aplicativos desktop_
-

### Vantagens de usar Node.js

- Alta escalabilidade
- Aplicações de ponta
- Js em todos os lugares
- Ecossistema gigante
- Produtividade
- Renderização do lado do sevidor

CDN?
JQuery?

A arquitetura do node é baseada em events loops
dino VS node
