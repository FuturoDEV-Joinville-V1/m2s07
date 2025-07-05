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

do {
    const acaoPersonagemUsuario = Math.floor(Math.random() * 2); //0 - Ataque e 1 - Defesa
    console.log(`Personagem do usuário ${acaoPersonagemUsuario === 0 ? 'atacou' : 'defendeu'}`);
    const acaoPersonagemAdversario = Math.floor(Math.random() * 2);
    console.log(`Personagem do adversário ${acaoPersonagemAdversario === 0 ? 'atacou' : 'defendeu'}`);

    if (acaoPersonagemUsuario === 0 && acaoPersonagemAdversario === 0) { //Ambos Atacam
        const vidaAtualAdversario = personagemAdversario.getVida() - personagemUsuario.atacar();
        personagemAdversario.setVida(vidaAtualAdversario);

        const vidaAtualUsuario = personagemUsuario.getVida() - personagemAdversario.atacar();
        personagemUsuario.setVida(vidaAtualUsuario);
    } else if (acaoPersonagemUsuario === 0 && acaoPersonagemAdversario === 1) { // Usuario Ataca e Adversario Defende
        const difAtaqueDefesa = personagemUsuario.atacar() - personagemAdversario.defender();
        
        // Se a diferença do do ataque x defesa for maior que zero,
        // significa que a diferença do ataque será descontada da vida
        if (difAtaqueDefesa > 0) { 
            const vidaAtual = personagemAdversario.getVida() - difAtaqueDefesa;
            personagemAdversario.setVida(vidaAtual);
        }
    } else if (acaoPersonagemUsuario === 1 && acaoPersonagemAdversario === 0) { // Usuario Defende e Adversario Ataca
        const difAtaqueDefesa = personagemAdversario.atacar() - personagemUsuario.defender();
        
        // Se a diferença do do ataque x defesa for maior que zero,
        // significa que a diferença do ataque será descontada da vida
        if (difAtaqueDefesa > 0) {
            const vidaAtual = personagemUsuario.getVida() - difAtaqueDefesa;
            personagemUsuario.setVida(vidaAtual);
        }
    }

    console.log('Vida do personagem do usuário:', personagemUsuario.getVida());
    console.log('Vida do personagem do adversario:', personagemAdversario.getVida());

} while (personagemUsuario.getVida() > 0 || personagemAdversario.getVida() > 0);

window.alert(`O personagem vencedor foi ${personagemUsuario.getVida() > personagemAdversario.getVida() ? 'Personagem do Usuario' : 'Personagem Adversário'}`);