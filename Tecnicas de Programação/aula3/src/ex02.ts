/*Exercício 2: Codificar as classes representadas no diagrama
UML de classes. Codificar em cada método as seguintes
instruções:

No corpo do método um:
console.log("um");
No corpo do método dois. Incluir também a chamada do
método um:
console.log("dois");
No corpo do método tres. Incluir também a chamada do
método dois:
console.log("três");
Utilize o objeto a seguir para testar o código e produzir o
resultado mostrado ao lado.
const z = new Z();
z.tres();*/

class X {
    um() {
        console.log("um");
    }
}

class Y extends X {
    dois() {
        this.um(); // Chama o método um da classe X
        console.log("dois");
    }
}

class Z extends Y {
    tres() {
        this.dois(); // Chama o método dois da classe Y
        console.log("três");
    }
}

// Criando o objeto e chamando o método tres
const z = new Z();
z.tres();
