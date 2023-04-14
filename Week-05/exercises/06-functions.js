console.log('-------------------------EXERCISE 6 : Funciones-------------------------');

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha 
 variable en la consola del navegador.*/

console.log('------------EXERCISE 6.a------------');

var value1 = 1;
var value2 = 2;
var value3;
function sum(fvalue1, fvalue2) {
    return (fvalue1 + fvalue2);
}
value3 = sum(value1, value2);
console.log(value3);

/*b. Copiar la función suma anterior y agregarle una validación para controlar si 
alguno de los parámetros no es un número; de no ser un número, 
mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('------------EXERCISE 6.b------------');

var value1 = 1;
var value2 = '2';
var value3;
function sumValInt(fvalue1, fvalue2) {
    if (typeof (fvalue1) == 'number' && typeof (fvalue2) == 'number') {
        return (fvalue1 + fvalue2);
    }
    alert('One of the parameters is not a number');
    return (NaN);
}
value3 = sumValInt(value1, value2);
console.log(value3);

/*c. Crear una función “validateInteger” que reciba un número como parámetro y 
devuelva verdadero si es un número entero.*/

console.log('------------EXERCISE 6.c------------');

function validInteger(fvalue1) {
    return (fvalue1 % 1 === 0);
}
console.log(validInteger(value1));

/*d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros.
En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).*/

console.log('------------EXERCISE 6.d------------');

var value1 = 1.5;
var value2 = 2;
var value3;
function sumVal(fvalue1, fvalue2) {
    if (typeof (fvalue1) == 'number' && typeof (fvalue2) == 'number') {
        if (validInteger(fvalue1) && (validInteger(fvalue2))) {
            return (fvalue1 + fvalue2);
        }
        else if (!validInteger(fvalue1)) {
            alert('First value is not an integer');
            return Math.round(fvalue1);
        }
        else if (!validInteger(fvalue2)) {
            alert('Second value is not an integer');
            return Math.round(fvalue2);
        }
    }
    alert('One of the parameters is not a number');
    return (NaN);
}
value3 = sumVal(value1, value2);
console.log(value3);

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando 
que todo siga funcionando igual que en el apartado anterior.*/

console.log('------------EXERCISE 6.e------------');

var value1 = 4;
var value2 = 2.5;
var value3;
function sumVal2(fvalue1, fvalue2) {
    if (validation(fvalue1, fvalue2) == 'integer') {
        return (fvalue1 + fvalue2);
    }
    else if (validation(fvalue1, fvalue2) == 'wrong type') {
        alert('One of the parameters is not a number');
        return (NaN);
    }
    else if (validation(fvalue1, fvalue2) == 'first real') {
        alert('First value is not an integer');
        return Math.round(fvalue1);
    }
    alert('Second value is not an integer');
    return Math.round(fvalue2);
}
function validation(fvalue1, fvalue2) {
    if (typeof (fvalue1) == 'number' && typeof (fvalue2) == 'number') {
        if (validInteger(fvalue1) && (validInteger(fvalue2))) {
            return ('integer');
        }
        else if (!validInteger(fvalue1)) {
            return ('first real');
        }
        return ('second real')
    }
    return ('wrong type');
}
value3 = sumVal2(value1, value2);
console.log(value3);