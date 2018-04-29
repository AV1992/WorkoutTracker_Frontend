$(document).ready(function () {

    /* navbar */
    $('#navTraining').addClass('active');

    $('#navBrandA').bind('click', function () {
        window.location.href = '../../index.html';
    });

    $('#navDashboardA').bind('click', function () {
        window.location.href = '../dashboard/dashboard.html';
    });

    $('#navExerciseA').bind('click', function () {
        window.location.href = '../exercise/exercise.html';
    });

    $('#navTrainingA').bind('click', function () {
        window.location.href = '#';
    });

    $('#navUserA').bind('click', function () {
        window.location.href = '../user/user.html';
    });

    $('#btnLogout').bind('click', function () {
        sessionStorage.removeItem('user');

        loadNavbar();

        window.location.href = '../login/login.html';
    });

});
