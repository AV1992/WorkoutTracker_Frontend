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
    
    $('#btnLogout').bind('click', function () {
        sessionStorage.removeItem('user');
        
        loadNavbar();
        
        window.location.href = "../sites/login.html";
    });
    
    loadNavbar();
});
