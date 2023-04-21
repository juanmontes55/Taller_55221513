function identificar() {
    let numerosString = document.getElementById("numeros").value;
    let numeros = numerosString.split(",");
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    for (let i = 0; i < numeros.length; i++) {
        let num = Number(numeros[i].trim());
        if (Number.isInteger(num)) {
            if (num % 2 === 0) {
                resultado.innerHTML += "<span class='par'>" + num + " es número par</span><br>";
            } else {
                resultado.innerHTML += "<span class='impar'>" + num + " es número impar</span><br>";
            }
        } else {
            resultado.innerHTML += "<span class='noentero'>" + numeros[i].trim() + " no es un número entero</span><br>";
        }
    }
}