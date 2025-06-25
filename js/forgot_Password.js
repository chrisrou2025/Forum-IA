// modal.js - Code JavaScript pour gérer la modale "Mot de passe oublié ?"

document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments du DOM
    const forgotPasswordLink = document.getElementById('forgotPasswordLinkAndIcon');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeForgotPasswordModal = document.getElementById('closeForgotPasswordModal');
    const resetPasswordSubmitButton = document.getElementById('resetPasswordSubmitButton');
    const resetEmail = document.getElementById('resetEmail');
    const resetPasswordMessage = document.getElementById('resetPasswordMessage');

    // Fonction pour ouvrir la modale
    function openModal() {
        forgotPasswordModal.classList.add('show');
        // Optionnel : empêcher le défilement de la page en arrière-plan
        document.body.style.overflow = 'hidden';
    }

    // Fonction pour fermer la modale
    function closeModal() {
        forgotPasswordModal.classList.remove('show');
        // Réactiver le défilement de la page
        document.body.style.overflow = 'auto';
        // Réinitialiser le formulaire
        resetForm();
    }

    // Fonction pour réinitialiser le formulaire
    function resetForm() {
        resetEmail.value = '';
        resetPasswordMessage.textContent = '';
        resetPasswordMessage.style.color = '';
    }

    // Événement pour ouvrir la modale au clic sur "Mot de passe oublié ?"
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            openModal();
        });
    }

    // Événement pour fermer la modale au clic sur le bouton "X"
    if (closeForgotPasswordModal) {
        closeForgotPasswordModal.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    }

    // Événement pour fermer la modale au clic à l'extérieur de celle-ci
    if (forgotPasswordModal) {
        forgotPasswordModal.addEventListener('click', function(e) {
            // Si on clique sur l'arrière-plan de la modale (pas sur le contenu)
            if (e.target === forgotPasswordModal) {
                closeModal();
            }
        });
    }

    // Événement pour fermer la modale avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && forgotPasswordModal.classList.contains('show')) {
            closeModal();
        }
    });

    // Gestion de l'envoi du formulaire de réinitialisation
    if (resetPasswordSubmitButton) {
        resetPasswordSubmitButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = resetEmail.value.trim();
            
            // Validation simple de l'email
            if (!email) {
                showMessage('Veuillez entrer votre adresse e-mail.', 'error');
                return;
            }
            
            // Validation du format de l'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Veuillez entrer une adresse e-mail valide.', 'error');
                return;
            }
            
            // Simulation de l'envoi (à remplacer par votre logique d'envoi réelle)
            showMessage('Envoi en cours...', 'info');
            resetPasswordSubmitButton.disabled = true;
            
            // Simulation d'un délai d'envoi
            setTimeout(function() {
                showMessage('Un lien de réinitialisation a été envoyé à votre adresse e-mail.', 'success');
                resetPasswordSubmitButton.disabled = false;
                
                // Fermer la modale après 2 secondes
                setTimeout(function() {
                    closeModal();
                }, 2000);
            }, 1500);
        });
    }

    // Fonction pour afficher les messages dans la modale
    function showMessage(message, type) {
        if (resetPasswordMessage) {
            resetPasswordMessage.textContent = message;
            
            // Définir la couleur selon le type de message
            switch(type) {
                case 'error':
                    resetPasswordMessage.style.color = '#d32f2f';
                    break;
                case 'success':
                    resetPasswordMessage.style.color = '#2e7d32';
                    break;
                case 'info':
                    resetPasswordMessage.style.color = '#1976d2';
                    break;
                default:
                    resetPasswordMessage.style.color = '#333';
            }
        }
    }

    // Validation en temps réel de l'email
    if (resetEmail) {
        resetEmail.addEventListener('input', function() {
            // Effacer le message d'erreur quand l'utilisateur commence à taper
            if (resetPasswordMessage.textContent && resetPasswordMessage.style.color === 'rgb(211, 47, 47)') {
                resetPasswordMessage.textContent = '';
            }
        });
    }
});

// Fonction utilitaire pour déboguer (à supprimer en production)
function debugModal() {
    console.log('Éléments de la modale:');
    console.log('Link:', document.getElementById('forgotPasswordLinkAndIcon'));
    console.log('Modal:', document.getElementById('forgotPasswordModal'));
    console.log('Close button:', document.getElementById('closeForgotPasswordModal'));
    console.log('Submit button:', document.getElementById('resetPasswordSubmitButton'));
}