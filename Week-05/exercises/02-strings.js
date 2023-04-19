console.log('-------------------------EXERCISE 2 : Strings-------------------------');

/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).*/

console.log('------------EXERCISE 2.a------------');

var text = 'rave aprove me the week';
console.log(text.toUpperCase());

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('------------EXERCISE 2.b------------');

var string = 'rave upgrade my social mark';
var substr = string.substring(0, 5);
console.log(substr);

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('------------EXERCISE 2.c------------');

var string = 'rave upgrade my tecnic mark';
var substr = string.substring(string.length - 3);
console.log(substr);

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('------------EXERCISE 2.d------------');

var string = 'i run out of ideaS';
var substr = string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
console.log(substr);

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('------------EXERCISE 2.e------------');

var string = 'Mitochondria are known as the powerhouse of cells';
var space = string.indexOf(' ');
console.log(space);

/*e. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula 
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('------------EXERCISE 2.f------------');

var string = 'outstanding pROGRAMMING';
var substr;
substr = string.substring(0, 1).toUpperCase() + string.substring(1, string.indexOf(' ') + 1).toLowerCase()
    + string.substring(string.indexOf(' ') + 1, string.indexOf(' ') + 2).toUpperCase()
    + string.substring(string.indexOf(' ') + 2).toLowerCase();
console.log(substr);