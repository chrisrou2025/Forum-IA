// main.js

document.addEventListener('DOMContentLoaded', function () {
    // --- Début des éléments et fonctions pour les menus déroulants ---

    // Éléments du menu UTILISATEUR
    const userDropdownArea = document.getElementById('userDropdownArea');
    const userDropdownButton = document.getElementById('userDropdownButton');
    const userDropdownContent = document.getElementById('userDropdownContent');
    const userDropdownIcon = userDropdownButton ? userDropdownButton.querySelector('.user-dropdown-icon') : null; // Vérifiez si le bouton existe avant de chercher l'icône
    const modifyAccountLink = document.getElementById('modifyAccountLink');
    const userLockIcon = document.getElementById('userLockIcon');

    // Éléments du menu ADMINISTRATION
    const adminDropdownArea = document.getElementById('adminDropdownArea');
    const adminDropdownButton = document.getElementById('adminDropdownButton');
    const adminDropdownContent = document.getElementById('adminDropdownContent');
    const adminDropdownIcon = adminDropdownButton ? adminDropdownButton.querySelector('.admin-dropdown-icon') : null; // Vérifiez si le bouton existe
    const adminLockIcon = document.getElementById('adminLockIcon');

    // Éléments du menu CATEGORIES
    const categoriesDropdownArea = document.getElementById('categoriesDropdownArea');
    const categoriesDropdownButton = document.getElementById('categoriesDropdownButton');
    const categoriesDropdownContent = document.getElementById('categoriesDropdownContent');
    const categoriesDropdownIcon = categoriesDropdownButton ? categoriesDropdownButton.querySelector('.categories-dropdown-icon') : null; // Vérifiez si le bouton existe

    // Éléments du menu TAGS
    const tagsDropdownArea = document.getElementById('tagsDropdownArea');
    const tagsDropdownButton = document.getElementById('tagsDropdownButton');
    const tagsDropdownContent = document.getElementById('tagsDropdownContent');
    const tagsDropdownIcon = tagsDropdownButton ? tagsDropdownButton.querySelector('.tags-dropdown-icon') : null; // Vérifiez si le bouton existe

    // Marge entre chaque menu déroulant
    const menuSpacing = 10; // Ajustez cette valeur si nécessaire

    // Fonction pour ajuster la position des menus
    function adjustMenuPositions() {
        // La position de base pour le premier menu (utilisateur) est fixée dans le CSS (user-dropdown-container top: 20px).
        // Nous allons calculer les positions suivantes en fonction du menu précédent.
        if (!userDropdownArea || !adminDropdownArea || !categoriesDropdownArea || !tagsDropdownArea) {
            console.warn("Certains conteneurs de menu n'ont pas été trouvés. Les positions ne seront pas ajustées.");
            return;
        }

        // Hauteur de la zone du bouton utilisateur + son contenu si affiché
        const userAreaCurrentHeight = userDropdownArea.offsetHeight;
        const userContentHeight = userDropdownContent && userDropdownContent.classList.contains('show') ? userDropdownContent.offsetHeight : 0;
        const userTotalOccupiedHeight = userAreaCurrentHeight + userContentHeight;

        // Positionnement de l'ADMINISTRATION
        // top de l'utilisateur (20px ou valeur par défaut) + hauteur totale occupée par l'utilisateur + espacement
        adminDropdownArea.style.top = `${20 + userTotalOccupiedHeight + menuSpacing}px`; // Commencer à 20px pour le premier

        // Hauteur de la zone du bouton admin + son contenu si affiché
        const adminAreaCurrentHeight = adminDropdownArea.offsetHeight;
        const adminContentHeight = adminDropdownContent && adminDropdownContent.classList.contains('show') ? adminDropdownContent.offsetHeight : 0;
        const adminTotalOccupiedHeight = adminAreaCurrentHeight + adminContentHeight;

        // Positionnement des CATEGORIES
        // top de l'admin + hauteur totale occupée par l'admin + espacement
        categoriesDropdownArea.style.top = `${parseFloat(adminDropdownArea.style.top) + adminTotalOccupiedHeight + menuSpacing}px`;

        // Hauteur de la zone du bouton catégories + son contenu si affiché
        const categoriesAreaCurrentHeight = categoriesDropdownArea.offsetHeight;
        const categoriesContentHeight = categoriesDropdownContent && categoriesDropdownContent.classList.contains('show') ? categoriesDropdownContent.offsetHeight : 0;
        const categoriesTotalOccupiedHeight = categoriesAreaCurrentHeight + categoriesContentHeight;

        // Positionnement des TAGS
        // top des catégories + hauteur totale occupée par les catégories + espacement
        tagsDropdownArea.style.top = `${parseFloat(categoriesDropdownArea.style.top) + categoriesTotalOccupiedHeight + menuSpacing}px`;
    }

    // Fonction pour basculer les classes 'show' et 'rotate' pour un menu
    function toggleMenu(content, icon, activeArea, allContents, allIcons) {
        if (!content || !icon) return; // S'assurer que les éléments existent

        const isCurrentlyOpen = content.classList.contains('show');

        // Fermer tous les autres menus
        allContents.forEach(c => {
            if (c !== content) c.classList.remove('show');
        });
        allIcons.forEach(i => {
            if (i !== icon) i.classList.remove('rotate');
        });

        // Basculer le menu actuel
        content.classList.toggle('show', !isCurrentlyOpen); // Utiliser le deuxième argument pour forcer l'état
        icon.classList.toggle('rotate', !isCurrentlyOpen);

        adjustMenuPositions(); // Ajuste la position après avoir ouvert/fermé
    }

    // Gestionnaires d'événements pour les menus déroulants
    const allDropdownContents = [userDropdownContent, adminDropdownContent, categoriesDropdownContent, tagsDropdownContent].filter(Boolean); // Filtrer les null
    const allDropdownIcons = [userDropdownIcon, adminDropdownIcon, categoriesDropdownIcon, tagsDropdownIcon].filter(Boolean); // Filtrer les null

    if (userDropdownButton) {
        userDropdownButton.addEventListener('click', function (event) {
            event.stopPropagation(); // Empêche le clic de se propager au document
            toggleMenu(userDropdownContent, userDropdownIcon, userDropdownArea, allDropdownContents, allDropdownIcons);
        });
    }

    if (adminDropdownButton) {
        adminDropdownButton.addEventListener('click', function (event) {
            event.stopPropagation();
            toggleMenu(adminDropdownContent, adminDropdownIcon, adminDropdownArea, allDropdownContents, allDropdownIcons);
        });
    }

    if (categoriesDropdownButton) {
        categoriesDropdownButton.addEventListener('click', function (event) {
            event.stopPropagation();
            toggleMenu(categoriesDropdownContent, categoriesDropdownIcon, categoriesDropdownArea, allDropdownContents, allDropdownIcons);
        });
    }

    if (tagsDropdownButton) {
        tagsDropdownButton.addEventListener('click', function (event) {
            event.stopPropagation();
            toggleMenu(tagsDropdownContent, tagsDropdownIcon, tagsDropdownArea, allDropdownContents, allDropdownIcons);
        });
    }


    // Ferme les menus si on clique en dehors
    document.addEventListener('click', function (event) {
        if (userDropdownArea && !userDropdownArea.contains(event.target) && userDropdownContent && userDropdownContent.classList.contains('show')) {
            userDropdownContent.classList.remove('show');
            if (userDropdownIcon) userDropdownIcon.classList.remove('rotate');
            adjustMenuPositions();
        }
        if (adminDropdownArea && !adminDropdownArea.contains(event.target) && adminDropdownContent && adminDropdownContent.classList.contains('show')) {
            adminDropdownContent.classList.remove('show');
            if (adminDropdownIcon) adminDropdownIcon.classList.remove('rotate');
            adjustMenuPositions();
        }
        if (categoriesDropdownArea && !categoriesDropdownArea.contains(event.target) && categoriesDropdownContent && categoriesDropdownContent.classList.contains('show')) {
            categoriesDropdownContent.classList.remove('show');
            if (categoriesDropdownIcon) categoriesDropdownIcon.classList.remove('rotate');
            adjustMenuPositions();
        }
        if (tagsDropdownArea && !tagsDropdownArea.contains(event.target) && tagsDropdownContent && tagsDropdownContent.classList.contains('show')) {
            tagsDropdownContent.classList.remove('show');
            if (tagsDropdownIcon) tagsDropdownIcon.classList.remove('rotate');
            adjustMenuPositions();
        }
    });

    // Ouvre le menu "Catégories" par défaut (si présent)
    if (categoriesDropdownContent && categoriesDropdownIcon) {
        categoriesDropdownContent.classList.add('show');
        categoriesDropdownIcon.classList.add('rotate');
    }

    // Appel initial pour positionner les menus au chargement
    adjustMenuPositions();

    // --- Fin des éléments et fonctions pour les menus déroulants ---


    // --- Début des scripts pour rendre uniquement les icônes du header cliquables ---

    // Fonction simple pour associer une icône à son bouton
    function associerIconeAuBouton(iconeSelector, boutonSelector) {
        const icone = document.querySelector(iconeSelector);
        const bouton = document.querySelector(boutonSelector);

        if (icone && bouton) {
            icone.style.cursor = 'pointer';
            icone.style.transition = 'all 0.2s ease';

            icone.addEventListener('click', function (e) {
                e.preventDefault(); // Empêche les comportements par défaut (ex: navigation si c'est un lien)
                bouton.click(); // Déclenche le clic sur le bouton associé
            });

            // console.log(`Icône ${iconeSelector} associée au bouton ${boutonSelector}`); // Décommenter pour débogage
        } else {
            // console.warn(`Erreur: Icône ${iconeSelector} ou bouton ${boutonSelector} non trouvé.`); // Décommenter pour débogage
        }
    }

    // Association des icônes avec leurs boutons respectifs
    associerIconeAuBouton('.contact-icon', '.contact-button');
    associerIconeAuBouton('.connexion-icon', '.login-button');
    associerIconeAuBouton('.inscription-icon', '.signup-button');
    associerIconeAuBouton('.globe-icon', '.lang-button');
    // associerIconeAuBouton('.contrast-icon', '#toggleContrastButton'); // Cette ligne est commentée car l'icône est déjà à l'intérieur du bouton de contraste
    associerIconeAuBouton('.search-icon', '#openSearchModalButton');


    // Gestion spéciale pour le conteneur de langue entier
    const langDropdownContainer = document.querySelector('.lang-dropdown-container');
    const langButton = document.querySelector('.lang-button');

    if (langDropdownContainer && langButton) {
        langDropdownContainer.addEventListener('click', function (e) {
            // Empêcher la propagation si on clique sur un élément enfant
            // Ceci assure que seul le clic sur le conteneur lui-même ou l'icône déclenche le bouton
            if (e.target === langDropdownContainer || e.target.classList.contains('globe-icon')) {
                langButton.click();
            }
        });
    }

    // Fonction pour ajouter des effets visuels aux groupes de contrôles
    function ajouterEffetsVisuels() {
        const groupes = document.querySelectorAll('.header-control-group');

        groupes.forEach(groupe => {
            groupe.addEventListener('click', function (e) {
                const icone = groupe.querySelector('img');
                const bouton = groupe.querySelector('a, button'); // Peut être un lien ou un bouton

                // S'assurer que le clic est sur le groupe ou l'icône, pas sur un autre enfant du groupe
                if (icone && bouton && (e.target === icone || e.target === groupe)) {
                    e.preventDefault(); // Empêche le comportement par défaut de l'ancre si c'est un lien
                    bouton.click();
                }
            });

            // Ajouter un style de curseur pointer à tout le groupe
            groupe.style.cursor = 'pointer';
        });
    }

    // Appliquer les effets visuels
    ajouterEffetsVisuels();

    // Gestion spéciale pour le logo (si vous voulez qu'il soit plus réactif)
    const logo = document.querySelector('.header-logo img');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function () {
            window.location.href = 'index.html'; // Redirige vers la page d'accueil
        });
    }

    // console.log('Icônes du header configurées comme cliquables'); // Décommenter pour débogage

    // --- LOGIQUE POUR LE CHANGEMENT DE CONTRASTE ---
    const toggleContrastButton = document.getElementById('toggleContrastButton');
    const body = document.body; // Référence à l'élément <body>

    if (toggleContrastButton && body) {
        // Optionnel: Vérifier l'état initial du contraste depuis le stockage local
        // Cela permet de conserver le mode contraste si l'utilisateur change de page ou rafraîchit.
        const isHighContrast = localStorage.getItem('highContrast') === 'true';
        if (isHighContrast) {
            body.classList.add('high-contrast');
        }

        toggleContrastButton.addEventListener('click', function () {
            body.classList.toggle('high-contrast'); // Ajoute ou retire la classe 'high-contrast'
            // Sauvegarder l'état du contraste
            if (body.classList.contains('high-contrast')) {
                localStorage.setItem('highContrast', 'true');
            } else {
                localStorage.setItem('highContrast', 'false');
            }
            console.log('Changement de contraste activé/désactivé.');
        });
    } else {
        console.warn("Le bouton de contraste (#toggleContrastButton) ou l'élément body n'a pas été trouvé. Le changement de contraste ne fonctionnera pas.");
    }
}); // Fin du document.addEventListener('DOMContentLoaded')