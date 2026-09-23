// Función para mostrar alerta al enviar el formulario
function pop_up(mensaje) {
    alert(mensaje);
}

// Efecto de desplazamiento suave al hacer clic en los enlaces del menú/secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mensaje de bienvenida en la consola del navegador
console.log("¡Bienvenido al portafolio de Esnaider Beltran!");