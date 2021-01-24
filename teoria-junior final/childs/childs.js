const contenedor = document.querySelector(".caja")

const primerHijo = contenedor.firstChild;
console.log(primerHijo) //devuelve text ya que hay un espacio o un salto de linea entre el final de la etiqueta div y el comienzo de la etiqueta h1

const primerElemntoHijo = contenedor.firstElementChild;
console.log(primerElemntoHijo)

//tambien funciona para lastChild y lastElementChild

//si quisiera el objeto lista con espacios =>

const objetoListaEspacios = contenedor.childNodes;
console.log(objetoListaEspacios) //devuelve un objeto lista con elementos y espacios listados
//se puede recorrer con un forEach
objetoListaEspacios.forEach(hijos => console.log(hijos))

//ahora si solo quiero los ELEMENTOS uso children

const objetoListaSinEspacios = contenedor.children; //esto crea un HTML collection que no se puede recorrer con forEach
//objetoListaSinEspacios.forEach(hijo => console.log(hijo))

//la forma de recorrerlo es la siguiente

for(hijo of objetoListaSinEspacios){
    console.log(hijo)
}