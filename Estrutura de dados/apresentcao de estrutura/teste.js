function menor_r(array, inicio, fim) {
    // Caso base: apenas um elemento
    if (inicio === fim) {
        return array[inicio];
    }
    // Divide o array ao meio
    var meio = Math.floor((inicio + fim) / 2);
    // Chamada recursiva para as duas metades
    var menorEsquerda = menor_r(array, inicio, meio);
    var menorDireita = menor_r(array, meio + 1, fim);
    // Retorna o menor entre os dois
    return menorEsquerda <= menorDireita ? menorEsquerda : menorDireita;
}
// Exemplo de uso:
var array = [8, 3, 5, 1, 9, 4, 2];
var menor = menor_r(array, 0, array.length - 1);
console.log("O menor elemento é:", menor);
