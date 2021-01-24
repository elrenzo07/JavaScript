const contenedor = document.querySelector(".caja");
const parrafo = document.createElement("P");
parrafo.innerHTML = "Párrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo" //pone el nuevo valor para el titulo

const h2_antiguo = document.querySelector(".h2") //uso el selector para encontrar h2
contenedor.replaceChild(h2_nuevo,h2_antiguo);  //reemplazo el viejo h2 con el nuevo h2

const parrafo_viejo = document.querySelector("p")
contenedor.replaceChild(parrafo,parrafo_viejo)

//si quiero remover una elemento =>
const tituloh3 = document.querySelector("#tituloChico")
contenedor.removeChild(tituloh3); // de esta forma se elimina un hijo del contenedor

//para verificar si existe un elemnto hijo dentro del contenedor

let respuesta = parrafo.hasChildNodes()

if (respuesta) {
    document.write("El elemento si tiene hijos") //va a decir que tiene hijos porque contiene texto dentro del h2 o del p. entonces tiene un textNode como hijo
}else{
    document.write("El elemento no tiene hijos") //tiene que estar totalmente vacio
} 


//para saber el padre de un hijo
let padre = parrafo.parentElement;
document.writeln(padre)

//para ver el siguiente elemento hermano (sibling)
console.log(parrafo.nextElementSibling); //si el element en el metodo entonces selecciona el texto vacio. 
console.log(parrafo.previousElementSibling);

console.log(parrafo.closest(".caja"))
