// Función para verificar si un número es entero positivo
function esEnteroPositivo(numero) {
    return Number.isInteger(numero) && numero > 0;
}

// Función para verificar la divisibilidad entre dos números
function verificarDivisibilidad() {
    // Obtener los valores ingresados por el usuario
    var numeroA = parseInt(document.getElementById("numeroA").value);
    var numeroB = parseInt(document.getElementById("numeroB").value);

    // Verificar si los números ingresados son enteros positivos
    if (!esEnteroPositivo(numeroA) || !esEnteroPositivo(numeroB)) {
        alert("Por favor, ingrese dos números enteros positivos.");
        return false;
    }

    // Verificar si el número B es divisible por el número A
    var resultado = document.getElementById("resultado");
    if (numeroA % numeroB == 0) {
        resultado.innerHTML = "El número " + numeroA + " es divisible entre el número " + numeroB;
    } else {
        resultado.innerHTML = "El número " + numeroA + " no es divisible entre el número " + numeroB;
    }

    return false;
}