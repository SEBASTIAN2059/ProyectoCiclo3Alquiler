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

//FUNCION PARA EL FILTRO TIPO
function selectFilter() {
    let selectTipo = document.getElementById('tf-tipo'); //Selecciona el elemento select
    let optionTipo = selectTipo.options[selectTipo.selectedIndex].value.toUpperCase(); //obtiene el value de la opcion select
    
    let selectModel = document.getElementById('tf-modelo');
    let optionModel = selectModel.options[selectModel.selectedIndex].value;
    
    let selectPuertas = document.getElementById('tf-puertas');
    let optionPuertas = selectPuertas.options[selectPuertas.selectedIndex].value;

    let selectPuestos = document.getElementById('tf-puestos');
    let optionPuestos = selectPuestos.options[selectPuestos.selectedIndex].value;

    let table = document.getElementById("table-catalogo"); //obtiene la tabla de datos
    let tr = table.getElementsByTagName("tr"); //toma las rows de la tabla seleccionada
    //definicion de variables para el loop:
    let tdTipo, tdModel, tdPuertas, tdPuestos;
    let tipoValue, modelValue, puertasValue, puestosValue;
    let i; 
    //loop que recorrera las rows
    for (i = 0; i < tr.length; i++) {
      tdTipo = tr[i].getElementsByTagName("td")[1]; //obtiene el valor del td de la respectiva row, en la columna 1
      tdModel = tr[i].getElementsByTagName("td")[2];
      tdPuertas = tr[i].getElementsByTagName("td")[3];
      tdPuestos = tr[i].getElementsByTagName("td")[4];
      //si el td existe entonces obtiene su valor interno o texto
      if (tdTipo || tdModel || tdPuertas) {
        tipoValue = tdTipo.innerText; //obtiene el texto del td
        modelValue = tdModel.innerText;
        puertasValue = tdPuertas.innerText;
        puestosValue = tdPuestos.innerText;
        
        // console.log(tipoValue);

        //indexOf busca en elemento en un array y retorna su primer indice
        //si no lo encuentra, retorna -1
        
        if (tipoValue.toUpperCase().indexOf(optionTipo) > -1 ||
            modelValue.indexOf(optionModel) > -1 ||
            puertasValue.indexOf(optionPuertas) > -1 ||
            puestosValue.indexOf(optionPuestos) > -1) {
           tr[i].style.display = ""; //si coincide la busqueda entonces muestre toda la linea de la tabla
        } else {
           tr[i].style.display = "none"; //si no coincide, no muestra la row
        }
      }
    }
}

