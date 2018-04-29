$(document).ready(function() {
    var append = '';

    append += '<nav class="navbar navbar-toggleable-md navbar-light bg-light">';
    append += '     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    append += '         <span class="navbar-toggler-icon"></span>';
    append += '     </button>';
    append += '     <a id="navBrandA" class="navbar-brand" href="#">Brand</a>';
    append += '     <div class="collapse navbar-collapse" id="navbarSupportedContent">';
    append += '         <ul class="navbar-nav mr-auto">';
    append += '             <li id="navDashboard" class="nav-iten" style="display: none">';
    append += '                 <a id="navDashboardA" class="nav-link" href="#">Dashboard</a>';
    append += '             </li>';
    append += '             <li id="navExercise" class="nav-iten" style="display: none">';
    append += '                 <a id="navExerciseA" class="nav-link" href="#">Übungen</a>';
    append += '             </li>';
    append += '             <li id="navTraining" class="nav-iten" style="display: none">';
    append += '                 <a id="navTrainingA" class="nav-link" href="#">Trainings</a>';
    append += '             </li>';
    append += '            </ul>';     
    append += '             <ul class="navbar-nav ml-auto">';
    append += '                 <li id="navRegister" class="nav-item" style="display: none">';
    append += '                     <a id="navRegisterA" class="nav-link" href="#">Registrieren</a>';
    append += '                 </li>';
    append += '                 <li id="navLogin" class="nav-item" style="display: none">';
    append += '                     <a id="navLoginA" class="nav-link" href="#">Login</a>';
    append += '                 </li>';
    append += '                 <li id="navUser" class="nav-item" style="display: none">';
    append += '                     <a id="navUserA" class="nav-link" href="#"></a>';
    append += '                 </li>';
    append += '                 <li id="navLogout" class="nav-item" style="display: none">';
    append += '                     <button id="btnLogout" type="button" class="btn btn-orange">';
    append += '                         Logout';
    append += '                     </button>';
    append += '                 </li>';
    append += '             </ul>';
    append += '     </div>';
    append += '</nav>';

    $('header').append(append);

    loadNavbar();
});

function loadNavbar() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    
    if (user != null && user !== undefined) {
        $('#navRegister').hide();
        $('#navLogin').hide();
        
        $('#navDashboard').show();
        $('#navExercise').show();
        $('#navTraining').show();
        
        $('#navUser').show();
        $('#navLogout').show();
        
        $('#navUserA').append(user.name + ' ' + user.surname);
    } else {
        $('#navRegister').show();
        $('#navLogin').show();
        
        $('#navDashboard').hide();
        $('#navExercise').hide();
        $('#navTraining').hide();

        $('#navUser').hide();
        $('#navLogout').hide();
    }
}
