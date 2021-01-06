document.write("<b>Problemas de Cofla 1</b><br>")
document.write("Problema A <br>")
document.write("<br><br>")
//Primero pregunto la cantidad de personas que quieren comprar helados y lo guardo como entero.

parseInt(CantidadPersonas = prompt("Ingrese la cantidad de personas que van a comprar helados"));
//Despues pregunto el nombre de cada persona para diferenciarlos a cada uno.

let nombres = [];
for(let i = 0;i<=CantidadPersonas-1;i++){
    nombres[i] = prompt("Ingrese el nombre de la persona " + (i+1));
}
//Acá debo preguntar cuanto dinero tiene cada persona
let dinero = []
for(persona in nombres){
    parseInt(dinero[persona] = prompt(`¿Cuánto dinero tiene ${nombres[persona]}?`));
}
document.write("<br><br>")

//paso por la funcion y muestro los resultados
for(pos in nombres){
    document.write(`${nombres[pos]} tiene ${dinero[pos]} pesos` + "<br>" );
    helados(nombres[pos],dinero[pos])
    document.write("<br><br>")
    // document.write(nombres.length)
}
function helados(nombre, dinero){
    let helado //tipo de helado que le alcanza
    let vuelto //vuelto a definir en cada tipo de helado
    if(dinero >= 120 && dinero < 145){
        helado = "Cucurucho de dos bolas";
        vuelto = dinero - 120;
    }else if(dinero >= 145 && dinero <160){
        helado = "Cucurucho de tres bolas";
        vuelto = dinero - 145;
    }else if(dinero >= 160 && dinero <250){
        helado = "1/4 kg de helado";
        vuelto = dinero - 160;
    }else if(dinero >= 250 && dinero <400){
        helado = "1/2 kg de helado";
        vuelto = dinero - 250;
    }else if(dinero >= 400){
        helado = "1 kg de helado";
        vuelto = dinero - 400;
    }else{
        helado="No te alcanza para ningun helado";
        vuelto = dinero;
    }
    if(vuelto != dinero){
        document.write(`A ${nombre} le alcanza para un ${helado} y le sobran ${vuelto} pesos`);
    }else{
        document.write(helado);
    }
}