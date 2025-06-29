// JavaScript pour gérer le menu gauche responsive
// Desktop : position normale, Mobile : contrôle par menu burger

/**
 * Fonction principale pour gérer l'affichage/masquage du menu gauche
 * Fonctionne UNIQUEMENT en mode mobile (écran <= 768px)
 */
function toggleLeftMenu() {
    // Vérifie si on est en mode mobile
    if (!isMobileView()) {
        console.log('Menu burger inactif en mode desktop');
        return;
    }

    const leftMenu = document.querySelector('.rectangle-one');
    const overlay = document.querySelector('.menu-overlay');

    if (!leftMenu) {
        console.error('Menu gauche (.rectangle-one) non trouvé');
        return;
    }

    // Vérifie si le menu est actuellement visible
    const isMenuVisible = leftMenu.classList.contains('show-mobile');

    if (isMenuVisible) {
        // Masquer le menu
        hideLeftMenu();
    } else {
        // Afficher le menu
        showLeftMenu();
    }
}

/**
 * Fonction pour afficher le menu gauche (mobile uniquement)
 */
function showLeftMenu() {
    // Ne fonctionne qu'en mobile
    if (!isMobileView()) return;

    const leftMenu = document.querySelector('.rectangle-one');
    const body = document.body;

    // Ajoute les classes pour afficher le menu
    leftMenu.classList.add('show-mobile');
    leftMenu.classList.remove('hidden-mobile');

    // Empêche le scroll du body
    body.classList.add('left-menu-open');

    // Crée ou affiche l'overlay
    createOrShowOverlay();

    console.log('Menu gauche affiché (mobile)');
}

/**
 * Fonction pour masquer le menu gauche (mobile uniquement)
 */
function hideLeftMenu() {
    // Ne fonctionne qu'en mobile
    if (!isMobileView()) return;

    const leftMenu = document.querySelector('.rectangle-one');
    const body = document.body;
    const overlay = document.querySelector('.menu-overlay');

    // Retire les classes pour masquer le menu
    leftMenu.classList.remove('show-mobile');
    leftMenu.classList.add('hidden-mobile');

    // Remet le scroll du body
    body.classList.remove('left-menu-open');

    // Masque l'overlay
    if (overlay) {
        overlay.style.display = 'none';
    }

    console.log('Menu gauche masqué (mobile)');
}

/**
 * Crée ou affiche l'overlay pour fermer le menu en cliquant en dehors
 */
function createOrShowOverlay() {
    let overlay = document.querySelector('.menu-overlay');

    if (!overlay) {
        // Crée l'overlay s'il n'existe pas
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
            display: block;
        `;

        // Ajoute l'événement pour fermer le menu en cliquant sur l'overlay
        overlay.addEventListener('click', hideLeftMenu);

        // Ajoute l'overlay au body
        document.body.appendChild(overlay);
    } else {
        // Affiche l'overlay existant
        overlay.style.display = 'block';
    }
}

/**
 * Fonction utilitaire pour vérifier si on est en mode mobile
 */
function isMobileView() {
    return window.innerWidth <= 768;
}

/**
 * Initialise l'état du menu en fonction de la taille d'écran
 */
function initializeResponsiveMenu() {
    const leftMenu = document.querySelector('.rectangle-one');

    if (!leftMenu) {
        console.error('Menu gauche (.rectangle-one) non trouvé lors de l\'initialisation');
        return;
    }

    if (isMobileView()) {
        // Mode mobile : masque le menu par défaut et ajoute les classes mobiles
        leftMenu.classList.add('hidden-mobile');
        leftMenu.classList.remove('show-mobile');
        console.log('Menu initialisé en mode mobile (caché)');
    } else {
        // Mode desktop : retire toutes les classes mobiles pour position normale
        leftMenu.classList.remove('hidden-mobile', 'show-mobile');
        console.log('Menu initialisé en mode desktop (position normale)');
    }
}

/**
 * Gère le changement de taille d'écran (desktop <-> mobile)
 */
function handleWindowResize() {
    const leftMenu = document.querySelector('.rectangle-one');
    const overlay = document.querySelector('.menu-overlay');
    const body = document.body;

    if (!leftMenu) return;

    if (isMobileView()) {
        // Passage en mode mobile
        console.log('Passage en mode mobile');

        // Si le menu n'a pas encore de classe mobile, le cacher par défaut
        if (!leftMenu.classList.contains('show-mobile') && !leftMenu.classList.contains('hidden-mobile')) {
            leftMenu.classList.add('hidden-mobile');
        }

    } else {
        // Passage en mode desktop
        console.log('Passage en mode desktop');

        // Retire toutes les classes mobiles pour revenir à la position normale
        leftMenu.classList.remove('hidden-mobile', 'show-mobile');

        // Masque l'overlay s'il existe
        if (overlay) {
            overlay.style.display = 'none';
        }

        // Remet le scroll du body
        body.classList.remove('left-menu-open');
    }
}

/**
 * Fonction pour fermer tous les menus déroulants
 * Utile quand le menu principal se ferme
 */
function closeAllDropdowns() {
    // Ferme tous les contenus déroulants ouverts
    const dropdowns = document.querySelectorAll('.user-dropdown-content.show, .admin-dropdown-content.show, .categories-dropdown-content.show, .tags-dropdown-content.show');
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
    });

    // Remet les flèches dans leur position normale
    const rotatedIcons = document.querySelectorAll('.user-dropdown-icon.rotate, .admin-dropdown-icon.rotate, .categories-dropdown-icon.rotate, .tags-dropdown-icon.rotate');
    rotatedIcons.forEach(icon => {
        icon.classList.remove('rotate');
    });
}

/**
 * Version étendue de hideLeftMenu qui ferme aussi les sous-menus
 */
function hideLeftMenuWithCleanup() {
    hideLeftMenu();
    closeAllDropdowns();
}

/**
 * Initialisation au chargement de la page
 */
document.addEventListener('DOMContentLoaded', function () {

    console.log('Initialisation du menu responsive');

    // 1. Initialise le menu selon la taille d'écran actuelle
    initializeResponsiveMenu();

    // 2. Trouve votre icône menu-burger existante
    // IMPORTANT : Adaptez ce sélecteur selon votre implémentation
    const burgerIcon = document.querySelector('.menu-burger-icon');

    // Alternatives possibles selon votre code existant :
    // const burgerIcon = document.querySelector('#burger-menu');
    // const burgerIcon = document.querySelector('.burger-toggle');
    // const burgerIcon = document.querySelector('[data-menu="burger"]');
    // const burgerIcon = document.querySelector('.hamburger');
    // const burgerIcon = document.querySelector('.menu-toggle');

    if (burgerIcon) {
        // Ajoute l'événement click à votre menu-burger
        burgerIcon.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            toggleLeftMenu();
        });
        console.log('Menu-burger connecté au système responsive');
    } else {
        console.warn('Icône menu-burger non trouvée. Vérifiez le sélecteur CSS dans le code.');
        console.warn('Sélecteurs possibles : .menu-burger-icon, #burger-menu, .burger-toggle, etc.');
    }

    // 3. Gère les changements de taille d'écran
    window.addEventListener('resize', function () {
        // Debounce pour éviter trop d'appels lors du redimensionnement
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(handleWindowResize, 100);
    });

    // 4. Ferme le menu avec la touche Échap (mobile uniquement)
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && isMobileView()) {
            hideLeftMenuWithCleanup();
        }
    });

    // 5. Ferme le menu si on clique en dehors (mobile uniquement)
    document.addEventListener('click', function (e) {
        if (!isMobileView()) return;

        const leftMenu = document.querySelector('.rectangle-one');
        const burgerIcon = document.querySelector('.menu-burger-icon');

        // Si le menu est ouvert et qu'on clique en dehors
        if (leftMenu && leftMenu.classList.contains('show-mobile')) {
            if (!leftMenu.contains(e.target) && e.target !== burgerIcon) {
                hideLeftMenuWithCleanup();
            }
        }
    });

    console.log('Menu responsive initialisé avec succès');
});

/**
 * Fonction utilitaire pour debugging
 * Affiche l'état actuel du menu dans la console
 */
function debugMenuState() {
    const leftMenu = document.querySelector('.rectangle-one');
    const overlay = document.querySelector('.menu-overlay');
    const body = document.body;

    console.log('=== État du menu ===');
    console.log('Mode mobile :', isMobileView());
    console.log('Classes du menu :', leftMenu ? leftMenu.className : 'Menu non trouvé');
    console.log('Overlay affiché :', overlay ? overlay.style.display : 'Pas d\'overlay');
    console.log('Body avec menu ouvert :', body.classList.contains('left-menu-open'));
    console.log('==================');
}

// Expose la fonction de debug globalement pour tests
window.debugMenuState = debugMenuState;