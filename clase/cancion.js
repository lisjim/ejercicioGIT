
class Canciones {
    nombre;
    duracion;
    _ID;
    genero;
    constructor(nombre,duracion,_ID,genero){
        this.nombre= nombre;
        this.duracion = duracion;
        this._ID = _ID;
        this.genero = genero;
    }
    set_ID(){

        return _ID = this._ID;
    }
    get_ID(){
        return this._ID;
    }

    mensaje(){
        console.log("Hola mundo")
    }
}

class Reproductor{

}
let ca = new Canciones()
//ca.mensaje();

