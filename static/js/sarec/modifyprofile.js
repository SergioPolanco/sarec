$(document).ready(function() {

    $( "[href='/administrator/accounts/modify/']" ).parent().addClass('active').parent().addClass('open');
    $( "[href='/administrator/accounts/modify/']" ).parent().parent().parent().addClass('active open hsub');

    var oTable1 =
    $('#sample-table-2').dataTable( {
        bAutoWidth: false,
        "aoColumns": [
          { "bSortable": false },
          null, null,null, null, null, null,null,
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

    $.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
        _title: function(title) {
            var $title = this.options.title || '&nbsp;'
            if( ("title_html" in this.options) && this.options.title_html == true )
                title.html($title);
            else title.text($title);
        }
    }));

    $( document ).on( 'click', 'i.fa-search-plus.bigger-130', function(e) {

        $( "#dialog-message" ).append( '<form name="FormPost" id="FrmGrid_grid-table" class="FormGrid" onsubmit="return false;" style="width:auto;overflow:auto;position:relative;height:auto;"> <table id="TblGrid_grid-table" class="EditTable" cellspacing="0" cellpadding="0" border="0" style="width:100%;"> <tbody> <tr rowpos="1" class="FormData" id="tr_id" style="border-bottom: 1px dotted #E8E8E8; width:100%;"> <td class="CaptionTD">ID</td><td class="DataTD">&nbsp; <input type="text" id="td_id" name="td_id" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;"> </td></tr><tr rowpos="2" class="FormData" id="tr_username" style="border-bottom: 1px dotted #E8E8E8; width:100%;"> <td class="CaptionTD">Usuario</td><td class="DataTD">&nbsp; <input type="text" id="td_username" readonly name="td_username" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;"> </td></tr><tr rowpos="2" class="FormData" id="tr_first_name" style="border-bottom: 1px dotted #E8E8E8; width:100%;"> <td class="CaptionTD">Nombre</td><td class="DataTD">&nbsp; <input type="text" id="td_first_name" readonly name="td_first_name" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;"> </td></tr><tr rowpos="2" class="FormData" id="tr_last_name" style="border-bottom: 1px dotted #E8E8E8; width:100%;"> <td class="CaptionTD">Apellido</td><td class="DataTD">&nbsp; <input type="text" id="td_last_name" readonly name="td_last_name" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;"> </td></tr><tr rowpos="2" class="FormData" id="tr_email" style="border-bottom: 1px dotted #E8E8E8; width:100%;"> <td class="CaptionTD">Correo</td><td class="DataTD">&nbsp; <input type="text" id="td_email" readonly name="td_email" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;"> </td></tr><tr rowpos="2" class="FormData" id="tr_is_active" style="border-bottom: 1px dotted #E8E8E8; width:100%;"> <td class="CaptionTD">Activo</td><td class="DataTD">&nbsp; <input type="checkbox" value="Yes" offval="No" id="is_active" name="is_active" role="checkbox" class="FormElement ace ace-switch ace-switch-5"> <span class="lbl" style="margin-bottom:2px;margin-top:5px;"></span> </td></tr><tr rowpos="2" class="FormData" id="tr_is_admin" style="border-bottom: 1px dotted #E8E8E8; width:100%;"> <td class="CaptionTD">Administrator</td><td class="DataTD">&nbsp; <input type="checkbox" value="Yes" offval="No" id="is_admin" name="is_admin" role="checkbox" class="FormElement ace ace-switch ace-switch-5"> <span class="lbl" style="margin-bottom:2px;margin-top:5px;"></span> </td></tr></tbody> </table> </form>' );

        $( 'input[name="td_username"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(3)") ).text()) );
        $( 'input[name="td_first_name"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(4)") ).text()) );
        $( 'input[name="td_last_name"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(5)") ).text()) );
        $( 'input[name="td_email"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(6)") ).text()) );
        if( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(7)") ).text()) == 'Activo') {
            $( '#is_active' ).prop( "checked" , "true" );
        }
        if( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(8)") ).text()) == 'Activo') {
            $( '#is_admin' ).prop( "checked", "true" );
        }

        e.preventDefault();
        var dialog = $( "#dialog-message" ).removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-check'></i> Datos del Usuario</h4></div>",
            title_html: true,
            buttons: [
                {
                    text: "OK",
                    "class" : "btn btn-primary btn-xs",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            close: function() {
                $( '#dialog-message' ).empty().addClass( 'hide' );
                /*$( 'input[name="td_username"]' ).val( '' );
                $( 'input[name="td_first_name"]' ).val( '' );
                $( 'input[name="td_last_name"]' ).val( '' );
                $( 'input[name="td_email"]' ).val( '' );
                $( '#is_active' ).removeAttr( 'checked' );
                $( '#is_admin' ).removeAttr( 'checked' );*/
            }
        });
    });

});
