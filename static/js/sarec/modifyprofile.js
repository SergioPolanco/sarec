$(document).ready(function() {

    $( "[href='/administrator/accounts/modify/']" ).parent().addClass('active').parent().addClass('open');
    $( "[href='/administrator/accounts/modify/']" ).parent().parent().parent().addClass('active open hsub');

    var oTable1 =
    $('#sample-table-2').dataTable( {
        bAutoWidth: false,
        "aoColumns": [
          { "bSortable": false },
          null, null,null, null, null,
          { "bSortable": false }
        ],
        "aaSorting": [],
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron coincidencias...",
            "info": "Páginas Mostradas: _PAGE_ de _PAGES_",
            "infoEmpty": "registros encontrados:",
            "infoFiltered": "(0 de 0)",
            "paginate": {
                            "first":      "Primero",
                            "last":       "Ultimo",
                            "next":       "Siguiente",
                            "previous":   "Previo"
                        },
            "processing": "Procesando...",
            "search": "Buscar:",
        }
    } );

});
