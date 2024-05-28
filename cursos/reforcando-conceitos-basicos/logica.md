# Logica da programação


# Aula 1

Para que os softwares são criados?: 
## para resolver problemas do dia a dia. 
- Ex: a Netflix criou um software para reunir filmes e series no mesmo lugar. 
- E Google: conseguiu resolver nos dando a oportunidade de encontrar as informações do que desejarmos na internet

## Para automatizar e otimizar o processo.
calculadora, bloco de notas e as lampâdas de rua(Que reconhecem se está escurecendo para ligar a luz ou se está claro para desligar)

- automatizar tarefas na web(interagir, preencher ou buscar informações)
- automatizar aplicação, preencimento, duplicação e envio de arquivos(planilhas, docs, textos, PDF, imagens e etc...)
- criação, leitura e envio de e-mails
- tarefas que usem o teclado ou mouse
  
Praticamente qualquer processo que é feito em um dispositivo pode ser automatizado parcial ou totalmente utilizando a programação.

# aula 2 - onde entra a lógica no desenvolvimento de software

"Antes de existir a lógica, havia um processo... um ciclo" - Jhonatan Souza

Ciclo de desenvolvimento de software:

- Estágio 1 - Idealização
- Estágio 2 - Especificação de requisitos
- Estágio 3 - Validação da solução 
- Estágio 4 - Desenvolvimento de testes
- Estágio 5 - Implementação e entrega 


# Aula 3 - aprendendo a resolver problemas com a análise crítica 

"Tudo começa na analise, na analise crítica do problema" -  Jhonatan Souza

"Saber programar é secundário, o importante é criar soluções bem defidas" Jhonatan Souza

"Saber analisar e resolver problemas é muito mais importante do que decorar os comandos de alguma linguagem de programação"

"Quanto mais experiente você se tornar, mais obivios ficam os caminhos que levam a solução"

A resolução de um programa desde os dados coletados(e salvos) até o resulatado retornado de uma operação lógica ou aritimetica é importante

# Aula 4 - O que são algorítimos e como montar algotitmos do zero 

Um algoritmo são uma serie de passos lógicos e instruções a serem seguidas para a resolução de problemas

Quando um algoritmo deve ser criado? Sempre que queremos montar uma sequencia de passos lógicos para resolver o problema.

## Metódo 5Q's para montar um algiritmos:

Analise criticamente o problema e descubra: (Tentar explicar o problema para mim mesmo em voz alta e pedir mair informações/investigar até compreender completamente o problema)

- 1. Quais são os dados de entrada necessários
- 2. O que devo fazer com esses dados 
- 3. Quais são as restrições deste problema
- 4. Qual é o resultado esperado 
- 5. Qual é a sequência de passos escolhidas para chegar ao resultado esperado

Exemplo: 
- OS dados necessários
1. Um Telefone
2. Um numero de celular

- o que devo fazer com os dados 
1. Usar o celular para discar o número de telefone do meu amigo 

- Restrições do problema(coisas que podem dar errado):
1. Caso meu amigo não atenda, devo deixar uma mensagem: "Me ligue de volta" 

- Resultado esperado: 
1. Que eu consiga falar com meu amigo


Passo um para ligar para alguem

1. Ter um telefone
2. solicitar ou ter o numero de telefone
3. discar o número de telefone recebido
4. ligar oara o número de telefone

solução do Jhonatan Souza

1. Pegue o telefone
2. Se o telefone estiver travado por senha, destrave
3. Verifique se há sinal de operadora
4. navegue até o discador do celular
5. Digite o número do seu amigo
6. clique em "ligar"
7. Espere a chama completar
8. Se a ligação completar , converse com o mesmo
9. caso não, deixar uma mensagem dizendo: "me ligue de volta"

///

Algoritmo que retorna o valor da hora de um funcionario com base no seu salário e horas trabalhadas

Os dados necessarios
- salário
- horas trabalhadas

O que fazer com os dados 
- Usar eles para calcular o valor por hora de um funcionario usando o calculo salário mensal / horas trabalhadas 

Restrições do problema
- os valores devem ser entregues somente em formato de salário por hora

Qual é o reultado esperado:
- O resultado esperado é o valor da hora de um funcionário

Passos lógicos:

1. requisitar o valor do salário
2. requisitar as horas trabalhadas
3.  pegar os dois dados anterios
4. salvar cada um em uma variavel diferente
5. fazer a divisão de uma variavel pela outra
6. exibir o valor hora daquela pessoa


Problema 3: chute um número

Os dados necessarios
- Um valor aleatório de 1 a 10
- o número que o usuário deve chutar 

O que fazer com esses dados:
- Devo pegar o valor aleatório e comparar com o chute do usuário 
- se o chute for menor o maior que o número aleatório, alertar o usuário sobre isso e deixa-lo jogar novamente até que acerte o número que foi gerado 
- se for igual ao número aleatório, exibir a mensagem: "parabéns, você acertou"

Restrições do problema:
- o programa não deve ser encerrado até que um valor seja chutado corretamente
- exibir na tela se e somente o caractere for numerico
- o usuário deve ser capaz de jogar quantas vezes quiser

Resultado esperado
- O programa identificar que o número chutado pelo usuário seja igual ao valor gerado no inicio do programa


1. fazer com que o program chute um número
2. salvar esse número
3. requisitar um numero ao usuário
4. verificar se esse número é igual ao chute no inicio do programa
5. se o chute for maior que o número gerado, exibir "chutou alto" e voltar para o passo 3
6. se o chute for menor do que o numero gerado, exibir "chutou baixo" e voltar para o passo 3
7. Se o chute for igual ao valor gerado, exibir "acertou" e voltar para o passo 1

# Conceitos obrigatórios para ser capaz de resolver problemas:
- Variáveis: são espaços vazios na memória onde podemos guardar qualquer tipo de dado. 
- condicionais: são as decisões que devemos tomar no decorrer do programa(tipo decidir se quer comprar um produto que está com um desconto ou não)

- laços de repetição: é a definição de quantas vezes algo deve se repetir. Os laços de repetição são utéis para automatizar processos; possuem ponto de inicio e fim e podem estar atrelados a condições

- coleções(Arrays, dicionarios, listas...): permitem armazenar uma coleção de dados, de forma interligadas, em um local só. Os dados podem ser de diferentes tipos 