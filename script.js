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


/** VENTANA EMERGENTE */
// Obtén el elemento de la ventana emergente
const miVentanaEmergente = document.getElementById('miVentanaEmergente');

// Función para mostrar la ventana emergente
function mostrarVentanaEmergente() {
    miVentanaEmergente.style.display = 'block';
}

// Mostrar la ventana emergente automáticamente después de cinco segundos
setTimeout(mostrarVentanaEmergente, 5000);

// Obtén el elemento del botón para cerrar la ventana emergente
const cerrarPopup = document.getElementById('cerrarPopup');

// Función para cerrar la ventana emergente
function cerrarVentanaEmergente() {
    miVentanaEmergente.style.display = 'none';
    miVentanaEmergente.scrollTop = 0;
}

// Agrega un evento de clic al botón para cerrar la ventana emergente
cerrarPopup.addEventListener('click', cerrarVentanaEmergente);
