


$("#ID_IniciarSesion").on("click", function () {
    let nombreUsuario = $("#ID_Nombre_Usuario").val().trim();
    let contraseniaUsuario = $("#ID_Contrasenia").val();
    let userAutenticated = autenticateUser(nombreUsuario, contraseniaUsuario);
    if (userAutenticated!= "ER") {
        $("#ID_MensajeError").hide();
        window.location = "../Capacitaciones/bandeja_Capacitaciones.html?U="+userAutenticated;        
    } else {
        $("#ID_Nombre_Usuario").focus();
        $("#ID_MensajeError").show();
    }
});
