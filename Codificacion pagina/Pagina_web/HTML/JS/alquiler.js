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
} //end function filtrarTipo()


//FILTER FOR TABLE SELECT ELEMENTS
$('#table-catalogo tbody tr').show();