let theme = document.querySelector('.theme')
let menu = document.querySelector('.menu')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')

theme.onclick = function(){
    body.classList.toggle('dark')
    theme.classList.toggle('active')
}

menu.onclick = function(){
    menu.classList.toggle('active')
    navigation.classList.toggle('active')
}

//-------------------------------------------------------------------------------------------------------------------------------------------------

/* let nombre = prompt("¿Cómo te llamas?");

alert(`Hola ${nombre}, bienvenido a ZevA Technology`);

let total = 0;
let pagoCuenta = 0;
let productosComprados = [];
let cantidad = 0;

let producto = [
    {
        id: 1,
        nombre: "procesador",
        precio: 40000,
        stock: "4"
    },
    {
        id: 2,
        nombre: "RAM",
        precio: 9000,
        stock: "9"
    },
    {
        id: 3,
        nombre: "placa de video",
        precio: 120000,
        stock: "2"
    }

]

//Funcion para que el cliente pueda pedir su producto.
function pedirProducto() {

    let product = prompt("¿Qué producto deseas 1, 2 o 3 (1- procesador / 2- RAM / 3- placa de video) ?");

    if (product <= 3 && product >= 1) {

        cantidad = parseInt(prompt("¿Cuantos vas a llevar?"))

        if (isNaN(cantidad)) {
            alert('No tenemos esa cantidad de cerveza')
            return clienteSale()
        }

        let pagar = producto.find(prod => prod.id == product).precio * cantidad;

        let productoSelect = producto.find(prod => prod.id == product).nombre;

        if (productosComprados.some(prod => prod.nombre == productoSelect)) {
            productosComprados.find(prod => prod.id == product).qty += cantidad

        } else {
            productosComprados.push(producto.find(prod => prod.id == product))
            productosComprados.find(prod => prod.id == product).qty = cantidad
        }

        total += pagar;
        alert(`Compraste ${cantidad} ${productoSelect} el precio es de ${pagar} y tenes un acumulado de ${total}`);
        clienteSale()
    } else {
        alert("No tenemos ese producto");
        clienteSale()
    }
}

function clienteSale() {
    let salir = prompt("¿Quieres irte de ZevA Technology? (s/n)");
    if (salir == "s") {
        pagarCuenta()
    } else {
        pedirProducto();
    }
}

function pagarCuenta() {
    alert(`Tu total es de ${total}`);

    do {
        pagoCuenta = prompt("¿Cuánto vas a pagar?");
        if (pagoCuenta >= total) {
            alert(`Gracias por comprar en ZevA Technology, tu cambio es de ${pagoCuenta - total}, Saludos ${nombre}`);
        } else {
            alert("No tienes suficiente dinero");
        }
    } while (pagoCuenta < total);
}

pedirProducto() */

