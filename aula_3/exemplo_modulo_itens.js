export function teste1() {
    console.log('chamada da funcao teste1');
}

export class Teste2 {
    nome;
    
    constructor(nome) {
        this.nome = nome;
    }

    saudacao() {
        console.log('Olá', this.nome);
    }
}

export const teste3 = 'TESTE 3';