'use strict'
$('#form').hide()
console.log($('#passTry').val);


function password() {
    let passTry = $('#passTry').val;

    if(passTry === 'password') {
        $('#form').show();
    }
}