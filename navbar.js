function loadNavbar() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    
    if (user != null && user !== undefined) {
        $('#navRegister').hide();
        $('#navLogin').hide();
        
        $('#navDashboard').show();
        $('#navExercises').show();
        
        $('#navUser').show();
        $('#navLogout').show();
        
        console.log(user.name);
        
        $('#navUserA').append(user.name + ' ' + user.surname);
    } else {
        $('#navRegister').show();
        $('#navLogin').show();
        
        $('#navDashboard').hide();
        $('#navExercises').hide();
        
        $('#navUser').hide();
        $('#navLogout').hide();
    }
}
