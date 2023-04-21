function buscar() {
    const terminoBusqueda = document.getElementById("termino").value;
    const textoCompleto = document.getElementById("texto").value;
    const expresionRegular = new RegExp(terminoBusqueda, "gi");
    const coincidenciasEncontradas = textoCompleto.match(expresionRegular);
    let textoResaltado = textoCompleto;
    let numeroCoincidencias = 0;

    if (coincidenciasEncontradas !== null) {
        textoResaltado = textoCompleto.replace(
            expresionRegular,
            '<span class="highlight">$&</span>'
        );
        numeroCoincidencias = coincidenciasEncontradas.length;
    }

    document.getElementById("resultado").innerHTML = textoResaltado;
    document.getElementById("numeroCoincidencias").innerHTML = numeroCoincidencias;
}


