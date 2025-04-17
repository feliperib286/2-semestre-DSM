function menor_r(a: number[]): number {
    // Caso base: se o array tem apenas um elemento, retornamos esse elemento, pois é o menor
    if (a.length == 1) {
      console.log("Caso base atingido!"); // Exibe quando o caso base é atingido (array com 1 elemento)
      return a[0]; // Retorna o único elemento, pois é o menor em um array de tamanho 1
    } else {
      console.log("Chamada recursiva!"); // Indica que uma chamada recursiva foi feita
      console.log("Invocando menor_r(", a.slice(1, a.length), ");"); // Exibe o array sendo passado para a próxima chamada recursiva (exceto o primeiro elemento)
      
      // Chama recursivamente a função para o restante do array (excluindo o primeiro elemento)
      let menor_restante = menor_r(a.slice(1, a.length));
      
      // Compara o primeiro elemento do array com o menor elemento do restante do array
      if (a[0] <= menor_restante) {
        return a[0]; // Se o primeiro elemento for menor ou igual ao menor do restante, retornamos o primeiro elemento
      } else {
        return menor_restante; // Caso contrário, retornamos o menor elemento do restante
      }
    }
  }
  
  // Exemplo de uso:
  const array = [8, 3, 5, 1, 9, 4, 2]; // Definimos um array de números
  const menor = menor_r(array); // Chama a função para encontrar o menor valor do array
  console.log("O menor elemento é:", menor); // Exibe o resultado final
  

  