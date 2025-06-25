// js/reset_password_page.js

document.addEventListener('DOMContentLoaded', () => {
    const newPasswordInput = document.getElementById('newPasswordInput');
    const confirmNewPasswordInput = document.getElementById('confirmNewPasswordInput');
    const submitNewPasswordButton = document.getElementById('submitNewPasswordButton');
    const resetPasswordMessage = document.getElementById('resetPasswordMessage'); // Pour afficher des messages

    // Fonction pour afficher un message à l'utilisateur
    function displayMessage(message, isError = false) {
        resetPasswordMessage.textContent = message;
        resetPasswordMessage.style.color = isError ? 'red' : 'green';
        resetPasswordMessage.style.display = 'block';
    }

    // Récupérer le token de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token'); // 'token' est le nom du paramètre dans l'URL

    if (!token) {
        // Si aucun token n'est trouvé dans l'URL, informer l'utilisateur
        displayMessage("Le lien de réinitialisation est invalide ou a expiré. Veuillez refaire une demande.", true);
        submitNewPasswordButton.disabled = true; // Désactiver le bouton d'envoi
        newPasswordInput.disabled = true;
        confirmNewPasswordInput.disabled = true;
        return; // Arrêter l'exécution du script
    }

    // Gérer la soumission du formulaire de nouveau mot de passe
    if (submitNewPasswordButton) {
        submitNewPasswordButton.addEventListener('click', async (event) => { // Ajout de 'async'
            event.preventDefault(); // Empêche le rechargement de la page

            const newPassword = newPasswordInput.value;
            const confirmPassword = confirmNewPasswordInput.value;

            // Validation côté client
            if (!newPassword || !confirmPassword) {
                displayMessage('Veuillez remplir tous les champs.', true);
                return;
            }

            if (newPassword !== confirmPassword) {
                displayMessage('Les mots de passe ne correspondent pas.', true);
                return;
            }

            if (newPassword.length < 8) { // Exemple : mot de passe de 8 caractères minimum
                displayMessage('Le mot de passe doit contenir au moins 8 caractères.', true);
                return;
            }

            displayMessage('Réinitialisation en cours...', false); // Message d'attente

            try {
                // Remplacez '/api/password-reset-confirm' par l'URL de votre API backend
                const response = await fetch('/api/password-reset-confirm', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: token,
                        newPassword: newPassword
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    displayMessage(data.message || 'Votre mot de passe a été réinitialisé avec succès !', false);
                    // Rediriger l'utilisateur vers la page de connexion après un court délai
                    setTimeout(() => {
                        window.location.href = 'connexion.html?resetSuccess=true'; // Vous pouvez ajouter un paramètre pour un message de succès sur la page de connexion
                    }, 2000);
                } else {
                    const errorData = await response.json();
                    displayMessage(errorData.message || 'Le lien de réinitialisation est invalide ou a expiré. Veuillez refaire une demande.', true);
                }
            } catch (error) {
                console.error('Erreur lors de la réinitialisation du mot de passe :', error);
                displayMessage('Impossible de se connecter au serveur. Veuillez vérifier votre connexion ou réessayer plus tard.', true);
            }
        });
    }
});