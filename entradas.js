function calcularPrecio() {
    let edad = document.getElementById("age").value;
    let resultado = document.getElementById("resultado");
    let precio;

    if (edad === "" || isNaN(edad) || edad < 0) {
        resultado.textContent = "Por favor, ingrese una edad válida.";
        resultado.style.color = "red";
        return;
    }

    edad = parseInt(edad);

    if (edad < 12) {
        precio = "Gratuita";
    } else if (edad >= 12 && edad <= 18) {
        precio = 5;
    } else {
        precio = 10;
    }

    resultado.textContent = `El precio de su entrada es $${precio}.`;
    resultado.style.color = "green";
}
