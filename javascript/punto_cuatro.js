function calculate() {
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var materia = document.getElementById("materia").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    // Calcular el promedio
    var promedio = (nota1 + nota2 + nota3) / 3;

    // Mostrar el resultado
    var resultDiv = document.getElementById("resultado");
    if (promedio >= 3.0) {
        resultDiv.innerHTML = "Felicitaciones " + nombre + ", su nota es " + promedio.toFixed(2) + ", pasaste " + materia + ".";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = "Lo siento " + nombre + ", su nota es " + promedio.toFixed(2) + ", sigue intentando " + materia + ".";
        resultDiv.style.color = "red";
    }
}