//una funcion que muestre info de una cadena de texto
//prompt que pida una cadena de  texto
//determinar si la cadena esta formada solo por mayusculas, solo por minusculas
//o por ambas

function textoIngresado() {
  if (cadena === cadena.toLowerCase()) {
    document.write("La cadena esta escrita solamente en Minusculas");
  } else if (cadena === cadena.toUpperCase()) {
    document.write("La cadena esta escrita en Mayusculas");
  } else {
    document.write("El texto tiene mayusculas y minusculas");
  }
}

let cadena = prompt("Ingrese un texto");

textoIngresado();