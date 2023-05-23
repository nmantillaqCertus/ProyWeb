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