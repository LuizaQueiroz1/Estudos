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

//ESCOPO DE BLOCO
// Nessa caso, foi possível alterar var, mas let não pois não aceita hosting(que é o compotamento de mover a declaração de variáveis a funções para o topo, permitindo usar variáveis antes de ser declarada)
var out = "may 25, 1977";
let out2 = "jun 20, 1980";
if (true) {
  var out = "may, 25, 1983";
  let out2 = "may 19, 1999";
}

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
