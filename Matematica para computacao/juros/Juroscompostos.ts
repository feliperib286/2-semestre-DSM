// Função que calcula o montante após o tempo t com juros compostos
function calcularMontante(capital: number, taxaJuros: number, tempoMeses: number): number {
    // Fórmula dos juros compostos: M = C * (1 + i)^t
    return capital * Math.pow(1 + taxaJuros, tempoMeses);
}

// Função principal para testar a função de juros compostos
const capitalInicial: number = 1000.0;  // Exemplo de capital inicial
const taxaJurosMensal: number = 0.01;   // Taxa de juros de 1% ao mês
const tempoMeses: number = 70;          // Tempo em meses para dobrar o valor

const montanteFinal: number = calcularMontante(capitalInicial, taxaJurosMensal, tempoMeses);

console.log(`O montante após ${tempoMeses} meses é: ${montanteFinal}`);
