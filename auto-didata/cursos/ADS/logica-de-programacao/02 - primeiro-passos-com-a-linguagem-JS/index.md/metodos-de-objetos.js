
const obj = {}

Object.defineProperty(obj, 'proriedadeUm', {
        value: "miciline",
        writable: true,
        enumerable: true,
        configurable: true
})



console.log(obj.value);

const meuObjeto = Object.create(obj)
meuObjeto.value = "Lulu"

console.log(meuObjeto.value)

console.log(obj)

console.log(obj); {propriedadeUm: 'miciline'}


let objUm = {foo: 'bar', baz: 42}
console.log(Object.entries(objUm)); // [['foo', bar], [baz, 42]]

let objDois = {0: 'a', 1: 'b', 2:'c'};
console.log(Object.entries(objDois))