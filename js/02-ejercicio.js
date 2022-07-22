/*
 solicite un prompt el nombre de ciudades y almacenarlas en un arreglo,
 cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, 
 luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let ciudades =[];
document.write('<ul>');

do{
   let nombreCiudades = prompt('Escribe el nombre de una Ciudad (tienen que ser por lo menos 4 ciudades');
   ciudades.push(nombreCiudades);
   document.write('<li>'+nombreCiudades+'</li>');
} while(confirm('desea agregar mas nombres de ciudades?'));
document.write('</ul>');



// longitud del array
document.write('La cantidad de ciudades que ingresaste es: ' + ciudades.length + '<br>');
console.log(ciudades.length);

// primer elemento
document.write('<br> Primer elemento del array, ', ciudades[0]);

// tercer elemento 
document.write('<br> Tercer elemento del array, ', ciudades[2]);

// ultimo elemnto del array
document.write('<br> El ultimo elemento del array, ', ciudades[ciudades.length -1]);

// Añade en última posición la ciudad de París.
ciudades.push('París');

// Escribe por pantalla el elemento que ocupa la segunda posición

document.write('<br> El segundo elemento del array es, ', ciudades[1]);

// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

ciudades.splice(1,1,'Barcelona' );
document.write('<br> Se cambio el 2do elemento por: ', ciudades[1]);

