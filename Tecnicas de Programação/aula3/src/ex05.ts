class Matematica {
    nro: number;

    constructor(nro: number) {
        this.nro = nro;
    }

    calcular(): void {
        // Método abstrato a ser sobrescrito nas subclasses
    }
}

class Multiplicar extends Matematica {
    constructor(nro: number) {
        super(nro);
    }

    calcular(): void {
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.nro} * ${i} = ${this.nro * i}`);
        }
    }
}

class Somar extends Matematica {
    constructor(nro: number) {
        super(nro);
    }

    calcular(): void {
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.nro} + ${i} = ${this.nro + i}`);
        }
    }
}

// Criando instâncias e chamando os métodos
const a: Matematica = new Somar(5);
a.calcular(); // Imprime a tabuada de soma

const b: Matematica = new Multiplicar(5);
b.calcular(); // Imprime a tabuada de multiplicação
