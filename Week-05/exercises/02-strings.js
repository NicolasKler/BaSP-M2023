console.log('-------------------------EXERCISE 1 : Strings-------------------------');

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
//(utilizar toUpperCase).

console.log('------------EXERCISE 2.a------------');

var texto = 'rave aprobame la semana';
console.log(texto.toUpperCase());

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
//con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('------------EXERCISE 2.b------------');

var cadena = 'rave subime la nota social';
var subcadena;
subcadena = cadena.substring(0,5)
console.log(subcadena);

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
//con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).


console.log('------------EXERCISE 2.c------------');

var cadena = 'rave subime la nota tecnica';
var subcadena;
subcadena = cadena.substring(cadena.length -3);
console.log(subcadena);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
//primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
//(utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('------------EXERCISE 2.d------------');

var cadena = 'me quede sin ideas';
var subcadena;
subcadena = cadena.substring(0,1).toUpperCase() + cadena.substring(1).toLowerCase();
console.log(subcadena);

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
//Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('------------EXERCISE 2.e------------');

var cadena = 'la mitocondria es el nucleo de la celula';
var espacio;
espacio = cadena.indexOf(' ');
console.log(espacio);

//e. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
//palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('------------EXERCISE 2.f------------');

var cadena = 'programacion intachable';
var subcadena;
subcadena = cadena.substring(0,1).toUpperCase() + cadena.substring(1, cadena.indexOf(' ') + 1).toLowerCase()
+ cadena.substring(cadena.indexOf(' ') + 1,cadena.indexOf(' ') + 2).toUpperCase()
+ cadena.substring(cadena.indexOf(' ') + 2,cadena.length ).toLowerCase();
console.log(subcadena);