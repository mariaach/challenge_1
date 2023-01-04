const encrypt = text => text.replace(/e/g, 'enter')
  .replace(/i/g, 'imes')
  .replace(/a/g, 'ai')
  .replace(/o/g, 'ober')
  .replace(/u/g, 'ufat')

const uncrypt = text => text.replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');

const stringValidate = text => {
  let regStringValidate = /[A-Z]|[á-ú]|[Á-Ú]|[à-ù]/;
  return regStringValidate.test(text);
}

function encryptText() {
  let texto = document.getElementById("texto_ingresado").value;
  let value = stringValidate(texto);
  defaultCopy();
  if (!value && texto != '') {
    let output = encrypt(texto);
    outputConf(output);
    document.getElementById("info").style.visibility = "hidden";
  } else if (!value && texto == '') {
    defaultOutput();
  } else {
    document.getElementById("info").style.visibility = "visible";
  }
}

function uncryptText() {
  let texto = document.getElementById("texto_ingresado").value;
  let value = stringValidate(texto);
  defaultCopy();
  if (!value && texto != '') { // condiciones para encriptar texto
    let output = uncrypt(texto);
    outputConf(output);
    document.getElementById("info").style.visibility = "hidden";
    tooltip.innerHTML = "Copiar al portapapeles";
  } else if (!value && texto == '') {
    defaultOutput();
  } else {
    document.getElementById("info").style.visibility = "visible";
  }
}

function outputConf(text) {
  document.getElementById("initial-output").style.display = "none"
  document.getElementById("text").innerHTML = text;
  document.getElementById("texto_de_salida").style.display = "flex"
}

function defaultOutput() {
  document.getElementById("info").style.visibility = "hidden";
  document.getElementById("texto_de_salida").style.display = "none";
  document.getElementById("initial-output").style.display = "flex";
}


function copyText() {
  try {
    let entrada = document.getElementById("text").innerHTML;
    navigator.clipboard.writeText(entrada);
    let tooltip = document.getElementById("texto_encriptado");
    tooltip.innerHTML = "Se ha copiado: " + entrada;
  } catch (err) {
    console.log("Error al copiar");
  }
}

function defaultCopy(){
  let tooltip = document.getElementById("texto_encriptado");
  tooltip.innerHTML = "Copiar al portapapeles";
}