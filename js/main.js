document.addEventListener('DOMContentLoaded', function () {
    // Éléments du menu UTILISATEUR
    const userDropdownArea = document.getElementById('userDropdownArea');
    const userDropdownButton = document.getElementById('userDropdownButton');
    const userDropdownContent = document.getElementById('userDropdownContent');
    const userDropdownIcon = userDropdownButton.querySelector('.user-dropdown-icon');
    const modifyAccountLink = document.getElementById('modifyAccountLink');
    const userLockIcon = document.getElementById('userLockIcon');

    // Éléments du menu ADMINISTRATION
    const adminDropdownArea = document.getElementById('adminDropdownArea');
    const adminDropdownButton = document.getElementById('adminDropdownButton');
    const adminDropdownContent = document.getElementById('adminDropdownContent');
    const adminDropdownIcon = adminDropdownButton.querySelector('.admin-dropdown-icon');
    const adminLockIcon = document.getElementById('adminLockIcon');

    // Éléments du menu CATEGORIES
    const categoriesDropdownArea = document.getElementById('categoriesDropdownArea');
    const categoriesDropdownButton = document.getElementById('categoriesDropdownButton');
    const categoriesDropdownContent = document.getElementById('categoriesDropdownContent');
    const categoriesDropdownIcon = categoriesDropdownButton.querySelector('.categories-dropdown-icon');

    // NOUVEAU : Éléments du menu TAGS
    const tagsDropdownArea = document.getElementById('tagsDropdownArea');
    const tagsDropdownButton = document.getElementById('tagsDropdownButton');
    const tagsDropdownContent = document.getElementById('tagsDropdownContent');
    const tagsDropdownIcon = tagsDropdownButton.querySelector('.tags-dropdown-icon');


    // Positions initiales des menus et espacement
    const initialUserTop = 20; // Référence de base pour le premier menu
    const paddingBetweenMenus = 30; // Espacement souhaité entre les menus

    // --- SIMPLIFICATION TEMPORAIRE : MENUS TOUJOURS OUVERTS (pour le développement) ---
    userLockIcon.src = 'assets/icones/cadenas-ouvert.png';
    userDropdownArea.classList.remove('locked');
    if (modifyAccountLink) { // S'assurer que le lien existe avant de tenter d'y accéder
        modifyAccountLink.style.display = 'flex';
    }

    adminLockIcon.src = 'assets/icones/cadenas-ouvert.png';
    adminDropdownArea.classList.remove('locked');


    // Fonction pour ajuster la position des menus en cascade
    function adjustMenuPositions() {
        let currentAdminTop;
        let currentCategoriesTop;
        let currentTagsTop;

        // 1. Calculer la position d'ADMINISTRATION en fonction d'UTILISATEUR
        const userButtonHeight = userDropdownButton.offsetHeight;
        const userTopOffset = parseInt(getComputedStyle(userDropdownArea).top);

        if (userDropdownContent.classList.contains('show')) {
            const userMenuHeight = userDropdownContent.offsetHeight;
            currentAdminTop = userTopOffset + userButtonHeight + userMenuHeight + paddingBetweenMenus;
        } else {
            currentAdminTop = userTopOffset + userButtonHeight + paddingBetweenMenus;
        }
        adminDropdownArea.style.top = `${currentAdminTop}px`;

        // 2. Calculer la position de CATEGORIES en fonction d'ADMINISTRATION
        const adminButtonHeight = adminDropdownButton.offsetHeight;
        const adminTopOffset = parseInt(getComputedStyle(adminDropdownArea).top);

        if (adminDropdownContent.classList.contains('show')) {
            const adminMenuHeight = adminDropdownContent.offsetHeight;
            currentCategoriesTop = adminTopOffset + adminButtonHeight + adminMenuHeight + paddingBetweenMenus;
        } else {
            currentCategoriesTop = adminTopOffset + adminButtonHeight + paddingBetweenMenus;
        }
        categoriesDropdownArea.style.top = `${currentCategoriesTop}px`;

        // 3. Calculer la position de TAGS en fonction de CATEGORIES
        const categoriesButtonHeight = categoriesDropdownButton.offsetHeight;
        const categoriesTopOffset = parseInt(getComputedStyle(categoriesDropdownArea).top);

        if (categoriesDropdownContent.classList.contains('show')) {
            const categoriesMenuHeight = categoriesDropdownContent.offsetHeight;
            currentTagsTop = categoriesTopOffset + categoriesButtonHeight + categoriesMenuHeight + paddingBetweenMenus;
        } else {
            currentTagsTop = categoriesTopOffset + categoriesButtonHeight + paddingBetweenMenus;
        }
        tagsDropdownArea.style.top = `${currentTagsTop}px`;
    }

    // Fonction pour fermer tous les autres menus
    function closeAllOtherMenus(menuToKeepOpen = null) {
        if (menuToKeepOpen !== userDropdownContent && userDropdownContent.classList.contains('show')) {
            userDropdownContent.classList.remove('show');
            userDropdownIcon.classList.remove('rotate');
        }
        if (menuToKeepOpen !== adminDropdownContent && adminDropdownContent.classList.contains('show')) {
            adminDropdownContent.classList.remove('show');
            adminDropdownIcon.classList.remove('rotate');
        }
        if (menuToKeepOpen !== categoriesDropdownContent && categoriesDropdownContent.classList.contains('show')) {
            categoriesDropdownContent.classList.remove('show');
            categoriesDropdownIcon.classList.remove('rotate');
        }
        if (menuToKeepOpen !== tagsDropdownContent && tagsDropdownContent.classList.contains('show')) {
            tagsDropdownContent.classList.remove('show');
            tagsDropdownIcon.classList.remove('rotate');
        }
    }

    // Gestionnaire d'événement pour le bouton déroulant UTILISATEUR
    if (userDropdownButton) {
        userDropdownButton.addEventListener('click', function () {
            closeAllOtherMenus(userDropdownContent);
            userDropdownContent.classList.toggle('show');
            userDropdownIcon.classList.toggle('rotate');
            adjustMenuPositions();
        });
    }

    // Gestionnaire d'événement pour le bouton déroulant ADMINISTRATION
    if (adminDropdownButton) {
        adminDropdownButton.addEventListener('click', function () {
            closeAllOtherMenus(adminDropdownContent);
            adminDropdownContent.classList.toggle('show');
            adminDropdownIcon.classList.toggle('rotate');
            adjustMenuPositions();
        });
    }

    // Gestionnaire d'événement pour le bouton déroulant CATEGORIES
    if (categoriesDropdownButton) {
        categoriesDropdownButton.addEventListener('click', function () {
            closeAllOtherMenus(categoriesDropdownContent);
            categoriesDropdownContent.classList.toggle('show');
            categoriesDropdownIcon.classList.toggle('rotate');
            adjustMenuPositions();
        });
    }

    // NOUVEAU : Gestionnaire d'événement pour le bouton déroulant TAGS
    if (tagsDropdownButton) {
        tagsDropdownButton.addEventListener('click', function () {
            closeAllOtherMenus(tagsDropdownContent);
            tagsDropdownContent.classList.toggle('show');
            tagsDropdownIcon.classList.toggle('rotate');
            adjustMenuPositions();
        });
    }

    // Ferme les menus déroulants si l'utilisateur clique en dehors de ceux-ci
    window.addEventListener('click', function (event) {
        const isClickInsideUserDropdownArea = userDropdownArea.contains(event.target);
        const isClickInsideAdminDropdownArea = adminDropdownArea.contains(event.target);
        const isClickInsideCategoriesDropdownArea = categoriesDropdownArea.contains(event.target);
        const isClickInsideTagsDropdownArea = tagsDropdownArea.contains(event.target); // NOUVEAU

        if (!isClickInsideUserDropdownArea && userDropdownContent.classList.contains('show')) {
            userDropdownContent.classList.remove('show');
            userDropdownIcon.classList.remove('rotate');
            adjustMenuPositions();
        }
        if (!isClickInsideAdminDropdownArea && adminDropdownContent.classList.contains('show')) {
            adminDropdownContent.classList.remove('show');
            adminDropdownIcon.classList.remove('rotate');
            adjustMenuPositions();
        }
        if (!isClickInsideCategoriesDropdownArea && categoriesDropdownContent.classList.contains('show')) {
            categoriesDropdownContent.classList.remove('show');
            categoriesDropdownIcon.classList.remove('rotate');
            adjustMenuPositions();
        }
        // NOUVEAU : Fermeture du menu TAGS
        if (!isClickInsideTagsDropdownArea && tagsDropdownContent.classList.contains('show')) {
            tagsDropdownContent.classList.remove('show');
            tagsDropdownIcon.classList.remove('rotate');
            adjustMenuPositions();
        }
    });

    // Appel initial pour positionner les menus au chargement
    adjustMenuPositions();
});