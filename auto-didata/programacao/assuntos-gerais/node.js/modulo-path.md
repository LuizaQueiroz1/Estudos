# Caminho path

Em resumo, trabalharemos com dois caminhos: O abcoluto que fornece a localização completa desde a raiz de sistemas do arquivo, enquanto o relativo indica a localização em relação ao diretório atual ou o ponto de referência específico.

\_\_dirname: Essa variável contém o diretório do arquivo atual, fornecento o caminho onde o diretório onde o arquivo reside

\_\_filename: Essa variável contém o caminho completo do arquivo em execução, incluindo o nome do arquivo

//

## Construindo caminhos absolutos relativos

Para construir um caminho absoluto relativos, precisamos fornecer a sequencia de diretórios ou arquivos que leva até o destino desejado.

O método path.join nos permite concatenar essas para para formar um caminho completo.

O método path.resolve() é usado para resolver caminhos de arquivos ou diretórios em caminhos absolutos.

O path.dirname(): Essa função retorna o diretório pai de um caminho de arquivo. Ele extrai o diretório do caminho fornecido, excluindo o nome do arquivo ou diretório final .

path.basename(): essa função retorna o nome base de um caminho de arquivo. Ela extrai o nome do arquivo ou diretório final do caminho fornecido.

path.extname: essa função é utilizada para obter a extensão de um caminho de arquivo. Ela retorna a parte a string que inclui a extensão, inclusive o '(.)' antes da extensão.

proselitismo
