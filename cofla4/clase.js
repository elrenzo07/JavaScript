let clase = {
   fisica: ["Hernadez","cofla","maria","juan","pedro","marta"],
   matematica: ["Rodriguez","juan","pedro","marta"],
   psicologia: ["Perez","cofla","pedro","marta"],
   aritmetica: ["Fernandez","marta","hernan"],
}
class verInfo {
    constructor(){

    }
    informacion(materia){
        let profesor = clase[materia].shift() //toma el primero y lo borra de clase
        document.write(`El profesor de <b>${materia}</b> es: <b style = "color:red"> ${profesor} </b><br>`)
        document.write(`Los alumnos son: <b style = "color:blue"> ${clase[materia]} </b><br><br>`)
        clase[materia].unshift(profesor); //restituir el array para una futura consulta

    }
    buscar(alumno){
        let count = 0
        for (var materia in clase){
           if(clase[materia].includes(alumno)){
               count++;

               document.write(materia + ": <b>Inscripto</b>" + "  ");
               document.write(`Profesor: <b style = "color:red">${clase[materia][0]}</b><br>`)
           }else{
                document.write(materia + ": <b>No inscripto</b>" + "<br>");
           }
       }
       document.write(`<b style = "color:magenta">El alumno ${alumno} se encuentra incripto en ${count} materias<br></b>`)
    }
    
}
const primerSemestre = new verInfo();
primerSemestre.informacion("fisica")
primerSemestre.informacion("matematica")
primerSemestre.informacion("aritmetica")
primerSemestre.informacion("psicologia")

primerSemestre.buscar("cofla");
