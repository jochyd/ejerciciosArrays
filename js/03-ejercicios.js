// simular lanzamiento de 2 dados math.random 1-6
// sumar el resultado de lanzar dos dados y anotarlo en un array
// el numero de aparariciones de dicha suma

// let dado1 = Math.floor(Math.random()*([max-min +1]+1));



let sumas =[];
let pruebadado1=[];
let pruebadado2=[];

for(let i = 0; i < 50; i++){
    let dado1 = Math.floor(Math.random()*((6-1 +1)+1));
    let dado2 = Math.floor(Math.random()*([6-1 +1]+1));
    let resultado = dado1 + dado2;
    sumas.push(resultado);
    pruebadado1.push(dado1);
    pruebadado2.push(dado2);
}
document.write('resultado de ' + sumas);
document.write('resultado dado 1' + pruebadado1);
document.write('resultado dado 2' + pruebadado2);


// recorrer todo el elemneto contando los numeros que aparecen
// acumularlo en una variable