document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const menu = document.getElementById('menu');

    menuHamburguer.addEventListener('click', () => {
        menu.classList.toggle('active'); 
    });
});
