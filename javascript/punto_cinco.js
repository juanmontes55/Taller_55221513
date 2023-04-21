function identificarNumero() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    if (numero <= 0 || isNaN(numero)) {
        resultado.textContent = "Debe ingresar números positivos.";
    } else if (numero % 2 === 0) {
        resultado.textContent = "Su número es par";
    } else{
        resultado.textContent = "Su número es impar";   
    }
}
