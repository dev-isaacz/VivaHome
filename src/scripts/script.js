/* ==========================================================================
   responsive-menu.js
   Script isolado, responsável apenas por abrir/fechar o menu de navegação
   em telas menores (menu hambúrguer). Não altera nenhuma lógica existente
   no script.js original.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
    var hamburgerBtn = document.getElementById('hamburger-btn');
    var menuHeader = document.getElementById('menu-header');

    if (!hamburgerBtn || !menuHeader) return;

    function toggleMenu() {
        var isOpen = menuHeader.classList.toggle('menu-aberto');
        hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

        // Alterna o ícone entre "barras" e "x"
        var icon = hamburgerBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    }

    hamburgerBtn.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em qualquer link (comum em navegação mobile)
    menuHeader.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (menuHeader.classList.contains('menu-aberto')) {
                toggleMenu();
            }
        });
    });

    // Fecha o menu automaticamente se a tela for redimensionada para desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 767 && menuHeader.classList.contains('menu-aberto')) {
            toggleMenu();
        }
    });
});
