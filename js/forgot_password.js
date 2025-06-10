// js/forgot_password.js

document.addEventListener('DOMContentLoaded', () => {
    const openForgotPasswordModalButton = document.getElementById('openForgotPasswordModalButton');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeForgotPasswordModalButton = document.getElementById('closeForgotPasswordModal');
    const resetEmailInput = document.getElementById('resetEmailInput');
    const resetPasswordSubmitButton = document.getElementById('resetPasswordSubmitButton');

    // Fonction pour ouvrir la modale
    if (openForgotPasswordModalButton) {
        openForgotPasswordModalButton.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut (ex: soumission de formulaire)
            forgotPasswordModal.style.display = 'flex'; // Utilise flex pour centrer
            resetEmailInput.focus(); // Met le focus sur le champ d'email
            resetEmailInput.value = ''; // Vide le champ d'email au cas où il y avait une valeur
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
        resetPasswordSubmitButton.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut du bouton
            const email = resetEmailInput.value;
            if (email) {
                // Ici, vous intégreriez la logique réelle pour envoyer l'e-mail de réinitialisation.
                // Pour l'exemple, nous affichons une alerte.
                alert(`Un e-mail de réinitialisation a été envoyé à : ${email}`);
                forgotPasswordModal.style.display = 'none'; // Ferme la modale après l'envoi (simulé)
            } else {
                alert('Veuillez entrer votre adresse e-mail.');
                resetEmailInput.focus();
            }
        });
    }
});