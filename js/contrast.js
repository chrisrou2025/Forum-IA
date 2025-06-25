// js/contrast.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleContrastButton = document.getElementById('toggleContrastButton');
    const body = document.body;

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkModeEnabled', 'true');
        } else {
            localStorage.removeItem('darkModeEnabled');
        }
    }

    if (toggleContrastButton) {
        toggleContrastButton.addEventListener('click', toggleDarkMode);
    }

    const savedDarkModePreference = localStorage.getItem('darkModeEnabled');
    if (savedDarkModePreference === 'true') {
        body.classList.add('dark-mode');
    }
});