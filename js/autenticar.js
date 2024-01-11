document.getElementById('registrarse').addEventListener('click', function() {
    document.querySelector('.registro').style.display = 'block';
    document.querySelector('.login').style.display = 'none';
});

document.getElementById('iniciarSesion').addEventListener('click', function() {
    document.querySelector('.registro').style.display = 'none';
    document.querySelector('.login').style.display = 'block';
});

document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
        window.location.href = 'home.html';
});

document.getElementById('registro').addEventListener('submit', function(e) {
    e.preventDefault();
        window.location.href = 'home.html';
});