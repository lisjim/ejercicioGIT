class Reproductor extends Cancion{
    listadecanciones=[];
    actual;
    play;
    listaDePlayList=[];

    constructor(listadecanciones,actual,play,listaDePlayList){
        this.listadecanciones = listadecanciones;
        this.actual = actual;
        this.play = play;
        this.listaDePlayList = listaDePlayList;
    }

    
}