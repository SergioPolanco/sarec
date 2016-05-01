$(document).ready(load)

function load(){

    $("#btnGuardar").click(function(){
      $.ajax({
          url : '/administrator/investigator/insert/',
          type : 'post',
          data : { txtNombres: $("#txtNombres").val(),
                    txtApellidos: $("#txtApellidos").val(),
                    txtFechaNac: $("#txtFechaNac").val(),
                    txtCorreo: $("#txtCorreo").val(),
                    txtTelefono: $("#txtTelefono").val(),
                    txtDireccion: $("#txtDireccion").val(),
                    txtDepartamento: $("#txtDepartamento").val(),
                    txtFacebook: $("#txtFacebook").val(),
                    txtTwitter: $("#txtTwitter").val(),
                    txtGooglePlus: $("#txtGooglePlus").val()},
          async : true,
          contentType: false,
          processData: false,
          success: function(data) {
                //var result = JSON.parse(data);
                  //console.log(typeof(data));
                  alert(data.message);
          },
          error: function (XMLHttpRequest, estado, errorS) {
            var error = eval("(" + XMLHttpRequest.responseText + ")");
            console.log(error);
            console.log(estado);
            console.log(errorS);
          },
          complete: function (jqXHR, estado) {
          }
      });
    });
}
