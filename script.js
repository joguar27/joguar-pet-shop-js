console.log("Hola Jorge en consola");
alert("Hola Jorge en un alert");


//condicionales
let usuario = "joguar";

let ingresoUsuario = prompt("Ingrese su usuario");

if(usuario==ingresoUsuario){
    alert("Usuario correcto");
}else{
    alert("Usuario incorrecto");
}

let password = 1234;

let ingresoClave = Number(prompt("Ingrese su clave"));

if(password==ingresoClave){
    alert("Clave correcta")
}else{
    alert("Clave incorrecta");
}//if(password != ingresoClave);
    //alert("Intente nuevamente");



//variables
//acumulador
let pagos = 0;

let alimentoAperros = 5000;
let alimentoBperros = 8000;
let alimentoCperros = 10000;

let alimentoAgatos = 1000;
let alimentoBgatos = 1500;
let alimentoCgatos = 2000;

pagos = pagos + alimentoCperros;
pagos = pagos + alimentoBgatos;
pagos = pagos + alimentoCgatos;

console.log("A pagar: $ " + pagos);

let acumulador = 0;

let productos = 0; 


//prompt
prompt("Ingrese su pedido");
let pedido = prompt("Ingrese su pedido");
alert("El cliente ingreso: " + pedido);
console.log("El cliente ingresó: " * pedido);
console.log("El cliente ingreso: " + pedido);



//funciones
//let producto = prompt("Ingrese un producto");
//console.log(producto);

function comprar(producto) {

    console.log("El valor es: $ " + producto);
}

comprar(alimentoCperros);
comprar(alimentoBgatos);
comprar(alimentoCgatos);

//let alimentoCperros = 10000;
//let alimentoBgatos = 1500;
//let alimentoCgatos = 2000;


//constantes
const IVA = 21;



//for
//parseo
for(let i=0;i<3;i++){
    productos = Number(prompt("Ingrese valor producto"));
    acumulador = acumulador + productos;
}

console.log("El total a pagar es: $ " + acumulador);


//condicionales
//let pagoTarjeta = true;
//let pagoEfectivo = false;

//if(true){
//    alert("Ingrese datos de su tarjeta");
//}


//switch
//let pago = 000;
let opcion = Number(prompt("elegir opcion de pago: 1-efectivo 2-tarjeta"));

switch(opcion){
    case 1:
        alert("Gracias por su compra");
    break;
    case 2:
        alert("Ingrese datos de su tarjeta");

let opcionTarjeta = Number(prompt("Seleccione tarjeta: 1-Visa 2-Amex 3-Mastercard"));

switch(opcionTarjeta){
    case 1:
        alert("Ingrese datos de su tarjeta Visa");
    break;
    case 2:
        alert("Ingrese datos de su tarjeta American Express");
    break;
    case 3:
        alert("Ingrese datos de su tarjeta Mastercard");        
        }
    break;
    default:
        alert("No seleccionaste nada");    
    break;
}

//objetos

//let alimentoAperros = 5000;
//let alimentoBperros = 8000;
//let alimentoCperros = 10000;

//let alimentoAgatos = 1000;
//let alimentoBgatos = 1500;
//let alimentoCgatos = 2000;

let alimentoPerros;
let alimentoGatos;

const producto1 = {
    nombre: "alimentoPerros",
    peso: 5,
    precio: 5000
}
const producto2 = {
    nombre: "alimentoPerros",
    peso: 10,
    precio: 8000
}
const producto3 = {
    nombre: "alimentoPerros",
    peso: 15,
    precio: 10000
}
const producto4 = {
    nombre: "alimentoGatos",
    peso: 1,
    precio: 1000
}
const producto5 = {
    nombre: "alimentoGatos",
    peso: 3,
    precio: 1500
}
const producto6 = {
    nombre: "alimentoGatos",
    peso: 5,
    precio: 2000
}

console.log(producto1.peso);



//constructor
function Producto(nombre, peso, precio) {
    this.nombre = nombre;
    this.peso = peso;
    this.precio = precio;
}

const producto01 = new Producto("Alimento Perros", 5, 5000);
const producto02 = new Producto("Alimento Perros", 10, 8000);
const producto03 = new Producto("Alimento Perros", 15, 10000);
const producto04 = new Producto("Alimento Gatos", 1, 1000);
const producto05 = new Producto("Alimento Gatos", 3, 1500);
const producto06 = new Producto("Alimento Gatos", 5, 2000);

console.log(producto03);



//clases
//metodos
class Productos{
    constructor(nombre, peso, precio) {
        this.nombre = nombre;
        this.peso = peso;
        this.precio = precio;
        this.mostrar = function(){console.log("producto001 " + this.peso)};
    }   
}
const producto001 = {
    nombre: "Alimento Perros",
    peso: 5,
    precio: 5000
}
const producto002 = {
    nombre: "Alimento Perros",
    peso: 10,
    precio: 8000
}
const producto003 = {
    nombre: "Alimento Perros",
    peso: 15,
    precio: 10000
}
const producto004 = {
    nombre: "Alimento Gatos",
    peso: 1,
    precio: 1000
}
const producto005 = {
    nombre: "Alimento Gatos",
    peso: 3,
    precio: 1500
}
const producto006 = {
    nombre: "Alimento Gatos",
    peso: 5,
    precio: 2000
}

console.log(producto004);
console.log(producto001.peso);
console.log("peso" in producto005);



//operador in
if ("nombre" in producto004) {
    console.log(producto004.nombre);
} else {
    console.log("No hay nombre");
}
    


//operador for...in
for (const propiedad in producto005) {
    console.log(propiedad);
}


//const producto01 = new Producto("Alimento Perros", 5, 5000);
//const producto02 = new Producto("Alimento Perros", 10, 8000);
//const producto03 = new Producto("Alimento Perros", 15, 10000);
//const producto04 = new Producto("Alimento Gatos", 1, 1000);
//const producto05 = new Producto("Alimento Gatos", 3, 1500);
//const producto06 = new Producto("Alimento Gatos", 5, 2000);



//array
//metodos
const producto = ["Alimento Perros Chico", "Alimento Perros Mediano", "Alimento Perros Grande", "Alimento Gatos Chico", "Alimento Gatos Mediano", "Alimento Gatos Grande"];
console.log(producto);
console.log(producto[4]);

for (let i = 0; i < 6; i++) {
    console.log(producto[i]);
}

console.log(producto.length);

producto.push("Vitaminas Perros", "Vitaminas Gatos");
console.log(producto);

for (let i = 0; i < producto.length; i++) {
    console.log([i]);
}

producto.splice(6, 2);
console.log(producto);

console.log(producto.join( " / " ));

const vitaminas = ["Vitaminas Perros", "Vitaminas Gatos"];
const productoTotal = producto.concat(vitaminas);
console.log(productoTotal);

console.log(producto.includes("Alimento Aves"));
if (producto.includes("Alimento Aves")) {
    console.log(producto.indexOf("Alimento Aves"));
}else {
    console.log("Alimento Aves no tenemos en stock!!!");
}


