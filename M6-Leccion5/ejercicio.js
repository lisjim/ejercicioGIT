class Empleado {
    nombre='';
    departamento='General'
    constructor(nombre,departamento){
        this.nombre=nombre;
        this.departamento=departamento;
    }
}

class Director extends Empleado {
    informe=[];
    constructor(nombre,departamento,informe){
        super(nombre,departamento);
        this.informe=informe;
    }
}
class Trabajador extends Empleado {
    proyectos=[];
    constructor(nombre,departamento,proyectos){
        super(nombre,departamento);
        this.proyectos=proyectos;
    }
}
class Ingeniero extends Trabajador {
    maquina='';
    constructor(nombre,proyectos,maquina){
        super(nombre,"Ingenieria",proyectos);
        this.maquina=maquina;
    }
    MensajeD(){
        console.log (this.nombre + " del departamento de " +  this.departamento + "  con los proyectos " + this.proyectos + " maquina " + this.maquina);
    }
}
var arkaitz = new Ingeniero("Garro, Arkaitz", ["xhtml", "javascript","html5"], "Chrome");

arkaitz.MensajeD();