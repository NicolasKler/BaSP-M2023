console.log('-------------------------EXERCISE 6 : Funciones-------------------------');

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha 
 variable en la consola del navegador.*/

console.log('------------EXERCISE 6.a------------');

function sum(fvalue1, fvalue2) {
    return (fvalue1 + fvalue2);
}

var value = sum(1, 2);
console.log(value);

/*b. Copiar la función suma anterior y agregarle una validación para controlar si 
alguno de los parámetros no es un número; de no ser un número, 
mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('------------EXERCISE 6.b------------');

function sumValInt(fvalue1, fvalue2) {
    if (typeof (fvalue1) == 'number' && typeof (fvalue2) == 'number') {
        return (fvalue1 + fvalue2);
    }
    alert('One of the parameters is not a number');
    return (NaN);
}

var value = sumValInt(2, '5');
console.log(value);

/*c. Crear una función “validateInteger” que reciba un número como parámetro y 
devuelva verdadero si es un número entero.*/

console.log('------------EXERCISE 6.c------------');

function validInteger(fvalue1) {
    return (fvalue1 % 1 == 0);
}

console.log(validInteger(3.1));

/*d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros.
En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).*/

console.log('------------EXERCISE 6.d------------');

var value;
function sumVal(fvalue1, fvalue2) {
    if (!typeof (fvalue1) == 'number' || !typeof (fvalue2) == 'number') {
        alert('One of the parameters is not a number');
        return (NaN);
    }
    if (validInteger(fvalue1) && (validInteger(fvalue2))) {
        return (fvalue1 + fvalue2);
    }
    if (!validInteger(fvalue1)) {
        alert('First value is not an integer');
        return Math.round(fvalue1);
    }
    alert('Second value is not an integer');
    return Math.round(fvalue2);
}

var value = sumVal(0.8, 2);
console.log(value);

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando 
que todo siga funcionando igual que en el apartado anterior.*/

console.log('------------EXERCISE 6.e------------');

var value3;
function sumVal2(fvalue1, fvalue2) {
    aux = validation(fvalue1, fvalue2);
    if (aux == 'integer') {
        return (fvalue1 + fvalue2);
    }
    if (aux == 'not number') {
        alert('One of the parameters is not a number');
        return (NaN);
    }
    if (aux == 'first real') {
        alert('First value is not an integer');
        return Math.round(fvalue1);
    }
    alert('Second value is not an integer');
    return Math.round(fvalue2);
}

function validation(fvalue1, fvalue2) {
    if (!typeof (fvalue1) == 'number' || !typeof (fvalue2) == 'number') {
        return ('not number');
    }
    if (validInteger(fvalue1) && (validInteger(fvalue2))) {
        return ('integer');
    }
    if (!validInteger(fvalue1)) {
        return ('first real');
    }
    return ('second real')
}

var value = sumVal2(3, 1);
console.log(value);