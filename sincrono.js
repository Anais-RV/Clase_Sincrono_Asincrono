//SÍNCRONO
// Son aquellos que se ejecutan en el orden en que se escriben, uno detrás de otro.

//Ejemplo de código síncrono

console.log("Inicio del Programa");

function tareaSincrona() {
    console.log("Estamos realizando la tarea 1...");
    console.log("Estamos realizando la tarea 2...");
    console.log("Estamos realizando la tarea 3...");
}

tareaSincrona();

console.log("Fin del Programa");