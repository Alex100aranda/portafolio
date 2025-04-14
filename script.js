// Seleccionar todos los elementos que se animan
const h1Element = document.querySelector('#portafolio');
const sobreMiTitulo = document.querySelector('.sobre-mi__titulo');
const habilidadesTitulo = document.querySelector('.habilidades__titulo');
const formacionTitulo = document.querySelector('.formacion__titulo');
const proyectosTitulo = document.querySelector('.proyectos__titulo');
const contactoTitulo = document.querySelector('.contacto__titulo'); // 

// Función para animar cuando el elemento entra al viewport
function animateOnScroll(element) {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
        element.classList.add('animate-right-to-left');
    }
}

// Scroll listener que revisa todos los títulos
window.addEventListener('scroll', function() {
    animateOnScroll(h1Element);
    animateOnScroll(sobreMiTitulo);
    animateOnScroll(habilidadesTitulo);
    animateOnScroll(formacionTitulo);
    animateOnScroll(proyectosTitulo);
    animateOnScroll(contactoTitulo); // 
});
