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
    debugger
    
    tablaDatos =     $('#ID_TABLE_DATA').DataTable({
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
        }
    });
    
    console.log(ListaCursos);
    for(let i = 0; i < ListaCursos.length; i++){
        tablaDatos.row.add([
            "<span>"+ListaCursos[i].curso+"</span>",
            "<span>"+ListaCursos[i].creditos+"</span>",
            "<span>"+ListaCursos[i].turno+"</span>",
            "<span>"+ListaCursos[i].docente+"</span>"
        ]).draw();
    }

}


