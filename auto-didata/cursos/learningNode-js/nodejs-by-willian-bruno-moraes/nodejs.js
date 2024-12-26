"use strict";

//ESCOPO DE BLOCO
// Nessa caso, foi possível alterar var, mas let não pois não aceita hosting(que é o comportamento de mover a declaração de variáveis a funções para o topo, permitindo usar variáveis antes de ser declarada)
var out = "may 25, 1977";
let out2 = "jun 20, 1980";
if (true) {
  var out = "may, 25, 1983";
  let out2 = "may 19, 1999";
}

//ESCOPO DE FUNÇÃO
(function () {
  var arr = [];
  function something() {
    console.log(arr);
  }
  arr.push(1);
  arr.push(2);
  something();
})();

console.log(out);
console.log(out2);

//se tratando de um array ou objeto, podemos mudar o que está dentro e não a referencia em si
const arr = [];
arr.push(1);
console.log(arr);

// arr = 2; // não é atribuído, mesmo que o js não tenha dado erro.

//apenas com um Object.freeze teremos um array imutável

Object.freeze(arr);
// arr.push(4); //mesmo que o js não tenha dado erro, o arr não foi alterado4

const obj = { key: "valor" };

console.log(obj.key);

const studios = ["20th century fox", "warner bros.", "walt disney pictures"];

console.log(
  studios.map(function (s) {
    return s.length;
  })
);

function sith() {
  console.log(this);
}

sith();

var lordSith = sith.bind({ name: "Darth Bane" });

lordSith();

function sith2() {
  console.log(this);
}
sith2();

sith2.call({ name: "Lulu brito" });

console.log("\n\n\n");

function sith3(arg1, arg2, arg3, arg4) {
  console.log(this), console.log("", arg1 + arg2 + arg3 + arg4);
}

sith3.call({ name: "lulu" }, 1, 2, 3, 4);

sith3.apply({ name: "lulu" }, [1, 2, 3, 4]);

console.log(1 + 3 + "2");

console.log(!!"a");

const noTry = "doNot" || false;
console.log(noTry);

console.log(false && "lulu");

const nome = "lulu";

//o bloco switch/case serve, basicamente como uma cadeia de if, elseif, else.
switch (nome) {
  case "lulu": {
    console.log("do");
    break;
  }
  default:
    console.log("do not");
    break;
}

const names = `[
  {
    key: "value",
    name: "lulu",
    favoriteNumbeer: 3,
    IsSheaProgrammer: true,
    hobbies: ["play basketball", "swimmy "],
    friends: [
      {
        name: "Juliana",
      },
    ],
  },
]`;

// console.log(JSON.parse(names));

const places = new Map();

places.set("Dagobah", "Lar do Mester Yoda");

console.log(places, places.size, places.has("Tatooine"));

places.set("Dagobah", "Naboo");
places.get("Dagobah");
console.log(places);

const [a, b] = [1, 2];

console.log([a, b]);

const televisionSerie = {
  title: "The Mandalorian",
  createdBy: {
    name: "Jon Favreau",
    birth: "1996-10-19",
    country: "U.S",
  },
  starring: [
    {
      name: "Pedro Pascal",
      birth: "1975-04-02",
      country: "Chile",
    },
  ],
};

const copy = { ...televisionSerie };
console.log(copy);

const { title, createdBy } = televisionSerie;
console.log(title, createdBy);

const pessoa1 = {
  nome: "fulano de Tal",
  idade: 31,
  peso: 65,
};

//The spread operator allows an iterable, such as an array or object to be expanded into separated elements(unpack the elements)
//Operador spread
const pessoa2 = {
  ...pessoa1,
  nome: "Ciclano de tal",
};

console.log(pessoa2);

let numbers = [1, 6, 7, 10, 50, 1];

const maximum = Math.min(...numbers);
console.log(maximum);

//Rest parameters: pack different variables into an array in a function with three ...

const OpenFridge = (...foods) => {
  console.log(...foods);
};

const GetFoods = (...foods) => {
  return foods;
};

const comida1 = "Pizza";
const comida2 = "Macarrão";
const comida3 = "Hamburguer";
const comida4 = "Chocolate";
const comida5 = "Feijão";

const foods = GetFoods(comida1, comida2, comida3, comida4, comida5);

console.log(foods);

const wash = false;
const dontWash = true;

function washTheDishes() {
  return new Promise((resolve, reject) => {
    if (wash) {
      reject({
        name: "user washing the dishes",
        message: "user watching TV",
      });
    } else if (dontWash) {
      reject({
        name: "user watching cat meme",
        message: "webDevSimplified < cat",
      });
    } else {
      resolve("subscribe");
    }
  });
}

washTheDishes()
  .then((message) => {
    console.log("success " + message);
  })
  .catch((error) => {
    console.log(`${error.name}`, "", `${error.message}`);
  });

const hi = () => console.log("hi");

// console.log(recursiveCompute());

//Orientação a eventos, Variáveis de ambiente

const apiKey = "bc25dad6f56d52e6c01e93412b5ef243";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

async function apiWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`
  );
  const data = await response.json();
  console.log(data.weather[0].main);
}

apiWeather();
