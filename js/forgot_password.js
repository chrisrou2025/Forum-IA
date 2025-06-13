// js/forgot_password.js

document.addEventListener('DOMContentLoaded', () => {
    const openForgotPasswordModalButton = document.getElementById('openForgotPasswordModalButton');
    const forgotPasswordLink = document.querySelector('.forgot-password-link');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeForgotPasswordModalButton = document.getElementById('closeForgotPasswordModal');
    const resetEmailInput = document.getElementById('resetEmailInput');
    const resetPasswordSubmitButton = document.getElementById('resetPasswordSubmitButton');

    // Fonction réutilisable pour ouvrir la modale
    function openModal() {
        forgotPasswordModal.style.display = 'flex'; // Utilise flex pour centrer
        resetEmailInput.focus(); // Met le focus sur le champ d'email
        resetEmailInput.value = ''; // Vide le champ d'email au cas où il y avait une valeur
    }

    // Écouteur d'événements pour le bouton icône
    if (openForgotPasswordModalButton) {
        openForgotPasswordModalButton.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut
            openModal(); // Appelle la fonction pour ouvrir la modale
        });
    }

    // Écouteur d'événements pour le lien textuel "Mot de passe oublié ?"
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            openModal(); // Appelle la fonction pour ouvrir la modale
        });
    }

    // Fonction pour fermer la modale (bouton X)
    if (closeForgotPasswordModalButton) {
        closeForgotPasswordModalButton.addEventListener('click', () => {
            forgotPasswordModal.style.display = 'none';
        });
    }

    // Fonction pour fermer la modale si l'utilisateur clique en dehors du contenu
    window.addEventListener('click', (event) => {
        if (event.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });

    // Fonction pour fermer la modale avec la touche Échap
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && forgotPasswordModal.style.display === 'flex') {
            forgotPasswordModal.style.display = 'none';
        }
    });

    // Gestion du clic sur le bouton "Envoyer" dans la modale
    if (resetPasswordSubmitButton) {
        resetPasswordSubmitButton.addEventListener('click', async (event) => { // Ajout de 'async' ici
            event.preventDefault();
            const email = resetEmailInput.value;

            if (!email) {
                alert('Veuillez entrer votre adresse e-mail.');
                resetEmailInput.focus();
                return;
            }

            // Validation simple du format de l'e-mail (peut être plus sophistiquée côté backend)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Veuillez entrer une adresse e-mail valide.');
                resetEmailInput.focus();
                return;
            }

            // Ici, nous allons envoyer l'e-mail au backend
            try {
                // Remplacez '/api/password-reset-request' par l'URL de votre API backend
                const response = await fetch('/api/password-reset-request', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email }),
                });

                // Gérer la réponse du backend
                if (response.ok) {
                    // Si la requête a réussi (statut 2xx)
                    const data = await response.json(); // Si votre backend renvoie du JSON
                    alert(data.message || 'Un e-mail de réinitialisation a été envoyé à votre adresse. Veuillez vérifier votre boîte de réception.');
                    forgotPasswordModal.style.display = 'none'; // Ferme la modale après l'envoi
                } else {
                    // Si la requête a échoué (statut 4xx, 5xx)
                    const errorData = await response.json(); // Tente de lire le message d'erreur du backend
                    alert(errorData.message || 'Une erreur est survenue lors de l\'envoi de l\'e-mail de réinitialisation. Veuillez réessayer.');
                }
            } catch (error) {
                // Gérer les erreurs réseau ou autres problèmes
                console.error('Erreur lors de la requête de réinitialisation de mot de passe :', error);
                alert('Impossible de se connecter au serveur. Veuillez vérifier votre connexion ou réessayer plus tard.');
            }
        });
    }
});