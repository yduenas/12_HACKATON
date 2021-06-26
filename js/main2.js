//1.- Utilizando función arrow, crear una función que reciba como parámetros un nombre,
//apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
/*
const nombre = 'Ytalo';
const apellido = 'Dueñas';
const edad = 44;
function datosPersonales(nombre, apellido, edad) {
	console.log(`Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`);
}
datosPersonales(nombre, apellido, edad);
let datosPersonales2 = (nombre, apellido, edad) =>
	console.log(`Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`);
datosPersonales2(nombre, apellido, edad);

*/
/*
let nombre = prompt('Ingrese el nombre: ');
let apellido = prompt('Ingrese el nombre: ');
let edad = prompt('Ingrese el nombre: ');

let datosPersonales2 = (nombre, apellido, edad) =>
	console.log(`Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`);
datosPersonales2(nombre, apellido, edad);
*/

let datosPersonales2 = () => {
	let nombre = prompt('Ingrese el nombre: ');
	let apellido = prompt('Ingrese el Apellido: ');
	let edad = prompt('Ingrese la Edad: ');
	let resultado = `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`;
	console.log('EJERCICIO 1');
	console.log(resultado);
	/* Crear elementos */
	const etiqueta = document.createElement('p');
	// Llenar elemento
	etiqueta.textContent = resultado;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor = document.getElementById('contenedor1');
	contenedor.appendChild(etiqueta);
};
/*
datosPersonales2();*/

//2.-Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
/*
function sumOfCubes(...rest) {
	let suma = 0;
	for (i = 0; i < rest.length; i++) {
		suma = suma + Math.pow(rest[i], 3);
	}
	return suma;
}
console.log(sumOfCubes(1, 2, 3, 4, 5, 6));
*/
//console.log(prompt('Ingrese numeros: ', [1, 2, 3, 4, 5, 6]));
function sumOfCubes() {
	let dato = prompt('Ingrese numeros: ', '1, 2, 3, 4, 5, 6');
	let rest = dato.split(',');
	let suma = 0;
	for (i = 0; i < rest.length; i++) {
		suma = suma + Math.pow(rest[i], 3);
	}
	console.log('EJERCICIO 2');
	console.log(suma);
	/* Crear elementos */
	const etiqueta2 = document.createElement('p');
	// Llenar elemento
	const resultado2 = suma;
	etiqueta2.textContent = resultado2;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor2 = document.getElementById('contenedor2');
	contenedor2.appendChild(etiqueta2);
}
/*console.log(sumOfCubes(1, 2, 3, 4, 5, 6));*/

//3.-Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
/*
typeof 2; // number
typeof 'Hello World'; // string
typeof [1, 2, 3]; // object
function tipoValor(valor) {
	console.log(typeof valor);
}
tipoValor(2);
tipoValor('Hello World');
tipoValor([1, 2, 3]);
*/

function tipoValor() {
	const valor = prompt('Ingrese un dato');
	//console.log(typeof valor);
	console.log('EJERCICIO 3');
	console.log(typeof valor);

	/* Crear elementos */
	const etiqueta3 = document.createElement('p');
	// Llenar elemento
	const resultado3 = typeof valor;
	etiqueta3.textContent = resultado3;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor3 = document.getElementById('contenedor3');
	contenedor3.appendChild(etiqueta3);
}

//4.-Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
/*
function sumaArgumentos(...rest) {
	let suma = 0;
	for (i = 0; i < rest.length; i++) {
		suma = suma + rest[i];
	}
	return suma;
}
console.log(sumaArgumentos(1, 2, 3, 4, 5, 6));
*/

function sumaArgumentos() {
	let dato = prompt('Ingrese numeros: ', '1, 2, 3, 4, 5, 6');
	let rest = dato.split(',');
	let suma = 0;
	for (i = 0; i < rest.length; i++) {
		suma = suma + parseInt(rest[i]);
	}
	console.log('EJERCICIO 4');
	console.log(suma);
	/* Crear elementos */
	const etiqueta4 = document.createElement('p');
	// Llenar elemento
	const resultado4 = suma;
	etiqueta4.textContent = resultado4;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor4 = document.getElementById('contenedor4');
	contenedor4.appendChild(etiqueta4);
}

//5.-Crear una función que reciba un array de valores y filtre los valores que no son string
const words = [
	'spray',
	'limit',
	'elite',
	'exuberant',
	'destruction',
	'present',
	1,
	2,
	3,
];

const idEliminar = '*';
const nuevoArreglo = words.filter((valor) => valor >= idEliminar);
console.log('EJERCICIO 5');
console.log(nuevoArreglo);

/* Crear elementos */
const etiqueta5 = document.createElement('p');
// Llenar elemento
const resultado5 = nuevoArreglo;
etiqueta5.textContent = resultado5;
// Setear atributo (opcional)
// Pintarlo en el DOM
const contenedor5 = document.getElementById('contenedor5');
contenedor5.appendChild(etiqueta5);

//6.-Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
const arrNumeros = [1, 2, 3, 4, 5];
let ArrMax = Math.max.apply(Math, arrNumeros);
let ArrMin = Math.min.apply(Math, arrNumeros);
console.log(ArrMax);
console.log(ArrMin);
const nuevoArregloNumeros = arrNumeros.filter(
	(valor) => valor == ArrMin || valor == ArrMax
);
console.log('EJERCICIO 6');
console.log(nuevoArregloNumeros);
/* Crear elementos */
const etiqueta6 = document.createElement('p');
// Llenar elemento
const resultado6 = nuevoArregloNumeros;
etiqueta6.textContent = resultado6;
// Setear atributo (opcional)
// Pintarlo en el DOM
const contenedor6 = document.getElementById('contenedor6');
contenedor6.appendChild(etiqueta6);

//7.-Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
/*
const arrNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function formatPhoneNumber(arrNumeros2) {
	let cadena = '';
	for (let i = 0; i <= 9; i++) {
		if (i == 0) {
			cadena += '(';
		}
		if (i == 3) {
			cadena += ') ';
		}
		if (i == 6) {
			cadena += '-';
		}
		cadena += arrNumeros2[i];
	}
	console.log(cadena);
}
formatPhoneNumber(arrNumeros2);
*/
const arrNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function formatPhoneNumber() {
	let dato = prompt('Ingrese 10 numeros: ', '1, 2, 3, 4, 5, 6, 7, 8, 9, 0');
	let arrNumeros2 = dato.split(',');
	let cadena = '';
	for (let i = 0; i <= 9; i++) {
		if (i == 0) {
			cadena += '(';
		}
		if (i == 3) {
			cadena += ') ';
		}
		if (i == 6) {
			cadena += '-';
		}
		cadena += arrNumeros2[i];
	}
	console.log('EJERCICIO 7');
	console.log(cadena);
	/* Crear elementos */
	const etiqueta7 = document.createElement('p');
	// Llenar elemento
	const resultado7 = cadena;
	etiqueta7.textContent = resultado7;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor7 = document.getElementById('contenedor7');
	contenedor7.appendChild(etiqueta7);
}
/*formatPhoneNumber(arrNumeros2);*/
//8.-Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
const array8 = [
	[4, 2, 7, 1],
	[20, 70, 40, 90],
	[1, 2, 0],
];
function findLargestNums(arrays) {
	let nuevo = [];
	for (let i = 0; i <= array8.length - 1; i++) {
		//	nuevo.push(Math.max.apply(Math, arrays[i]));
		nuevo.push(Math.max.apply(Math, arrays[i]));
	}
	//return console.log(nuevo);
	console.log('EJERCICIO 8');
	console.log(nuevo);
	//console.log(nuevo);
	/* Crear elementos */
	const etiqueta8 = document.createElement('p');
	// Llenar elemento
	const resultado8 = nuevo;
	etiqueta8.textContent = resultado8;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor8 = document.getElementById('contenedor8');
	contenedor8.appendChild(etiqueta8);
}

findLargestNums(array8);

//9.-Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
//charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
/*
function charIndex(valor, caracter) {
	primero = valor.indexOf(caracter);
	ultimo = valor.lastIndexOf(caracter);
	return console.log(
		`The first ${caracter} has index ${primero}, the last ${caracter} has index ${ultimo}`
	);
}
charIndex('hello', 'l');
charIndex('circumlocution', 'c');
*/
function charIndex() {
	let valor = prompt('Ingrese texto: ');
	let caracter = prompt('Ingrese caracter: ');
	primero = valor.indexOf(caracter);
	ultimo = valor.lastIndexOf(caracter);
	//	return console.log(`The first ${caracter} has index ${primero}, the last ${caracter} has index ${ultimo}`	);
	console.log('EJERCICIO 9');
	console.log(
		`The first ${caracter} has index ${primero}, the last ${caracter} has index ${ultimo}`
	);
	resultado9 = `The first ${caracter} has index ${primero}, the last ${caracter} has index ${ultimo}`;
	/* Crear elementos */
	const etiqueta9 = document.createElement('p');
	// Llenar elemento
	//const resultado9 = nuevo;
	etiqueta9.textContent = resultado9;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor9 = document.getElementById('contenedor9');
	contenedor9.appendChild(etiqueta9);
}

//10.-Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
function toArray(objeto) {
	let arregloDeClavesYValores = Object.entries(objeto);

	/* Crear elementos */
	const etiqueta10 = document.createElement('p');
	// Llenar elemento
	const resultado10 = arregloDeClavesYValores;
	etiqueta10.textContent = resultado10;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor10 = document.getElementById('contenedor10');
	contenedor10.appendChild(etiqueta10);
	console.log('EJERCICIO 10');
	return console.log(arregloDeClavesYValores);
}
toArray({ a: 1, b: 2 });

//11.-Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
/*
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
	{ name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700
*/
arrBudgets = [
	{ name: 'John', age: 21, budget: 23000 },
	{ name: 'Steve', age: 32, budget: 40000 },
	{ name: 'Martin', age: 16, budget: 2700 },
];
function getBudgets(objeto) {
	let suma = 0;
	for (i = 0; i < objeto.length; i++) {
		suma = suma + objeto[i].budget;
	}
	/* Crear elementos */
	const etiqueta11 = document.createElement('p');
	// Llenar elemento
	const resultado11 = suma;
	etiqueta11.textContent = resultado11;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor11 = document.getElementById('contenedor11');
	contenedor11.appendChild(etiqueta11);
	console.log('EJERCICIO 11');
	return suma;
}
console.log('EJERCICIO 11');
console.log(getBudgets(arrBudgets));

//12.-Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
/*
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]
*/
let arrStudentNames = [{ name: 'Steve' }, { name: 'Mike' }, { name: 'John' }];
function getStudentNames(array) {
	let nuevo = [];
	for (let i = 0; i <= array.length - 1; i++) {
		nuevo.push(array[i].name);
	}
	/* Crear elementos */
	const etiqueta12 = document.createElement('p');
	// Llenar elemento
	const resultado12 = nuevo;
	etiqueta12.textContent = resultado12;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor12 = document.getElementById('contenedor12');
	contenedor12.appendChild(etiqueta12);
	return nuevo;
}
console.log('EJERCICIO 12');
console.log(getStudentNames(arrStudentNames));

//13.-Escriba una función que convierta un objeto en una matriz de claves y valores.
/*
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
*/
/*
function objectToArray(objeto) {
	let arregloDeClavesYValores = Object.entries(objeto);
	console.log('EJERCICIO 13');
	return console.log(arregloDeClavesYValores);
}
objectToArray({
	likes: 2,
	dislikes: 3,
	followers: 10,
});
*/
function objectToArray(objeto) {
	let arregloDeClavesYValores = Object.entries(objeto);
	console.log('EJERCICIO 13');
	/* Crear elementos */
	const etiqueta13 = document.createElement('p');
	// Llenar elemento
	const resultado13 = arregloDeClavesYValores;
	etiqueta13.textContent = resultado13;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor13 = document.getElementById('contenedor13');
	contenedor13.appendChild(etiqueta13);
	return console.log(arregloDeClavesYValores);
}
objectToArray({
	likes: 2,
	dislikes: 3,
	followers: 10,
});

//14.-Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
/*
function squaresSum(valor) {
	let suma = 0;
	for (i = 1; i <= valor; i++) {
		suma = suma + Math.pow(i, 2);
	}
	return suma;
}
console.log(squaresSum(3));
*/
function squaresSum() {
	let valor = parseInt(prompt('Ingrese numero: '));
	let suma = 0;
	for (i = 1; i <= valor; i++) {
		suma = suma + Math.pow(i, 2);
	}
	console.log('EJERCICIO 14');
	console.log(suma);
	/* Crear elementos */
	const etiqueta14 = document.createElement('p');
	// Llenar elemento
	const resultado14 = suma;
	etiqueta14.textContent = resultado14;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor14 = document.getElementById('contenedor14');
	contenedor14.appendChild(etiqueta14);
	//	return suma;
}
//console.log('EJERCICIO 14');
//console.log(squaresSum(3));

//15.-Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function multiplyByLength(array) {
	let largo = array.length;
	let nuevo = [];
	for (let i = 0; i <= array.length - 1; i++) {
		nuevo.push(array[i] * largo);
	}
	console.log('EJERCICIO 15');
	/* Crear elementos */
	const etiqueta15 = document.createElement('p');
	// Llenar elemento
	const resultado15 = nuevo;
	etiqueta15.textContent = resultado15;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor15 = document.getElementById('contenedor15');
	contenedor15.appendChild(etiqueta15);
	return nuevo;
}
console.log('EJERCICIO 15');
console.log(multiplyByLength([2, 3, 1, 0]));

//16.-Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]
/*
function countdown(numero) {
	let nuevo = [];
	for (let i = numero; i >= 0; i--) {
		nuevo.push(i);
	}
	return nuevo;
}
console.log(countdown(5));
*/
function countdown() {
	let numero = parseInt(prompt('Ingrese numero: '));
	let nuevo = [];
	for (let i = numero; i >= 0; i--) {
		nuevo.push(i);
	}
	console.log('EJERCICIO 16');
	console.log(nuevo);
	/* Crear elementos */
	const etiqueta16 = document.createElement('p');
	// Llenar elemento
	const resultado16 = nuevo;
	etiqueta16.textContent = resultado16;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor16 = document.getElementById('contenedor16');
	contenedor16.appendChild(etiqueta16);
	//	return nuevo;
}
//console.log(countdown(5));

//17.-Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

function diffMaxMin(arrNumeros) {
	let ArrMax = Math.max.apply(Math, arrNumeros);
	let ArrMin = Math.min.apply(Math, arrNumeros);
	/* Crear elementos */
	const etiqueta17 = document.createElement('p');
	// Llenar elemento
	const resultado17 = ArrMin - ArrMax;
	etiqueta17.textContent = resultado17;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor17 = document.getElementById('contenedor17');
	contenedor17.appendChild(etiqueta17);
	return ArrMin - ArrMax;
}
console.log('EJERCICIO 17');
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

//18.-Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function filterList(array) {
	let nuevo = [];
	for (let i = 0; i < array.length; i++) {
		if (!isNaN(array[i])) {
			nuevo.push(array[i]);
		}
	}
	/* Crear elementos */
	const etiqueta18 = document.createElement('p');
	// Llenar elemento
	const resultado18 = nuevo;
	etiqueta18.textContent = resultado18;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor18 = document.getElementById('contenedor18');
	contenedor18.appendChild(etiqueta18);
	return console.log(nuevo);
}

console.log('EJERCICIO 18');
filterList([1, 2, 3, 'x', 'y', 10]);

//19.-Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento)
//es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad
//de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
//repeat(13, 5) ➞ [13, 13, 13, 13, 13]
/*
function repeat(elemento, tiempos) {
		let nuevo = [];
		for (let i = 0; i < tiempos; i++) {
			nuevo.push(elemento);
		}
		return console.log(nuevo);
	}
	repeat(13, 5);
	*/
function repeat() {
	let elemento = prompt('Ingrese elemento: ');
	let tiempos = parseInt(prompt('Ingrese numero tiempos: '));
	let nuevo = [];
	for (let i = 0; i < tiempos; i++) {
		nuevo.push(elemento);
	}
	/* Crear elementos */
	const etiqueta19 = document.createElement('p');
	// Llenar elemento
	const resultado19 = nuevo;
	etiqueta19.textContent = resultado19;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor19 = document.getElementById('contenedor19');
	contenedor19.appendChild(etiqueta19);
	console.log('EJERCICIO 19');
	return console.log(nuevo);
}
//console.log('EJERCICIO 19');
//repeat(13, 5);

//20.-Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas
//las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"
/*
function vreplace(cadena, vocal) {
	return console.log(cadena.replace(/[aeiou]/gi, vocal));
}
console.log('EJERCICIO 20');
vreplace('apples and bananas', 'e');
*/
function vreplace() {
	let cadena = prompt('Ingrese cadena: ');
	let vocal = prompt('Ingrese vocal: ');
	/* Crear elementos */
	const etiqueta20 = document.createElement('p');
	// Llenar elemento
	const resultado20 = cadena.replace(/[aeiou]/gi, vocal);
	etiqueta20.textContent = resultado20;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor20 = document.getElementById('contenedor20');
	contenedor20.appendChild(etiqueta20);
	console.log('EJERCICIO 20');
	return console.log(cadena.replace(/[aeiou]/gi, vocal));
}
//console.log('EJERCICIO 20');
//vreplace('apples and bananas', 'e');

//21.-Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena
//como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
/*
function findNemo(cadena, palabra) {
	resultado = cadena.indexOf(palabra);
	return console.log(resultado);
}
console.log('EJERCICIO 21');
findNemo('I am finding Nemo !', 'Nemo');
 */
function findNemo() {
	let cadena = prompt('Ingrese cadena: ', 'I am finding Nemo !');
	let palabra = prompt('Ingrese vocal: ', 'Nemo');
	resultado = cadena.indexOf(palabra);

	/* Crear elementos */
	const etiqueta21 = document.createElement('p');
	// Llenar elemento
	const resultado21 = resultado;
	etiqueta21.textContent = resultado21;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor21 = document.getElementById('contenedor21');
	contenedor21.appendChild(etiqueta21);
	console.log('EJERCICIO 21');
	console.log(resultado);
	//return console.log(resultado);
}
//console.log('EJERCICIO 21');
//findNemo('I am finding Nemo !', 'Nemo');

//22.-Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"
/*
function capLast(string) {
	let arr = string.split(' ');
	let farr = arr.map((item) => {
		let x = item.split('');
		let len = x.length - 1;
		x[len] = x[len].toUpperCase();
		x = x.join('');
		return x;
	});
	return farr.join(' ');
}
console.log('EJERCICIO 22');
console.log(capLast('hello hello'));
*/
function capLast() {
	let string = prompt('Ingrese palabra: ');
	let arr = string.split(' ');
	let farr = arr.map((item) => {
		let x = item.split('');
		let len = x.length - 1;
		x[len] = x[len].toUpperCase();
		x = x.join('');
		return x;
	});
	/* Crear elementos */
	const etiqueta22 = document.createElement('p');
	// Llenar elemento
	const resultado22 = farr.join(' ');
	etiqueta22.textContent = resultado22;
	// Setear atributo (opcional)
	// Pintarlo en el DOM
	const contenedor22 = document.getElementById('contenedor22');
	contenedor22.appendChild(etiqueta22);

	console.log('EJERCICIO 22');
	console.log(farr.join(' '));
	//return farr.join(' ');
}
//console.log('EJERCICIO 22');
//console.log(capLast('hello hello'));
