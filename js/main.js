//alert("hola")

var contenedor = document.getElementById("contenedor");
var cabezaSerpiente = document.getElementById("cabezaSerpiente");
var nuevaPosicion = 0;

document.addEventListener("keyup",moverDiv);
    
			
function moverDiv(tecla){
    var teclaPresionada = tecla.keyCode;
    console.log(nuevaPosicion);
    console.log(teclaPresionada);
    
    if (teclaPresionada==39){
        nuevaPosicion+=20;
        cabezaSerpiente.style.marginLeft = nuevaPosicion+ "px";
        console.log(nuevaPosicion);
    } else if (teclaPresionada==37){
        nuevaPosicion-=20;
        cabezaSerpiente.style.marginLeft = nuevaPosicion + "px";
    }
       

}