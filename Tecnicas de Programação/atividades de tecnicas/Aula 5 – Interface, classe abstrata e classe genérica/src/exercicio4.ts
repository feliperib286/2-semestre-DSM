import { Livro } from "../types";

class Revista extends Livro {
    constructor(titulo: string, ano: number) {
        super(titulo, ano);
    }

    print(): void {
        console.log(this.titulo, this.ano);
    }
}

const r = new Revista("Super Interessante", 2024);
r.print();
