class Person {
  nome;

  get userName() {
    return this.userName;
  }

  set setName(nome) {
    if (!nome) {
      throw new Error("O nome não");
    }
    if (this.verificaCaracteresEspeciais(nome)) {
      throw new Error("O nome não pode conter caracteres especiais");
    }
    this.nome = nome;
  }

  verificaCaracteresEspeciais(string) {
    const regex = /[@!#$%^&*(/\\)]/;
    return regex.test(string);
  }

  kebackCase(string) {
    return string.replace;
  }
}
