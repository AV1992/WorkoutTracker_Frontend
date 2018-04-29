$(document).ready(function () {
    $('#registerForm').validate({
        rules: {
            email: {
                required: true
            },
            username: {
                required: true,
            },
            password: {
                required: true,
                minlength: 1
            },
            confirmPassword: {
                equalTo: '#password'
            }
        },
        messages: {
            email: 'Bitte geben Sie eine gültige E-Mail Adresse ein!',
            username: 'Bitte geben Sie einen Benutzernamen ein!',
            password: {
                required: 'Bitte geben Sie ein Password ein!',
                minlength: 'Das Passwort muss mindestens eine Länge von 1 Zeichen haben!'
            },
            confirmPassword: {
                equalTo: 'Die Passwörter müssen übereinstimmen!'
            }
        }
    });


    $('#btnRegister').bind('click', function () {
        if ($('#registerForm').valid()) {

            $('#groupUsername').removeClass('has-danger');
            $('#username').removeClass('form-control-danger');
            $('#usernameFeedback').hide();

            $('#groupEmail').removeClass('has-danger');
            $('#email').removeClass('form-control-danger');
            $('#emailFeedback').hide();

            var name = $('#name').val();
            var surname = $('#surname').val();
            var email = $('#email').val();
            var username = $('#username').val();
            var password = $('#password').val();

            var passwordHash = md5(password, hashKey);

            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/user',
                dataType: 'json',
                data: {
                    'name': name,
                    'surname': surname,
                    'email': email,
                    'username': username,
                    'password': passwordHash
                },
                success: function (data) {
                    console.log('success');
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);

                    $('#errorAlert').show();
                },
                statusCode: {
                    200: function (response) {

                        switch (response.status) {

                            case 1:
                                //E-Mail bereits vergeben
                                $('#groupEmail').addClass('has-danger');
                                $('#email').addClass('form-control-danger');
                                $('#emailFeedback').show();
                                break;
                            case 2:
                                //Benutzername bereits vergeben
                                $('#groupUsername').addClass('has-danger');
                                $('#username').addClass('form-control-danger');
                                $('#usernameFeedback').show();
                                break;
                        }

                    },
                    201: function (response) {
                        console.log('201: ' + response);
                    }
                }
            });
        }
    });

    /* navbar */
    $('#navRegister').addClass('active');

    $('#navBrandA').bind('click', function () {
        window.location.href = '../../index.html';
    });

    $('#navLogin').bind('click', function () {
        window.location.href = "../login/login.html";
    });
});
