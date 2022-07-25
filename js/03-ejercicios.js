// simular lanzamiento de 2 dados math.random 1-6
// sumar el resultado de lanzar dos dados y anotarlo en un array
// el numero de aparariciones de dicha suma

// let dado1 = Math.floor(Math.random()*([max-min +1]+1));

let sumas = [];
let pruebadado1 = [];
let pruebadado2 = [];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let resultado = dado1 + dado2;
  sumas.push(resultado);
  // pruebadado1.push(dado1);
  // pruebadado2.push(dado2);
}
document.write("Resultado de Sumar ambos dados " + sumas + '<br>');
// document.write('resultado dado1 ' + pruebadado1);
// document.write('resultado dado2 ' + pruebadado2);

let numero2 = [];
let numero3 = [];
let numero4 = [];
let numero5 = [];
let numero6 = [];
let numero7 = [];
let numero8 = [];
let numero9 = [];
let numero10 = [];
let numero11 = [];
let numero12 = [];

for (let i = 2; i <= 12; i++) {
  let sumasDeDados = sumas;
  switch (sumasDeDados) {
    case 2:
      numero2;
      break;
    case 3:
      numero3;
      break;
    case 4:
      numero4;
      break;
    case 5:
      numero5;
      break;
    case 6:
      numero6;
      break;
    case 7:
      numero7;
      break;
    case 9:
      numero9;
      break;
    case 10:
      numero10;
      break;
    case 11:
      numero11;
      break;
    case 12:
      numero12;
      break;
  }
}

document.write('<br>El numero 2 salio ' + numero2 + 'veces <br>');
document.write('El numero 3 salio ' + numero3 + 'veces <br>');
document.write('El numero 4 salio ' + numero4 + 'veces <br>');
document.write('El numero 5 salio ' + numero5 + 'veces <br>');
document.write('El numero 6 salio ' + numero6 + 'veces <br>');
document.write('El numero 7 salio ' + numero7 + 'veces <br>');
document.write('El numero 8 salio ' + numero8 + 'veces <br>');
document.write('El numero 9 salio ' + numero9 + 'veces <br>');
document.write('El numero 10 salio ' + numero10 + 'veces <br>');
document.write('El numero 11 salio ' + numero11 + 'veces <br>');
document.write('El numero 12 salio ' + numero12 + 'veces <br>');


// recorrer todo el elemneto contando los numeros que aparecen
// acumularlo en una variable

// para obtener número de apariciones de dicha suma, repitiendo 50 veces esta operación.
