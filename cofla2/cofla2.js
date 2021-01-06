
var boleto = true;  //variable global para que solo el primero despues de las 2 am pase gratis.

function pregunta_edad(hora){
    parseInt(edad = prompt("¿Qué edad tenés?"));

    if (edad >=0){
        if(edad >=18){
            if(boleto == true && hora >= 2){    //por acá pasará una sola vez
                alert("Podés pasar gratis");
                boleto = false;
            }else{
                alert(`Podes pasar son las ${hora}`);
            }
                
        }else alert("Sos menor de edad, volvé a tu casa");
    }else {
        alert("Ingrese una edad correctamente");//en caso de que ingrese un caracter cualquiera
        pregunta_edad(hora);
    }  
}

pregunta_edad(1.55);
pregunta_edad(2.0);
pregunta_edad(3);
