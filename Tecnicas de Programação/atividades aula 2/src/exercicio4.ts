class Carro {
    marca: string = "";
    modelo: string = "";
    setMarca(marca: string): void {
    this.marca = marca;
    }
    setModelo(modelo: string): void {
    this.modelo = modelo;
    }
    print(): void {
    console.log(`${this.marca} ${this.modelo}`);
    }
    }
    // Criando as duas instâncias da classe Carro
const carro1 = new Carro();
carro1.setMarca("VW");
carro1.setModelo("Gol");

const carro2 = new Carro();
carro2.setMarca("Fiat");
carro2.setModelo("Uno");

// Chamando o método print para exibir as informações no terminal
carro1.print();  // Vai exibir: VW Gol
carro2.print();  // Vai exibir: Fiat Uno