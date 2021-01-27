const contenedor = document.querySelector(".flex-container");
const fragmento = document.createDocumentFragment();

function crearLlave(contador) {
    imagen = '<img src = "llave.png" title = "llave">'
    llave = `<h2 class="llave" >llave: ${contador}</h2>`,
    modelo = `<h3 class = "modelo" >modelo: ${Math.round(Math.random()*10000)}</h3>`,
    precio = `<h3 class ="precio" >precio: <b>$${Math.round(Math.random()*100)+50}</b></h3>`
    return [imagen, llave, modelo, precio]
}

for (let count=1; count <= 20;count++) {
let key = crearLlave(count);
let div = document.createElement("DIV");
div.tabIndex = count;
div.classList.add(`item-${count}`, "flex-item");
div.innerHTML = key[0] +key[1] + key[2] + key[3];
fragmento.appendChild(div);
}

contenedor.appendChild(fragmento);