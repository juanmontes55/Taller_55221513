const texto = document.getElementById("textarea");
const resultado = document.getElementById("resultado");

texto.addEventListener("input", () => {
  const cantidadCaracteres = texto.value.length;
  resultado.textContent = cantidadCaracteres + " caracteres";
});