// js/login.js
// Ceci est le fichier pour la logique de connexion

document.addEventListener('DOMContentLoaded', () => {
    // Référence correcte aux champs de saisie et au bouton de soumission
    // Assurez-vous que ces IDs correspondent EXACTEMENT à ceux de votre connexion.html
    const emailInput = document.getElementById('loginEmail'); // L'ID dans connexion.html est 'loginEmail'
    const passwordInput = document.getElementById('loginPassword'); // L'ID dans connexion.html est 'loginPassword'
    const loginSubmitButton = document.getElementById('loginFormSubmitButton'); // L'ID dans connexion.html est 'loginFormSubmitButton'
    const loginMessageDisplay = document.getElementById('loginMessage'); // L'ID dans connexion.html est 'loginMessage'

    // Fonction pour obtenir la traduction des messages
    // Cette fonction est répétée ici pour être autonome pour ce script.
    // Dans une application plus grande, elle serait probablement dans un fichier global (ex: language.js)
    // et accessible via une fonction exportée ou une variable globale.
    function getTranslation(key) {
        const translations = {
            fr: {
                fillAllFields: "Veuillez renseigner tous les champs !",
                loginSuccess: "Connexion réussie !",
                loginError: "Email ou mot de passe incorrect.",
                serverConnectionError: "Impossible de se connecter au serveur. Veuillez vérifier votre connexion ou réessayer plus tard.",
                resetSuccess: "Votre mot de passe a été réinitialisé avec succès ! Vous pouvez maintenant vous connecter avec votre nouveau mot de passe."
            },
            en: {
                fillAllFields: "Please fill in all fields!",
                loginSuccess: "Login successful!",
                loginError: "Incorrect email or password.",
                serverConnectionError: "Cannot connect to server. Please check your connection or try again later.",
                resetSuccess: "Your password has been reset successfully! You can now log in with your new password."
            }
        };

        const currentLang = localStorage.getItem('selectedLang') || 'fr';
        return translations[currentLang] ? translations[currentLang][key] : key;
    }

    // Écouteur d'événements pour le bouton de connexion
    if (loginSubmitButton) { // S'assurer que le bouton existe avant d'ajouter l'écouteur
        loginSubmitButton.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le rechargement de la page par défaut du formulaire

            const email = emailInput.value.trim(); // Récupère la valeur de l'email et supprime les espaces
            const password = passwordInput.value.trim(); // Récupère la valeur du mot de passe et supprime les espaces

            // --- Logique de validation des champs obligatoires ---
            if (!email || !password) {
                if (loginMessageDisplay) {
                    loginMessageDisplay.textContent = getTranslation('fillAllFields');
                    loginMessageDisplay.style.color = 'red';
                    loginMessageDisplay.style.display = 'block'; // S'assure que le message est visible
                } else {
                    // Fallback si l'élément de message n'est pas trouvé (pour le débogage)
                    console.error("L'élément 'loginMessage' n'a pas été trouvé dans le DOM.");
                    alert(getTranslation('fillAllFields'));
                }
                return; // TRÈS IMPORTANT : Arrête l'exécution de la fonction ici si les champs sont vides
            } else {
                // Si les champs sont remplis, efface tout message d'erreur précédent
                if (loginMessageDisplay) {
                    loginMessageDisplay.textContent = '';
                    loginMessageDisplay.style.display = 'none';
                }

                // --- Votre logique de connexion au backend commencerait ici ---
                console.log("Email :", email, "Mot de passe :", password);
                console.log("Les champs sont remplis. Prêt à envoyer au backend.");

                // Exemple d'appel API factice (décommenter et adapter pour votre backend réel)
                /*
                try {
                    const response = await fetch('/api/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        if (loginMessageDisplay) {
                            loginMessageDisplay.textContent = getTranslation('loginSuccess');
                            loginMessageDisplay.style.color = 'green';
                            loginMessageDisplay.style.display = 'block';
                        }
                        // Gérer la connexion réussie (ex: stocker le token, rediriger)
                        // window.location.href = 'index.html'; // Exemple de redirection
                    } else {
                        const errorData = await response.json();
                        if (loginMessageDisplay) {
                            loginMessageDisplay.textContent = errorData.message || getTranslation('loginError');
                            loginMessageDisplay.style.color = 'red';
                            loginMessageDisplay.style.display = 'block';
                        }
                    }
                } catch (error) {
                    console.error('Erreur de connexion:', error);
                    if (loginMessageDisplay) {
                        loginMessageDisplay.textContent = getTranslation('serverConnectionError');
                        loginMessageDisplay.style.color = 'red';
                        loginMessageDisplay.style.display = 'block';
                    }
                }
                */
            }
        });
    }

    // Gestion du message de succès de réinitialisation si présent dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('resetSuccess') === 'true') {
        if (loginMessageDisplay) {
            loginMessageDisplay.textContent = getTranslation('resetSuccess');
            loginMessageDisplay.style.color = 'green';
            loginMessageDisplay.style.display = 'block'; // Assurez-vous qu'il est visible
            // Supprimer le paramètre de l'URL pour ne pas afficher le message à chaque rechargement
            history.replaceState(null, '', window.location.pathname);
        }
    }
});