let tp = "100 minutos para hacer trabajos prácticos";
let estudio = "100 minutos para estudiar";
let trabajo = "240 para trabajar";
let homework = "30 minutos para tareas de la casa";
let descanso = "10 minutos para descansar";

console.log("TAREAS:");
console.group("Semana 1");
for (let i =0;i<14;i++){
    console.groupCollapsed("dia ", i+1)
    console.log(trabajo)
    console.log(descanso)
    console.log(estudio)
    console.log(homework)
    console.log(tp)
    console.groupEnd()
    if (i==6){
        console.groupEnd();
        console.group("Semana 2")
    }
}
console.groupEnd()