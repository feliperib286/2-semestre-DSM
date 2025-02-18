class Operacao {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    somar(): number {
        return this.x + this.y;
    }

    subtrair(): number {
        return this.x - this.y;
    }

    dividir(): number {
        if (this.y !== 0) {
            return this.x / this.y;
        } else {
            return NaN; // Retorna "Not-a-Number" em caso de divisão por zero
        }
    }

    print(): void {
        console.log(`Soma: ${this.somar()}`);
        console.log(`Diferença: ${this.subtrair()}`);
        console.log(`Divisão: ${this.dividir()}`);
    }
}

// Criando a instância da classe Operacao
const op = new Operacao(3, 5);

// Chamando o método print para exibir os resultados
op.print();
