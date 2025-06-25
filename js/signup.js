// js/signup.js
document.addEventListener('DOMContentLoaded', () => {
    // CORRECTION : Utilisation des bons identifiants correspondant au HTML
    const signupFormSubmitButton = document.querySelector('.signup-form-submit-button');
    const usernameInput = document.getElementById('signupUsername');
    const emailInput = document.getElementById('signupEmail');
    const passwordInput = document.getElementById('signupPassword');
    const confirmPasswordInput = document.getElementById('signupConfirmPassword');
    const formMessage = document.getElementById('signupMessage'); // Pour afficher les messages

    // Fonction pour afficher un message (succès ou erreur)
    function displayMessage(message, isError = false) {
        formMessage.textContent = message;
        formMessage.style.color = isError ? 'red' : 'green';
        formMessage.style.display = 'block';
    }

    // Vérification que tous les éléments existent avant d'ajouter l'événement
    if (!signupFormSubmitButton || !usernameInput || !emailInput || !passwordInput || !confirmPasswordInput || !formMessage) {
        console.error('Erreur : Un ou plusieurs éléments du formulaire sont introuvables');
        return;
    }

    signupFormSubmitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le rechargement de la page par défaut

        // Récupération des valeurs
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Validation simple côté client
        if (!username || !email || !password || !confirmPassword) {
            displayMessage('Veuillez remplir tous les champs obligatoires.', true);
            return;
        }

        if (password.length < 6) {
            displayMessage('Le mot de passe doit contenir au moins 6 caractères.', true);
            return;
        }

        if (password !== confirmPassword) {
            displayMessage('Les mots de passe ne correspondent pas.', true);
            return;
        }

        // Si toutes les validations passent
        displayMessage('Inscription en cours...', false);

        // Ici, vous ajouteriez la logique pour envoyer les données au serveur
        // Exemple avec fetch API (requête POST)
        /*
        fetch('/api/signup', { // Remplacez '/api/signup' par votre endpoint d'API
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayMessage('Inscription réussie ! Vous pouvez maintenant vous connecter.', false);
                // Optionnel: rediriger vers la page de connexion après un court délai
                // setTimeout(() => { window.location.href = 'connexion.html'; }, 2000);
            } else {
                displayMessage(data.message || 'Une erreur est survenue lors de l\'inscription.', true);
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            displayMessage('Erreur de connexion au serveur.', true);
        });
        */

        // Pour la démo sans backend:
        setTimeout(() => {
            displayMessage('Inscription réussie ! Vous pouvez maintenant vous connecter.', false);
            // Optionnel: rediriger vers la page de connexion après un court délai
            // window.location.href = 'connexion.html';
        }, 1500); // Simule un délai de chargement
    });
});