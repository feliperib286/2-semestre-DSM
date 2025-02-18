class Retangulo {
    base: number;
    altura: number;
    constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
    }
    area(): number {
    return this.base * this.altura;
    }
    perimetro(): number {
    return 2 * this.base + 2 * this.altura;
    }
    imprimir(): void {
        console.log(`Área: ${this.area()}`);
        console.log(`Perímetro: ${this.perimetro()}`);
    }
}
// Criando uma instância do retângulo com base 2 e altura 3
const retangulo = new Retangulo(2, 3);
retangulo.imprimir();     
       
    