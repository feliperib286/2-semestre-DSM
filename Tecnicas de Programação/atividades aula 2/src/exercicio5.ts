class Questao {
    enunciado: string ;
    valor: number;
    constructor(enunciado: string, valor:number) {
    this.enunciado = enunciado;
    this.valor= valor
    }    
    print(): void {
    console.log (`Enunciado${this.enunciado} Valor ${this.valor}`);
    }
    }
const questao = new Questao("O que é uma Array?",0.5);
questao.print();
    