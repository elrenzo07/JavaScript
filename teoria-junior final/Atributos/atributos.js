const rangoEtario = document.querySelector(".rangoEtario")
document.write(rangoEtario)

//una vez seleccionado puedo __editar o crear__ los atributos con setAttribute()

rangoEtario.setAttribute("type","number"); //si el atributo no existe, entonces lo crea

//obtener valor del atributo
document.write(rangoEtario.getAttribute("type")) //number

//eliminar un atributo
rangoEtario.removeAttribute("type");
document.write(rangoEtario.getAttribute("type")) //null

/* atributos globales
- class = "nobmre de la clase"
- contentEditable = true, false
- dir = "ltr", "rtl", "otro mas"
- hidden = "", si está definida entonces se oculta. para que aparezca de nuevo hay que remover el atributo hidden.
- style
- tabindex = "0" solo acepta numeros y cuando tengo una lista de tabindex, cuando aprieto tab sigue el orden de los numeros.
- title = "titulo normal" cuando paso el mouse por arriba aparece un carte con el texto de title.

*/