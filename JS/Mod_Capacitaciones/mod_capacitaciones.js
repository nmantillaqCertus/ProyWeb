$(document).ready(function () {


    if (window.location.search.includes("U=")) {
        let usuarioEnviado = window.location.search.split('=')[1].trim();

        if (validateUser(usuarioEnviado)) {
            $("#ID_UserLogin").text(usuarioLogueado[0].Nombres);
            $("#ID_NroCursos").text(usuarioLogueado[0].NroCursos);
            inicializarTabla();
        } else {
            let respuestaUsuario = confirm("Operación incorrecta, por favor vuelva a inciar sesión");
            if (respuestaUsuario || !respuestaUsuario) {
                window.location = "../Login/login.html";
            }
        }
    } else {
        window.location = "../Login/login.html";
    }
    
});

let tablaDatos;

function inicializarTabla() {

    tablaDatos = new DataTable('#ID_TABLE_DATA');

}


