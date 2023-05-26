function comprobarPalindromo() {
    let palabra = document.getElementById("palabra").value;
    let palabraInvertida = palabra.split("").reverse().join("");
    let resultado = document.getElementById("resultado");
    let mensaje = document.getElementById("mensaje");

    resultado.innerHTML = "Palabra normal: " + palabra + ", Palabra invertida: " + palabraInvertida;

    if (palabra.toLowerCase() === palabraInvertida.toLowerCase()) {
        mensaje.innerHTML = "La palabra es un palíndromo.";
    } else {
        mensaje.innerHTML = "La palabra no es un palíndromo.";
    }
}