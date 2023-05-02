

$("#ID_IniciarSesion").on("click", function () {

    let nombreUsuario = $("#ID_Nombre_Usuario").val().trim();
    let contraseniaUsuario = $("#ID_Contrasenia").val().trim();

    //llamar a un serivio para la validación de credenciales
    if(nombreUsuario == objetoInicioSesion.usuario && contraseniaUsuario == objetoInicioSesion.password){
        $("#ID_MensajeError").hide();
        window.location = "../Capacitaciones/bandeja_Capacitaciones.html?U="+objetoInicioSesion.usuario;
    }else{
        $("#ID_Nombre_Usuario").focus();
        $("#ID_MensajeError").show();
    }
});