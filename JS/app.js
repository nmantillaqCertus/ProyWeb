var ListaUsuarios = [
    {
        usuario: "user",
        password: "123456",
        nombres: "Alumno Certus",
        NroCursos: 10
    },
    {
        usuario: "admin",
        password: "123456",
        nombres: "Administrador Certus",
        NroCursos: 5
    },
    {
        usuario: "invitado",
        password: "789456",
        nombres: "Invitado",
        NroCursos: 3
    }
];

var ListaCursos = [
    {
        curso: "mátematicas",
        creditos: "13",
        turno: "Mañana",
        docente: "Roberto Salazar"
    },
    {
        curso: "ciencias",
        creditos: "19",
        turno: "Mañana",
        docente: "Alvaro Carreño"
    },
    {
        curso: "comunicacion",
        creditos: "17",
        turno: "Mañana",
        docente: "Roberto Salazar"
    },
    {
        curso: "Arte y Cultura",
        creditos: "19",
        turno: "Mañana",
        docente: "Alvaro Carreño"
    },
    {
        curso: "tecnologias",
        creditos: "15",
        turno: "Tarde",
        docente: "Ignacio Flores"
    },
    {
        curso: "Educacion Fisica",
        creditos: "13",
        turno: "Mañana",
        docente: "Roberto Salazar"
    },
    {
        curso: "Robotica",
        creditos: "19",
        turno: "Mañana",
        docente: "Alvaro Carreño"
    },
    {
        curso: "Electronica",
        creditos: "17",
        turno: "Mañana",
        docente: "Roberto Salazar"
    },
    {
        curso: "Cosmetologia",
        creditos: "19",
        turno: "Mañana",
        docente: "Alvaro Carreño"
    },
    {
        curso: "Tutoria",
        creditos: "15",
        turno: "Tarde",
        docente: "Ignacio Flores"
    },
    {
        curso: "Enfermeria",
        creditos: "19",
        turno: "Mañana",
        docente: "Alvaro Carreño"
    },
    {
        curso: "Musica",
        creditos: "15",
        turno: "Tarde",
        docente: "Ignacio Flores"
    }
];

var usuarioLogueado = [];

function autenticateUser(valUser, valPass){    
    let usuarioEncontrado;
    try {
        usuarioEncontrado = ListaUsuarios.find(u => u.usuario == valUser && u.password == valPass); 
        if(usuarioEncontrado == undefined || usuarioEncontrado == ""){
            return "ER"
        }
    } catch (error) {
        return "ER"
    }    
    return btoa(usuarioEncontrado.usuario);
}



function validateUser(valUser){
    if (valUser.length > 0) {        
        let usuarioDecoded;
        let usuarioRecibido;
        try {
            usuarioDecoded = atob(valUser);
            usuarioRecibido = ListaUsuarios.find(u => u.usuario == usuarioDecoded);
            if(usuarioRecibido == undefined || usuarioRecibido == ""){
                return false;
            }
            usuarioLogueado.push({
                usuario: usuarioRecibido.usuario,
                Nombres: usuarioRecibido.nombres,
                NroCursos: usuarioRecibido.NroCursos
            });

        } catch (error) {
            return false;
        }
    } else {
        return false;
    }
    return true;
}