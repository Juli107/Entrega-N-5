function jugador(nombrePlayer, equipoPlayer, debut, goles) {
  this.nombre = nombrePlayer;
  this.equipo = equipoPlayer;
  this.debut = debut;
  this.goles = goles;
}

alert("Ingrese datos de tu jugador de fútbol favorito");

let nombrePlayer = prompt("Ingresar nombre y apellido del jugador");
let equipoPlayer = prompt("Ingresar equipo donde juega");
let debut = prompt("Ingresar fecha de su debut");
let goles = prompt("Ingresar total de goles");

let jugadores = new jugador(nombrePlayer, equipoPlayer, debut, goles);
console.log(jugadores);
