
class ContaBancaria {
    #saldo = 0;

    depositar(valor) {
        if(valor <= 0) {
            window.alert('Valor do depósito inválido!');
        } else {
            this.#saldo += valor;
        }
    }

    verSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria();

console.log('O saldo atual é:',conta.verSaldo()); //Saldo = 0

conta.depositar(500);

console.log('O saldo atual é:',conta.verSaldo()); // Saldo = 500

conta.depositar(250);

console.log('O saldo atual é:',conta.verSaldo()); // Saldo = 750