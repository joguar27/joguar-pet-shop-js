// console.log("Hola Jorge en consola");
// alert("Hola Jorge en un alert");

//condicionales
// let usuario = "joguar";

// let ingresoUsuario = prompt("Ingrese su usuario");

// if (usuario == ingresoUsuario) {
//   alert("Usuario correcto");
// } else {
//   alert("Usuario incorrecto");
// }

// let password = 1234;

// let ingresoClave = Number(prompt("Ingrese su clave"));

// if (password == ingresoClave) {
//   alert("Clave correcta");
// } else {
//   alert("Clave incorrecta");
// } //if(password != ingresoClave);
//alert("Intente nuevamente");

//variables
//acumulador
// let pagos = 0;

// let alimentoAperros = 5000;
// let alimentoBperros = 8000;
// let alimentoCperros = 10000;

// let alimentoAgatos = 1000;
// let alimentoBgatos = 1500;
// let alimentoCgatos = 2000;

// pagos = pagos + alimentoCperros;
// pagos = pagos + alimentoBgatos;
// pagos = pagos + alimentoCgatos;

// console.log("A pagar: $ " + pagos);

// let acumulador = 0;

// let productos = 0;

//prompt
// prompt("Ingrese su pedido");
// let pedido = prompt("Ingrese su pedido");
// alert("El cliente ingreso: " + pedido);
//console.log("El cliente ingresó: " * pedido);
//

//funciones
//let producto = prompt("Ingrese un producto");
//console.log(producto);

// function comprar(producto) {
//   console.log("El valor es: $ " + producto);
// }

// comprar(alimentoCperros);
// comprar(alimentoBgatos);
// comprar(alimentoCgatos);

//let alimentoCperros = 10000;
//let alimentoBgatos = 1500;
//let alimentoCgatos = 2000;

//constantes
//const IVA = 21;

//for
//parseo
// for (let i = 0; i < 3; i++) {
//   productos = Number(prompt("Ingrese valor producto"));
//   acumulador = acumulador + productos;
// }

// console.log("El total a pagar es: $ " + acumulador);

//condicionales
//let pagoTarjeta = true;
//let pagoEfectivo = false;

//if(true){
//    alert("Ingrese datos de su tarjeta");
//}

//switch
//let pago = 000;
// let opcion = Number(prompt("elegir opcion de pago: 1-efectivo 2-tarjeta"));

// switch (opcion) {
//   case 1:
//     alert("Gracias por su compra");
//     break;
//   case 2:
//     alert("Ingrese datos de su tarjeta");

//     let opcionTarjeta = Number(
//       prompt("Seleccione tarjeta: 1-Visa 2-Amex 3-Mastercard")
//     );

//     switch (opcionTarjeta) {
//       case 1:
//         alert("Ingrese datos de su tarjeta Visa");
//         break;
//       case 2:
//         alert("Ingrese datos de su tarjeta American Express");
//         break;
//       case 3:
//         alert("Ingrese datos de su tarjeta Mastercard");
//     }
//     break;
//   default:
//     alert("No seleccionaste nada");
//     break;
// }

//objetos

//let alimentoAperros = 5000;
//let alimentoBperros = 8000;
//let alimentoCperros = 10000;

//let alimentoAgatos = 1000;
//let alimentoBgatos = 1500;
//let alimentoCgatos = 2000;

// let alimentoPerros;
// let alimentoGatos;

// const producto1 = {
//   nombre: "alimentoPerros",
//   peso: 5,
//   precio: 5000,
// };
// const producto2 = {
//   nombre: "alimentoPerros",
//   peso: 10,
//   precio: 8000,
// };
// const producto3 = {
//   nombre: "alimentoPerros",
//   peso: 15,
//   precio: 10000,
// };
// const producto4 = {
//   nombre: "alimentoGatos",
//   peso: 1,
//   precio: 1000,
// };
// const producto5 = {
//   nombre: "alimentoGatos",
//   peso: 3,
//   precio: 1500,
// };
// const producto6 = {
//   nombre: "alimentoGatos",
//   peso: 5,
//   precio: 2000,
// };

//console.log(producto1.peso);

//constructor
// function Producto(nombre, peso, precio) {
//   this.nombre = nombre;
//   this.peso = peso;
//   this.precio = precio;
// }

// const producto01 = new Producto("Alimento Perros", 5, 5000);
// const producto02 = new Producto("Alimento Perros", 10, 8000);
// const producto03 = new Producto("Alimento Perros", 15, 10000);
// const producto04 = new Producto("Alimento Gatos", 1, 1000);
// const producto05 = new Producto("Alimento Gatos", 3, 1500);
// const producto06 = new Producto("Alimento Gatos", 5, 2000);

// console.log(producto03);

//clases
//metodos
// class Productos {
//   constructor(nombre, peso, precio) {
//     this.nombre = nombre;
//     this.peso = peso;
//     this.precio = precio;
//     this.mostrar = function () {
//       console.log("producto001 " + this.peso);
//     };
//   }
// }
// const producto001 = {
//   nombre: "Alimento Perros",
//   peso: 5,
//   precio: 5000,
// };
// const producto002 = {
//   nombre: "Alimento Perros",
//   peso: 10,
//   precio: 8000,
// };
// const producto003 = {
//   nombre: "Alimento Perros",
//   peso: 15,
//   precio: 10000,
// };
// const producto004 = {
//   nombre: "Alimento Gatos",
//   peso: 1,
//   precio: 1000,
// };
// const producto005 = {
//   nombre: "Alimento Gatos",
//   peso: 3,
//   precio: 1500,
// };
// const producto006 = {
//   nombre: "Alimento Gatos",
//   peso: 5,
//   precio: 2000,
// };

// console.log(producto004);
// console.log(producto001.peso);
// console.log("peso" in producto005);

//operador in
// if ("nombre" in producto004) {
//   console.log(producto004.nombre);
// } else {
//   console.log("No hay nombre");
// }

//operador for...in
// for (const propiedad in producto005) {
//   console.log(propiedad);
// }

//const producto01 = new Producto("Alimento Perros", 5, 5000);
//const producto02 = new Producto("Alimento Perros", 10, 8000);
//const producto03 = new Producto("Alimento Perros", 15, 10000);
//const producto04 = new Producto("Alimento Gatos", 1, 1000);
//const producto05 = new Producto("Alimento Gatos", 3, 1500);
//const producto06 = new Producto("Alimento Gatos", 5, 2000);

//array
//metodos
// const producto = [
//   "Alimento Perros Chico",
//   "Alimento Perros Mediano",
//   "Alimento Perros Grande",
//   "Alimento Gatos Chico",
//   "Alimento Gatos Mediano",
//   "Alimento Gatos Grande",
// ];

// console.log(producto);
// console.log(producto[4]);

// for (let i = 0; i < 6; i++) {
//   console.log(producto[i]);
// }

// console.log(producto.length);

// producto.push("Vitaminas Perros", "Vitaminas Gatos");
// console.log(producto);

// for (let i = 0; i < producto.length; i++) {
//   console.log([i]);
// }

// producto.splice(6, 2);
// console.log(producto);

// console.log(producto.join(" / "));

// const vitaminas = ["Vitaminas Perros", "Vitaminas Gatos"];
// const productoTotal = producto.concat(vitaminas);
// console.log(productoTotal);

// console.log(producto.includes("Alimento Aves"));
// if (producto.includes("Alimento Aves")) {
//   console.log(producto.indexOf("Alimento Aves"));
// } else {
//   console.log("Alimento Aves no tenemos en stock!!!");
// }

//let alimentoAperros = 5000;
//let alimentoBperros = 8000;
//let alimentoCperros = 10000;

//let alimentoAgatos = 1000;
//let alimentoBgatos = 1500;
//let alimentoCgatos = 2000;

// let precios = [5000, 8000, 10000, 1000, 1500, 2000];

// console.log(precios.join(" / "));

// let sumaArray = precios[2] + precios[5];
// console.log(sumaArray);

// console.log(precios.length);

//let compraCliente = [];
// let compraCliente = prompt("Ingrese su compra");

// for (let i = 0; i < compraCliente; i++) {}

// console.log(compraCliente);

//funcion con retorno: ejemplo para sumar el valor total de determinados productos.
// function asignarOperacion(op) {
//   if (op == "sumar") {
//     return (a, b, c, d) => a + b + c + d;
//   } else if (op == "restar") {
//     return (a, b) => a - b;
//   }
// }

// let suma = asignarOperacion("sumar");

// console.log(suma(5000, 10000, 1000, 2000));

//funcion por parametro: para mostrar el valor de cada producto en stock.
// function porCadaUno(arr, fn) {
//   for (const el of arr) {
//     fn(el);
//   }
// }
// let precio = [5000, 8000, 10000, 1000, 1500, 2000];
// porCadaUno(precio, console.log);

//funcion por parametro: ejemplo para saber el valor total de mi stock.
//

//metodo find: ejemplo para saber si hay un producto y su valor.
// const Products = [
//   { nombre: "Alimento Perros Chico", precio: 5000 },
//   { nombre: "Alimento Perros Mediano", precio: 8000 },
//   { nombre: "Alimento Perros Grande", precio: 10000 },
//   { nombre: "Alimento Gatos Chico", precio: 1000 },
//   { nombre: "Alimento Gatos Mediano", precio: 1500 },
//   { nombre: "Alimento Gatos Grande", precio: 2000 },
// ];
// const Resultado = Products.find(
//   (el) => el.nombre === "Alimento Perros Mediano"
// );
// console.log(Resultado);

//filter: ejemplo para buscar productos por palabra clave (por ej: Gatos)
// const Product = [
//   { nombre: "Alimento Perros Chico", precio: 5000 },
//   { nombre: "Alimento Perros Mediano", precio: 8000 },
//   { nombre: "Alimento Perros Grande", precio: 10000 },
//   { nombre: "Alimento Gatos Chico", precio: 1000 },
//   { nombre: "Alimento Gatos Mediano", precio: 1500 },
//   { nombre: "Alimento Gatos Grande", precio: 2000 },
// ];
// const Result = Products.filter((el) => el.nombre.includes("Gatos"));
// console.log(Result);

//filter: ejemplo para buscar productos por precio (por ej: <= 8000)
// const product = [
//   { nombre: "Alimento Perros Chico", precio: 5000 },
//   { nombre: "Alimento Perros Mediano", precio: 8000 },
//   { nombre: "Alimento Perros Grande", precio: 10000 },
//   { nombre: "Alimento Gatos Chico", precio: 1000 },
//   { nombre: "Alimento Gatos Mediano", precio: 1500 },
//   { nombre: "Alimento Gatos Grande", precio: 2000 },
// ];
// const result = product.filter((el) => el.precio <= 8000);
// console.log(result);

//reduce: ejemplo para mostrar el total de mi compra.
// const miCompra = [
//   { nombre: "Alimento Perros Grande", precio: 10000 },
//   { nombre: "Alimento Gatos Mediano", precio: 1500 },
//   { nombre: "Alimento Gatos Grande", precio: 2000 },
// ];
//const price = [10000, 1500, 2000];
// const totalCompra = miCompra.reduce(
//   (acumulador, elemento) => acumulador + elemento.precio,
//   0
// );
// console.log(totalCompra);

//sort: ejemplo si quiero ordenar los precios de mayor a menor.
// let price = [5000, 8000, 10000, 1000, 1500, 2000];
// price.sort((a, b) => b - a);
// console.log(price);

//math: para sacar el valor minimo o maximo dentro de los precios.
// console.log(Math.min(5000, 8000, 10000, 1000, 1500, 2000));
// console.log(Math.max(5000, 8000, 10000, 1000, 1500, 2000));

//DOM (Modelo de Objetos del Documento
//console.log(document.getElementById("aAp1"));        //html:66
//console.log(document.getElementById("card1"));       //html:71
//console.log(document.getElementById("cardtext1"));   //html:72
//console.log(document.getElementById("boton1"));      //html:76

//capturo un elemento y lo guardo en una variable (para reutilizar)
// let div = document.getElementById("aAp1");
// console.log(div); //me muestra el nodo completo en consola

//metodo innerHTML
//console.log(div.innerHTML); //me muestra el contenido del nodo (estructura del HTML)

//metodo ClassName (me muestra la estructura de la variable en un array)
// let containers = document.getElementsByClassName("container");
// console.log(container);

//si llamo a cada indice del array y le agrego .innerHTML me muestra tambien la estructura HTML
// console.log(container[0].innerHTML);
// console.log(container[1].innerHTML);

//para recorrer el array
// for (let i = 0; i < container.length; i++) {
//   console.log([i]);
// }

//metodo TagName   //me muestra todos los div de ese contenedor
// let containers = document.getElementsByTagName("div");
// for (let div of containers) {
//   console.log(div.innerHTML);
// }

//metodo InnerText   //me muestra en consola solo los textos y me permite modificarlos
// let aAp1 = document.getElementById("aAp1");
// console.log(aAp1.innerText);

//me lo muestra modificado en el navegador
//aAp1.innerText = "saludos a los perros";
//console.log(aAp1.innerText);

//metodo InnerHTML   //me permite cambiar el codigo HTML interno agregando etiquetas
// let aBp2 = document.getElementById("aBp2");
// aBp2.innerHTML = "<h2>Hola Mascotas!!!</h2>"

//metodo ClassName   //me permite agregar una clase a un elemento seleccionado
//let cardtext1 = document.getElementById("cardtext1");
//cardtext1.className = "cardtext1";

//createElement //.append    //para crear y agregar un elemento al body por ej.
//let parrafo = document.createElement("p");
//parrafo.innerHTML = "<h2>Hola clientes y mascotas!!!</h2>";
//document.body.append(parrafo);

//.remove    //para borrar el elemento seleccionado
// let parrafo = document.getElementById("parrafo3");
// parrafo.remove();

//.value    //para mostrar el valor de un elemento

//.appendChild   //para crear por ej un carrito de compras    //html:65
// let productX = document.getElementById("productosA");
// let productosA = ["alimentoAperros", "alimentoBperros", "alimentoCperros", "alimentoAgatos", "alimentoBgatos", "alimentoCgatos"];
// for (const producto of productosA){
//     let li = document.createElement("li");
//     li.innerHTML=producto;
//     productX.appendChild(li);
// }

//const producto01 = new Producto("Alimento Perros", 5, 5000);
//const producto02 = new Producto("Alimento Perros", 10, 8000);
//const producto03 = new Producto("Alimento Perros", 15, 10000);
//const producto04 = new Producto("Alimento Gatos", 1, 1000);
//const producto05 = new Producto("Alimento Gatos", 3, 1500);
//const producto06 = new Producto("Alimento Gatos", 5, 2000);

//template string + innerHTML    //para crear elementos desde templates strings
// const productosM = [{id:001, nombre: "alimentoAperros", peso: 5, precio: 5000},
//                     {id:002, nombre: "alimentoBperros", peso: 10, precio: 8000},
//                     {id:003, nombre: "alimentoCperros", peso: 15, precio: 10000},
//                     {id:004, nombre: "alimentoAgatos", peso: 1, precio: 1000},
//                     {id:005, nombre: "alimentoBgatos", peso: 3, precio: 1500},
//                     {id:006, nombre: "alimentoCgatos", peso: 55, precio: 2000},];

// for (const producto of productosM){
//     let contenedor = document.createElement("div");
//     contenedor.innerHTML = `<h3>ID: ${producto.id}</h3>
//                             <p>Producto: ${producto.nombre}</p>
//                             <p>Peso: ${producto.peso}</p>
//                             <P>Precio: $ ${producto.precio}</P>`;
// document.body.appendChild(contenedor);
// }

//metodo addEventListener()
// let boton = document.getElementById("btnPrincipal");
// boton.addEventListener("click", respuestaClick);
// function respuestaClick() {
//   console.log("respuesta click");
// }

// let boton2 = document.getElementById("btnPrincipal2");
// //console.log(btnPrincipal2);
// boton2.addEventListener("click", respuestaClick2);
// function respuestaClick2(){
//     console.log("este es el segundo click");
//     //alert("este es el click 2");
// }

//eventos
// let usser = document.getElementById("usser");
// let contraseña = document.getElementById("pass");

// console.log(usser);
// console.log(contraseña);

// let botonCaptura = document.getElementById("btnMainDatos");
// console.log(botonCaptura);

// botonCaptura.addEventListener("click", mostrarDatos);

// function mostrarDatos() {
//   console.log("funciona");

//   let usserCaptura = usser.value;
//   console.log(usserCaptura);
//   let valores = document.createElement("p");
//   valores.innerHTML = "usuarios " + usserCaptura;
//   document.body.appendChild(valores);

//   let contenedor1 = document.getElementById("mostrarDatos");

//   console.log(contenedor1);

//   contenedor1.appendChild(valores);
// }

//mouseMove
// let botonMove = document.getElementById("move");
// botonMove.addEventListener("mousemove", mover);
// function mover(){
//     console.log("mover");
// }

//mouseover
// let contarVirus = 0;
// let tituloBienvenida = document.getElementById("titulo");
// tituloBienvenida.addEventListener("mouseover", estoyArriba);
// function estoyArriba(){
//     console.log("arriba de Bienvenida");
//     alert("Hola soy un virus");
//     confirm("Quiere instalar un antivirus?");
//     contarVirus++
// }

// function mostrarDatos(){
//     console.log("funciona");

//     let usserCaptura = usser.value;
//     console.log(usserCaptura);
// }

//armado 3 entrega
//creando array de productos

// let carrito = [];

// const productosM = [
//   { id: 001, nombre: "alimentoAperros", peso: 5, precio: 5000 },
//   { id: 002, nombre: "alimentoBperros", peso: 10, precio: 8000 },
//   { id: 003, nombre: "alimentoCperros", peso: 15, precio: 10000 },
//   { id: 004, nombre: "alimentoAgatos", peso: 1, precio: 1000 },
//   { id: 005, nombre: "alimentoBgatos", peso: 3, precio: 1500 },
//   { id: 006, nombre: "alimentoCgatos", peso: 5, precio: 2000 },
// ];

// for (const producto of productosM) {
//   let contenedor = document.createElement("div");
//   contenedor.innerHTML = `<h3>ID: ${producto.id}</h3>
//                             <p>Producto: ${producto.nombre}</p>
//                             <p>Peso: ${producto.peso}</p>
//                             <P>Precio: $ ${producto.precio}</P>`;
//   document.body.appendChild(contenedor);
// }
//   boton1.addEventListener("click", () => {
//     console.log("boton agregar al carrito");
//   });
//   boton2.addEventListener("click", () => {
//     console.log("boton2");
//   });
//   boton3.addEventListener("click", () => {
//     console.log("boton3");
//   });
//   boton4.addEventListener("click", () => {
//     console.log("boton4");
//   });
//   boton5.addEventListener("click", () => {
//     console.log("boton5");
//   });
//   boton6.addEventListener("click", () => {
//     console.log("boton6");
//   });
//   carrito.push({
//     id: producto.id,
//     nombre: producto.nombre,
//     producto: producto.precio,
//   });
//   console.log("carrito");
// }

// let verCarrito = document.getElementById("carrito")

// verCarrito.addEventListener("click",()=>{
//   console.log("veo carrito") //no funciona
//   const modalHeader = document.createElement("div")
//   modalHeader.innerHTML = `
//   <h1>Carrito</h1>
//   `;
// verCarrito.append(modalHeader)
// carrito.forEach((producto)=>{
//   let carritoContent = document.createElement("div")
//   carritoContent.innerHTML = `
//   <h3>${producto.nombre}</h3>
//   <p>${producto.precio}</p>
//   `;
// verCarrito.append(carritoContent)

// )

//tercera entrega
//let carrito = [];

const productos = [
  { id: 001, nombre: "alimentoAperros", peso: 5, precio: 5000 },
  { id: 002, nombre: "alimentoBperros", peso: 10, precio: 8000 },
  //{ id: 003, nombre: "alimentoCperros", peso: 15, precio: 10000 },
  { id: 004, nombre: "alimentoAgatos", peso: 1, precio: 1000 },
  { id: 005, nombre: "alimentoBgatos", peso: 3, precio: 1500 },
  //{ id: 006, nombre: "alimentoCgatos", peso: 5, precio: 2000 },
];

let shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("btn-carrito");
console.log("verCarrito");
const contenidoCarrito = document.getElementById("contentCarrito");
const generalCarrito = document.getElementById("generalCarrito");
const spanTotal = document.getElementById("total");

console.log("shopContent");

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.style.width = "18rem";
  content.innerHTML = `
  <img src="${product.img}"/>
  <h3>${product.nombre}</h3>
  <p>${product.precio}</p>
  `;

  let comprar = document.createElement("button");
  comprar.innerHTML = "comprar";
  comprar.className = "btn btn-primary";
  content.append(comprar);

  shopContent.append(content);

  comprar.addEventListener("click", () => {
    carrito.push({
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      img: product.img,
    });
    console.log(carrito);
  });
});

let carrito = [];

function actualizarCarrito() {
  contenidoCarrito.innerHTML = "";
  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "card";
    carritoContent.style.width = "50%";

    carritoContent.innerHTML = `
    <img src="${product.img}"/>
    <h3>${product.nombre}</h3>
    <p>${product.precio}</p>
    <button class="delete-producto btn btn-danger">Eliminar</button>
    `;
    contenidoCarrito.append(carritoContent);

    let eliminar = carritoContent.querySelector(".delete-producto");
    console.log(eliminar);

    eliminar.addEventListener("click", () => {
      eliminarProducto(product.id);
    });
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  console.log(total);
  console.log(carrito);
  spanTotal.innerText = total;
}

verCarrito.addEventListener("click", actualizarCarrito);

const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);
  console.log(foundId);
  carrito = carrito.filter((carritoId) => {
    return carritoId != foundId;
  });
  actualizarCarrito();
};

// function probando(){
//   console.log("probando")
// }
