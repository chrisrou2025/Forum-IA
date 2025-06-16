// js/search.js

document.addEventListener('DOMContentLoaded', () => {
    const openSearchModalButton = document.getElementById('openSearchModalButton');
    const searchModal = document.getElementById('searchModal');
    const closeButton = searchModal.querySelector('.close-button');
    const searchInput = document.getElementById('searchInput');
    const performSearchButton = document.getElementById('performSearchButton');
    const searchResultsContainer = document.getElementById('searchResults');

    // Sample data for search results
    const searchData = [
        { title: "L'avenir de l'IA", snippet: "Un article sur les prédictions et les tendances de l'intelligence artificielle en 2025." },
        { title: "Éthique de l'IA", snippet: "Discussion sur les défis éthiques posés par le développement rapide de l'IA." },
        { title: "IA et Santé", snippet: "Comment l'intelligence artificielle révolutionne le secteur de la santé." },
        { title: "Apprentissage automatique pour les débutants", snippet: "Un guide pour comprendre les bases du machine learning." },
        { title: "Impact de l'IA sur l'emploi", snippet: "Analyse des effets de l'automatisation et de l'IA sur le marché du travail." }
    ];

    // Fonction pour ouvrir la modale
    openSearchModalButton.addEventListener('click', () => {
        searchModal.style.display = 'flex';
        searchInput.focus();
        searchResultsContainer.innerHTML = '';
        searchInput.value = '';
    });

    // Fonction pour fermer la modale (bouton X)
    closeButton.addEventListener('click', () => {
        searchModal.style.display = 'none';
    });

    // Fonction pour fermer la modale si l'utilisateur clique en dehors du contenu
    window.addEventListener('click', (event) => {
        if (event.target === searchModal) {
            searchModal.style.display = 'none';
        }
    });

    // Fonction pour fermer la modale avec la touche Échap
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && searchModal.style.display === 'flex') {
            searchModal.style.display = 'none';
        }
    });

    // Fonction de recherche
    function performSearch() {
        const query = searchInput.value.toLowerCase();
        searchResultsContainer.innerHTML = ''; // Vide les résultats précédents

        if (query.trim() === '') {
            searchResultsContainer.innerHTML = ''; // Affiche une chaîne vide si la recherche est vide
            return;
        }

        const filteredResults = searchData.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.snippet.toLowerCase().includes(query)
        );

        if (filteredResults.length > 0) {
            filteredResults.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('search-result-item');
                resultItem.innerHTML = `<h3>${item.title}</h3><p>${item.snippet}</p>`;
                searchResultsContainer.appendChild(resultItem);
            });
        } else {
            const currentLang = localStorage.getItem('selectedLang') || 'fr';
            // Utilise l'objet translations globalement exposé par language.js
            const noResultsText = window.translations[currentLang] ? window.translations[currentLang].noSearchResults : 'No results found for this search.';
            searchResultsContainer.innerHTML = `<p>${noResultsText}</p>`;
        }
    }

    // Écouteurs d'événements pour la recherche
    performSearchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('input', performSearch); // Recherche en temps réel
});