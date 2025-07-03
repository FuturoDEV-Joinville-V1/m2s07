
class CarrinhoDeCompras {
    #itens = [];

    adicionarItem(nome, preco) {
        //this.#itens.push({nome: nome, preco: preco});
        this.#itens.push({nome, preco});
    }

    listarItens() {
        console.log('Itens:', this.#itens);
    }

    calcularTotal() {
        if (this.#itens.length) {
            let total = 0;
            this.#itens.forEach(item => {
                total += item.preco;
            });
            console.log('Valor:', total);
        } else {
            console.log('Valor:', 0);
        }
    }
}

const carrinho = new CarrinhoDeCompras();

carrinho.listarItens(); //Esperado: []

carrinho.calcularTotal(); //Esperado: 0

carrinho.adicionarItem('Banana', 5);

carrinho.listarItens(); //Esperado: [{nome: 'Banana', preco: 5}]

carrinho.calcularTotal(); //Esperado: 5

carrinho.adicionarItem('Arroz', 15);

carrinho.listarItens(); //Esperado: [{nome: 'Banana', preco: 5}, {nome: 'Arroz', preco: 15}]

carrinho.calcularTotal(); //Esperado: 20