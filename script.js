// seleccionar el color picker y la lista de frutas
const colorPicker = document.getElementById("color-picker");
const frutas = document.getElementById("frutas");
const savedColor = localStorage.getItem('li:nth-child(even)');
let colorAnterior = "";
let colorAplicado = false;

// añadir un event listener al color picker
colorPicker.addEventListener("input", function() {
	// obtener el color seleccionado
	const colorSeleccionado = colorPicker.value;

	// obtener los elementos pares e impares de la lista de frutas
	const elementosPares = frutas.querySelectorAll("li:nth-child(even)");
    const elementosImpares = frutas.querySelectorAll("li:nth-child(odd)");

	// cambiar el color de fondo de los elementos pares e impares
	for (let i = 0; i < elementosPares.length; i++) {
		elementosPares[i].classList.add("pares");
		elementosPares[i].style.backgroundColor = colorSeleccionado;

        if(colorAnterior != colorSeleccionado && colorAplicado == false){
            for (let i = 0; i < elementosImpares.length; i++) {
                elementosImpares[i].classList.add("impares");
                elementosImpares[i].style.backgroundColor = colorAnterior;
            }
        }
        colorAnterior = true;
	}
    colorAnterior = colorSeleccionado;
});
