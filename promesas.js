// PROMESAS
// Las promesas son objetos que representan la terminación o el fracaso de una operación asíncrona.

// Ejemplo de código ASÍNCRONO con promesas

// Puedes jugar a cambiar los tiempos del setTimeout así como el orden de las tareas para ver cómo afecta al flujo del programa.

console.log("Inicio del Programa");

// Primera tarea asíncrona

function tarea1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tarea 1 completada");
            resolve(); // Llamamos al siguiente callback
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Segunda tarea asíncrona

function tarea2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tarea 2 completada");
            resolve(); // Llamamos al siguiente callback
        }, 1000); // Simula un retraso de 1.5 segundos
    });
}

// Tercera tarea asíncrona

function tarea3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tarea 3 completada");
            console.log("Fin del Programa");
            resolve();
        }, 3000); // Simula un retraso de 3 segundos
    });
}

tarea1() // Iniciamos la primera tarea
    .then(() => tarea2()) // Encadenamos la segunda tarea
    .then(() => tarea3()) // Encadenamos la tercera tarea
    .catch(() => console.error("Error en la ejecución")); // Manejamos errores

// Conceptos importantes:
// 0. Promesas: Son objetos que representan la terminación o el fracaso de una operación asíncrona.
// 1. Las promesas (constructor) reciben una función con dos parámetros: resolve (éxito) y reject (error).
// 2. Tienen 3 estados: pendiente(espera su turno), cumplida (ya ejecutada) o rechazada(falla y debemos manejar el error, .catch()).
// 3. Pueden encadenarse con .then() y .catch() para manejar casos de éxito o error.
// 4. Ton una forma más limpia y fácil de leer que los callbacks anidados.
// 5. Característica estándar de ES6 y están disponibles en todos los navegadores modernos.
// 6. Herramienta poderosa para trabajar con operaciones asíncronas en JavaScript.
// 7. Permiten el uso de async/await para escribir código asíncrono de forma más sencilla.