console.log('-------------------------EXERCISE 2 : Strings-------------------------');

/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).*/

console.log('------------EXERCISE 2.a------------');

var text = 'rave aprobame la semana';
console.log(text.toUpperCase());

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('------------EXERCISE 2.b------------');

var string = 'rave subime la nota social';
var substring;
substring = string.substring(0, 5);
console.log(substring);

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('------------EXERCISE 2.c------------');

var string = 'rave subime la nota tecnica';
var substring;
substring = string.substring(string.length - 3);
console.log(substring);

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('------------EXERCISE 2.d------------');

var string = 'me quede sin ideaS';
var substring;
substring = string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
console.log(substring);

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('------------EXERCISE 2.e------------');

var string = 'la mitocondria es el nucleo de la celula';
var espacio;
espacio = string.indexOf(' ');
console.log(espacio);

/*e. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('------------EXERCISE 2.f------------');

var string = 'programacion intachable';
var substring;
substring = string.substring(0, 1).toUpperCase() + string.substring(1, string.indexOf(' ') + 1).toLowerCase()
    + string.substring(string.indexOf(' ') + 1, string.indexOf(' ') + 2).toUpperCase()
    + string.substring(string.indexOf(' ') + 2).toLowerCase();
console.log(substring);