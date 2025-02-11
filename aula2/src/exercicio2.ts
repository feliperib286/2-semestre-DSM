class Retangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    // Calcula e retorna a área do retângulo
    area(): number {
        return this.base * this.altura;
    }

    // Calcula e retorna o perímetro do retângulo
    perimetro(): number {
        return 2 * this.base + 2 * this.altura;
    }

    // Função para imprimir a área e o perímetro do retângulo
    print(): void {
        console.log(`Área: ${this.area()}`);
        console.log(`Perímetro: ${this.perimetro()}`);
    }
}

// Criando uma instância de Retangulo com base 3 e altura 2
const dimensões = new Retangulo(3, 2);

// Chamando a função print para exibir a área e o perímetro
dimensões.print();
