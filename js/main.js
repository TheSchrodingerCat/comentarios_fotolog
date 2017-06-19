
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

	var nombre, comentario, cajaComentario, user, nameUser, coment, contenidoComent, contHeart, myHeart, esteCorazon;
	var j = 0;
	var position = [];
	for (i=0 ; i<localStorage.length ; i++){
		nombre = localStorage.key(i);
		comentario = localStorage.getItem(nombre);

		j++;
		position.push(j);
		console.log(position);
		console.log(j);

		if (nombre!="" || comentario!=""){
			//ahora creamos el div contenedor del comentario
			cajaComentario = document.createElement("div");
			cajaComentario.classList.add("new-coment");

			//creamos el usuario del comentario
			user = document.createElement("h4");
			nameUser = document.createTextNode(nombre);
			user.appendChild(nameUser);

			//creamos el comentario
			coment = document.createElement("p");
			contenidoComent = document.createTextNode(comentario);
			coment.appendChild(contenidoComent);

			//corazon
			contHeart = document.createElement("div");
			contHeart.classList.add("text-right");

			myHeart = document.createElement("i");
			myHeart.classList.add("fa");
			myHeart.classList.add("fa-heart");
			myHeart.classList.add("corazon");
			myHeart.setAttribute("aria-hidden","true");
			myHeart.setAttribute("id","corazon" + i.toString());

			contHeart.appendChild(myHeart);

			//ahora la div del comentario adopta al user y el coment
			cajaComentario.appendChild(user);
			cajaComentario.appendChild(coment);
			cajaComentario.appendChild(contHeart);

			//y el contenedor adopta al div del comentario
			contenedorComentarios.appendChild(cajaComentario);

			//cambio de color del corazon
			//NO FUNCIONA. AL ESTAR DENTRO DEL FOR SIEMPRE TOMA EL ULTIMO CORAZON.
			//NO SE COMO HACERLO DESDE AFUERA DEL FOR
			esteCorazon = document.getElementById("corazon" + position.indexOf(j).toString());
			esteCorazon.addEventListener("click",function(){
				esteCorazon.classList.toggle("rojo");
			});
		}
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