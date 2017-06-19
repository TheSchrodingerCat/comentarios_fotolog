
//para limpiar los comentarios
function limpiaContenedor(){
	var contenedorComentarios = document.getElementById("mis-comentarios");
	contenedorComentarios.innerHTML = "";
}


//se guardan los datos
function guardarDatos(){
	miClave = document.getElementById("clave").value;
	miValor = document.getElementById("valor").value;

	localStorage.setItem(miClave,miValor);

	var contenedorComentarios = document.getElementById("mis-comentarios");
	//se limpia el contenedor
	contenedorComentarios.innerHTML = "";

	for (i=0 ; i<localStorage.length ; i++){
		var nombre = localStorage.key(i);
		var comentario = localStorage.getItem(nombre);

		//ahora creamos el div contenedor del comentario
		var cajaComentario = document.createElement("div");
		cajaComentario.classList.add("new-coment");

		//creamos el usuario del comentario
		var user = document.createElement("h4");
		var nameUser = document.createTextNode(nombre);
		user.appendChild(nameUser);

		//creamos el comentario
		var coment = document.createElement("p");
		var contenidoComent = document.createTextNode(comentario);
		coment.appendChild(contenidoComent);

		//ahora la div del comentario adopta al user y el coment
		cajaComentario.appendChild(user);
		cajaComentario.appendChild(coment);

		//y el contenedor adopta al div del comentario
		contenedorComentarios.appendChild(cajaComentario);
	}

	//para limpiar los inputs
	document.getElementById("clave").value = "";
	document.getElementById("valor").value = "";
}

(function guardando(){
	document.getElementById("guardar").addEventListener("click",guardarDatos);
	guardarDatos();
})();

//se borran los datos
function borrarDatos(){
	window.localStorage.clear();
	limpiaContenedor();
}

(function borrando(){
	document.getElementById("limpiar-datos").addEventListener("click",borrarDatos);
})();