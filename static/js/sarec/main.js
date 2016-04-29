$(document).ready(function(){
    $( "form[name='form-access']" ).submit(function( event ) {
        if ( $("input[name='username']").val()=='' || $("input[name='password']").val()=='' ) {
            event.preventDefault();
            $('div#message').empty().append('<div id="alert" class="alert alert-warning no-margin-bottom"><button type="button" class="close" data-dismiss="alert"><i class="ace-icon fa fa-times"></i></button><strong>Error!</strong> Debe de completar todos los campos.</div>');
        }
    });
});
