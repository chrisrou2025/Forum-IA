document.addEventListener('DOMContentLoaded', function() {
    // Éléments pour la modale "Mot de passe oublié"
    const forgotPasswordLinkAndIcon = document.getElementById('forgotPasswordLinkAndIcon'); // Nouveau ID du groupe
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeForgotPasswordModal = document.getElementById('closeForgotPasswordModal');
    const resetPasswordSubmitButton = document.getElementById('resetPasswordSubmitButton');
    const resetPasswordMessage = document.getElementById('resetPasswordMessage');
    const resetEmailInput = document.getElementById('resetEmail');

    // Fonction pour ouvrir la modale
    function openForgotPasswordModal(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        forgotPasswordModal.style.display = 'flex'; // Utiliser flex pour centrer
        resetPasswordMessage.textContent = ''; // Efface les messages précédents
        resetEmailInput.value = ''; // Efface le champ d'entrée
    }

    // Attacher la fonction au nouveau conteneur de lien unique
    if (forgotPasswordLinkAndIcon) {
        forgotPasswordLinkAndIcon.addEventListener('click', openForgotPasswordModal);
    }

    // Gérer la fermeture de la modale via le bouton croix
    if (closeForgotPasswordModal) {
        closeForgotPasswordModal.addEventListener('click', function() {
            forgotPasswordModal.style.display = 'none';
        });
    }

    // Fermer la modale si l'utilisateur clique en dehors de celle-ci
    window.addEventListener('click', function(event) {
        if (event.target == forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });

    // Gérer la soumission du formulaire de réinitialisation (envoi de l'email)
    if (resetPasswordSubmitButton) {
        resetPasswordSubmitButton.addEventListener('click', function() {
            const email = resetEmailInput.value;
            if (email) {
                // Ici, vous enverriez l'e-mail à votre backend via une requête AJAX (fetch, XMLHttpRequest, etc.)
                // Exemple simplifié pour la démo :
                resetPasswordMessage.textContent = 'Un lien de réinitialisation a été envoyé à ' + email;
                resetPasswordMessage.style.color = 'green';
                // En production, vous ajouteriez ici la logique de communication avec le serveur.
                // fetch('/api/reset-password-request', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({ email: email })
                // })
                // .then(response => response.json())
                // .then(data => {
                //     if (data.success) {
                //         resetPasswordMessage.textContent = data.message || 'Un lien de réinitialisation a été envoyé.';
                //         resetPasswordMessage.style.color = 'green';
                //     } else {
                //         resetPasswordMessage.textContent = data.message || 'Erreur lors de l\'envoi du lien.';
                //         resetPasswordMessage.style.color = 'red';
                //     }
                // })
                // .catch(error => {
                //     console.error('Erreur:', error);
                //     resetPasswordMessage.textContent = 'Une erreur est survenue. Veuillez réessayer.';
                //     resetPasswordMessage.style.color = 'red';
                // });
            } else {
                resetPasswordMessage.textContent = 'Veuillez entrer votre adresse e-mail.';
                resetPasswordMessage.style.color = 'red';
            }
        });
    }

    // Note : L'initialisation de la langue et du contraste devrait être gérée par language.js et contrast.js
    // Ces fonctions ne sont pas appelées ici car leurs scripts sont inclus séparément.
});