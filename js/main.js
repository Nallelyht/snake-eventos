//alert("hola")

var contenedor = document.getElementById("contenedor");
var cabezaSerpiente = document.getElementById("cabezaSerpiente");
var nuevaPosicion = 0;

document.addEventListener("keyup",moverDiv);
    
			
function moverDiv(tecla){
    var teclaPresionada = tecla.keyCode;
    //console.log(nuevaPosicion);
   // console.log(teclaPresionada);
    
    if (teclaPresionada==39){
        nuevaPosicion+=20;
        cabezaSerpiente.style.marginLeft = nuevaPosicion+ "px";
        
        if (nuevaPosicion>480){
            alert("Game Over");
            cabezaSerpiente.style.marginLeft= "0px";
        }
    } else if (teclaPresionada==37){
        nuevaPosicion-=20;
        cabezaSerpiente.style.marginLeft = nuevaPosicion + "px";
        if (nuevaPosicion<0){
            alert("Game Over");
            cabezaSerpiente.style.marginLeft= "0px";
        }
    } else if (teclaPresionada==40){
        nuevaPosicion+=20;
        cabezaSerpiente.style.marginTop = nuevaPosicion + "px";
        if (nuevaPosicion>480){
            alert("Game Over");
            cabezaSerpiente.style.marginTop= "0px";
        }
    } else if (teclaPresionada==38){
        nuevaPosicion-=20;
        cabezaSerpiente.style.marginTop = nuevaPosicion + "px";
        console.log(nuevaPosicion);
        if (nuevaPosicion<0){
            alert("Game Over");
            cabezaSerpiente.style.marginTop= "0px";
        }
    } else {
        alert("Juega solo con las flechas");
    }
}