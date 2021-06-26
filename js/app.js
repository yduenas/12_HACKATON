class carrito {
	constructor(image, precio, titulo, id) {
		this.image = image;
		this.precio = precio;
		this.titulo = titulo;
		this.id = id;
	}

	cargarcarrito() {
		infoCursos.forEach((infoCurso, index) => {
			const tr = document.createElement('tr');
			const td1 = document.createElement('td');
			const img1 = document.createElement('img');
			const td2 = document.createElement('td');
			const td3 = document.createElement('td');
			const td4 = document.createElement('td');
			const i4 = document.createElement('i');
			const a4 = document.createElement('a');
			// console.log(tr);
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
			// Setear atributo (opcional)
			// Pintarlo en el DOM
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			const contenedor = document.getElementById('tbody');
			//console.log(contenedor);
			contenedor.appendChild(tr);
		});
		numero.textContent = infoCursos.length;
	}
	crearElemento() {
		/* inicio */
		/* cargar al modal */

		/* Crear elementos */
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		const img1 = document.createElement('img');
		const td2 = document.createElement('td');
		const td3 = document.createElement('td');
		const td4 = document.createElement('td');
		const i4 = document.createElement('i');
		const a4 = document.createElement('a');
		// console.log(tr);
		// Llenar elemento
		img1.src = this.image;
		td1.appendChild(img1);
		//td1.textContent = this.imagen;
		td2.textContent = this.titulo;
		td3.textContent = this.precio;
		a4.setAttribute('onClick', 'eliminarCursoID(' + this.id + ')');
		i4.setAttribute('class', 'fas fa-trash-alt');
		a4.appendChild(i4);
		td4.appendChild(a4);
		tr.setAttribute('id', this.id);
		// Setear atributo (opcional)
		// Pintarlo en el DOM
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		const contenedor = document.getElementById('tbody');
		//console.log(contenedor);
		contenedor.appendChild(tr);
		/* / cargar al modal */

		/* grabar array */
		this.getInfoCurso();

		/* fin */
	}
	getInfoCurso() {
		const infoCurso = {
			image: this.image,
			precio: this.precio,
			titulo: this.titulo,
			id: this.id,
		};

		infoCursos = [...infoCursos, infoCurso];
		infoCursos = infoCursos.filter((item, index) => {
			return infoCursos.indexOf(item) === index;
		});

		//console.log(infoCursos);

		//console.log(cursoss);
		//	numero.textContent = parseFloat(numero.textContent) + 1;

		numero.textContent = infoCursos.length;
		//	alert(numero.textContent);
		//alert('guardar');
		//guardarLocalStorage();
		this.guardarLocalStorage();

		//localStorage.setItem('compras', JSON.stringify(infoCursos));
	}
	eliminarCursoID() {
		console.log('este es el id' + this.id);
		var elemento = document.getElementById(this.id);
		if (!elemento) {
			alert('El elemento selecionado no existe');
		} else {
			elemento.remove();
		}
		console.log(infoCursos);

		infoCursos = infoCursos.filter((curso) => curso.id != this.id);

		console.log(infoCursos);
		numero.textContent = infoCursos.length;
		this.guardarLocalStorage();
		//localStorage.setItem('compras', JSON.stringify(infoCursos));
	}
	eliminarCursoTOTAL() {
		infoCursos.forEach((infoCurso, index) => {
			eliminarCursoID(infoCurso.id);
		});
		numero.textContent = infoCursos.length;
		this.guardarLocalStorage();
		//localStorage.setItem('compras', JSON.stringify(infoCursos));
	}
	guardarLocalStorage() {
		//alert('Guardar');
		localStorage.setItem('compras', JSON.stringify(infoCursos));
	}
	obtenerLocalStorage() {
		return JSON.parse(localStorage.getItem('compras'));
	}
}

/* DESDE AQUI */
const padre = document.getElementById('padre');
//console.log(padre);
//let cursoss = [];
//console.log(cursoss);
let infoCursos = [];
if (localStorage.getItem('compras')) {
	//	alert('existe');
	let localstor = JSON.parse(localStorage.getItem('compras'));
	infoCursos = localstor;
	console.log(infoCursos);
} else {
	//	alert('NO existe');
	infoCursos = [];
}

const iniciar = new carrito(null, null, null, null);
iniciar.cargarcarrito();

console.log(infoCursos);

padre.addEventListener('click', (e) => {
	if (e.target.classList.contains('comprar')) {
		//	console.log(e.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.textContent);
		hijo = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
		imagen = hijo.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.src;
		nombre = hijo.firstElementChild.children[1].firstElementChild.firstElementChild.textContent;
		precio = hijo.firstElementChild.children[1].children[2].children[1].children[1].textContent;
		id = hijo.firstElementChild.children[1].firstElementChild.children[1].textContent;
		/**** Validar si existe ****/
		const idBuscar = id;
		const resultado = infoCursos.find((infoCurso) => infoCurso.id === idBuscar);
		if (resultado) {
			console.log(resultado);
		} else {
			console.log('NO Existe Ingresar');
			//console.log(resultadoNombre.id);

			const nuevoArticulo = new carrito(imagen, precio, nombre, id);
			nuevoArticulo.crearElemento();
		}
	}
});

function eliminarCursoID(id) {
	//	alert('eliminado numero: ' + id) + ' fue Eliminado';
	const eliminar = new carrito(imagen, precio, nombre, id);
	eliminar.eliminarCursoID();
}

function eliminarCursoTOTAL() {
	//	alert('Eliminado todo');
	const eliminarTodo = new carrito(imagen, precio, nombre, id);
	eliminarTodo.eliminarCursoTOTAL();
}
