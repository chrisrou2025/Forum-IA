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

    // Éléments du menu TAGS
    const tagsDropdownArea = document.getElementById('tagsDropdownArea');
    const tagsDropdownButton = document.getElementById('tagsDropdownButton');
    const tagsDropdownContent = document.getElementById('tagsDropdownContent');
    const tagsDropdownIcon = tagsDropdownButton.querySelector('.tags-dropdown-icon');

    // Marge entre chaque menu déroulant
    const menuSpacing = 10; // Ajustez cette valeur si nécessaire

    // Fonction pour ajuster la position des menus
    function adjustMenuPositions() {
        // La position de base pour le premier menu est fixée dans le CSS (user-dropdown-container top: 20px).
        // Nous allons calculer les positions suivantes en fonction du menu précédent.

        // Hauteur de la zone du bouton utilisateur + son contenu si affiché
        const userAreaCurrentHeight = userDropdownArea.offsetHeight;
        const userContentHeight = userDropdownContent.classList.contains('show') ? userDropdownContent.offsetHeight : 0;
        const userTotalOccupiedHeight = userAreaCurrentHeight + userContentHeight;

        // Positionnement de l'ADMINISTRATION
        // top de l'utilisateur (20px) + hauteur totale occupée par l'utilisateur + espacement
        adminDropdownArea.style.top = `${10 + userTotalOccupiedHeight + menuSpacing}px`;

        // Hauteur de la zone du bouton admin + son contenu si affiché
        const adminAreaCurrentHeight = adminDropdownArea.offsetHeight;
        const adminContentHeight = adminDropdownContent.classList.contains('show') ? adminDropdownContent.offsetHeight : 0;
        const adminTotalOccupiedHeight = adminAreaCurrentHeight + adminContentHeight;

        // Positionnement des CATEGORIES
        // top de l'admin + hauteur totale occupée par l'admin + espacement
        categoriesDropdownArea.style.top = `${parseFloat(adminDropdownArea.style.top) + adminTotalOccupiedHeight + menuSpacing}px`;

        // Hauteur de la zone du bouton catégories + son contenu si affiché
        const categoriesAreaCurrentHeight = categoriesDropdownArea.offsetHeight;
        const categoriesContentHeight = categoriesDropdownContent.classList.contains('show') ? categoriesDropdownContent.offsetHeight : 0;
        const categoriesTotalOccupiedHeight = categoriesAreaCurrentHeight + categoriesContentHeight;

        // Positionnement des TAGS
        // top des catégories + hauteur totale occupée par les catégories + espacement
        tagsDropdownArea.style.top = `${parseFloat(categoriesDropdownArea.style.top) + categoriesTotalOccupiedHeight + menuSpacing}px`;
    }

    // Gestionnaire d'événements pour le menu UTILISATEUR
    userDropdownButton.addEventListener('click', function () {
        userDropdownContent.classList.toggle('show');
        userDropdownIcon.classList.toggle('rotate');
        // Ferme les autres menus
        adminDropdownContent.classList.remove('show');
        adminDropdownIcon.classList.remove('rotate');
        categoriesDropdownContent.classList.remove('show');
        categoriesDropdownIcon.classList.remove('rotate');
        tagsDropdownContent.classList.remove('show');
        tagsDropdownIcon.classList.remove('rotate');
        adjustMenuPositions(); // Ajuste la position après avoir ouvert/fermé
    });

    // Gestionnaire d'événements pour le menu ADMINISTRATION
    adminDropdownButton.addEventListener('click', function () {
        adminDropdownContent.classList.toggle('show');
        adminDropdownIcon.classList.toggle('rotate');
        // Ferme les autres menus
        userDropdownContent.classList.remove('show');
        userDropdownIcon.classList.remove('rotate');
        categoriesDropdownContent.classList.remove('show');
        categoriesDropdownIcon.classList.remove('rotate');
        tagsDropdownContent.classList.remove('show');
        tagsDropdownIcon.classList.remove('rotate');
        adjustMenuPositions(); // Ajuste la position après avoir ouvert/fermé
    });

    // Gestionnaire d'événements pour le menu CATEGORIES
    categoriesDropdownButton.addEventListener('click', function () {
        categoriesDropdownContent.classList.toggle('show');
        categoriesDropdownIcon.classList.toggle('rotate');
        // Ferme les autres menus
        userDropdownContent.classList.remove('show');
        userDropdownIcon.classList.remove('rotate');
        adminDropdownContent.classList.remove('show');
        adminDropdownIcon.classList.remove('rotate');
        tagsDropdownContent.classList.remove('show');
        tagsDropdownIcon.classList.remove('rotate');
        adjustMenuPositions(); // Ajuste la position après avoir ouvert/fermé
    });

    // Gestionnaire d'événements pour le menu TAGS
    tagsDropdownButton.addEventListener('click', function () {
        tagsDropdownContent.classList.toggle('show');
        tagsDropdownIcon.classList.toggle('rotate');
        // Ferme les autres menus
        userDropdownContent.classList.remove('show');
        userDropdownIcon.classList.remove('rotate');
        adminDropdownContent.classList.remove('show');
        adminDropdownIcon.classList.remove('rotate');
        categoriesDropdownContent.classList.remove('show');
        categoriesDropdownIcon.classList.remove('rotate');
        adjustMenuPositions(); // Ajuste la position après avoir ouvert/fermé
    });

    // Ferme les menus si on clique en dehors
    document.addEventListener('click', function (event) {
        const isClickInsideUserDropdownArea = userDropdownArea.contains(event.target);
        const isClickInsideAdminDropdownArea = adminDropdownArea.contains(event.target);
        const isClickInsideCategoriesDropdownArea = categoriesDropdownArea.contains(event.target);
        const isClickInsideTagsDropdownArea = tagsDropdownArea.contains(event.target);

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
        // Keep categories menu open if it's the target of the click or if it's already open and not clicked outside
        if (!isClickInsideCategoriesDropdownArea && categoriesDropdownContent.classList.contains('show')) {
            categoriesDropdownContent.classList.remove('show');
            categoriesDropdownIcon.classList.remove('rotate');
            adjustMenuPositions();
        }
        if (!isClickInsideTagsDropdownArea && tagsDropdownContent.classList.contains('show')) {
            tagsDropdownContent.classList.remove('show');
            tagsDropdownIcon.classList.remove('rotate');
            adjustMenuPositions();
        }
    });

    // Ouvre le menu "Catégories" par défaut
    categoriesDropdownContent.classList.add('show');
    categoriesDropdownIcon.classList.add('rotate');

    // Appel initial pour positionner les menus au chargement
    adjustMenuPositions();
});