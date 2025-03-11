class Operacao {
    // Método que realiza a soma de dois números
    somar(a: number, b: number): number {
        return a + b; // Retorna a soma de a e b
    }
}

// Classe que herda de Operacao e reutiliza o método de soma
class Calcular extends Operacao {
    x: number; // Atributo para armazenar o primeiro número
    y: number; // Atributo para armazenar o segundo número
    
    // Construtor que recebe os dois números e os armazena
    constructor(x: number, y: number) {
        super(); // Chama o construtor da superclasse
        this.x = x; // Inicializa o atributo x
        this.y = y; // Inicializa o atributo y
    }
    
    // Método que realiza a soma utilizando a implementação da superclasse
    somar(): number {
        return super.somar(this.x, this.y); // Chama o método somar da classe pai
    }
}

// Criação de um objeto da classe Calcular com os valores 5 e 15
const c = new Calcular(5, 15);
// Exibe o resultado da soma no console
console.log("Somar:", c.somar());
