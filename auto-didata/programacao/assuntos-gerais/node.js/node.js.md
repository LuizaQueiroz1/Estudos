# NodeJs

é um ambiente para a execução de códigos javaScript, onde o mesmo empacota tudo que é necessário para executar e interpreta códigos de javaScript
o node funciona graças ao vetor v8(máquina virtual v8- é o motor interpretador de javaScipt criado pelo google) do google. Ele é responsavel por compilar o código JS para o código nativo de máquina antes de executa-lo.
Possui arquitetura não-bloqueante(baseada em eventos)
lançamento: 2009
uma das tecnologias mais utilizadas no mundo

### A arquitetura javaScript é dividida em:

Arquitetura não-bloqueante de thread única ou single thread

- Call stack - responsável por empilhar as chamadas de funções
- Callback Queue - responsável por empilhar e fazer as chamadas das funções callbacks(Assíncronas)
- Event Loop - verificar se algum evento assincrono foi disparado executando sua respectiva callback.

## NPM(node packet management)

É repositório de pacotes e bibliotecas de código aberto em JavaScript. é o maior registro de software do mundo. Qualquer um pode publicar e compartilhar código para ser utilizado em projetos de nodeJs. O npm também tem uma ferramente de linha de comando que permite interagir com o repositório, instala e desinstala pacote, gerencia versões e dependências do projeto.

O que são???
objeto, um método, um atributo
