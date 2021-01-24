const titulo = document.querySelector(".titulo")

//una vez seleccionado puedo editar con classList

titulo.classList.add("grande") //agrega la clase grande.
//si creo en CSS un apartado para la clase "grande" puedo agregarla acá y añadir propiedades.
titulo.classList.remove("grande") //para eliminar la clase

let valor = titulo.classList.item(0) //devuelve el valor de la clase en la posicion indicada. si no hay nada => null
document.write("<br>" + valor )


valor = titulo.classList.contains("grande") //devuelve true o false dependiendo se si la clase existe o no
document.write("<br>" + valor )

titulo.classList.toggle("otraclase") //si tiene la clase la elimina, si no la tiene => la agrega.

titulo.classList.toggle("circular") //si tiene la clase la elimina, si no la tiene => la agrega.
//tiene un parametro extra toggle("clase", true) que borra si esta pero no agrega si no esta y biceversa

titulo.classList.replace("verde", "pasto") //reemplaza el primer parametro por el segundo.



