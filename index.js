$(document).ready(function () {
    loadNavbar();
    
    $('#btnLogout').bind('click', function () {
        sessionStorage.removeItem('user');
        
        loadNavbar();
        
        window.location.href = "sites/login.html";
    });
    
    $('#btnRegister').bind('click', function () {
        window.location.href = "sites/register.html";
    });
    
    $('#btnLogin').bind('click', function () {
        window.location.href = "sites/login.html";
    });
    
    var user = sessionStorage.getItem('user');
    
    if (user == null || user == undefined) {
        $('#btnRegister').show();
        $('#btnLogin').show();
    }
});