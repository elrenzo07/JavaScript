const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click",(e)=>{
    e.preventDefault() /*para prevenir el comportamiento por defecto que es actualizar la página*/
    let error = validarCampos();
    
    if (error[0]){
        resultado.innerHTML=error[1];
        resultado.classList.add("red");
    }else{
    resultado.innerHTML="La solicitud fue enviada exitosamente"
    }
})

const validarCampos = () => {
    let error = [];
    error[0]=false;
    if (nombre.value.length < 5 || nombre.value.length >40){
        error[0]= true;
        error[1]="NOMBRE INVÁLIDO"
    }else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.length < 5){
        error[0]= true;
        error[1]="E-MAIL INVÁLIDO"
    }else if(materia.value.length<5 || materia.value.length>40){
        error[0]= true;
        error[1]="MATERIA INVÁLIDA"
    }else if(!error[0]){
        resultado.classList.remove("red")
        resultado.classList.add("green");
    }
    
    return error;
}