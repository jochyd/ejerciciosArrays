// 1 prompt "ingrese unn numero"
// realizar una funcion que realice la tabla de multiplicar
//debe tener un bucle que multiplique del 1 al 10 el numero ingresado

// 1 x 1 = 2

//document.write con una tabla de multiplicar  del 1 al 10

let numero = parseInt(prompt("Ingrese un numero"));

multiplicar();

function multiplicar() {
  document.write(`<h1>Tabla de Multiplicar del ` + numero);
  document.write("<ul>");
  for (let indice = 0; indice <= 10; indice++) {
    document.write("<li>");
    document.write(numero + "x" + indice + "=" + numero * indice);
    document.write("</li>");
  }
  document.write("</ul>");
}

//  function multiplicar(){
//     document.write(`<table class = "tablaDatos"><tbody>`);
//     for( let indiceNumero =0; indiceNumero < 10 ; numero++){
//         document.write(`<tr>`);
//     }for(let indiceColumna =1; indiceColumna <2; numero++){
//         document.write(`<td>${resultado}</td>`);
//     }
//     document.write(`</tr>`);
//     document.write(`</tbody></table>`);
//  }

// tengo que realizar del 1 al 10 (<10)
// una que muestre el numero 1 y la de la par el multiplo
