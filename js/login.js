// js/login.js
// Ceci est le fichier pour la logique de connexion

document.addEventListener('DOMContentLoaded', () => {
    // Référence correcte aux champs de saisie et au bouton de soumission
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    // CORRECTION : Utiliser querySelector avec la classe au lieu de getElementById
    const loginSubmitButton = document.querySelector('.login-form-submit-button');
    const loginMessageDisplay = document.getElementById('loginMessage');

    // Fonction pour obtenir la traduction des messages
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

    // Vérification que tous les éléments nécessaires existent
    if (!emailInput) {
        console.error("L'élément avec l'ID 'loginEmail' n'a pas été trouvé.");
        return;
    }
    
    if (!passwordInput) {
        console.error("L'élément avec l'ID 'loginPassword' n'a pas été trouvé.");
        return;
    }
    
    if (!loginSubmitButton) {
        console.error("L'élément avec la classe 'login-form-submit-button' n'a pas été trouvé.");
        return;
    }
    
    if (!loginMessageDisplay) {
        console.error("L'élément avec l'ID 'loginMessage' n'a pas été trouvé.");
    }

    // Écouteur d'événements pour le bouton de connexion
    loginSubmitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Logique de validation des champs obligatoires
        if (!email || !password) {
            if (loginMessageDisplay) {
                loginMessageDisplay.textContent = getTranslation('fillAllFields');
                loginMessageDisplay.style.color = 'red';
                loginMessageDisplay.style.display = 'block';
            } else {
                // Fallback si l'élément de message n'est pas trouvé
                console.error("L'élément 'loginMessage' n'a pas été trouvé dans le DOM.");
                alert(getTranslation('fillAllFields'));
            }
            return;
        } else {
            // Si les champs sont remplis, efface tout message d'erreur précédent
            if (loginMessageDisplay) {
                loginMessageDisplay.textContent = '';
                loginMessageDisplay.style.display = 'none';
            }

            // Logique de connexion
            console.log("Email :", email, "Mot de passe :", password);
            console.log("Les champs sont remplis. Prêt à envoyer au backend.");

            // Simulation d'une connexion réussie pour le test
            if (loginMessageDisplay) {
                loginMessageDisplay.textContent = getTranslation('loginSuccess');
                loginMessageDisplay.style.color = 'green';
                loginMessageDisplay.style.display = 'block';
            }

            // Votre logique de connexion au backend irait ici
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
                    // Gérer la connexion réussie
                    // window.location.href = 'index.html';
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

    // Gestion du message de succès de réinitialisation
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('resetSuccess') === 'true') {
        if (loginMessageDisplay) {
            loginMessageDisplay.textContent = getTranslation('resetSuccess');
            loginMessageDisplay.style.color = 'green';
            loginMessageDisplay.style.display = 'block';
            // Supprimer le paramètre de l'URL
            history.replaceState(null, '', window.location.pathname);
        }
    }
});