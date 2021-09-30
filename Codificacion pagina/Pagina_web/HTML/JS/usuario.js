function confirmar(){
    return confirm ("Desea agregar el registro")
}

function salir(){
    var pregunta = confirm("¿Deseas visitar la página principal?")
	if (pregunta){
        window.location = "http://127.0.0.1:5501/Codificacion%20pagina/Pagina_web/HTML/login.html";
	}
	else if (pregunta){
		window.location = "http://127.0.0.1:5501/Codificacion%20pagina/Pagina_web/HTML/usuario.html";
	}
}