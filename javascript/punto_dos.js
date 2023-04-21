function identificarTipo() {
    let valor = document.getElementById("input").value;
    let resultado = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultado.textContent = "Texto";
    } else {
        resultado.textContent = "Número";
    }
}