//!Objetos Literales
/*
let alumnoCoder = {
  nombre: "Juan",
  edad: 28,
  nota: 10,
};

let alumnoCoder2 = {
  nomrbe: "Laura",
  edad: 26,
  nota: 9,
};

console.log(alumnoCoder);
console.log(alumnoCoder2);

console.log(alumnoCoder.nombre);
console.log(alumnoCoder.edad);
*/

//!Objetos con Constructor

/*function peliculas(nombre, director, duracion, fecha) {
  this.nombre = nombre;
  this.director = director;
  this.duracion = duracion;
  this.fecha = fecha;
}

let titanic = new peliculas("Titanic", "George", 600, "03/07/1998");

console.log("El nombre de la pelicula es : " + titanic.nombre);
console.log("El director fue: " + titanic.director);

alert("Ingrese datos de la pelicula");

let nombrePeli = prompt("Ingresar nombre de la pelicula");
let directorPeli = prompt("Ingresar director  de la pelicula");
let duracion = prompt("Ingresar duracion de la pelicula");
let fecha = prompt("Ingresar fecha de la pelicula");

let pelicula = new peliculas(nombrePeli, directorPeli, duracion, fecha);
console.log(pelicula); */

//!Ejemplo de gatitos
/*function gatito(nombre) {
  this.nombre = nombre;

  this.saludar = function () {
    alert(this.nombre + " Miauuu");
  };
}

let bolaDeNieve = new gatito("Bola de nieve");
bolaDeNieve.saludar();

let donGato = new gatito("Don Gato");

donGato.saludar();

let gatitoUsuario = prompt("Ingresar nombre de gatito");

let nuevoGato = new gatito(gatitoUsuario); */

/*function timbre(sonido) {
  this.sonido = sonido;

  this.ruido = function () {
    alert(this.sonido + " DING DONG ");
  };
}
let casa1 = new timbre("casa1");
casa1.ruido();

let casa2 = new timbre("casa2");
casa2.ruido(); */

//!Ejemplo con videojuegos
/*
class videoJuegos {
  constructor(nombre, creador, precio, clasificacion, stock) {
    this.nombre = nombre;
    this.creador = creador;
    this.precio = precio;
    this.clasificacion = clasificacion;
    this.stock = stock;
  }

  precioFinal() {
    let iva = this.precio * 0.21;
    return this.precio + iva;
  }
  updateStock() {
    this.stock = this.stock - 1;
  }
}

let gtaV = new videoJuegos("GTA V", "Rockstar", 2000, "+16", 20);

console.log("El precio final es : " + gtaV.precioFinal());

if (gtaV.stock != 0) {
  console.log("Gracias por su compra " + gtaV.nombre);

  gtaV.updateStock();
  console.log();
} */

//*Arrays

