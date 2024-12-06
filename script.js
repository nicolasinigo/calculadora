let cambia = 0;

function agregar(valor){ 
    if(cambia==1){
        document.getElementById("pantalla").value ="";
        cambia = 0;
    }
    document.getElementById("pantalla").value += valor;
}
function agregarSimbolo(valor){
    document.getElementById("pantalla").value += valor;
    cambia=0;
}

function calcular(){
    const valorPantalla = document.getElementById("pantalla").value;
    const resultado= eval(valorPantalla);
    document.getElementById("pantalla").value = resultado;
    cambia=1;
}

function borrar(){
    document.getElementById("pantalla").value ="";
}