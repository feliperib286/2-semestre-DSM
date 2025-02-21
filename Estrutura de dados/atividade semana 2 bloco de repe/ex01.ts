/*let x: number[]=[1,2,3,4]
x.forEach((y) => {console.log(y);

});
x.forEach(tratador);
function tratador(valor: any, indice: any) {
    console.log(valor);
    console.log(indice);

}
export{}


 var  x: number= 2;
var y: number= 6;
var z: number;
z=somar(x,y);
console.log("z vale :",z);
function somar (a: number, b: number){
     let resultado : number=a+b;
    return resultado;
}


class Cachorro{
    raca: string;
    constructor(raca: string){
        this.raca=raca;
    }
    latir():string{
        return "au au au";
    }
}
var cachorro_1= new Cachorro("pastor");
console.log(cachorro_1.raca);
console.log(cachorro_1.latir());
*/

class Cachorro{
    raca: string;
    constructor(raca: string){
        this.raca=raca;
    }
    latir():string{
        return "au au au";
    }
}
class CachorroGrande extends Cachorro{
    peso: number;
    constructor(raca: string, peso: number){
        super(raca);
        this.peso= peso;

    }
}
var cachorro_1= new Cachorro("SRD");
console.log(cachorro_1.raca);
console.log(cachorro_1.latir());

var cachorro_2= new CachorroGrande("labrador",50);
console.log(cachorro_2.raca);
console.log(cachorro_2.latir());



