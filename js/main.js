//1. Crear una funcion que retorne la suma de dos números.

let a = parseFloat(prompt('Ingrese el primer numero: '));
let b = parseFloat(prompt('Ingrese el segundo numero: '));
let suma = (a, b) => a + b;
console.log(suma(a, b));

//2. Crear una funcion que retorne la potencia de un número dado, esta función

let base = parseFloat(prompt('Ingrese el primer numero: '));
let exponente = parseFloat(prompt('Ingrese el segundo numero: '));
function potencia(base, exponente) {
	let resultado = Math.pow(base, exponente);
	return resultado;
}
console.log(potencia(base, exponente));

//3. Cree una función que tome números y devuelva la suma de sus cubos.

function sumaCubos(...rest) {
	let suma = 0;
	for (i = 0; i < rest.length; i++) {
		suma = suma + Math.pow(rest[i], 3);
	}
	return suma;
}
console.log(sumaCubos(1, 2, 3, 4, 5, 6));

//4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área

let base = parseFloat(prompt('Ingrese la base: '));
let altura = parseFloat(prompt('Ingrese la altura: '));
function area(base, altura) {
	return (base * altura) / 2;
}
console.log(area(base, altura));

/*5. Crear una función llamada calculator que recibe 3 parametros, dos numeros y una operación
matematica(+,-,/,x,%), y si la operacion no es correcta que envie un mensaje “El parámetro no es
reconocido” calculator(2, "+", 2) ➞ 4 */

let a = parseInt(prompt('Ingrese el primer numero: '));
let b = parseInt(prompt('Ingrese el segundo numero: '));
let operacion = prompt('Ingrese la operacion: ');
function calculadora(a, b, operacion) {
	if (operacion == '+') {
		return a + b;
	} else if (operacion == '-') {
		return a - b;
	} else if (operacion == '*') {
		return a * b;
	} else if (operacion == '/') {
		return a / b;
	} else if (operacion == '%') {
		return a % b;
	} else {
		alert('El operador no existe en la funcion');
	}
}
console.log(calculadora(a, b, operacion));

