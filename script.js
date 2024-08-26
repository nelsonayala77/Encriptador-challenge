const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const candado = document.querySelector(".candado");

function botonEncriptar() {
    const texto = textArea.value;
    if (!/^[a-z\s]+$/.test(texto)) {
        mensaje.value = "Ingrese texto sólo con minúsculas y sin acentos.";
        mensaje.style.color = "red";
    } else {
        const textoEncriptado = encriptar(texto);
        mensaje.value = textoEncriptado;
        mensaje.style.color = "black"; 
        candado.style.display = "none"; // Oculta la imagen del candado al encriptar
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function botonDesencriptar() {
    const texto = textArea.value;
    if (!/^[a-z\s]+$/.test(texto)) {
        mensaje.value = "Ingrese texto sólo con minúsculas y sin acentos.";
        mensaje.style.color = "red";
    } else {
        const textoDesencriptado = desencriptar(texto);
        mensaje.value = textoDesencriptado;
        mensaje.style.color = "black"; 
        candado.style.display = "none"; // Oculta la imagen del candado al desencriptar
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    const contenidoOriginal = mensaje.value;

    mensaje.select();
    document.execCommand("copy");

    mensaje.value = "¡El texto ha sido copiado!";
    candado.style.display = "none"; // Oculta la imagen del candado al copiar el texto
}

function botonBorrar() {
    if (textArea) {
        textArea.value = "";
    }
    if (mensaje) {
        mensaje.value = "";
        candado.style.display = "block"; // Muestra la imagen del candado al borrar el texto
    }
}
