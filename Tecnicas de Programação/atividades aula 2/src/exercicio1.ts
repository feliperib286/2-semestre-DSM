class Filme {
    titulo: string;
    duracao: number;
    constructor(titulo: string, duracao: number) {
    this.titulo = titulo;
    this.duracao = duracao;
    }
    print(): void {
    console.log(`O filme ${this.titulo} possui ${this.duracao} min.`);
    }
    }
    const x = new Filme("De volta para futuro", 116) ;
    const y = new Filme("Matrix", 136);

    x.print();
    y.print();
    