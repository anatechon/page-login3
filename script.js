document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio sem preencher os campos

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // URL para redirecionar
        const instagramProfileURL = 'https://www.instagram.com/anatecch'; // Substitua pelo sua URL

        window.open(instagramProfileURL, '_blank');
    });
});
