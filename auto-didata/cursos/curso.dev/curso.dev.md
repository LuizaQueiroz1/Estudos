# Anotações

Protocols HTTP FTP TCP
PODE USAR PROTICILOS EM CIMA DE PROTOCOLOS

o Nextjs  usa um sistema chamado file-base routing(roteamento baseado em Arquivo)

o Git não armazena o diff das alterações, mas calcula isso sob demanda.
Quando comparadas duas versões de arquivos diferentes o git joga um BLOB contra o outro e destaca essas diferenças.

Continuos deploy
Over Wngineering, Feature Creep

Nível 1: Ser lembrado individualmente(papel com tarefas escritas)
Nível 2: Ser lembrado em grupo(como um quadro brando na geladeira com as tarefas)
Nível 3: expandir conhecimento(O que e como algo deve ser feito)
Nível 4: Gerar métricas

DNS(Domain Name System) Sistema de nomes de domínios:
Os domínios são uma "mentira", um apelido que armazena o IP(Internet protocol) que é o endereço do me computador

O DNS é como um grande banco de dados que anota de um lado o domínio que eu quero acessar e do outro lado o IP do endereço final onde está o servidor.

Quando faço uma requisição para acessar um site, o meu computador contata o servidor DNS, o servidor DNS encontra o IP final e entrega essa informação para o meu computador, assim o meu computador consegue acessar o endereço

FQND

tabnews.com.br(TLD(Top-Level Domain)).(tem um ponto na frente(FQND) que se chama de Root Domain)

ccTLDs(Country code Top-Levem Domains) são TLDs reservados para cada país
gTLDs(Generic Top-Level Domains) como os endereçoes com final .com(significa commercial)

ICANN(Internet Corporation for Assigned Names and Numbers)

TTL(Time To Live) é uma estratégia de cash que define quanto tempo um registro deve ser mantido em cash(quanto tempo de vida o cash tem)

Arquitetura de software é diferente de Organização das Pastas dentro de um projeto

O que define uma arquitetura de software é o escopo dos componentes(onde começam e onde terminam) e o tipo de Interação entre eles.

MVC(Model view controller) é um tipo de arquitetura de software

URI Path Versioning(verções da API)
Header Visioning(o cliente envia um cabeçalho customizado na requisição especificando qual verção quer usar)

// .tobe(4) - Hardcoded ; expect(resultado) - softcoded

//Dica pra quem quiser aprender a levantar testes de forma estrégica e não empírica (tenar advinhar quais testes deve implementar no código), pesquisem sobre as seguintes técnicas de testes:

//Cobertura de decisão;
//Cobertura de sentença;
//Partição de equivalência;
//Valores Limites;
//Tabela de Decisão.

// API é uma interface que um robô ou um script consegue ler de forma mais fácil, diferente de uma interface gráfica que é feita para humanos. A API é um conjunto de regras e especificações que permitem que softwares se comuniquem entre si. É como um contrato que define como os sistemas devem interagir, permitindo a troca de dados e funcionalidades de maneira padronizada. Por exemplo, quando você usa um aplicativo no seu celular que busca informações na internet, ele provavelmente está usando uma API para obter esses dados de um servidor.

// O fetch é um client HTTP como qualquer outro, que também consegue fazer requests, receber responses, assim como o CURL e o navegador

Passos para escolher qual banco de dados usar na aplicação:

escolher qual:

DBMS(Data Base Management System(SGBD, em português))
Query - Consultar o que está dentro do banco (exemplo.: utilizar um ORM(object-Rekational Mapping))
Migrations - como vai executar a migrações

Tipos de Banco de Dados:
Relacional
Não relacional - armazenamento de documentos, armazenamento chave-valor
Série Temporal
Espacial

SQL(Linguagem de consulta estruturada)

//Mesmo usando tutoriais idênticos, as diferenças na maquina Host é o que causava os problemas na hora de hopspedar e executar projetos em Hosts diferentes. Cada máquina (ou servidor) pode ter configurações única, como o Hardware que está sendo usado, o Sistema operacional (SO), os Patches de segurança, nos softwares satelites, Antivirus(vários deles modificam o comportamento e o acesso as coisas.), linguagem do SO, fuso horário...

//Virtual Machine (VM), é um sistema que simula um computador completo, permitindo que você execute sistemas operacionais e aplicativos como se estivesse em um hardware físico.

//Namespaces (isola processos), Control Groups (controle granular da alocação de recursos do sistema). O docker foi criado como uma abstração para facilitar a a criação de interfaces amigaveis para o uso de containers.

// Virtual Machine (VM): Maquina Host(o Hardware do meu computador) -> Sistema Operacional (SO) -> Virtualizador(cada vez que vc quiser virtualizar um novo ambiente vai ser instalado e iniciado um novo SO ) -> Sistema Operacional (Guest) -> aplicações

// Container: Maquina Host(o Hardware do meu computador) -> Sistema Operacional (SO) -> Container Engine (Docker) -> aplicação -> Banco de dados

// YAML (YALM Ain't Markup Lenguage) é um arquivo para guardar dados, configurações, etc.

// Acronimo recursivo???

//Serviço:
// Interface: que oferece funcionalidades ao usuário
// Aplicação: que implementa a lógica de negócio
// Persistência: que armazena os states de uma aplicação de forma duradoura
// Queries parametrizadas: abre margem para vulnerabilidades SQL Injection
// 3 formas de escrever uma querie: 1) Querie sem parâmetros (não é passivel de SQL Injection), 2) Query com parâmetros fixos (não é passível de SQL Injection), 3) query com parâmetros dinâmicos (é passível de SQL injection).
