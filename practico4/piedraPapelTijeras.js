const readlineSync = require("readline-sync");
const PIEDRA="piedra";
const PAPEL="papel";
const TIJERAS="tijeras";
const GANA_COMPU="Gana la computadora";
const GANA_USUARIO="Gana el usuario";
function obtenerJugadaComputadora(){//PARTE 2
    let jugadaComputadora= Math.floor(Math.random()*3);
    if (jugadaComputadora===0){
        jugadaComputadora=PIEDRA;
    }
    else if (jugadaComputadora===1){
        jugadaComputadora=PAPEL;
    }
    else{
        jugadaComputadora=TIJERAS;
    }

    return jugadaComputadora;
}
jugadaComputadora=obtenerJugadaComputadora();

//PARTE 3

function obtenerJugadaUsuario() {
  let jugada = readlineSync.question("Elige tu jugada (piedra, papel o tijeras):");
  jugadaUsuario = jugada.toLowerCase();
  while (jugadaUsuario !== PIEDRA && jugadaUsuario !== PAPEL && jugadaUsuario !== TIJERAS) {
    jugada = readlineSync.question("Jugada invalida. Elige piedra, papel o tijeras:");
    jugadaUsuario = jugada.toLowerCase();
  }
  return jugadaUsuario;
}


//PARTE4

function determinarGanador(jugadaComputadora, jugadaUsuario) {
    let resultado;
    if (
      (jugadaComputadora === PAPEL && jugadaUsuario === PIEDRA) ||
      (jugadaComputadora === TIJERAS && jugadaUsuario === PAPEL) ||
      (jugadaComputadora === PIEDRA && jugadaUsuario === TIJERAS)
    ) {
      return resultado=GANA_COMPU;
    } else if (
      (jugadaUsuario === PIEDRA && jugadaComputadora === TIJERAS) ||
      (jugadaUsuario === TIJERAS && jugadaComputadora === PAPEL) ||
      (jugadaUsuario === PAPEL && jugadaComputadora === PIEDRA)
    ) {
      return resultado=GANA_USUARIO;
    } else {
      return "Empate";
    }
  }

  
  function jugarPiedraPapelTijeras(){
     let jugadaComputadora= obtenerJugadaComputadora();
     let jugadaUsuario=obtenerJugadaUsuario();
      let resultado=determinarGanador(jugadaComputadora, jugadaUsuario);

      console.log("La computadora eligio: "+ jugadaComputadora);
      console.log("El usuario eligio: "+ jugadaUsuario);
      console.log("El resultado del juego fue: "+ resultado);
 }
 jugarPiedraPapelTijeras();


  

  


