

//realizar 2 prompts que pongan ambos lados de un rectangulo
//crear una funcion para calcular el perimetro p = 2*(prompt1 + prompt2)
//document.write para mostrar en pantalla

let numero1 = parseInt(prompt('Ingresar el primer numero'));
let numero2 = parseInt(prompt('Ingresar el segundo numero'));

function perimetro(){
    let perimetroRectangulo = (2*(numero1 + numero2));
    document.write('El perimetro del rectangulo es de '+ perimetroRectangulo + ' cm');
}


perimetro();
