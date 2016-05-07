$(document).ready(load)

function load(){
  $( "[href='/administrator/investigator/add/']" ).parent().addClass('active').parent().addClass('open');
  $( "[href='/administrator/investigator/add/']" ).parent().parent().parent().addClass('active open hsub');

  $('.input-mask-phone').mask('(999) 9999-9999');
  $('.date-picker').datepicker({
					autoclose: true,
					todayHighlight: true,
          dateFormat: 'yy-mm-dd'
				});
  $(document).on('click','#btnReiniciar', function(){
      $(".has-error").removeClass("has-error");
  });

  $( document ).on('change', "input[type='file']", function(e) {
      mostrarImagen(this);
  });
  $(document).on( 'submit' , "form[name='form-nuevo-investigador']" ,function () {
    var formData = new FormData( $( "form[name='form-nuevo-investigador']" )[0] );

      if(validarCampoVacios() != 0){
          NotificationWarning( 'Advertencia!', 'Error!!! Aun existen campos requeridos sin completar.' );
      }else {
        $.ajax({
            url : '/administrator/investigator/insert/',
            type : 'post',
            data : formData,
            async : true,
            contentType: false,
            processData: false,
            success: function(data) {

              NotificationSuccess( 'Mensaje!', 'Excelente!!! '+ data.message +'' );
              limpiar();
            },
            error: function (XMLHttpRequest, estado, errorS) {
              var error = eval("(" + XMLHttpRequest.responseText + ")");
              console.log(error.Message);
              console.log(estado);
              console.log(errorS);
            },
            complete: function (jqXHR, estado) {
            }
        });
      }



    return false;
  });
}

function validarCampoVacios(){
  var band = 0;
  if ($("#txtNombres").val() == "") {
    $("#fgNombres").addClass("has-error");
    band++;
  }else {
    $("#fgNombres").removeClass("has-error");
  }

  if ($("#txtApellidos").val() == "") {
    $("#fgApellidos").addClass("has-error");
    band++;
  }else {
    $("#fgApellidos").removeClass("has-error");
  }

  if ($("#txtFechaNac").val() == "") {
    $("#fgFechaNac").addClass("has-error");
    band++;
  }else {
    $("#fgFechaNac").removeClass("has-error");
  }

  if ($("#txtCorreo").val() == "") {
    $("#fgCorreo").addClass("has-error");
    band++;
  }else {
    $("#fgCorreo").removeClass("has-error");
  }

  if ($("#txtTelefono").val() == "") {
    $("#fgTelefono").addClass("has-error");
    band++;
  }else {
    $("#fgTelefono").removeClass("has-error");
  }

  if ($("#txtDepartamento").val() == "") {
    $("#fgDepartamento").addClass("has-error");
    band++;
  }else {
    $("#fgDepartamento").removeClass("has-error");
  }

  if ($("#txtDireccion").val() == "") {
    $("#fgDireccion").addClass("has-error");
    band++;
  }else {
    $("#fgDireccion").removeClass("has-error");
  }
 return band;
}

function NotificationSuccess(title, message) {
    $.gritter.removeAll();
    var unique_id = $.gritter.add({
        title: title,
        text: message,
        sticky: true,
        time: '',
        class_name: 'gritter-success gritter-center'
    });
}

function NotificationWarning(title, message) {
    $.gritter.removeAll();
    var unique_id = $.gritter.add({
        title: title,
        text: message,
        sticky: true,
        time: '',
        class_name: 'gritter-warning gritter-center'
    });
}

function NotificationError(title, message) {
    $.gritter.removeAll();
    var unique_id = $.gritter.add({
        title: title,
        text: message,
        sticky: true,
        time: '',
        class_name: 'gritter-error gritter-center'
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

function limpiar(){
  $('#form-nuevo-investigador').each (function(){
    this.reset();
  });
}
