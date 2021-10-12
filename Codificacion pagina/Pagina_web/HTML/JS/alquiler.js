//ARHIVO JS PARA LA PAGINA WEB alquiler.html

function filtrarPlaca() {
    let inputFiltro = document.getElementById("tf-placa");
    let filter = inputFiltro.value.toUpperCase();
    let table = document.getElementById("table-catalogo");
    let tr = table.getElementsByTagName("tr");
    let td;
    let contValue;
    let i;
    for (i=0; i<tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            contValue = td.innerText;
            if (contValue.toUpperCase().indexOf(filter)>-1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
} //end function filtrarPlaca()
/*
function filtrarTipo() {
    let selectFilter = document.getElementById("tf-tipo");
    let optionFilter = selectFilter.getElementsByTagName("option");
    let filter = optionFilter.value.toUpperCase();
    let table = document.getElementById("table-catalogo");
    let tr = table.getElementsByTagName("tr");
    let td;
    let contValue;
    let i;
    for (i=0; i<tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]; //column 1 refers to TIPO
        if (td) {
            contValue = td.innerText;
            if (contValue.toUpperCase().indexOf(filter)>-1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
} //end function filtrarTipo()*/

function filterTipo() {
    let selectFilter = document.getElementById("tf-tipo");
    let opFilter = selectFilter.value.toUpperCase();
    let table = document.getElementById("table-catalogo");
    let tr = table.getElementsByTagName("tr");
    let td;
    let tipoValue;
    let i;
    for (i=0; i<tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            tipoValue = td.innerText;
            if (tipoValue.toUpperCase().indexOf(opFilter)>-1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

//FILTER FOR TABLE SELECT ELEMENTS
$('.tf-select tipo').change(function(){
    filter_function();
}
);

$('#table-catalogo tbody tr').show();

function filter_function() {
    $('#table-catalogo tbody tr').hide();

    let tipoFlag = 0;
    let tipoValue = $('#tf-tipo').val();
    
    $('#table-catalogo tr').each(function() {
        
        if (tipoValue == 0) {
            tipoFlag = 1; //display
        } else if (tipoValue == $(this).find('td.dt-tipo').data('dt-tipo')) {
            tipoFlag = 1; //display
        } else {
            tipoFlag = 0;
        }
        
        if (tipoFlag) {
            $(this).show();
        }
    }
    );
}