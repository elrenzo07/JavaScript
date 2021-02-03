let alumnos = [{
    nombre: "Renzon Alonso",
    email: "r.alonso@ingenieria.com.ar",
    puesto: "proyectista"
},{
    nombre: "Remon Ronco",
    email: "r.s.ronco@ingenieria.com.ar",
    puesto: "proyectista"
},{
    nombre: "Facundon Sanchez",
    email: "f.sanchez@ingenieria.com.ar",
    puesto: "proyectista"
},{
    nombre: "Ginon Alejandro Russo",
    email: "g.russo@ingenieria.com.ar",
    puesto: "piping"
},{
    nombre: "Fernandon Lezcano",
    email: "f.lezcano@ingenieria.com.ar",
    puesto: "proyectista"
},{
    nombre: "Claran Vidal",
    email: "c.vidal@ingenieria.com.ar",
    puesto: "civil"
}
]

const confirmar = document.querySelector(".btn-confirmar")

let count = 0;
for (alumno in alumnos) {
    count +=1;
    let datos = alumnos[alumno]
    let nombre = datos["nombre"];
    let email = datos["email"];
    let puesto = datos["puesto"]
    let htmlCode = `
    <div class="grid-item item">${count}</div>
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item puesto">${puesto}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
            <option value="Semana 3">Semana 3</option>
        </select>
    </div>`
    document.querySelector(".contenedor").innerHTML += htmlCode;
}

let semana = document.querySelector(".semana");


confirmar.addEventListener("click", ()=> {
    let elementos = document.querySelectorAll(".semana")
    let seleccion = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos){
        semana = elementos[elemento]
        semana.innerHTML = seleccion[elemento].value;
    }
})