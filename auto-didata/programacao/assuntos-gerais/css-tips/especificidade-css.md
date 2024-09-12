A especificidade é calculada com base no seletor CSS.
A especificidade é geralmente expressa como um número com quatro componentes.

- Componente de ID: cada um ID em um seletor contribuiu com o valor específico de 100
- Componente de classe, atributo e pseudo-classe: cada um desses no seletor contribui para o valor específico de 10
- Componente de elemento e pseudo-elemento: cada um desses dois contribui para o valor específico de 1;
- Componente de estilo inline: Estilos definidos inline contribui para o valor específico de 1. O estilo inline é considerado o mais específico.

A ordem de precedencia de especificidade segue dessa forma:
1 estilo inline
2 ID
3 classe, atributo e pseudo-classe
4 elementos e pseudo-elementos
