/* bloco switch-case */
// Importa o módulo prompt-sync
import * as promptSync from 'prompt-sync';

// Cria uma instância do prompt
const prompt = promptSync();
let c: string= prompt ("Digite seu nome:");
switch (c) {
  case "Carlos":
    console.log("Você não é Felipe");
    break;
  case "Paulo":
    console.log("Nao é Carlos");
    break;
    case "Felipe":
        console.log("Seu nome é Felipe");
        break;
  case "Henrique":
    console.log("Não é João");
    break;
  default:
    console.log("Você é um morador de rua");
}

/* Usado para definir esse arquivo como um módulo
cujo escopo das variáveis é restrito a ele */

export {};



