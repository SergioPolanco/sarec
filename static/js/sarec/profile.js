$(document).ready(function() {

    $( "[href='/administrator/accounts/add/']" ).parent().addClass('active').parent().addClass('open');
    $( "[href='/administrator/accounts/add/']" ).parent().parent().parent().addClass('active open hsub');

    $(document).on( 'submit' , "form[name='form-new-account']" ,function () {
        var formData = new FormData( $( "form[name='form-new-account']" )[0] );
        $.ajax({
            url : '/administrator/accounts/insert/',
            type : 'post',
            data : formData,
            async : true,
            contentType: false,
            processData: false,
            success: function(data) {
                console.log(data);
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

});

function validateblank() {
    var validate = true;
    $(" body input[type='text'], body input[type='email'], body input[type='password'] ").each(function(){
        if( $(this).val() === '' ) {
            validtae = false;
        }
    });
    return validate;
}

function validatepassword() {
    var validate = true;
    if( $( "input[name='newpassword']" ).val() !== $( "input[name='confirmpassword']" ).val() ) {
        validate = false;
    }
    return validate;
}
