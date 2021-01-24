const titulo = document.querySelector(".titulo")

let valor = titulo.textContent

document.write(valor + "<br>") //muestra todo el texto sin incluir estilos o atributos ni etiquetas.

valor = titulo.innerText    //no estandar

document.write(valor + "<br>") //muestra lo que está visible sin etiquetas

valor = titulo.innerHTML  

alert(valor + "<br>") //muestra lo que está visible sin etiquetas en document, porque document lo interpreta. si lo pongo en un alert me salen las etiquetas.

valor = titulo.outerHTML

alert(valor + "<br>") //idem al anterior pero ahora muestra tambien las etiquetas del contenedor de la clase titulo.

