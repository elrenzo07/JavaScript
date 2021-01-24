const contenedor = document.querySelector(".caja");
/*
//creando un elemento li dentro de la caja
const item = document.createElement("LI"); //la etiqueta tiene que ir si o si en mayusculas.

//luego crea un nodo de texto
const textoDelItem = document.createTextNode("Este es un texto de la lista");

//insertando textNode dentro del elemento li
//item.innerHTML = textoDelItem; //esto agrega un object Text dentro del li - se hace de otra forma

item.appendChild(textoDelItem);
contenedor.appendChild(item)

console.log(item)
*/

//EN EL CASO DE QUE QUIERA AGREGAR MUCHOS ITEMS LI
/*lo que se puede hacer es crear el elemento dentro del bucle, crear el textNode, hacer un appendChild del textNode al item y un appendChild del item al contenedor
todo esto consume mucho recurso. entonces se usa la construccion de fragmento de codigo que es mas eficiente.*/

//primer metodo y no recomendado
/*
for (i = 0; i<30; i++){
    const item = document.createElement("LI")
    item.innerHTML = `texto de item de la lista ${i+1}` //esto está bien pero no es un objeto como en el caso anterior.
    contenedor.appendChild(item)
}
*/
//metodo recomendado

const fragmento = document.createDocumentFragment()

for (i = 0; i<30; i++){
    const item = document.createElement("LI")
    item.innerHTML = `texto de item de la lista ${i+1}` //esto está bien pero no es un objeto como en el caso anterior.
    fragmento.appendChild(item)
}

contenedor.appendChild(fragmento)