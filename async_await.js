// ASINC AWAIT
// Es una forma de trabajar con promesas de una manera más sencilla y legible

//Ejemlo de código ASÍNCRONO con async/await

//Puedes jugar a cambiar los tiempos y el orden de las tareas para ver cómo afecta al flujo del programa.

console.log("Inicio del Programa");

function tarea1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tarea 1 completada");
            resolve(); // Llamamos al siguiente callback
        }, 2000); // Simula un retraso de 2 segundos
    });
}

function tarea2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tarea 2 completada");
            resolve(); // Llamamos al siguiente callback
        }, 1000); // Simula un retraso de 1.5 segundos
    });
}

function tarea3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tarea 3 completada");
            console.log("Fin del Programa");
            resolve();
        }, 3000); // Simula un retraso de 3 segundos
    });
}

async function ejecutartareas() {
    try {
        console.log("Inicio de las tareas...");
        await tarea1();
        await tarea2();
        await tarea3();

        console.log("Todas las tareas completadas");
    }
    catch (error) {
        console.error("Error en la ejecución:", error);
    }
}

ejecutartareas();

// Conceptos importantes:
// 0. Async/Await: Es una forma de trabajar con promesas de una manera más sencilla y legible.
// 1. Async: Se utiliza para declarar una función asíncrona que devuelve una promesa.
// 2. Await: Se utiliza para esperar a que una promesa se resuelva antes de continuar
// 3. Simplifica la escritura de código asíncrono y lo hace más fácil de leer y mantener.
// 4. Es una característica de ES2017 y está disponible en todos los navegadores modernos.
// 5. Es la  forma más moderna y recomendada de trabajar con operaciones asíncronas en JS.
// 6. Permite el manejo de errores de forma más sencilla con bloques try/catch.

