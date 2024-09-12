const produtos = [
  {
    nome: "Notebook",
    preco: 2100,
    categoria: "eletronico",
  },
  {
    nome: "SmartPhone",
    preco: 400,
    categoria: "eletronico",
  },
  {
    nome: "Carregador",
    preco: 100,
    categoria: "eletronico",
  },
  {
    nome: "feijão",
    preco: 10,
    categoria: "alimento",
  },
  {
    nome: "Arroz",
    preco: 8,
    categoria: "alimento",
  },
];

const total = produtos.map((p) => p.preco * 4).reduce((a, b) => a + b, 0);

const filter = produtos
  .filter((c) => c.categoria === "eletronico")
  .map((p) => p.nome.toLocaleUpperCase());

const total2 = produtos
  .map((c) => c.categoria != "alimento")
  .reduce((acc, atu) => acc + atu, 0);

console.log(`${filter}; ${total}`);

// Dá para usar um map e o reduce juntos, a única diferença que se fará presente é tirar o  referenciamento ao objeto(exemplo acima: 'b.preco'. Com o reduce e o map juntos fica só o 'b', esse 'b' virou o resultado do calculo do map)

//o reduce recebe uma função callback com dois argumentos. O primeiro é o acumulador que vai ficar recebendo o preço de cada item e o segundo parâmetro é justamente o item que estou querendo processar. e o último 'argumento' depois da virgula é para dizer em que número o acumulador deve começar

console.log(total);

// const precosEmReais = produtos.map((p) => p.preco * 4);

// console.log(precosEmReais);

// console.log(produtos);

// O map é para tranformar alguma coisa e gerar um novo valor
