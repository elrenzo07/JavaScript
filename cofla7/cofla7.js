
/*
Cofla tiene que comprar un nuevo monitor pero quiere que sea en full hd
Crear un sistema que mida el ancho de pantalla y le pida confirmación a cofla para la compra del monitor 
*/

const pantalla = window.screen;

const alto = pantalla.availHeight;
const ancho = pantalla.availWidth;

let comprar = confirm(`El ancho de la pantalla es: ${ancho} y el alto es de: ${alto}. ¿Desea confirmar la compra?`);

if(comprar){
    alert("Compra generada exitosamente.");
}else{
    alert("Compra cancelada");
}

let href = window.location.href;
let hostname = window.location.hostname;
let pathname = window.location.pathname;
let protocol = window.location.protocol;

document.write(`href: <b>${href}</b> <br>
hostname: <b>${hostname}</b> <br>
pathname: <b>${pathname}</b> <br>
protocolo: <b>${protocol}</b><br>`)

