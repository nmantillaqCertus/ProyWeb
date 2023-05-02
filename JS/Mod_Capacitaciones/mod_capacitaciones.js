$(document).ready(function () {


    if (window.location.search.includes("U=")) {
        let usuarioEnviado = window.location.search.split('=')[1];

        if (usuarioEnviado.length > 0) {

            usuarioLogueado.push({
                usuario: objetoInicioSesion.usuario,
                Nombres: objetoInicioSesion.nombres,
                NroCursos: objetoInicioSesion.NroCursos
            });

            $("#ID_UserLogin").text(usuarioLogueado[0].Nombres);
            $("#ID_NroCursos").text(usuarioLogueado[0].NroCursos);

            

        } else {
            window.location = "../Login/login.html";
        }

    } else {
        window.location = "../Login/login.html";
    }
});