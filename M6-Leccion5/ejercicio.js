class Empleado {
    nombre;
    constructor(nombre){
        this.nombre=nombre;
    }
}
class Departamento {
    valor;
    constructor(valor="Genera"){
        this.valor=valor;
    }
}
class Director extends Empleado {

}