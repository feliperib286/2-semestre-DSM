"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* bloco switch-case */
// Importa o módulo prompt-sync
var promptSync = require("prompt-sync");
// Cria uma instância do prompt
var prompt = promptSync();
var c = prompt("Digite seu nome:");
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
