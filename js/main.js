var encrypt = vartext => vartext.replace(/e/g, 'enter')
  .replace(/i/g, 'imes')
  .replace(/a/g, 'ai')
  .replace(/o/g, 'ober')
  .replace(/u/g, 'ufat');

var uncrypt = vartext => vartext.replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');

var functionValidacionTextoIngresado = text => {
  var regStringValidate = /[A-Z]|[á-ú]|[Á-Ú]|[à-ù]/;
  return regStringValidate.test(text);
}

function funEncryptarTexto() {
  var texto = document.getElementById("texto_ingresado").value;
  var validarMayusculasTildes = functionValidacionTextoIngresado(texto);
  if (!validarMayusculasTildes) {
    encrypt(texto)
    document.getElementById("texto_salida").innerHTML = "El texto encriptado es: " + encrypt(texto);
    document.getElementById("mensaje_error").innerHTML="";
  } else { 
    document.getElementById("mensaje_error").innerHTML="No cumple condicion";
  }
  
}

  function funDesencryptarTexto() {
    var texto = document.getElementById("texto_ingresado").value;
    var validarMayusculasTildes = functionValidacionTextoIngresado(texto);
    if (!validarMayusculasTildes) {
      uncrypt(texto)
      document.getElementById("texto_salida").innerHTML = "El texto desencriptado es: " + uncrypt(texto);
      document.getElementById("mensaje_error").innerHTML="";
    } else { 
      document.getElementById("mensaje_error").innerHTML="No cumple condicion";
    }
  }








