export namespace Pessoa1 {
  export let nome = "João";

  const data = 1 + 1;

  export const calc = () => {
    return data;
  };
}

//namespaces alinhados

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());
