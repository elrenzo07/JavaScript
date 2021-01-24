const entrada = document.querySelector(".input-normal")

document.write("<br>")
document.write("classname: " + entrada.className) //input-normal. devuelve el nombre de la clase
document.write("<br>")
//como value no exite dentro del input, lo creo con setAttribute y le doy un valor.
entrada.setAttribute("value","algo escrito adentro de value")
//muestro lo que contiene el atributo value en pantalla
document.write("value: " + entrada.value) //muestra el valor. devuelve lo almacenado en value
document.write("<br>")
document.write("type: " + (entrada.type = "text")) //cambia el atributo type con lo que le cargue
document.write("<br>")
document.write("accept: " + (entrada.accept ="image/png")) //pone un boton para seleccionar imagen y abre una ventana con filtro png.
document.write("<br>")

const formulario = document.querySelector("boton")
document.write(formulario.form = ".formulario-1")
document.write("<br>")
