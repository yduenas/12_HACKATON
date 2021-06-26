const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#Lista-Carrito tbody');
const vaciarCarro = document.getElementById('vaciar-carrito');

//cargarListeners();

function cargarListeners() {
	cursos.addEventListener('click', comprarCurso);
	cursos.addEventListener('click', eliminarCurso);
	cursos.addEventListener('click', vaciarCurso);
	cursos.addEventListener('DOMContentLoaded', leerLocalStorage);
}
function comprarCurso(e) {
	e.preventDefault();
	if (e.target.classList.contains('agregar-carrito')) {
		let curso = e.target.parentElement.parentElement;
	}
}
function leerDAtosCruso(curso) {}
function insertarCarrito(curso) {
	const infoCurso = {
		image: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span').textContent,
		id: curso.querySelector('a').getAttribute('data-id'),
	};
	insertarCarrito(infoCurso);
}
function eliminarCurso(e) {}

/* DESDE AQUI */
const padre = document.getElementById('padre');
//padre.firstElementChild.style.color = 'blue';
//console.log((padre.firstElementChild.style.color = 'blue'));
/*
padre.style.display = 'none';
document.getElementById('padre').remove();
*/
let cursoss = [];
let infoCursos = [];
padre.addEventListener('click', (e) => {
	if (e.target.classList.contains('comprar')) {
		//	console.log(e.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.textContent);

		hijo = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
		imagen = hijo.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.src;
		nombre = hijo.firstElementChild.children[1].firstElementChild.firstElementChild.textContent;
		precio = hijo.firstElementChild.children[1].children[2].children[1].children[1].textContent;
		id = hijo.firstElementChild.children[1].firstElementChild.children[1].textContent;

		/*********** */
		const idBuscar = id;
		const resultado = infoCursos.find((infoCurso) => infoCurso.id === idBuscar);
		if (resultado) {
			console.log(resultado);
		} else {
			console.log('NO Existe Ingresar');

			//console.log(resultadoNombre.id);
			/********* */

			const infoCurso = {
				image: imagen,
				titulo: nombre,
				precio: precio,
				id: id,
			};
			/* cargar al modal */
			console.log(infoCurso);
			/* Crear elementos */
			const tr = document.createElement('tr');
			const td1 = document.createElement('td');
			const img1 = document.createElement('img');
			const td2 = document.createElement('td');
			const td3 = document.createElement('td');
			const td4 = document.createElement('td');
			const i4 = document.createElement('i');
			const a4 = document.createElement('a');

			console.log(tr);
			// Llenar elemento
			img1.src = infoCurso.image;
			td1.appendChild(img1);
			//td1.textContent = infoCurso.imagen;
			td2.textContent = infoCurso.titulo;
			td3.textContent = infoCurso.precio;
			a4.setAttribute('onClick', 'eliminarCursoID(' + infoCurso.id + ')');
			i4.setAttribute('class', 'fas fa-trash-alt');
			a4.appendChild(i4);
			td4.appendChild(a4);
			tr.setAttribute('id', infoCurso.id);
			//console.log(nameAlumno);
			// Setear atributo (opcional)
			//td1.setAttribute('width', '30%');
			//nameAlumno.setAttribute('id', 'alumno');
			//nameAlumno.setAttribute('class', 'alumno');
			// Pintarlo en el DOM
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			const contenedor = document.getElementById('tbody');
			console.log(contenedor);
			contenedor.appendChild(tr);
			/* / cargar al modal */

			infoCursos = [...infoCursos, infoCurso];
			infoCursos = infoCursos.filter((item, index) => {
				return infoCursos.indexOf(item) === index;
			});
			/*
		console.log(hijo);
		console.log(imagen);
		console.log(nombre);
		console.log(precio);
		console.log(id);
		console.log(infoCurso);
		*/
			console.log(infoCursos);

			console.log(cursoss);
			//	numero.textContent = parseFloat(numero.textContent) + 1;

			numero.textContent = infoCursos.length;
			//	alert(numero.textContent);

			localStorage.setItem('compras', JSON.stringify(infoCursos));
		}
	}
});

function eliminarCursoID(id) {
	//	alert('eliminado numero: ' + id) + ' fue Eliminado';
	var elemento = document.getElementById(id);
	if (!elemento) {
		alert('El elemento selecionado no existe');
	} else {
		elemento.remove();
	}
	console.log(infoCursos);

	infoCursos = infoCursos.filter((curso) => curso.id != id);

	console.log(infoCursos);
	numero.textContent = infoCursos.length;
	localStorage.setItem('compras', JSON.stringify(infoCursos));
}

function eliminarCursoTOTAL() {
	//	alert('Eliminado todo');

	infoCursos.forEach((infoCurso, index) => {
		eliminarCursoID(infoCurso.id);
	});
	numero.textContent = infoCursos.length;
	localStorage.setItem('compras', JSON.stringify(infoCursos));
}
