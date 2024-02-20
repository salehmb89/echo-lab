document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('#hamburger-menu');
    const sidebarMenu = document.querySelector('#sidebar-menu');

    menuButton.addEventListener('click', function () {
        sidebarMenu.classList.toggle('active');
    });
});

