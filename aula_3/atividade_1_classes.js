class Personagem {
    #nivel;
    #vida;
    #baseAtaque;
    #baseDefesa;

    constructor(nivel, vida, baseAtaque, baseDefesa) {
        this.#nivel = nivel;
        this.#vida = vida;
        this.#baseAtaque = baseAtaque;
        this.#baseDefesa = baseDefesa;
    }

    atacar() {}
    defender() {}
    getVida() {}
    setVida() {}
}

export class Mago extends Personagem {
    constructor(nivel) {
        super(nivel, 85 * nivel, 8, 3);
    }
}

export class Guerreiro extends Personagem {
    constructor(nivel) {
        super(nivel, 105 * nivel, 6, 5);
    }
}

export  class Arqueiro extends Personagem {
    constructor(nivel) {
        super(nivel, 90 * nivel, 7, 4);
    }
}