// js/connexion_login.js

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginSubmitButton = document.getElementById('loginSubmitButton');
    const loginMessageDisplay = document.getElementById('loginMessageDisplay'); // Assurez-vous d'avoir cet élément dans votre HTML

    // Fonction pour récupérer la traduction d'un message
    function getTranslation(key) {
        // Cette fonction suppose que language.js est chargé et que les traductions sont accessibles
        // ou que nous pouvons charger les traductions directement ici.
        // Pour simplifier et éviter la duplication de language.js, nous allons juste définir
        // un objet de traduction temporaire pour ce script. Dans une application réelle,
        // vous feriez en sorte que language.js rende ces traductions globalement accessibles
        // ou que vous les importiez.
        const translations = {
            fr: {
                fillAllFields: "Veuillez renseigner tous les champs !",
                loginSuccess: "Connexion réussie !", // Pour le futur, quand il y aura un backend
                loginError: "Email ou mot de passe incorrect." // Pour le futur
            },
            en: {
                fillAllFields: "Please fill in all fields!",
                loginSuccess: "Login successful!",
                loginError: "Incorrect email or password."
            }
            // Ajoutez d'autres langues si nécessaire
        };

        const currentLang = localStorage.getItem('selectedLang') || 'fr';
        return translations[currentLang] ? translations[currentLang][key] : key;
    }

    // Écouteur d'événements pour le bouton de connexion
    if (loginSubmitButton) {
        loginSubmitButton.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut du bouton (soumission de formulaire)

            const email = emailInput.value.trim(); // .trim() pour supprimer les espaces blancs
            const password = passwordInput.value.trim();

            if (!email || !password) {
                // Si l'un des champs est vide, affiche une alerte
                alert(getTranslation('fillAllFields'));
                // Vous pouvez aussi afficher un message sur la page elle-même pour une meilleure UX
                // if (loginMessageDisplay) {
                //     loginMessageDisplay.textContent = getTranslation('fillAllFields');
                //     loginMessageDisplay.style.color = 'red';
                // }
            } else {
                // Ici, les champs sont remplis.
                // Dans une application réelle, vous enverriez ces données à votre backend
                // pour l'authentification (ex: via fetch API).
                console.log("Email:", email, "Mot de passe:", password);
                console.log("Les champs sont remplis. Prêt à envoyer au backend.");

                // Exemple de ce qui se passerait avec un fetch API (commenté car pas de backend pour le moment)
                /*
                try {
                    const response = await fetch('/api/login', { // Remplacez par l'URL de votre API de connexion
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        // Gérer la connexion réussie (ex: stocker le token, rediriger)
                        alert(getTranslation('loginSuccess') + ' Bienvenue, ' + data.username + '!');
                        window.location.href = 'index.html'; // Exemple de redirection
                    } else {
                        const errorData = await response.json();
                        alert(errorData.message || getTranslation('loginError'));
                    }
                } catch (error) {
                    console.error('Erreur de connexion:', error);
                    alert(getTranslation('serverConnectionError')); // Nouvelle clé de traduction pour erreur serveur
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