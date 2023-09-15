// BARRA DESPLEGABLE

function toggleMenu() {
    var navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('show');
}

// DARK MODE
var modoBoton = document.getElementById('modoBoton');
var body = document.body;

// Agrega un listener al botón para cambiar el modo
modoBoton.addEventListener('click', function() {
    // Alternar la clase "dark-mode" en el elemento body
    body.classList.toggle('dark-mode');
});
