# Introdução ao SQL(Structured Query Language - Linguagem de consulta estruturada)

é uma linguagem padrão utilizada para gerenciar e manipular bancos de dados relacionais.

Os três comando principais do SQL são

- SELECT: permite que você selecione determinadas colunas em uma tabela. Determina quais colunas de informações são baixadas.
- FROM: especifica as tabelas das quais a consulta extrai dados.
- WHERE: define filtros. Determina quais linhas são selecionada das tabela.

```sql
    SELECT * FROM VENDAS LIMIT 100
```

\*\*Selecione todas a informações da tabela VENDAS com um limite de 100 linhas(rows)

sudo -u postgres psql postgres
