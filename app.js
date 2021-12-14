//Declaración de Variables
var nombre, apellido, diametro, radio, area;
const pi = 3.1415

//Solicitamos los datos del usuario
nombre = prompt('Por favor ingresa tu nombre!');
apellido = prompt('Ahora tu Apellido!');

//Mostramos el mensaje de bienvenida
alert(`Bienvenido: ${nombre} ${apellido}, que tal si calculamos el radio de un circulo?`);

//Mostramos por consola el nombre del usuario
console.info(`El nombre del usuario es: ${nombre} ${apellido}`);

//Solicitamos el diametro del circulo al usuario para calcular el radio, usamos la funcion Number para transformar la cadena de texto en un numero
diametro = Number(prompt('Por favor ingrese el tamaño del diametro del circulo que desea calcular!'));

//Creamos la formula y calculamos el radio
radio = diametro / 2; 
console.log(`El radio del circulo es: ${radio}`);

//Creamos la formula y calculamos el area
area = pi * Math.pow(radio, 2);
console.warn(`El area del circulo es: ${area.toFixed(2)}`)


//Mostramos mediante Sweetalert el resultado de la operación 
swal(`${nombre}, el diametro ingresado es: ${diametro}, el radio del circulo obtenido es: ${radio} y el area es: ${area.toFixed(2)}.- Muchas gracias por usar la herramienta <3`);

