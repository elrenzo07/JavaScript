let cofla = {//[porcentaje asistencia, nota, cantidad de tps de un total 4]
    fisica : [70,7,3],
    matematica : [50,8,4],
    psicologia : [75,8,3],
    gimnasia : [80,8,1],
    lengua : [80,4,2],
    musica : [100,8,4],
}

const info = ()=> {
    for(let materia in cofla){
        console.log(materia)
        if (cofla[materia][0] >= 70){
            console.log("%c    Asistencia correcta","color:green");
        }else{
            console.log("%c    Desaprobado por inasistencias", "color:red");
        }
        if (cofla[materia][1] >= 7){
            console.log("%c    Promedio aprobado","color:green");
        }else{
            console.log("%c    Nota insuficiente", "color:red");
        }if (cofla[materia][0] >= 3){
            console.log("%c    TP´s en orden","color:green");
        }else{
            console.log("%c    Faltan entregar TP´s", "color:red");
        }
    }
}


info();

