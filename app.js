// ==========================================
// MÓDULO 3: FUNDAMENTOS DE JAVASCRIPT
// Aplicación de Consola: Gestor de Inventario y Utilidades
// ==========================================

// 1. ARREGLOS Y OBJETOS 
// Definimos un arreglo inicial de objetos que representan productos en stock.
let inventario = [
    { id: 1, nombre: "Teclado Mecánico", precio: 45000, stock: 10 },
    { id: 2, nombre: "Mouse Gamer", precio: 25000, stock: 15 },
    { id: 3, nombre: "Monitor 24 pulgadas", precio: 120000, stock: 4 },
    { id: 4, nombre: "Audífonos Headset", precio: 35000, stock: 8 }
];

// 2. FUNCIONES MATEMÁTICAS BÁSICAS
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) {
    if (b === 0) {
        alert("Error: No se puede dividir entre cero.");
        return 0;
    }
    return a / b;
}

// 3. FUNCIÓN DE FILTRADO
// Filtra productos cuyo stock sea menor o igual a un límite dado
function filtrarProductosBajosDeStock(limite) {
    return inventario.filter(producto => producto.stock <= limite);
}

// 4. FUNCIONALIDAD PRINCIPAL CON MENÚ
function iniciarAplicacion() {
    let continuar = true;

    alert("¡Bienvenido a la aplicación de consola de JavaScript!");

    while (continuar) {
        // Menú interactivo usando prompt
        let opcion = prompt(
            "Selecciona una opción:\n" +
            "1. Realizar operación matemática básica\n" +
            "2. Ver inventario de productos\n" +
            "3. Agregar un nuevo producto\n" +
            "4. Filtrar productos con poco stock (<= 5)\n" +
            "5. Salir"
        );

        // Validación si el usuario cancela el prompt
        if (opcion === null) {
            break;
        }

        switch (opcion.trim()) {
            case "1":
                // Operaciones matemáticas con validación
                let num1 = parseFloat(prompt("Ingresa el primer número:"));
                let num2 = parseFloat(prompt("Ingresa el segundo número:"));
                let operacion = prompt("Elige la operación (+, -, *, /):");

                if (isNaN(num1) || isNaN(num2)) {
                    alert("Por favor, ingresa números válidos.");
                    break;
                }

                let resultado;
                if (operacion === "+") {
                    resultado = sumar(num1, num2);
                } else if (operacion === "-") {
                    resultado = restar(num1, num2);
                } else if (operacion === "*") {
                    resultado = multiplicar(num1, num2);
                } else if (operacion === "/") {
                    resultado = dividir(num1, num2);
                } else {
                    alert("Operación no válida.");
                    break;
                }

                alert("El resultado de la operación es: " + resultado);
                console.log(`Operación matemática: ${num1} ${operacion} ${num2} = ${resultado}`);
                break;

            case "2":
                // Recorrer arreglos y objetos usando forEach
                console.clear();
                console.log("--- LISTA DE INVENTARIO ACTUAL ---");
                alert("Revisa la consola del navegador para ver el inventario detallado.");
                
                inventario.forEach((prod, index) => {
                    console.log(`[${index + 1}] Producto: ${prod.nombre} | Precio: $${prod.precio} | Stock: ${prod.stock}`);
                });
                break;

            case "3":
                // Agregar elementos al arreglo de objetos
                let nuevoNombre = prompt("Ingresa el nombre del nuevo producto:");
                let nuevoPrecio = parseFloat(prompt("Ingresa el precio:"));
                let nuevoStock = parseInt(prompt("Ingresa la cantidad en stock:"));

                if (nuevoNombre && !isNaN(nuevoPrecio) && !isNaN(nuevoStock)) {
                    let nuevoProducto = {
                        id: inventario.length + 1,
                        nombre: nuevoNombre,
                        precio: nuevoPrecio,
                        stock: nuevoStock
                    };
                    inventario.push(nuevoProducto);
                    alert("¡Producto agregado exitosamente!");
                    console.log("Inventario actualizado:", inventario);
                } else {
                    alert("Datos inválidos. No se pudo agregar el producto.");
                }
                break;

            case "4":
                // Uso de la función de filtrado
                let criticos = filtrarProductosBajosDeStock(5);
                console.clear();
                console.log("--- PRODUCTOS CON STOCK CRÍTICO (<= 5) ---");
                
                if (criticos.length > 0) {
                    criticos.forEach(p => {
                        console.log(`- ${p.nombre} (Quedan: ${p.stock} unidades)`);
                    });
                    alert("Se encontraron productos con stock crítico. Revisa la consola.");
                } else {
                    alert("No hay productos con stock crítico.");
                }
                break;

            case "5":
                alert("Gracias por usar la aplicación. ¡Hasta pronto!");
                continuar = false;
                break;

            default:
                alert("Opción no válida, intenta nuevamente.");
                break;
        }
    }
}

// Ejecutar la aplicación principal
iniciarAplicacion();