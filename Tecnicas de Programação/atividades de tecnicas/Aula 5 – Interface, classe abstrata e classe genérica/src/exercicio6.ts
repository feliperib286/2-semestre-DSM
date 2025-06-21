import { Pilha, Ponto } from "../types";

const pontos = new Pilha<Ponto>();
pontos.push({ x: 1, y: 1 });
pontos.push({ x: 2, y: 2 });
pontos.push({ x: 3, y: 3 });
pontos.push({ x: 4, y: 4 });

let ponto;
while ((ponto = pontos.pop()) !== undefined) {
    console.log(ponto);
}
