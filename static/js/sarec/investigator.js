$(document).ready(load)

function load(){

  $(document).on( 'submit' , "form[name='form-nuevo-investigador']" ,function () {
    var formData = new FormData( $( "form[name='form-nuevo-investigador']" )[0] );

      $.ajax({
          url : '/administrator/investigator/insert/',
          type : 'post',
          data : formData,
          async : true,
          contentType: false,
          processData: false,
          success: function(data) {
            alert(data.message);
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


    return false;
  });
}
