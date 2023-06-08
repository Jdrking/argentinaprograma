let cita="Tres tristes tigres comen trigo en un trigal";
let substring="tigres comen trigo";
let tamañoDeCita=cita.length;
let indice=cita.indexOf(substring);
console.log("El tamaño de la cita es: "+tamañoDeCita);
console.log("El indice del substring es: "+indice);
let citaRevisada=cita.substring(0, 31);
console.log(citaRevisada);
