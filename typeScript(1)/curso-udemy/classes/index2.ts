/* 
  Uma classe é uma estrutura da programação orientada a objetos que possui um conjunto de propriedades e métodos

  A classe é um modelo para criar objetos, permitindo que você defina uma estrutura com propriedades e comportamentos
*/

class Person {
  //atributos
  public nome: string;
  public idade: number;

  // o underline serve para dizer que a propriedade é privada

  //inicializador dos atributos
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  //métodos
  // colocar # no inicio de métodos e atributos faz com que os mesmos fiquem privados.
  comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  fezAniversario() {
    return `O ${this.nome} fez ${++this.idade}`;
  }
}

const person1 = new Person("Luiza", 21);
console.log(person1.nome);
person1.idade;

class Larissa extends Person {
  constructor() {
    super("lulu", 21);
  }
}

const lulu = new Larissa();

console.log(lulu);

console.log(lulu.comer("Macarrão"));
console.log(lulu.fezAniversario());

// getters e setters

//Os getters vão pegar o valor de _profissao com o modificador de acesso private e o setter vai setar um valor

class Person2 extends Person {
  //atributos

  private _profissao: string = "Medica"; // o underline serve para dizer que a propriedade é privada

  //inicializador dos atributos
  constructor() {
    super("lulu", 21);
  }

  get profissao() {
    if (this._profissao === "Programadora") {
      return `Ela não é mais medica, mudou para ${this._profissao.toUpperCase()}`;
    }
    return this._profissao;
  }

  set profissao(value: string) {
    this._profissao = value;
  }
}

const lulu2 = new Person2();

console.log(lulu2.profissao);
lulu2.profissao = "Programadora";
console.log(lulu2.profissao);

// abstract

abstract class Person3 {
  //atributos
  public nome: string;
  public idade: number;

  private _profissao: string = "programador"; // o underline serve para dizer que a propriedade é privada

  //inicializador dos atributos
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  //métodos
  // colocar # no inicio de métodos e atributos faz com que os mesmos fiquem privados.
  comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  fezAniversario() {
    return `O ${this.nome} fez ${++this.idade}`;
  }

  protected abstract profissao: string;
  public abstract qualSuaProfissao(): string;
  public abstract qualSeuSalario(salario: number): number;
}

class lulu3 extends Person3 {
  protected profissao: string = "programador";

  constructor() {
    super("lulu", 21);
  }

  public qualSuaProfissao(): string {
    return `Sua profissão é ${this.profissao}`;
  }

  public qualSeuSalario(salario: number): number {
    return salario;
  }
}

// Static

class Utils {
  static cloneObject(object: Array<{}>) {
    return JSON.parse(JSON.stringify(Object.assign(object)));
  }
}

const tenis1: { tamanho: number; estoque: boolean } = {
  tamanho: 38,
  estoque: true,
};

const tenis2: { tamanho: number; estoque: boolean } = {
  tamanho: 44,
  estoque: false,
};

console.log(Utils.cloneObject([tenis1, tenis2]));

// Readonly

class Person4 {
  public readonly nome: string = "Luiza Queiroz";
}

let person4 = new Person4();

console.log(person4.nome);
