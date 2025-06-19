"use strict";
// Função que calcula o montante após o tempo t com juros compostos
function calcularMontante(capital, taxaJuros, tempoMeses) {
    // Fórmula dos juros compostos: M = C * (1 + i)^t
    return capital * Math.pow(1 + taxaJuros, tempoMeses);
}
// Entradas
const capitalInicial = 1000; // Exemplo de capital inicial (R$ 1000)
const taxaJurosMensal = 0.005; // 10% ao mês (convertido para decimal)
const tempoMeses = 12; // 10 meses
// Cálculo do montante final
const montanteFinal = calcularMontante(capitalInicial, taxaJurosMensal, tempoMeses);
// Exibição do resultado
console.log(`O montante após ${tempoMeses} meses é: R$ ${montanteFinal.toFixed(2)}`);
