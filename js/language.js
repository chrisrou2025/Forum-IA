// js/language.js

document.addEventListener('DOMContentLoaded', () => {
    const currentLangButton = document.getElementById('currentLangButton');
    const currentLangIcon = document.getElementById('currentLangIcon');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = langDropdown.querySelectorAll('a');

    // Mappe les noms complets des langues aux codes pour l'attribut alt
    const langNames = {
        fr: 'Français',
        en: 'English',
        es: 'Español',
        de: 'Deutsch',
        it: 'Italiano',
        pt: 'Português'
    };

    // Mappe les clés de langue avec les traductions
    const translations = {
        fr: {
            contactButton: "Nous contacter",
            loginButton: "Se connecter",
            signupButton: "S'inscrire",
            contrastButton: "Contraste",
            headerTitle: "Maîtrise l'IA avant qu'elle ne te maîtrise",
            headerSubtitle: "Inscris toi pour recevoir notre newsletter sur l'Intelligence Artificielle",
            copyrightText: "Forum IA 2025",
            allRightsReserved: "Tous droits réservés",
            searchModalTitle: "Rechercher sur le Forum",
            searchPlaceholder: "Entrez vos mots-clés...",
            searchButtonText: "Rechercher",
            noSearchResults: "Aucun résultat trouvé pour cette recherche.",
            loginPageTitle: "Connexion - Forum IA",
            loginHeaderTitleRect: "Connexion",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Mot de passe",
            forgotPasswordLink: "Mot de passe oublié ?",
            loginButtonText: "Connexion",
            noAccountPrompt: "Pas encore de compte ?",
            forgotPasswordModalTitle: "Mot de passe oublié",
            forgotPasswordModalText: "Vous allez recevoir un e-mail qui va vous permettre de réinitialiser votre mot de passe.",
            emailInputRequired: "Votre email *", // Placeholder pour l'input
            sendButtonText: "Envoyer",
            
            // NOUVELLES TRADUCTIONS POUR LA PAGE DE RÉINITIALISATION
            resetPasswordPageTitle: "Réinitialiser le mot de passe - Forum IA",
            resetPasswordHeaderTitleRect: "Réinitialiser votre mot de passe",
            newPasswordPlaceholder: "Nouveau mot de passe",
            confirmNewPasswordPlaceholder: "Confirmer le nouveau mot de passe",
            submitNewPasswordButtonText: "Réinitialiser",
            invalidResetLink: "Le lien de réinitialisation est invalide ou a expiré. Veuillez refaire une demande.",
            fillAllFields: "Veuillez remplir tous les champs.",
            passwordsDoNotMatch: "Les mots de passe ne correspondent pas.",
            passwordMinLength: "Le mot de passe doit contenir au moins 8 caractères.",
            resettingPassword: "Réinitialisation en cours...",
            resetSuccess: "Votre mot de passe a été réinitialisé avec succès !",
            resetError: "Une erreur est survenue. Veuillez vérifier votre lien ou réessayer plus tard.",
            serverConnectionError: "Impossible de se connecter au serveur. Veuillez vérifier votre connexion ou réessayer plus tard."
        },
        en: {
            contactButton: "Contact Us",
            loginButton: "Log In",
            signupButton: "Sign Up",
            contrastButton: "Contrast",
            headerTitle: "Master AI before it masters you",
            headerSubtitle: "Sign up to receive our AI newsletter",
            copyrightText: "AI Forum 2025",
            allRightsReserved: "All rights reserved",
            searchModalTitle: "Search the Forum",
            searchPlaceholder: "Enter your keywords...",
            searchButtonText: "Search",
            noSearchResults: "No results found for this search.",
            loginPageTitle: "Login - AI Forum",
            loginHeaderTitleRect: "Login",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Password",
            forgotPasswordLink: "Forgot password ?",
            loginButtonText: "Login",
            noAccountPrompt: "No account yet?",
            forgotPasswordModalTitle: "Forgot password",
            forgotPasswordModalText: "You will receive an email to reset your password.",
            emailInputRequired: "Your email *",
            sendButtonText: "Send",

            // NOUVELLES TRADUCTIONS POUR LA PAGE DE RÉINITIALISATION
            resetPasswordPageTitle: "Reset Password - AI Forum",
            resetPasswordHeaderTitleRect: "Reset Your Password",
            newPasswordPlaceholder: "New password",
            confirmNewPasswordPlaceholder: "Confirm new password",
            submitNewPasswordButtonText: "Reset",
            invalidResetLink: "The reset link is invalid or has expired. Please make a new request.",
            fillAllFields: "Please fill in all fields.",
            passwordsDoNotMatch: "Passwords do not match.",
            passwordMinLength: "Password must be at least 8 characters long.",
            resettingPassword: "Resetting password...",
            resetSuccess: "Your password has been reset successfully!",
            resetError: "An error occurred. Please check your link or try again later.",
            serverConnectionError: "Cannot connect to the server. Please check your connection or try again later."
        },
        es: {
            contactButton: "Contáctanos",
            loginButton: "Iniciar sesión",
            signupButton: "Registrarse",
            contrastButton: "Contraste",
            headerTitle: "Domina la IA antes de que te domine",
            headerSubtitle: "Suscríbete para recibir nuestra newsletter sobre Inteligencia Artificial",
            copyrightText: "Foro IA 2025",
            allRightsReserved: "Todos los derechos reservados",
            searchModalTitle: "Buscar en el Foro",
            searchPlaceholder: "Introduce tus palabras clave...",
            searchButtonText: "Buscar",
            noSearchResults: "No se encontraron resultados para esta búsqueda.",
            loginPageTitle: "Iniciar sesión - Foro IA",
            loginHeaderTitleRect: "Iniciar sesión",
            emailPlaceholder: "Correo electrónico",
            passwordPlaceholder: "Contraseña",
            forgotPasswordLink: "¿Olvidaste tu contraseña?",
            loginButtonText: "Iniciar sesión",
            noAccountPrompt: "¿No tienes cuenta aún?",
            forgotPasswordModalTitle: "Contraseña olvidada",
            forgotPasswordModalText: "Recibirás un correo electrónico que te permitirá restablecer tu contraseña.",
            emailInputRequired: "Tu correo electrónico *",
            sendButtonText: "Enviar",

            // NOUVELLES TRADUCTIONS POUR LA PAGE DE RÉINITIALISATION
            resetPasswordPageTitle: "Restablecer contraseña - Foro IA",
            resetPasswordHeaderTitleRect: "Restablecer tu contraseña",
            newPasswordPlaceholder: "Nueva contraseña",
            confirmNewPasswordPlaceholder: "Confirmar nueva contraseña",
            submitNewPasswordButtonText: "Restablecer",
            invalidResetLink: "El enlace de restablecimiento es inválido o ha expirado. Por favor, haz una nueva solicitud.",
            fillAllFields: "Por favor, rellena todos los campos.",
            passwordsDoNotMatch: "Las contraseñas no coinciden.",
            passwordMinLength: "La contraseña debe tener al menos 8 caracteres.",
            resettingPassword: "Restableciendo contraseña...",
            resetSuccess: "¡Tu contraseña ha sido restablecida con éxito!",
            resetError: "Ha ocurrido un error. Por favor, verifica tu enlace o inténtalo de nuevo más tarde.",
            serverConnectionError: "No se puede conectar al servidor. Por favor, comprueba tu conexión o inténtalo de nuevo más tarde."
        },
        de: {
            contactButton: "Kontaktiere uns",
            loginButton: "Anmelden",
            signupButton: "Registrieren",
            contrastButton: "Kontrast",
            headerTitle: "Meistere KI, bevor sie dich meistert",
            headerSubtitle: "Melde dich an, um unseren Newsletter über Künstliche Intelligenz zu erhalten",
            copyrightText: "KI Forum 2025",
            allRightsReserved: "Alle Rechte vorbehalten",
            searchModalTitle: "Im Forum suchen",
            searchPlaceholder: "Geben Sie Ihre Schlüsselwörter ein...",
            searchButtonText: "Suchen",
            noSearchResults: "Keine Ergebnisse für diese Suche gefunden.",
            loginPageTitle: "Anmelden - KI Forum",
            loginHeaderTitleRect: "Anmelden",
            emailPlaceholder: "E-Mail",
            passwordPlaceholder: "Passwort",
            forgotPasswordLink: "Passwort vergessen?",
            loginButtonText: "Anmelden",
            noAccountPrompt: "Noch kein Konto?",
            forgotPasswordModalTitle: "Passwort vergessen",
            forgotPasswordModalText: "Sie erhalten eine E-Mail, mit der Sie Ihr Passwort zurücksetzen können.",
            emailInputRequired: "Ihre E-Mail *",
            sendButtonText: "Senden",

            // NOUVELLES TRADUCTIONS POUR LA PAGE DE RÉINITIALISATION
            resetPasswordPageTitle: "Passwort zurücksetzen - KI Forum",
            resetPasswordHeaderTitleRect: "Setze dein Passwort zurück",
            newPasswordPlaceholder: "Neues Passwort",
            confirmNewPasswordPlaceholder: "Neues Passwort bestätigen",
            submitNewPasswordButtonText: "Zurücksetzen",
            invalidResetLink: "Der Rücksetzlink ist ungültig oder abgelaufen. Bitte stellen Sie eine neue Anfrage.",
            fillAllFields: "Bitte füllen Sie alle Felder aus.",
            passwordsDoNotMatch: "Die Passwörter stimmen nicht überein.",
            passwordMinLength: "Das Passwort muss mindestens 8 Zeichen lang sein.",
            resettingPassword: "Passwort wird zurückgesetzt...",
            resetSuccess: "Ihr Passwort wurde erfolgreich zurückgesetzt!",
            resetError: "Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihren Link oder versuchen Sie es später erneut.",
            serverConnectionError: "Verbindung zum Server nicht möglich. Bitte überprüfen Sie Ihre Verbindung oder versuchen Sie es später erneut."
        },
        it: {
            contactButton: "Contattaci",
            loginButton: "Accedi",
            signupButton: "Iscriviti",
            contrastButton: "Contrasto",
            headerTitle: "Domina l'IA prima che ti domini",
            headerSubtitle: "Iscriviti per ricevere la nostra newsletter sull'Intelligenza Artificiale",
            copyrightText: "Forum IA 2025",
            allRightsReserved: "Tutti i diritti riservati",
            searchModalTitle: "Cerca nel Forum",
            searchPlaceholder: "Inserisci le tue parole chiave...",
            searchButtonText: "Cerca",
            noSearchResults: "Nessun risultato trovato per questa ricerca.",
            loginPageTitle: "Accesso - Forum IA",
            loginHeaderTitleRect: "Accesso",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Password",
            forgotPasswordLink: "Password dimenticata?",
            loginButtonText: "Accedi",
            noAccountPrompt: "Non hai ancora un account?",
            forgotPasswordModalTitle: "Password dimenticata",
            forgotPasswordModalText: "Riceverai un'e-mail che ti permetterà di reimpostare la tua password.",
            emailInputRequired: "La tua email *",
            sendButtonText: "Invia",

            // NOUVELLES TRADUZIONI POUR LA PAGE DE RÉINITIALISATION
            resetPasswordPageTitle: "Reimposta password - Forum IA",
            resetPasswordHeaderTitleRect: "Reimposta la tua password",
            newPasswordPlaceholder: "Nuova password",
            confirmNewPasswordPlaceholder: "Conferma nuova password",
            submitNewPasswordButtonText: "Reimposta",
            invalidResetLink: "Il link di reimpostazione non è valido o è scaduto. Si prega di effettuare una nuova richiesta.",
            fillAllFields: "Si prega di compilare tutti i campi.",
            passwordsDoNotMatch: "Le password non corrispondono.",
            passwordMinLength: "La password deve contenere almeno 8 caratteri.",
            resettingPassword: "Reimpostazione in corso...",
            resetSuccess: "La tua password è stata reimpostata con successo!",
            resetError: "Si è verificato un errore. Si prega di controllare il link o riprovare più tardi.",
            serverConnectionError: "Impossibile connettersi al server. Si prega di controllare la connessione o riprovare più tardi."
        },
        pt: {
            contactButton: "Contate-nos",
            loginButton: "Entrar",
            signupButton: "Inscrever-se",
            contrastButton: "Contraste",
            headerTitle: "Domine a IA antes que ela te domine",
            headerSubtitle: "Inscreva-se para receber nossa newsletter sobre Inteligência Artificial",
            copyrightText: "Fórum IA 2025",
            allRightsReserved: "Todos os direitos reservados",
            searchModalTitle: "Pesquisar no Fórum",
            searchPlaceholder: "Digite suas palavras-chave...",
            searchButtonText: "Pesquisar",
            noSearchResults: "Nenhum resultado encontrado para esta pesquisa.",
            loginPageTitle: "Entrar - Fórum IA",
            loginHeaderTitleRect: "Entrar",
            emailPlaceholder: "E-mail",
            passwordPlaceholder: "Senha",
            forgotPasswordLink: "Esqueceu a senha?",
            loginButtonText: "Entrar",
            noAccountPrompt: "Ainda não tem conta?",
            forgotPasswordModalTitle: "Esqueceu a senha",
            forgotPasswordModalText: "Você receberá um e-mail que permitirá redefinir sua senha.",
            emailInputRequired: "Seu e-mail *",
            sendButtonText: "Enviar",

            // NOUVELLES TRADUZIONI POUR LA PAGE DE RÉINITIALISATION
            resetPasswordPageTitle: "Redefinir senha - Fórum IA",
            resetPasswordHeaderTitleRect: "Redefinir sua senha",
            newPasswordPlaceholder: "Nova senha",
            confirmNewPasswordPlaceholder: "Confirmar nova senha",
            submitNewPasswordButtonText: "Redefinir",
            invalidResetLink: "O link de redefinição é inválido ou expirou. Por favor, faça uma nova solicitação.",
            fillAllFields: "Por favor, preencha todos os campos.",
            passwordsDoNotMatch: "As senhas não correspondem.",
            passwordMinLength: "A senha deve ter pelo menos 8 caracteres.",
            resettingPassword: "Redefinindo senha...",
            resetSuccess: "Sua senha foi redefinida com sucesso!",
            resetError: "Ocorreu um erro. Por favor, verifique seu link ou tente novamente mais tarde.",
            serverConnectionError: "Não foi possível conectar ao servidor. Por favor, verifique sua conexão ou tente novamente mais tarde."
        }
    };

    // Fonction pour appliquer les traductions
    function applyTranslations(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Mise à jour du titre de la page
        const pageTitleElement = document.querySelector('title');
        if (pageTitleElement && pageTitleElement.hasAttribute('data-lang-key')) {
            const key = pageTitleElement.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                pageTitleElement.textContent = translations[lang][key];
            }
        }

        // Mise à jour du drapeau et de l'attribut alt du bouton principal
        currentLangIcon.src = `assets/icones/drapeau_${lang}.png`;
        currentLangIcon.alt = langNames[lang] || 'Current Language';
    }

    // Gérer l'affichage/masquage du menu déroulant
    currentLangButton.addEventListener('click', (event) => {
        event.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    // Gérer la sélection d'une langue
    langOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const selectedLang = option.getAttribute('data-lang');

            currentLangIcon.src = option.querySelector('img').src;
            currentLangIcon.alt = option.querySelector('img').alt;

            applyTranslations(selectedLang);

            langDropdown.classList.remove('show');
            localStorage.setItem('selectedLang', selectedLang);
        });
    });

    // Masquer le menu déroulant si on clique en dehors
    document.addEventListener('click', (event) => {
        if (!currentLangButton.contains(event.target) && !langDropdown.contains(event.target)) {
            langDropdown.classList.remove('show');
        }
    });

    // Initialiser la langue par défaut au chargement de la page
    const savedLang = localStorage.getItem('selectedLang') || 'fr'; // 'fr' par défaut
    applyTranslations(savedLang);
});