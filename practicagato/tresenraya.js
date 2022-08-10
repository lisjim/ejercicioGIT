 
let gato1=[
    ["","",""],
    ["","",""],
    ["","",""]
];


function tirar(figura,col,fila){

if(  gato1[col][fila]==""){
gato1[col][fila]=figura;
console.log(gato1);
}else{
console.log("No puedes tirar en donde ya tiraron");
}
siHayGanador()
}


function siHayGanador(){
let p1=0;
let p2=1;
let p3=2;

for(let fila=0; fila<gato1.length; fila++ ){
 

//Reviso filas
if(gato1[fila][p1]=="x" && gato1[fila][p2]=="x" &&  gato1[fila][p3]=="x"){
        console.log("has ganado x por fila");
        ganador= true;
}

if(gato1[fila][p1]=="O" && gato1[fila][p2]=="O" &&  gato1[fila][p3]=="O"){
    console.log("has ganado 0 por fila");
    ganador= true;
}

//Revisar columnas
for(let columna=0; columna<gato1.length; columna++ ){
 
    if(gato1[p1][columna]=="x" && gato1[p2][columna]=="x" &&  gato1[p3][columna]=="x"){
            console.log("has ganado x por columna");
            ganador= true;
    }

    if(gato1[p1][columna]=="O" && gato1[p2][columna]=="O" &&  gato1[p3][columna]=="O"){
        console.log("has ganado 0 por columna");
        ganador= true;
    }

}



}
}

tirar("x",0,0);
tirar("x",0,1);
tirar("x",0,2);
