$(document).ready(load)

function load() {
  $( "[href='/administrator/investigator/modify/']" ).parent().addClass('active').parent().addClass('open');
  $( "[href='/administrator/investigator/modify/']" ).parent().parent().parent().addClass('active open hsub');

  $('#sample-table-2').dataTable( {
      bAutoWidth: false,
      "aoColumns": [null, null, null, null,null,null,null,null,null,null,null,null,null,
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
      $( "#dialog-message" ).append( '<form name="FormPost" id="FrmGrid_grid-table" class="FormGrid" onsubmit="return false;" style="width:auto;overflow:auto;position:relative;height:auto;">\
        <table id="TblGrid_grid-table" class="EditTable" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\
          <tbody>\
            <tr rowpos="1" class="FormData" id="tr_id" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
              <td class="CaptionTD">ID</td>\
              <td class="DataTD">&nbsp;\
                <input type="text" id="td_id" name="td_id" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
              </td>\
            </tr>\
            <tr rowpos="2" class="FormData" id="tr_nombres" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
              <td class="CaptionTD">Nombres</td>\
              <td class="DataTD">&nbsp;\
                <input type="text" id="td_nombres" readonly name="td_nombres" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
              </td>\
            </tr>\
            <tr rowpos="2" class="FormData" id="tr_apellidos" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
              <td class="CaptionTD">Apellidos</td>\
              <td class="DataTD">&nbsp;\
                <input type="text" id="td_apellidos" readonly name="td_apellidos" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
              </td>\
            </tr>\
            <tr rowpos="2" class="FormData" id="tr_fechaNac" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
              <td class="CaptionTD">Fecha de Nacimiento</td>\
              <td class="DataTD">&nbsp;\
                <input type="text" id="td_fechaNac" readonly name="td_fechaNac" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
              </td>\
            </tr>\
            <tr rowpos="2" class="FormData" id="tr_correo" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
              <td class="CaptionTD">Correo</td>\
              <td class="DataTD">&nbsp;\
                <input type="text" id="td_correo" readonly name="td_correo" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
              </td>\
            </tr>\
            <tr rowpos="2" class="FormData" id="tr_telefono" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
              <td class="CaptionTD">Teléfono</td>\
              <td class="DataTD">&nbsp;\
                <input type="text" id="td_telefono" readonly name="td_telefono" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
              </td>\
            </tr>\
            <tr rowpos="2" class="FormData" id="tr_direccion" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
              <td class="CaptionTD">Dirección</td>\
              <td class="DataTD">&nbsp;\
                <textarea name="td_direccion" id="td_direccion" role="textarea" readonly class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;" rows="5" cols="25"></textarea>\
              </td>\
            </tr>\
            <tr rowpos="2" class="FormData" id="tr_departamento" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
              <td class="CaptionTD">Departamento</td>\
              <td class="DataTD">&nbsp;\
                <input type="text" id="td_departamento" readonly name="td_departamento" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
              </td>\
            </tr>\
            <tr rowpos="2" class="FormData" id="tr_facebook" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
              <td class="CaptionTD">facebook</td>\
              <td class="DataTD">&nbsp;\
                <input type="text" id="td_facebook" readonly name="td_facebook" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
              </td>\
            </tr>\
            <tr rowpos="2" class="FormData" id="tr_twitter" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
              <td class="CaptionTD">Twitter</td>\
              <td class="DataTD">&nbsp;\
                <input type="text" id="td_twitter" readonly name="td_twitter" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
              </td>\
            </tr>\
            <tr rowpos="2" class="FormData" id="tr_googlePlus" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
              <td class="CaptionTD">Google Plus</td>\
              <td class="DataTD">&nbsp;\
                <input type="text" id="td_googlePlus" readonly name="td_googlePlus" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
              </td>\
            </tr>\
            <tr rowpos="2" class="FormData" id="tr_activo" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
              <td class="CaptionTD">Activo</td>\
              <td class="DataTD">&nbsp;\
                <input type="checkbox" value="Yes" offval="No" id="is_activo" name="is_activo" role="checkbox" class="FormElement ace ace-switch ace-switch-5">\
                <span class="lbl" style="margin-bottom:2px;margin-top:5px;"></span>\
              </td>\
            </tr>\
          </tbody>\
        </table>\
      </form>' );

      $( 'input[name="td_nombres"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(2)") ).text()) );
      $( 'input[name="td_apellidos"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(3)") ).text()) );
      $( 'input[name="td_fechaNac"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(4)") ).text()) );
      $( 'input[name="td_correo"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(5)") ).text()) );
      $( 'input[name="td_telefono"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(6)") ).text()) );
      $( 'textarea[name="td_direccion"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(7)") ).text()) );
      $( 'input[name="td_departamento"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(8)") ).text()) );
      $( 'input[name="td_facebook"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(9)") ).text()) );
      $( 'input[name="td_twitter"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(10)") ).text()) );
      $( 'input[name="td_googlePlus"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(11)") ).text()) );

      if( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(13)") ).text()) == 'Activo') {
          $( '#is_activo' ).prop( "checked" , "true" );
      }

      e.preventDefault();

      var dialog = $( "#dialog-message" ).removeClass('hide').dialog({
          modal: true,
          title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-check'></i> Datos del Investigador</h4></div>",
          title_html: true,
          width:"40%",
          height:500,
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
          }
      });

  });

  $( document ).on( 'click', 'i.fa-search-plus.bigger-120', function(e) {
    $( "#dialog-message" ).append( '<form name="FormPost" id="FrmGrid_grid-table" class="FormGrid" onsubmit="return false;" style="width:100%;overflow:auto;position:relative;height:auto;">\
      <table id="TblGrid_grid-table" class="EditTable" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\
        <tbody>\
          <tr rowpos="1" class="FormData" id="tr_id" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
            <td class="CaptionTD">ID</td>\
            <td class="DataTD">&nbsp;\
              <input type="text" id="td_id" name="td_id" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
            </td>\
          </tr>\
          <tr rowpos="2" class="FormData" id="tr_nombres" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
            <td class="CaptionTD">Nombres</td>\
            <td class="DataTD">&nbsp;\
              <input type="text" id="td_nombres" readonly name="td_nombres" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
            </td>\
          </tr>\
          <tr rowpos="2" class="FormData" id="tr_apellidos" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
            <td class="CaptionTD">Apellidos</td>\
            <td class="DataTD">&nbsp;\
              <input type="text" id="td_apellidos" readonly name="td_apellidos" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
            </td>\
          </tr>\
          <tr rowpos="2" class="FormData" id="tr_fechaNac" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
            <td class="CaptionTD">Fecha de Nacimiento</td>\
            <td class="DataTD">&nbsp;\
              <input type="text" id="td_fechaNac" readonly name="td_fechaNac" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
            </td>\
          </tr>\
          <tr rowpos="2" class="FormData" id="tr_correo" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
            <td class="CaptionTD">Correo</td>\
            <td class="DataTD">&nbsp;\
              <input type="text" id="td_correo" readonly name="td_correo" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
            </td>\
          </tr>\
          <tr rowpos="2" class="FormData" id="tr_telefono" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
            <td class="CaptionTD">Teléfono</td>\
            <td class="DataTD">&nbsp;\
              <input type="text" id="td_telefono" readonly name="td_telefono" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
            </td>\
          </tr>\
          <tr rowpos="2" class="FormData" id="tr_direccion" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
            <td class="CaptionTD">Dirección</td>\
            <td class="DataTD">&nbsp;\
              <textarea name="td_direccion" id="td_direccion" readonly class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;" rows="5" cols="25"></textarea>\
            </td>\
          </tr>\
          <tr rowpos="2" class="FormData" id="tr_departamento" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
            <td class="CaptionTD">Departamento</td>\
            <td class="DataTD">&nbsp;\
              <input type="text" id="td_departamento" readonly name="td_departamento" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
            </td>\
          </tr>\
          <tr rowpos="2" class="FormData" id="tr_facebook" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
            <td class="CaptionTD">facebook</td>\
            <td class="DataTD">&nbsp;\
              <input type="text" id="td_facebook" readonly name="td_facebook" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
            </td>\
          </tr>\
          <tr rowpos="2" class="FormData" id="tr_twitter" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
            <td class="CaptionTD">Twitter</td>\
            <td class="DataTD">&nbsp;\
              <input type="text" id="td_twitter" readonly name="td_twitter" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
            </td>\
          </tr>\
          <tr rowpos="2" class="FormData" id="tr_googlePlus" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
            <td class="CaptionTD">Google Plus</td>\
            <td class="DataTD">&nbsp;\
              <input type="text" id="td_googlePlus" readonly name="td_googlePlus" role="textbox" class="FormElement ui-widget-content ui-corner-all" style="margin-bottom:5px;margin-top:5px;">\
            </td>\
          </tr>\
          <tr rowpos="2" class="FormData" id="tr_activo" style="border-bottom: 1px dotted #E8E8E8; width:100%;">\
            <td class="CaptionTD">Activo</td>\
            <td class="DataTD">&nbsp;\
              <input type="checkbox" value="Yes" offval="No" id="is_activo" name="is_activo" role="checkbox" class="FormElement ace ace-switch ace-switch-5">\
              <span class="lbl" style="margin-bottom:2px;margin-top:5px;"></span>\
            </td>\
          </tr>\
        </tbody>\
      </table>\
    </form>' );

      $( 'input[name="td_nombres"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().parent().parent().parent().parent().children(":nth-child(2)") ).text()) );
      $( 'input[name="td_apellidos"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().parent().parent().parent().parent().children(":nth-child(3)") ).text()) );
      $( 'input[name="td_fechaNac"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().parent().parent().parent().parent().children(":nth-child(4)") ).text()) );
      $( 'input[name="td_correo"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().parent().parent().parent().parent().children(":nth-child(5)") ).text()) );
      $( 'input[name="td_telefono"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().parent().parent().parent().parent().children(":nth-child(6)") ).text()) );
      $( 'textarea[name="td_direccion"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().parent().parent().parent().parent().children(":nth-child(7)") ).text()) );
      $( 'input[name="td_departamento"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().parent().parent().parent().parent().children(":nth-child(8)") ).text()) );
      $( 'input[name="td_facebook"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().parent().parent().parent().parent().children(":nth-child(9)") ).text()) );
      $( 'input[name="td_twitter"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().parent().parent().parent().parent().children(":nth-child(10)") ).text()) );
      $( 'input[name="td_googlePlus"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().parent().parent().parent().parent().children(":nth-child(11)") ).text()) );

      if( $.trim($( $( this ).parent().parent().parent().parent().parent().parent().parent().parent().children(":nth-child(13)") ).text()) == 'Activo') {
          $( '#is_activo' ).prop( "checked" , "true" );
      }

      e.preventDefault();
      var dialog = $( "#dialog-message" ).removeClass('hide').dialog({
          modal: true,
          title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-check'></i> Datos del Usuario</h4></div>",
          title_html: true,
          width:"80%",
          height:500,
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
          }
      });

  });

  $( document ).on( 'click', 'i.fa-pencil.bigger-130', function(e) {

    $( 'input[name="txtNombres"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(2)") ).text()) );
    $( 'input[name="txtApellidos"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(3)") ).text()) );
    $( 'input[name="txtFechaNac"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(4)") ).text()) );
    $( 'input[name="txtCorreo"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(5)") ).text()) );
    $( 'input[name="txtTelefono"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(6)") ).text()) );
    $( 'textarea[name="txtDireccion"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(7)") ).text()) );
    $( 'input[name="txtDepartamento"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(8)") ).text()) );
    $( 'input[name="txtFacebook"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(9)") ).text()) );
    $( 'input[name="txtTwitter"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(10)") ).text()) );
    $( 'input[name="txtGooglePlus"]' ).val( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(11)") ).text()) );
    $( '#avatarimage' ).prop( 'src', $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(12)") ).text()) );

    if( $.trim($( $( this ).parent().parent().parent().parent().children(":nth-child(13)") ).text()) == 'Activo') {
        $( 'input[name="activo"]' ).prop( "checked" , "true" );
    }

      $( '#divModificarInvestigador' ).toggle( "slow" );
      $( '.form-search' ).toggle( "slow" );

  });

  $( " button[name='cancelar'] " ).click( function() {
      $( '.has-error' ).removeClass( 'has-error' );
      $( '#avatar' ).prop( 'src','/static/img/image.png' );
      limpiar();
      $( '#divModificarInvestigador' ).toggle( "slow" );
      $( '.form-search' ).toggle( "slow" );
  });

}
$( document ).on('change', "input[type='file']", function(e) {
    mostrarImagen(this);
});
function limpiar(){
  $('#form-modificar-investigador').each (function(){
    this.reset();
  });
}

function mostrarImagen(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $( '#avatarimage' ).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
