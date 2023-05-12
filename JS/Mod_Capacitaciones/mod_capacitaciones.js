$(document).ready(function () {


    if (window.location.search.includes("U=")) {
        let usuarioEnviado = window.location.search.split('=')[1];

        if (usuarioEnviado.length > 0) {

            //Validar el usuario
            usuarioLogueado.push({
                usuario: objetoInicioSesion.usuario,
                Nombres: objetoInicioSesion.nombres,
                NroCursos: objetoInicioSesion.NroCursos
            });

            $("#ID_UserLogin").text(usuarioLogueado[0].Nombres);
            $("#ID_NroCursos").text(usuarioLogueado[0].NroCursos);

            //Fin Validar el usuario

            //Operaciones
            inicializarTabla();



        } else {
            window.location = "../Login/login.html";
        }

    } else {
        window.location = "../Login/login.html";
    }
});

let tablaDatos;

function inicializarTabla(){

    tablaDatos = new DataTable('#ID_TABLE_DATA');

}


