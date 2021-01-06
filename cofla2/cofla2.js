
document.write("<h1>Seleccionar la solucion al problema que desea ejecutar:</h1><br>");
document.write("A: problema A-dejar pasar a mayores de edad, el primero despues de las 2 am pasa gratis.<br>");
document.write("B: problema B-tomar asistencia en 30 dias, solo 10% de ausencias semestral. si es mayor ==> reprueba<br>");

do {problema = prompt("Seleccionar la solucion al problema que desea ejecutar:");
console.log(problema);
}while(!(problema == 'A' || problema == 'B')); //para que no escriba giladas

switch(problema){
    case 'A': 
        problemaA();
        break;
    case 'B':
        problemaB();
        break;
}
function problemaA(){
    var boleto = true;  //variable global para que solo el primero despues de las 2 am pase gratis.

    function pregunta_edad(hora){
        parseInt(edad = prompt("¿Qué edad tenés?"));

        if (edad >=0){
            if(edad >=18){
                if(boleto == true && hora >= 2){    //por acá pasará una sola vez
                    alert("Podés pasar gratis");
                    boleto = false;
                }else{
                    alert(`Podes pasar son las ${hora}`);
                }
                    
            }else alert("Sos menor de edad, volvé a tu casa");
        }else {
            alert("Ingrese una edad correctamente");//en caso de que ingrese un caracter cualquiera
            pregunta_edad(hora);
        }  
}

pregunta_edad(1.55);
pregunta_edad(2.0);
pregunta_edad(3);

}
function problemaB() {
    document.write("<br><br>");
    document.write("PROBLEMA B");
    document.write("<br><br>");
    //Primero se debe preguntar cuantos alumnos tiene la clase.
    let NumAlumnos = prompt("¿A cuantos alumnos se les tomará asistencia?");
    let listado = [];
    //Ahora debo preguntar los nombres para inicializar el conteo de presentes en 0
    for(i = 0; i<NumAlumnos; i++){
        listado[i]=[prompt(`Nombre del alumno ${i+1}`),0];
    }
    //tomar asistencia con p o P para presente y a o A para ausentes
    for(i = 0;i<30;i++){
        for(alumno in listado){
            do{
                presente=prompt(`Asistencia día ${i+1} de 30 para ${listado[alumno][0]}`)
            }while(!(presente == "P" || presente =="p" || presente == "a" || presente == "A"))//para que no escriba giladas
            if(presente == "p" || presente == "P"){
                listado[alumno][1]++;
            }
        }
    }
    console.log(listado)
    for(alumno in listado){
        if((30-listado[alumno][1])>=15){
            document.write(`${listado[alumno][0]} tiene ${30-listado[alumno][1]} faltas, entonces está REPROBADO.<br>`)
        }else{
            document.write(`${listado[alumno][0]} tiene ${30-listado[alumno][1]} ausencias.<br>`)
        }
    }

}
