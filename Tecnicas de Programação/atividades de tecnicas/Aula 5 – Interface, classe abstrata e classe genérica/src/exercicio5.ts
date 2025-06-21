import { Pilha } from "../types";

const nomes = new Pilha<string>();
nomes.push("Ana");
nomes.push("Pedro");
nomes.push("Luiz");
nomes.push("Maria");

let nome;
while ((nome = nomes.pop()) !== undefined) {
    console.log(nome);
}
