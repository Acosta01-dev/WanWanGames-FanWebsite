document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.burger-menu');
    var headerNav = document.querySelector('.header_nav');
    var ulElement = document.querySelector('.header_nav ul');
    var menuIcon = document.getElementById('menuIcon');
    var closeIcon = document.getElementById('closeIcon');

    menuToggle.addEventListener('click', function () {
        headerNav.classList.toggle('active');

        // Agrega o quita la clase 'active' después de un breve retraso
        setTimeout(function () {
            ulElement.style.height = headerNav.classList.contains('active') ? '100%' : '0';
        }, 0);


        // Cambia la visibilidad de los íconos de menú y cerrar con una transición
        menuIcon.style.display = (menuIcon.style.display === 'none') ? '' : 'none';
        closeIcon.style.display = (closeIcon.style.display === 'none') ? '' : 'none';
    });
});
