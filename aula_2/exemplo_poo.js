
class Pessoa { // CLASSE
    nome;   //Propriedade Pública
    #idade; //Propriedade Privada - ENCAPSULAMENTO

    constructor(nome, idade) {
        this.nome = nome; //Necessário utilização do this. para se referir à propriedade nome desta classe
        this.#idade = idade
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }

    getIdadade () {
        return this.#idade;
    }

    setIdate(idade) {
        this.#idade = idade;
    }
}

const pessoa = new Pessoa('Nome Pessoa', 20); //Instanciação - OBJETO

pessoa.saudacao();

class Professor extends Pessoa { //HERANÇA
    materia;

    constructor(nome, idade, materia) {
        super(nome, idade);
        this.materia = materia;
    }

    saudacao() { //POLIMORFISMO
        console.log(`Olá, eu sou o Prof ${this.nome}`);
    }
}

const prof = new Professor('Nome Professor', 30, 'Frontend'); //Instanciação - OBJETO


prof.saudacao();


