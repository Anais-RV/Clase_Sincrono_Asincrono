// TOP LEVEL AWAIT
// Nos permite usar la palabra clave "await" directamente en el nivel superior de nuestro código,
// sin necesidad de envolverlo en una función async.

//Puedes jugar a cambiar los tiempos y el orden de las tareas para ver cómo afecta al flujo del programa.

console.log("Inicio del Programa");

// Primera tarea asíncrona
function tarea1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tarea 1 completada");
            resolve(); // Resolvemos la promesa
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Segunda tarea asíncrona
function tarea2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tarea 2 completada");
            resolve(); // Resolvemos la promesa
        }, 1000); // Simula un retraso de 1 segundo
    });
}

// Tercera tarea asíncrona
function tarea3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tarea 3 completada");
            console.log("Fin del Programa");
            resolve(); // Resolvemos la promesa
        }, 3000); // Simula un retraso de 3 segundos
    });
}

// Llamada a las tareas con top-level await
await tarea1(); // Esperamos a que se complete la primera tarea
await tarea2(); // Luego esperamos la segunda tarea
await tarea3(); // Finalmente, esperamos la tercera tarea

console.log("Todas las tareas completadas");

// Conceptos importantes:
// 0. Top Level Await: Nos permite usar la palabra clave "await" directamente en el nivel superior de nuestro código.
// 1. Antes de ES2022, "await" solo se podía usar dentro de funciones async.
// 2. Top Level Await nos permite simplificar el código y evitar el uso de funciones async adicionales.
// 3. Top Level Await es una característica experimental y aún no es compatible en todos los navegadores.
// 4. Top Level Await es una característica de ES2022 y requiere un entorno de ejecución actualizado.
