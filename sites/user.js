$(document).ready(function () {
    var user = JSON.parse(sessionStorage.getItem('user'));
    
    $('#name').val(user.name);
    $('#surname').val(user.surname);
    $('#email').val(user.email);
    
    loadNavbar();
    
    $('#btnLogout').bind('click', function () {
        sessionStorage.removeItem('user');
        
        loadNavbar();
        
        window.location.href = "../sites/login.html";
    });
    
    $('#btnChangePassword').bind('click', function () {
        //falsches Passwort
        $('#groupPasswordOld').addClass('has-danger');
        $('#passwordold').addClass('form-control-danger');
        $('#passwordOldFeedback').show();
        
        
        var passwordNew = $('#passwordnew').val();
        var passwordNew2 = $('#confirmPassword').val();
        
        console.log(passwordNew);
        console.log(passwordNew2);
        
        if (passwordNew != passwordNew2) {
            //Passwoerter stimmen nicht ueberein
            $('#groupPasswordNew2').addClass('has-danger');
            $('#confirmPassword').addClass('form-control-danger');
            $('#passwordNew2Feedback').show();
        }
    });
});

function updatePassword(id) {
    
}