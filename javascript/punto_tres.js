const form = document.querySelector('#form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', (event) => {
	event.preventDefault(); // Prevenir que se recargue la página al enviar el formulario
	const nombre = document.querySelector('#nombre').value;
	const edad = parseInt(document.querySelector('#edad').value);

	if (isNaN(edad) || edad < 1 || edad > 120) {
		resultado.innerHTML = 'No es una edad válida.';
	} else if (edad >= 18) {
		resultado.innerHTML = `Hola ${nombre}, eres mayor de edad.`;
	} else {
		resultado.innerHTML = `Hola ${nombre}, no eres mayor de edad.`;
	}
});
