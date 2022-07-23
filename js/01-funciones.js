//escribir una funcion  que se pasa como parametro un numero entero
//devolver el resultado como una cadena de texto que indique si es par o impar
// mostrar por pantalla el resultado deuvelto por la funcion
function numero(){

    if(numeroIngresado %2 ===0){
      document.write(`El numero ingresado es par y es ${numeroIngresado}`);
    }else{
        document.write(`El numero ingresado es impar y es ${numeroIngresado}`);
    }
}

let numeroIngresado = parseInt(prompt("Ingrese un numero"));

numero();
