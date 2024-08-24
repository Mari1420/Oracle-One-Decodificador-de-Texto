// Criptografar
const inputTexto = document.querySelector('.input-texto');
const mensagem = document.querySelector('.mensagem');
const textoSaida = document.querySelector('.texto-saida');
const btnCopiar = document.querySelector('#btnCopiar'); 

function btnCriptografar() {
    const textoEncriptado = encriptar(inputTexto.value);
    if (textoEncriptado === "") {
        alert("Você precisa digitar um texto para criptografar");
        return;
    }
    mensagem.value = textoEncriptado;
    mensagem.style.background = "#fff";
    textoSaida.style.display = 'none';
    btnCopiar.style.display = 'block';
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "obter"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// Desencriptografar
function btnDescriptografar() {
    const textDesencriptado = desencriptar(mensagem.value);
    if (textDesencriptado === "") {
        alert("Digite o texto que deseja descriptografar");
        return;
    }
    mensagem.value = textDesencriptado;
    mensagem.style.color = '#f00';
    mensagem.style.fontSize = '25px';
    textoSaida.style.display = 'block';
    btnCopiar.style.display = 'none'; 
}

function desencriptar(stringDesencriptar) {
    let desencriptarCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "obter"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();
    for (let i = 0; i < desencriptarCodigo.length; i++) {
        if (stringDesencriptar.includes(desencriptarCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(desencriptarCodigo[i][1], desencriptarCodigo[i][0]);
        }
    }
    return stringDesencriptar;
}

function copiar() {
    mensagem.select();
    document.execCommand('copy');
}
