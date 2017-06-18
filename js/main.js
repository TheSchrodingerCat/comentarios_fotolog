
(function main(){

	//botones se crean en el index.html

	//llamamos a la ID del botón Guardar y le asignamos el evento "click"
	document.getElementById("guardar").addEventListener("click",postear);

	function postear(){

		//primero, se guardan los datos
		(function guardarDatos(){
			localStorage.nombre = document.getElementById("clave").value;
			localStorage.comentario = document.getElementById("valor").value;
		})();



		//lamamos a la ID llamamos a la ID de el div contenedor
		var contenedor = document.getElementById("mis-comentarios");

		//creamos la div del comentario
		var cajaComentario = document.createElement("div");
		cajaComentario.classList.add("new-coment");
	}
})();