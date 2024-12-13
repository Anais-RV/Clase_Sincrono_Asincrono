// Ejemplo de código ASÍNCRONO con callbacks anidados
// El código asíncrono no se ejecuta en el orden en que se escribe.
// En su lugar, se programa para completarse en el futuro mientras otras operaciones continúan ejecutándose.


//Puedes jugar a cambiar los tiempos de las tareas para ver cómo afecta al flujo del programa.

console.log("Inicio del Programa");

// Primera tarea asíncrona
function tarea1(callback) {
    setTimeout(() => {
        console.log("Tarea 1 completada");
        callback(); // Llamamos al siguiente callback
    }, 2000); // Simula un retraso de 2 segundos
}

// Segunda tarea asíncrona
function tarea2(callback) {
    setTimeout(() => {
        console.log("Tarea 2 completada");
        callback(); // Llamamos al siguiente callback
    }, 1000); // Simula un retraso de 1.5 segundos
}

// Tercera tarea asíncrona
function tarea3() {
    setTimeout(() => {
        console.log("Tarea 3 completada");
        console.log("Fin del Programa");
    }, 3000); // Simula un retraso de 3 segundos
}

// Llamada a las tareas anidando callbacks
tarea1(() => {
    tarea2 (() => {
        tarea3();
        console.log("Todas las tareas completadas");
    });
});

// Conceptos importantes:
// 0. Callbacks: Son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que otra función haya terminado.
// 1. JS es un lenguaje de programación asíncrono, no bloqueante y orientado a eventos.
// 2. Las tareas como setTimeout no detienen el flujo del programa principal (thread principal).
// 3. Aunque las funciones se escriben en orden, sus tiempos de ejecución programados (setTimeout) determinan cuándo se completan.
// 4. Este ejemplo muestra cómo los callbacks anidados pueden volverse difíciles de leer y mantener en casos complejos.
