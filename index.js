$(document).ready(function () {

    $('#navDashboardA').bind('click', function () {
            window.location.href = 'sites/dashboard/dashboard.html';
    });

    $('#navExerciseA').bind('click', function () {
            window.location.href = 'sites/exercise/exercise.html';
    });

    $('#navTrainingA').bind('click', function () {
            window.location.href = 'sites/training/training.html';
    });
    
    $('#btnRegister').bind('click', function () {
        window.location.href = "sites/register/register.html";
    });

    $('#btnLogin').bind('click', function () {
        window.location.href = "sites/login/login.html";
    });

    $('#navRegister').bind('click', function () {
        window.location.href = "sites/register/register.html";
    });

    $('#navLogin').bind('click', function () {
        window.location.href = "sites/login/login.html";
    });

    var user = sessionStorage.getItem('user');
    
    if (user == null || user == undefined) {
        $('#btnRegister').show();
        $('#btnLogin').show();
    }

    $('#navUserA').bind('click', function () {
        window.location.href = 'sites/user/user.html';
    });

    $('#btnLogout').bind('click', function () {
        sessionStorage.removeItem('user');
        
        loadNavbar();
        
        window.location.href = "sites/login/login.html";
    });
});