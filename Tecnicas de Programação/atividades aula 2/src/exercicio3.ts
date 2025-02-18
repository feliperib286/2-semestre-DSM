class Aleatorio {
    get(): number {
return Math.floor(Math.random() * 100 + 1);
}
}
// Criando uma instância da classe Aleatorio
const aleatorio = new Aleatorio();

// Imprimindo 5 números aleatórios
for (let i = 0; i < 5; i++) {
    console.log(aleatorio.get());
}