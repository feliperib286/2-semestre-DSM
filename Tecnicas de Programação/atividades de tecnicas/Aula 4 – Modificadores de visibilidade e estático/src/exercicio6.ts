class Carro {
    private static contador: number = 0;

    constructor(private _marca: string, private _modelo: string) {
        Carro.contador++;
    }

    public static getContador(): number {
        return Carro.contador;
    }

    public get marca(): string {
        return this._marca;
    }

    public get modelo(): string {
        return this._modelo;
    }
}

const a = new Carro("VW","Gol");
const b = new Carro("Fiat","Uno");
const c = new Carro("GM","Corsa");

console.log("Quantidade de objetos:", Carro.getContador());
