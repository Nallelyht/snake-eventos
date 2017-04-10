//alert("hola")

var contenedor = document.getElementById("contenedor");
var cabezaSerpiente = document.getElementById("cabezaSerpiente");
var izqDer = 0;
var arrAba = 0;

document.addEventListener("keyup",moverDiv);
    
			
function moverDiv(tecla){
    var teclaPresionada = tecla.keyCode;
    //console.log(nuevaPosicion);
   // console.log(teclaPresionada);
    
    if (teclaPresionada==39){
        izqDer+=20;
        cabezaSerpiente.style.marginLeft = izqDer+ "px";
                
        if (izqDer>480){
            alert("Game Over");
            cabezaSerpiente.style.marginLeft= "0px";
            cabezaSerpiente.style.marginTop= "0px"
        }
    } else if (teclaPresionada==37){
        izqDer-=20;
        cabezaSerpiente.style.marginLeft = izqDer + "px";
        if (izqDer<0){
            alert("Game Over");
            cabezaSerpiente.style.marginLeft= "0px";
            cabezaSerpiente.style.marginTop= "0px"
        }
    } else if (teclaPresionada==40){
        arrAba+=20;
        cabezaSerpiente.style.marginTop = arrAba + "px";
        if (arrAba>480){
            alert("Game Over");
            cabezaSerpiente.style.marginTop= "0px";
            cabezaSerpiente.style.marginLeft= "0px"
        }
    } else if (teclaPresionada==38){
        arrAba-=20;
        cabezaSerpiente.style.marginTop = arrAba + "px";
        console.log(arrAba);
        if (arrAba<0){
            alert("Game Over");
            cabezaSerpiente.style.marginTop= "0px";
            cabezaSerpiente.style.marginLeft= "0px"
        }
    } else {
        alert("Juega solo con las flechas");
    }
}