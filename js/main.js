var encrypt = text => text.replace(/e/g, 'enter')
  .replace(/i/g, 'imes')
  .replace(/a/g, 'ai')
  .replace(/o/g, 'ober')
  .replace(/u/g, 'ufat');

var uncrypt = text => text.replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');

  var functionValidacionTextoIngresado = text => {
  var regStringValidate = /[A-Z]|[á-ú]|[Á-Ú]|[à-ù]/;
  return regStringValidate.test(text);
}

function encryptar() {
  var texto = document.getElementById("texto_ingresado").value;
  var validarMayusculasTildes = functionValidacionTextoIngresado(texto);
  alert("resultado validación " + validarMayusculasTildes);

}

function defaultCopy(){
  let tooltip = document.getElementById("texto_encriptado");
  tooltip.innerHTML = "Copiar al portapapeles";
}



