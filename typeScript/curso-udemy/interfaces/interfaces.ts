// As interfaces no typeScript definem os contratos no seu código.
// Eles também fornecem nomes explícitos para verificação de tipo.

interface IPerson {
  nome: string;
  idade: number;
  readonly cpf: number;
  enabled(): boolean;
}

let person: IPerson = {
  nome: "Luiza",
  idade: 21,
  cpf: 11111111,
  enabled: () => {
    return true;
  },
};

class Joao implements IPerson {
  nome: string = "João";
  idade: number = 21;

  readonly cpf: number = 1111;

  enabled(): boolean {
    return true;
  }
}

type obj1 = {
  nome: string;
  idade: number;
};

type obj2 = {
  marca: string;
  valor: number;
};

function perfil<person, car>(obj1: person, obj2: car): person & car {
  return { ...obj1, ...obj2 };
}
