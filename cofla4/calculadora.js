//Calculardora básica para uso de objetos y libreria Math

class Calculadora {
    constructor(){
        //dejo el constructor vacio y le paso a cada metodo la cantidad de argumentos que necesite
    }
    sumar(num1, num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    potenciar(num, exp) {
        return num**exp;
    }
    raiz(num,exp){
        if(exp==2) return Math.sqrt(num);
        if(exp==3) return Math.cbrt(num);
        else{return num ** (1/exp)}
    }
    
}

//Instanciar la calculadora
const calculadora = new Calculadora();
while(true){ //para que vuelva a preguntar por otra operacion
    let operacion = prompt("1: Suma// 2: Resta// 3: Multiplicacion// 4: División//5: Potencia//6: Raiz  __0:SALIR__)")
    if (operacion ==0) break;
    if (operacion == 1){
        n1 = prompt("Ingrese primer valor")
        n2 = prompt("Ingrese segundo valor")
        document.write(`<b style="color:blue">${n1} + ${n2} = ${calculadora.sumar(n1,n2)} </b><br>`)
        alert(`El resultado de la suma es ${calculadora.sumar(n1,n2)}`)
    }else if(operacion ==2){
        n1 = prompt("Ingrese primer valor")
        n2 = prompt("Ingrese segundo valor")
        document.write(`<b style="color:red">${n1} - ${n2} = ${calculadora.restar(n1,n2)} </b><br>`)
        alert(`El resultado de la resta es ${calculadora.restar(n1,n2)}`)
    }else if(operacion ==3){
        n1 = prompt("Ingrese primer valor")
        n2 = prompt("Ingrese segundo valor")
        document.write(`<b style="color:magenta">${n1} * ${n2} = ${calculadora.multiplicar(n1,n2)} </b><br>`)
        alert(`El resultado de la multiplicación es ${calculadora.multiplicar(n1,n2)}`)
    }else if(operacion ==4){
        n1 = prompt("Ingrese primer valor")
        n2 = prompt("Ingrese segundo valor")
        if (n2==0){
            alert("No se puede dividir por 0")
        }else{
            document.write(`<b style="color:green">${n1} / ${n2} = ${calculadora.dividir(n1,n2)} </b><br>`)
            alert(`El resultado de la división es ${calculadora.dividir(n1,n2)}`)
        }
    }else if(operacion ==5){
        n1 = prompt("Ingrese primer valor")
        n2 = prompt("Ingrese el exponenter valor")
        document.write(`<b style="color:black">${n1} ^ ${n2} = ${calculadora.potenciar(n1,n2)} </b><br>`)
        alert(`El resultado de la potencia es ${calculadora.potenciar(n1,n2)}`)
    }else if(operacion ==6){
        n1 = prompt("Ingrese primer valor")
        n2 = prompt("Ingrese el valor raiz")
        document.write(`<b style="color:orange">La raiz ${n2} de ${n1} es ${calculadora.raiz(n1,n2)} </b><br>`)
        alert(`El resultado de la raiz es ${calculadora.raiz(n1,n2)}`)
    }
}