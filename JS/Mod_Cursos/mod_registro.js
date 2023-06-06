$(document).ready(function () {

    $('#ID_GuardarCurso').on('click', function () {
        guardarCurso();
    });



});


function validarCampos() {

    let token = true;
    let nombreCurso = $("#ID_Curso").val();
    if (nombreCurso.trim().length == 0) {
        token = false;
        $("#ID_Curso_E").show();
    } else { $("#ID_Curso_E").hide() }

    let creditosCurso = $("#ID_Creditos").val();
    if (creditosCurso.trim().length == 0) {
        token = false;
        $("#ID_Creditos_E").show();
    } else { $("#ID_Creditos_E").hide() }

    let turnoCurso = $("#ID_Turno").val();
    if (turnoCurso.trim().length == 0) {
        token = false;
        $("#ID_Turno_E").show();
    } else { $("#ID_Turno_E").hide() }

    let docenteCurso = $("#ID_Docente").val();
    if (docenteCurso.trim().length == 0) {
        token = false;
        $("#ID_Docente_E").show();
    } else { $("#ID_Docente_E").hide() }

    return token;
}

function guardarCurso() {
    if (validarCampos()) {

        ListaCursos.push(
            {
                curso: $("#ID_Curso").val(),
                creditos: $("#ID_Creditos").val(),
                turno: $("#ID_Turno").val(),
                docente: $("#ID_Docente").val()
            },
        );
        //limpiando datos
        $("#ID_Curso").val("");
        $("#ID_Creditos").val("");
        $("#ID_Turno").val("");
        $("#ID_Docente").val("");
    }
}
