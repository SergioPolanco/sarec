$(document).ready(function() {

    $( "[href='/administrator/accounts/add/']" ).parent().addClass('active').parent().addClass('open');
    $( "[href='/administrator/accounts/add/']" ).parent().parent().parent().addClass('active open hsub');

    $( " input[type='text'], input[type='email'], input[type='password'] " ).on( 'input' , function() {
      if( $( this ).val() === '' ) {
        $( this ).parent().parent().addClass('has-error');
      } else {
        $( this ).parent().parent().removeClass('has-error');
      }
    });

    $(document).on( 'submit' , "form[name='form-new-account']" ,function () {
      var formData = new FormData( $( "form[name='form-new-account']" )[0] );

      if( validateblank() ) {
        $( 'div#message' ).empty().append('<div id="alert" class="alert alert-warning no-margin-bottom"><button type="button" class="close" data-dismiss="alert"><i class="ace-icon fa fa-times"></i></button><strong>Error!</strong> Aun existen campos requeridos sin completar.</div>');
      } else if( validatepassword() ) {
        $( 'div#message' ).empty().append('<div id="alert" class="alert alert-warning no-margin-bottom"><button type="button" class="close" data-dismiss="alert"><i class="ace-icon fa fa-times"></i></button><strong>Error!</strong> Los campos de contraseñas no coinciden.</div>');
      } else if( lengthpassword() ){
        $( 'div#message' ).empty().append('<div id="alert" class="alert alert-warning no-margin-bottom"><button type="button" class="close" data-dismiss="alert"><i class="ace-icon fa fa-times"></i></button><strong>Error!</strong> La longitud de la contraseña, debe ser mayor a 8 caracteres.</div>');
      } else {
        $.ajax({
            url : '/administrator/accounts/insert/',
            type : 'post',
            data : formData,
            async : true,
            contentType: false,
            processData: false,
            success: function(data) {
              if( data.status === 'False' ) {
                $( 'div#message' ).empty().append('<div id="alert" class="alert alert-danger no-margin-bottom"><button type="button" class="close" data-dismiss="alert"><i class="ace-icon fa fa-times"></i></button><strong>Error!</strong> '+ data.message +'</div>');
                if( 'Lo sentimos, este nombre de usuario ya ha siso registrado, por favor seleccione otro...' === data.message ){
                  $( "input[name='username']" ).parent().parent().addClass('has-error');
                }
              } else if( data.status === 'True' ) {
                $( "form[name='form-new-account']" )[0].reset();
                $( 'div#message' ).empty().append('<div id="alert" class="alert alert-success no-margin-bottom"><button type="button" class="close" data-dismiss="alert"><i class="ace-icon fa fa-times"></i></button><strong>Excelente!</strong> '+ data.message +'</div>');
              }
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
});

function validateblank() {
    var validate = false;
    $(" input[type='text'], input[type='email'], input[type='password'] ").each(function(){
        if( $( this ).val() === '' ) {
            validate = true;
            $( this ).parent().parent().addClass('has-error');
        }
    });
    return validate;
}

function validatepassword() {
    var validate = false;
    if( $( "input[name='newpassword']" ).val() !== $( "input[name='confirmpassword']" ).val() ) {
        validate = true;
        $(" input[type='password'] ").parent().parent().addClass('has-error');
    }
    return validate;
}

function lengthpassword() {
    var validate = false;
    if( $( "input[name='newpassword']" ).val().length < 8 ) {
        validate = true;
        $(" input[type='password'] ").parent().parent().addClass('has-error');
    }
    return validate;
}
