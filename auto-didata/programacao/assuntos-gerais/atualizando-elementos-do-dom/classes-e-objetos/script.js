class Person {
    constructor() {
        this.nome = "Bruno"
    }
}

let p1 = new Person()/*esse parentese faz uma referência direta ao construtor. Portanto, não passar parametro se o construtor também não tiver*/

console.log(p1.nome)/*O new instacia a nova classe e automaticamente executa o metódo construtor*/

/* Construtor com parâmetro */

class Person2 {
    constructor(pNome) {
        this.nome = pNome
    }
}

let p2 = new Person2('Andeson')
let p3 = new Person2('Lulu')
let p4 = new Person2('Crispiniana')

console.log(p2.nome)
console.log(p3.nome)
console.log(p4.nome)

console.log("n\n\n\n")

//Tudo são moldes de orientação a objetos

class Carro {
    constructor(pnome, ptipo){
        this.nome=pnome
        if(ptipo==1){
            this.tipo = "esportivo"
            this.vlMax = 300
        } else if(ptipo==2){
            this.tipo = "Utilitário"
            this.vlMax = 100
        } else if(ptipo==3){
            this.tipo = "Esportivo"
            this.vlMax = 160
        } else {
            this.tipo = "Militar"
            this.vlMax = 180
        }
    }
    getName(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.vlMax
    }
    getInfo(){
        return [this.nome,this.tipo,this.vlMax]
    }
    setName(nome){
        this.nome=nome
    }

    info(){
        console.log(`Nome.: ${this.nome}`)
        console.log(`Tipo.: ${this.tipo}`)
        console.log(`V.max.: ${this.vlMax}`)
    }
}

let c1=new Carro("Rapidão", 1)
let c2=new Carro("Super Luxo", 2)
let c3=new Carro("Bombadão", 4)
let c4=new Carro("Carrego Tudo", 3)

// console.log(c1.nome)
// console.log(c2.nome)
// console.log(c3.nome)
// console.log(c4.nome)

// c1.info()
c1.setName("Super Veloz")

console.log(c1.info())

// O metódo get é para pegar o valor do objeto e o set é para alterar