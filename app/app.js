document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.burger-menu');
    var headerNav = document.querySelector('.header_nav');
    var ulElement = document.querySelector('.header_nav ul');
    var menuLink = document.getElementById('menuLink');
    var menuIcon = document.getElementById('menuIcon');
    var closeIcon = document.getElementById('closeIcon');
    // Agrega un evento de clic al menú hamburguesa
    menuToggle.addEventListener('click', function () {
        headerNav.classList.toggle('active'); // Agrega o quita la clase 'active'
        menuIcon.style.display = (menuIcon.style.display === 'none') ? '' : 'none';
        closeIcon.style.display = (closeIcon.style.display === 'none') ? '' : 'none';
        // Cambia la altura de ul de 0 a 100% al agregar/quitar la clase 'active'
        if (headerNav.classList.contains('active')) {
            ulElement.style.height = '100%';
        } else {
            ulElement.style.height = '0';
        }
    });
});
