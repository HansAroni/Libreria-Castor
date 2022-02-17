
//Damos la bienvenida a nuestra página Web, preguntando el nombre de la persona que ingresa
let saludarUsuario = prompt("Por favor ingrese su nombre");
let emailUsuario = prompt("Por favor ingrese su correo electrónico");
alert("Bienvenido/a a nuestra Libreria, " + saludarUsuario);

//Registramos el nombre en un console.log para ver quién accedió
function registroUsuario(nombre, email) {
    console.log("Ingresó: " + nombre + " " + ", y su email es: " + email);
}
registroUsuario(saludarUsuario, emailUsuario);

//Definimos los productos
let producto1 = "Regla";
let stockProducto1 = 10;
let precioProducto1 = 500;

let producto2 = "Cartuchera";
let stockProducto2 = 15;
let precioProducto2 = 600;

let producto3 = "Cuaderno";
let stockProducto3 = 30;
let precioProducto3 = 450;

//Definimos variables
let cantidadCompra;
let stockRestante1;
let stockRestante2;
let stockRestante3;

//Preguntamos al usuario cuantos productos diferentes quiere comprar
let cantidadProductosDistintos = parseInt(prompt("Por favor, ingrese la cantidad de productos distintos a adquirir"));

//Ciclo para repetir tantas veces como el usuario indique productos distintos a adquirir
for(let i = 0; i < cantidadProductosDistintos; i++){

    //Preguntamos al usuario el producto que quiere
    let productoElegido = prompt("Por favor, ingrese el producto que está buscando");

    //Si contamos con el producto, luego pedimos cantidad de compra y devuelve el monto total
    if (productoElegido == producto1){
        let cantidadCompra = parseInt(prompt("Por favor, también ingrese la cantidad de compra"));
        if (cantidadCompra <= stockProducto1) {
            stockRestante1 = stockProducto1 - cantidadCompra;
            alert("El total de su compra es de $" + cantidadCompra * precioProducto1);
            console.log("Stock Restante Reglas: " + stockRestante1);
        }
    }
    
    else if (productoElegido == producto2){
        let cantidadCompra = prompt("Por favor, también ingrese la cantidad de compra");
        if (cantidadCompra <= stockProducto2) {
            stockRestante2 = stockProducto2 - cantidadCompra;
            alert("El total de su compra es de $" + cantidadCompra * precioProducto2);
            console.log("Stock restante Cartucheras: " + stockRestante2);
        }
    }
    
    else if (productoElegido == producto3){
        let cantidadCompra = prompt("Por favor, también ingrese la cantidad de compra");
        if (cantidadCompra <= stockProducto3) {
            stockRestante3 = stockProducto3 - cantidadCompra;
            alert("El total de su compra es de $" + cantidadCompra * precioProducto3);
            console.log("Stock restante Cuadernos: " + stockRestante3);
        }
    }
    
    //Si no contamos con el producto o stock disponible, mostramos este mensaje al usuario indicando qué productos puede elegir
    else{
        alert("No contamos con ese producto o no tenemos stock disponible. Por favor elija entre Regla, Cartuchera o Cuaderno");
    }
}







