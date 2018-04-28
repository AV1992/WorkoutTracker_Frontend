$(document).ready(function () {

    $('#loginForm').validate({
        rules: {
            username: {
                required: true,
            },
            password: {
                required: true
            },
        },
        messages: {
            username: 'Bitte geben Sie einen Benutzernamen ein!',
            password: {
                required: 'Bitte geben Sie ein Password ein!',
            }
        }
    });

    $('#btnLogin').bind("click", function () {
        $('#errorAlert').hide();

        if ($('#loginForm').valid()) {

            var username = $('#username').val();
            var password = $('#password').val();
            
            var passwordHash = md5(password, hashKey);
            
            $.ajax({
                type: "GET",
                url: "http://localhost:3000/user/getByUsernamePassword/" + username + "/" + passwordHash,
                dataType: "json",
                success: function (data) {
                    sessionStorage.setItem("user", JSON.stringify(data));

                    window.location.href = "dashboard.html";
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    //console.log(textStatus, errorThrown);
                    console.log('Login failed');
                    $('#errorAlert').show();
                }
            });
        }
    });
});
