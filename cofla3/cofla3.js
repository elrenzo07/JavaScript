/*cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse un nuevo celular.
De todos los modelos que hay disponbiles en esa tienda, a cofla le llamaron la atencion 3 telefonos especificamente.
El problema es que ninguno de los vendores sabe nada al respecto entonces no pueden recomendarle absolutamente nada... 
pero claro, antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos

CREAR SOLUCIONES
1)SISTEMA PARA MOSTRARLE A COFLA LAS PARTICULARIDADES DE LOS 3 CELULARES. CADA CELULAR DEBE TENER COLOR, PESO
RESOLUCIÓN DE PANTALLA, RESOLUCIÓN DE CÁMARA Y MEMORIA RAM. CADA CELULAR DEBE PODER PRENDER, APAGAR, TOMAR FOTOS Y GRABAR.
*/
class celular{
    constructor(modelo,color,peso,resPantalla,resCamara,ram){
        this.modelo=modelo;
        this.color = color;
        this.peso = peso;
        this.resPantalla =  resPantalla;
        this.resCamara = resCamara;
        this.ram = ram;
       
    }
    especificaciones(){
        document.write(`El telefono ${this.modelo} tiene una pantalla de ${this.resPantalla} pulgadas, <br> una cámara de ${this.resCamara} megapixel,
        es de color ${this.color}.<br>  Tiene un peso de ${this.peso} gramos y una memoria RAM de ${this.ram} GB.<br> <br> `)
    }
    prender(){
        document.write(`${this.modelo} encendido!! <br>`);
      
    }
    apagar(){
        document.write(`${this.modelo} apagado!! <br>`);
    }
    reiniciar(){
        document.write(`${this.modelo} -reiniciando <br>`);
    }
    tomarFoto(){
        document.write("chik chik <br>");
    }
    grabar(){
        document.write("grabando video <br>");
    }
}

class CelularAltaGama extends celular {
    constructor(modelo,color,peso,resPantalla,resCamara,ram,csl,rf,exCamara){
        super(modelo,color,peso,resPantalla,resCamara,ram);
        this.camaraSuperLenta = csl;
        this.reconocimientoFacial = rf;
        this.camaraExtra = exCamara;
    }
    especificacionesAltaGama(){
        document.write(`El telefono ${this.modelo} tiene una pantalla de ${this.resPantalla} pulgadas, <br> una cámara de ${this.resCamara} megapixel,
        es de color ${this.color}.<br>  Tiene un peso de ${this.peso} gramos y una memoria RAM de ${this.ram} GB.<br>
        Además posee una Cámara super lenta de ${this.camaraSuperLenta} fps, ${this.reconocimientoFacial} y una cámara extra de ${this.camaraExtra} MPx <br> `)
    }
}



const SamsungS8 = new celular("Samsung S8","Azul",230, 6, 16, 3);
const SamsungA51 = new celular("Samsung A51","Gris",250, 6.5, 40, 4);
const MotorolaG8 = new celular("Motorola G8","Negro",230, 6.1, 16, 3);

SamsungS8.especificaciones();
SamsungA51.especificaciones();
MotorolaG8.especificaciones();

SamsungA51.tomarFoto();
MotorolaG8.prender();
SamsungS8.apagar();


const SamsungS10 = new CelularAltaGama("Samsung S10", "verde",200,6.3,20,4,1000,"reconocimiento facial",16);
SamsungS10.especificacionesAltaGama();