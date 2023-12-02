document.addEventListener('DOMContentLoaded', function () {
    var ribbon = document.querySelector('.ribbon');
    var menuToggle = document.querySelector('.burger-menu');
    var menuIcon = document.getElementById('menuIcon');
    var closeIcon = document.getElementById('closeIcon');

    menuToggle.addEventListener('click', function () {

        // Cambia la visibilidad de los íconos de menú y cerrar con una transición
        menuIcon.style.display = (menuIcon.style.display === 'none') ? '' : 'none';
        closeIcon.style.display = (closeIcon.style.display === 'none') ? '' : 'none';

        // Activa o desactiva la clase 'active' en la cinta (ribbon)
        ribbon.classList.toggle('active');
    });
});
