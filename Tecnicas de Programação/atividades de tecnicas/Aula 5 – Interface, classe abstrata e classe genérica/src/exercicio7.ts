import { Carro } from "../types";

class Uno implements Carro {
    constructor(public consumo: number, public velocidade: number, public coeficiente: number) {}

    gasto(distancia: number): number {
        return distancia / this.consumo;
    }

    frenagem(): number {
        return (this.velocidade ** 2) / (250 * this.coeficiente);
    }
}

const uno = new Uno(12.5, 90, 1);
console.log(`Gasto para percorrer 100km: ${uno.gasto(100)} litros`);
console.log(`Distância percorrida ao frear o carro: ${uno.frenagem()} metros`);
