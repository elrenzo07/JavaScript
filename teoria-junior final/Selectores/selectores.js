//selector por id
nombre_de_variable = document.getElementById('identificador')
document.write(nombre_de_variable)  //object HTMLDivElement

//selector por tagname
nombre_de_variable = document.getElementsByTagName("p")
document.write(nombre_de_variable) //object HTMLCollection
//devuelve una lista de elemtos p

//para seleccionar por clase uso queryselector
nombre_de_variable = document.querySelector(".nombre-de-clase")
document.write(nombre_de_variable)  //object HTMLParagraphElement
//tambien se puede seleccionar por id poniendo # delante del nombre del id en al argumento del querySelector.

//idem al anterior pero selecciona todos y devuelve una lista de nodos que se puede acceder por subindece
nombre_de_variable = document.querySelectorAll(".nombre-de-clase")
document.write(nombre_de_variable[2]) //object HTMLParagraphElement
document.write(nombre_de_variable) //object NodeList
//si le pongo un subindice que no existe me devuelve undefined




 