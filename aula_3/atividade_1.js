import { Mago, Guerreiro, Arqueiro} from './atividade_1_classes.js';

const escolhaUsuario = prompt('Escolha a sua classe [Mago, Guerreiro, Arqueiro]:');
const escolhaAdversario = prompt('Escolha a sua classe do adversário [Mago, Guerreiro, Arqueiro]:');
const escolhaNivel = prompt('Escolha o nível dos personagens [1 a 100]:');

let personagemUsuario;
let personagemAdversario;

if (escolhaUsuario.toLowerCase() === 'mago') {
    personagemUsuario = new Mago(escolhaNivel);
} else if (escolhaUsuario.toLowerCase() === 'guerreiro') {
    personagemUsuario = new Guerreiro(escolhaNivel);
} else if (escolhaUsuario.toLowerCase() === 'arqueiro') {
    personagemUsuario = new Arqueiro(escolhaNivel);
}

if (escolhaAdversario.toLowerCase() === 'mago') {
    personagemAdversario = new Mago(escolhaNivel);
} else if (escolhaAdversario.toLowerCase() === 'guerreiro') {
    personagemAdversario = new Guerreiro(escolhaNivel);
} else if (escolhaAdversario.toLowerCase() === 'arqueiro') {
    personagemAdversario = new Arqueiro(escolhaNivel);
}

const acaoPersonagemUsuario = Math.floor(Math.random() * 2);
const acaopersonagemAdversario = Math.floor(Math.random() * 2);



