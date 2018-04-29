$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/exercise",
        dataType: "json",
        success: function (data) {

            for (i = 0; i < data.length; i++) {

                $("#exercise").append("<tr> <td>" + data[i].name + "</td> </tr>");
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });

    /* navbar */
    $('#navDashboard').addClass('active');

    $('#navBrandA').bind('click', function () {
        window.location.href = '../../index.html';
    });

    $('#navDashboardA').bind('click', function () {
        window.location.href = '#';
    });

    $('#navExerciseA').bind('click', function () {
        window.location.href = '../exercise/exercise.html';
    });

    $('#navTrainingA').bind('click', function () {
        window.location.href = '../training/training.html';
    });

    $('#navUserA').bind('click', function () {
        window.location.href = '../user/user.html';
    });

    $('#btnLogout').bind('click', function () {
        sessionStorage.removeItem('user');

        loadNavbar();

        window.location.href = "../login/login.html";
    });
});
