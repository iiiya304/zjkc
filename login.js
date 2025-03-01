document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        window.location.href = 'shouye.html';
    });
});