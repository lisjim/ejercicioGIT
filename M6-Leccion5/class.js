class Animal{
    constructor(nombre){
        this.nombre= nombre;
    }


hablar(){
    console.log(this.nombre + "hace un ruido");
}
}

class Perro extends Animal{
    hablar(){
        console.log(this.nombre + "ladra.");
    }
}

let myAni = new Animal("Liseth");
//hablar();

let myPe = new Perro(myAni);
myPe.hablar();

//También se pueden extender las clases tradicionales basadas en funciones:
/*function Animal (nombre){
    this.nombre = nombre;
}
Animal.prototype.hablar = function() {
    console.log(this.nombre + "hace un ruido")
}

class Perro extends Animal{
    hablar(){
        super.hablar();
        console.log(this.nombre + "ladra")
    }
}
 var p = new Perro("Mitzie");
 p.hablar();*/