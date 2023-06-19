const readlineSync = require("readline-sync");

const numero = readlineSync.question("Ingrese un numero por favor: ");


let meses=[{mes:"enero", dias:31}, {mes:"febrero", dias:28}, {mes:"marzo", dias:31}, 
{mes:"abril", dias:30}, {mes:"mayo", dias:31}, {mes:"junio", dias:30},{mes:"julio", dias:31}, 
{mes:"agosto", dias:31},{mes:"septiembre", dias:30}, {mes:"octubre", dias:31},{mes:"noviembre", dias:30}, 
{mes:"diciembre", dias:31}];

if (numero==1){
    console.log("La cantidad de dias del mes de %s es %i ",meses[0].mes, meses[0].dias);
}else if (numero==2){
    console.log("La cantidad de dias del mes de %s es %i ",meses[1].mes, meses[1].dias);
}else if (numero==3){
    console.log("La cantidad de dias del mes de %s es %i ",meses[2].mes, meses[2].dias);
}else if (numero==4){
    console.log("La cantidad de dias del mes de %s es %i ",meses[3].mes, meses[3].dias);
}else if (numero==5){
    console.log("La cantidad de dias del mes de %s es %i ",meses[4].mes, meses[4].dias);
}else if (numero==6){
    console.log("La cantidad de dias del mes de %s es %i ",meses[5].mes, meses[5].dias);
}else if (numero==7){
    console.log("La cantidad de dias del mes de %s es %i ",meses[6].mes, meses[6].dias);
}else if (numero==8){
    console.log("La cantidad de dias del mes de %s es %i ",meses[7].mes, meses[7].dias);
}else if (numero==9){
    console.log("La cantidad de dias del mes de %s es %i ",meses[8].mes, meses[8].dias);
}else if (numero==10){
    console.log("La cantidad de dias del mes de %s es %i ",meses[9].mes, meses[9].dias);
}else if (numero==11){
    console.log("La cantidad de dias del mes de %s es %i ",meses[10].mes, meses[10].dias);
} else if (numero==12){
    console.log("La cantidad de dias del mes de %s es %i ",meses[11].mes, meses[11].dias);   
}else {
    console.log("El numero ingresado es invalido");
}







