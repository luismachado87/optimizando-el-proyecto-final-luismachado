
const parrafo = document.querySelector("p");
const boton = document.querySelector("button");

let contador = 0;

boton.addEventListener("click", () => {
    console.log("click");
    contador++;
    parrafo.textContent = contador; 
});

//condiones para prestamo

//let prestamo;

//if (edad>=21){
//    prestamo = 'proceda';
//}   else {
//    prestamo = 'no proceda';
//}



// operador ternario

//condicion para acceder a prestamo ? expre si es true : expre si es false
let edad = 25;

let prestamo = edad >= 21 ? 'proceda' : 'no proceda';

console.log(prestamo);

//

let antiguedad = 5;

let solicitud = antiguedad >= 5 ? 'proceda' : 'no proceda'

console.log(solicitud);
