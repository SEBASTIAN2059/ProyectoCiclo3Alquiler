//ARHIVO JS PARA LA PAGINA WEB alquiler.html

function filtrar() {
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
                tr[i]
            }
        }
    }


}