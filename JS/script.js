let saludarUsuario = prompt("Por favor ingrese su nombre");
let emailUsuario = prompt("Por favor ingrese su correo electrónico");
alert("Bienvenido/a a nuestra Libreria, " + saludarUsuario);

function registroUsuario(nombre, email) {
    console.log("Ingresó: " + nombre + " " + ", y su email es: " + email);
}
registroUsuario(saludarUsuario, emailUsuario);

function Producto(nombre, stock, precio){
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
}
//PRODUCTOS
const prod1 = new Producto ("Regla", 10, 500);
const prod2 = new Producto ("Cartuchera", 15, 600);
const prod3 = new Producto ("Cuaderno", 30, 450);

const listaProd = [prod1, prod2, prod3]
const allProducts = [listaProd[0].nombre, listaProd[1].nombre, listaProd[2].nombre]

//Accesorios
const accesorios = [
    {nombre: "Lapiz", precio: 150},
    {nombre: "Lapicera", precio: 200},
    {nombre: "Sacapuntas", precio: 300},
]

//Repuestos
const repuestos = [
    {id: 1, nombre: "Hojas de repuesto", precio: 100},
    {id: 2, nombre: "Marcadores", precio: 100},
    {id: 3, nombre: "Folios", precio: 20},
    {id: 4, nombre: "Clips", precio: 40},
]

// Funciones para ahorrar codigo
function stockSuficiente(cantidad, precio){
    alert("El total de su compra es de $" + cantidad * precio);
}
function stockQueda(producto, stock){
    console.log("Stock Restante " + producto + ": " + stock);
}

let cantidadProductosDistintos = parseInt(prompt("Por favor, ingrese la cantidad de productos distintos a adquirir"));

//Ciclo 
for (let i = 0; i < cantidadProductosDistintos; i++){
    
    let productoElegido = prompt("Por favor, ingrese el producto que está buscando");
    let cantidadCompra = parseInt(prompt("Por favor, también ingrese la cantidad de compra"));
    
    
    if ((productoElegido === listaProd[0].nombre) && (cantidadCompra <= listaProd[0].stock)){
        stockSuficiente(cantidadCompra, listaProd[0].precio); 
        let stockRestante1 = listaProd[0].stock - cantidadCompra;
        stockQueda(listaProd[0].nombre, stockRestante1);
    }
    
    else if ((productoElegido === listaProd[1].nombre) && (cantidadCompra <= listaProd[1].stock)){
        stockSuficiente(cantidadCompra, listaProd[1].precio); 
        let stockRestante2 = listaProd[1].stock - cantidadCompra;
        stockQueda(listaProd[1].nombre, stockRestante2);
    }
    
    else if ((productoElegido === listaProd[2].nombre) && (cantidadCompra <= listaProd[2].stock)){
        stockSuficiente(cantidadCompra, listaProd[2].precio); 
        let stockRestante3 = listaProd[2].stock - cantidadCompra;
        stockQueda(listaProd[2].nombre, stockRestante3);
    }

    else{
        alert("No contamos con ese producto o no tenemos stock disponible. Por favor elija entre Regla, Cartuchera o Cuaderno");
    }
}

//Metodo para verificar por alert si tenemos determinado producto en nuestro array
let chequearProducto = prompt("Verifique si tenemos el producto")
alert(allProducts.includes(chequearProducto))

//Encontrar si tenemos el accesorio con find
const busqueda = accesorios.find((el) => el.nombre === "Lapiz")
console.log(busqueda)

//Encontrar si tenemos el accesorio con filter
const filtrar = accesorios.filter((el) => el.precio <= 200)
console.log(filtrar)

//DOM
let h1 = document.getElementById("nombreLibreria");
console.log(h1.innerHTML);

let marca = document.getElementsByClassName("marca");
console.log(marca[0].innerHTML);
console.log(marca[1].innerHTML);
console.log(marca[2].innerHTML);

let subtitulo = document.getElementById("subtitulo");
console.log(subtitulo.innerText);
subtitulo.innerText = subtitulo.innerText + " - Que estabas buscando hoy, " + saludarUsuario + "?";

let spareparts = document.getElementById("spareparts");
spareparts.innerText = "REPUESTOS CON STOCK";

for (const repuesto of repuestos) {
let contenedor = document.createElement("div");
contenedor.innerHTML = `<p> Nro ID: ${repuesto.id}</p>
                            <p> Nombre Repuesto: ${repuesto.nombre}</p>
                            <p> Costo: $ ${repuesto.precio}</p>
                            <br>`;
document.body.appendChild(contenedor);
}