$(document).ready(function () {

    tablaCursos = $("#ID_TABLE_CURSOS").DataTable({
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
        }
    });

    getData();

});

var tablaCursos;

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

            console.log("Nombre => "+responseData[0].data[i].name);

            tablaCursos.row.add([
                "<span>" + responseData[0].data[i].name + "</span>",
                "<span>Alguna Acción</span>"
            ]).draw();
        }
    }
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



