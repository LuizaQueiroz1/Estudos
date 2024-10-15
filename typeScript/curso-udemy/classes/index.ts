let pedido: string = "pizza";

//tupla
let array1: [string, string] = ["lulu", "brito"];

let array2: Array<string | number | boolean> = [
  "lulu",
  "brito",
  "bispo",
  51,
  true,
];

console.log(array1);
console.log(array2);

let obj1: { nome: string; sobrenome: string; idade: number } = {
  nome: "Luiza",
  sobrenome: "Queiroz",
  idade: 21,
};

let obj2: Array<{ nome: string; sobrenome: string; idade: number }> = [
  {
    nome: "Luiza",
    sobrenome: "Queiroz",
    idade: 21,
  },
];

console.log(obj1);
console.log(obj2);

//Union Types:

let value: string | number | boolean = "lulu";

console.log(value);

// void

const func = (msg: string): void => {
  console.log(msg);
};

// never: algo que retorna um erro ou fique sempre rodando em um retorno de nada

const error = (): never => {
  throw new Error("Algo deu errado");
};

const loop = (): never => {
  while (true) {
    console.log("Olá");
  }
};

const validate = (value: any) => {
  if (typeof value === "string") {
    return console.log("É uma string");
  } else if (typeof value === "number") {
    return console.log("É um number");
  }

  console.log(error());
};

validate("dener");

// Aliases

type alphanumerics = string | number;

let dados: alphanumerics;
dados = 1;

// optional

const fn = (nome: string, idade?: number) => {
  if (!idade) {
    return `Nome: ${nome}, Idade: valor não escolhido`;
  }

  return `Nome: ${nome}, Idade: ${idade}`;
};

console.log(fn("luiza", 21));

// enum: é um aglutinador de dados

enum Emes {
  JAN = "Janeiro",
  FEV = "Fevereiro",
  MAR = "Março",
}

console.log(Emes);

const pessoa: { nome: string; mesAniver: string } = {
  nome: "Dener",
  mesAniver: Emes.JAN,
};

if (pessoa.mesAniver === Emes.JAN) {
  console.log(pessoa);
}
