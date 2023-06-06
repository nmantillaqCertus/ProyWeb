$(document).ready(function () {

    tablaCursos = $("#ID_TABLE_CURSOS").DataTable({
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
        }
    });

    getData();

});

//Variables Generales
var tablaCursos;
var uriDetalle = "https://pokeapi.co/api/v2/pokemon/";


//Fin Variables Generales

function getData() {
    let auxResponse = [];
    let arrayResponse = getService();
    
    if (arrayResponse.length > 0) {
        auxResponse.push({
            status: true,
            mensaje: "Todo OK",
            data: arrayResponse
        });
    } else {
        auxResponse.push({
            status: false,
            mensaje: "Sin datos",
            data: []
        });
    }
    prosesarData(auxResponse);
}

function prosesarData(responseData) {

    if (responseData[0].status) {
        for (let i = 0; i < responseData[0].data.length; i++) {

            let idItem = responseData[0].data[i].url;
            idItem = idItem.split("/")[6];

            tablaCursos.row.add([
                "<span>" + responseData[0].data[i].name + "</span>",
                "<span style='cursor:pointer' onClick='verDetalle("+idItem+");'> <i class='fa fa-eye' aria-hidden='true'></i> </span>"
            ]).draw();
        }
    }
}

function verDetalle(valor){
    let itemDetalle = getServiceDetalle(valor);
    $("#ID_Modal_CursoLabel").text(itemDetalle.name);
    $("#ID_Modal_Curso").modal();
}

function getServiceDetalle(valor) {
    let aux = [];
    try {

        $.ajax({
            async: false,
            type: 'get',
            url: uriDetalle + valor,
            success: function (r) {
                console.log(r);
                aux = r;
            }
        });

    } catch (error) {
        aux = [];
        console.log("Se produjo un error");
    }
    return aux;
}



function getService() {
    let aux = [];
    try {

        $.ajax({
            async: false,
            type: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
            success: function (r) {
                aux = r.results;
            }
        });

    } catch (error) {
        aux = [];
        console.log("Se produjo un error");
    }
    return aux;
}



