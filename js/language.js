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

            // TRADUCTIONS POUR LA PAGE DE CONNEXION
            loginPageTitle: "Connexion - Forum IA",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Mot de passe",
            forgotPasswordLink: "Mot de passe oublié ?",
            loginButtonText: "Connexion",
            noAccountPrompt: "Pas encore de compte ?",
            forgotPasswordModalTitle: "Mot de passe oublié",
            forgotPasswordModalText: "Vous allez recevoir un e-mail qui va vous permettre de réinitialiser votre mot de passe.",
            emailInputRequired: "Votre email *",
            sendButtonText: "Envoyer",
            fillAllFields: "Veuillez renseigner tous les champs !",
            loginSuccess: "Connexion réussie !",
            loginError: "Email ou mot de passe incorrect.",
            serverConnectionError: "Impossible de se connecter au serveur. Veuillez vérifier votre connexion ou réessayer plus tard.",

            // TRADUCTIONS POUR LA PAGE DE RÉINITIALISATION
            resetPasswordPageTitle: "Réinitialiser le mot de passe - Forum IA",
            resetPasswordHeaderTitleRect: "Réinitialiser votre mot de passe",
            newPasswordPlaceholder: "Nouveau mot de passe",
            confirmNewPasswordPlaceholder: "Confirmer le nouveau mot de passe",
            submitNewPasswordButtonText: "Réinitialiser",
            invalidResetLink: "Le lien de réinitialisation est invalide ou a expiré. Veuillez refaire une demande.",
            passwordsDoNotMatch: "Les mots de passe ne correspondent pas.",
            passwordMinLength: "Le mot de passe doit contenir au moins 8 caractères.",
            resettingPassword: "Réinitialisation en cours...",
            resetSuccess: "Votre mot de passe a été réinitialisé avec succès !",
            resetError: "Une erreur est survenue. Veuillez vérifier votre lien ou réessayer plus tard.",

            // TRADUCTIONS POUR LA PAGE D'INSCRIPTION
            signupPageTitle: "Inscription - Forum IA",
            signupHeaderTitleRect: "Inscription",
            signupInfoTitle: "Mes informations",
            signupInfoText: "Complétez vos informations personnelles pour créer votre compte. Tous les champs sont obligatoires."
        },
        en: {
            contactButton: "Contact Us",
            loginButton: "Log In",
            signupButton: "Sign Up",
            contrastButton: "Contrast",
            headerTitle: "Master AI before it masters you",
            headerSubtitle: "Sign up to receive our newsletter on Artificial Intelligence",
            copyrightText: "AI Forum 2025",
            allRightsReserved: "All rights reserved",
            searchModalTitle: "Search the Forum",
            searchPlaceholder: "Enter your keywords...",
            searchButtonText: "Search",
            noSearchResults: "No results found for this search.",

            // TRANSLATIONS FOR LOGIN PAGE
            loginPageTitle: "Login - AI Forum",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Password",
            forgotPasswordLink: "Forgot password ?",
            loginButtonText: "Login",
            noAccountPrompt: "No account yet?",
            forgotPasswordModalTitle: "Forgot password",
            forgotPasswordModalText: "You will receive an email to reset your password.",
            emailInputRequired: "Your email *",
            sendButtonText: "Send",
            fillAllFields: "Please fill in all fields!",
            loginSuccess: "Login successful!",
            loginError: "Incorrect email or password.",
            serverConnectionError: "Cannot connect to the server. Please check your connection or try again later.",

            // TRANSLATIONS FOR RESET PASSWORD PAGE
            resetPasswordPageTitle: "Reset Password - AI Forum",
            resetPasswordHeaderTitleRect: "Reset Your Password",
            newPasswordPlaceholder: "New password",
            confirmNewPasswordPlaceholder: "Confirm new password",
            submitNewPasswordButtonText: "Reset",
            invalidResetLink: "The reset link is invalid or has expired. Please make a new request.",
            passwordsDoNotMatch: "Passwords do not match.",
            passwordMinLength: "Password must be at least 8 characters long.",
            resettingPassword: "Resetting password...",
            resetSuccess: "Your password has been reset successfully!",
            resetError: "An error occurred. Please check your link or try again later.",

            // TRANSLATIONS FOR SIGNUP PAGE
            signupPageTitle: "Sign Up - AI Forum",
            signupHeaderTitleRect: "Sign Up",
            signupInfoTitle: "My Information",
            signupInfoText: "Please complete your personal information to create your account. All fields are mandatory."
        },
        es: {
            contactButton: "Contáctanos",
            loginButton: "Iniciar Sesión",
            signupButton: "Registrarse",
            contrastButton: "Contraste",
            headerTitle: "Domina la IA antes de que te domine a ti",
            headerSubtitle: "Regístrate para recibir nuestra newsletter sobre Inteligencia Artificial",
            copyrightText: "Forum IA 2025",
            allRightsReserved: "Todos los derechos reservados",
            searchModalTitle: "Buscar en el Foro",
            searchPlaceholder: "Introduce tus palabras clave...",
            searchButtonText: "Buscar",
            noSearchResults: "No se encontraron resultados para esta búsqueda.",

            loginPageTitle: "Iniciar Sesión - Forum IA",
            emailPlaceholder: "Correo electrónico",
            passwordPlaceholder: "Contraseña",
            forgotPasswordLink: "¿Olvidaste tu contraseña?",
            loginButtonText: "Iniciar Sesión",
            noAccountPrompt: "¿Aún no tienes una cuenta?",
            forgotPasswordModalTitle: "Contraseña olvidada",
            forgotPasswordModalText: "Recibirás un correo electrónico para restablecer tu contraseña.",
            emailInputRequired: "Tu correo electrónico *",
            sendButtonText: "Enviar",
            fillAllFields: "Por favor, complete todos los campos.",
            loginSuccess: "¡Inicio de sesión exitoso!",
            loginError: "Correo electrónico o contraseña incorrectos.",
            serverConnectionError: "No se pudo conectar al servidor. Por favor, verifica tu conexión o inténtalo de nuevo más tarde.",

            resetPasswordPageTitle: "Restablecer Contraseña - Forum IA",
            resetPasswordHeaderTitleRect: "Restablecer tu Contraseña",
            newPasswordPlaceholder: "Nueva contraseña",
            confirmNewPasswordPlaceholder: "Confirmar nueva contraseña",
            submitNewPasswordButtonText: "Restablecer",
            invalidResetLink: "El enlace de restablecimiento es inválido o ha expirado. Por favor, haz una nueva solicitud.",
            passwordsDoNotMatch: "Las contraseñas no coinciden.",
            passwordMinLength: "La contraseña debe tener al menos 8 caracteres.",
            resettingPassword: "Restableciendo contraseña...",
            resetSuccess: "¡Tu contraseña ha sido restablecida con éxito!",
            resetError: "Ha ocurrido un error. Por favor, verifica tu enlace o inténtalo de nuevo más tarde.",

            signupPageTitle: "Registro - Forum IA",
            signupHeaderTitleRect: "Registro",
            signupInfoTitle: "Mi información",
            signupInfoText: "Complete su información personal para crear su cuenta. Todos los campos son obligatorios."
        },
        de: {
            contactButton: "Kontakt",
            loginButton: "Anmelden",
            signupButton: "Registrieren",
            contrastButton: "Kontrast",
            headerTitle: "Meistere KI, bevor sie dich meistert",
            headerSubtitle: "Melde dich an, um unseren Newsletter über Künstliche Intelligenz zu erhalten",
            copyrightText: "Forum KI 2025",
            allRightsReserved: "Alle Rechte vorbehalten",
            searchModalTitle: "Im Forum suchen",
            searchPlaceholder: "Geben Sie Ihre Schlüsselwörter ein...",
            searchButtonText: "Suchen",
            noSearchResults: "Keine Ergebnisse für diese Suche gefunden.",

            loginPageTitle: "Anmelden - Forum KI",
            emailPlaceholder: "E-Mail",
            passwordPlaceholder: "Passwort",
            forgotPasswordLink: "Passwort vergessen?",
            loginButtonText: "Anmelden",
            noAccountPrompt: "Noch kein Konto?",
            forgotPasswordModalTitle: "Passwort vergessen",
            forgotPasswordModalText: "Sie erhalten eine E-Mail, mit der Sie Ihr Passwort zurücksetzen können.",
            emailInputRequired: "Ihre E-Mail *",
            sendButtonText: "Senden",
            fillAllFields: "Bitte füllen Sie alle Felder aus!",
            loginSuccess: "Anmeldung erfolgreich!",
            loginError: "Falsche E-Mail oder falsches Passwort.",
            serverConnectionError: "Verbindung zum Server nicht möglich. Bitte überprüfen Sie Ihre Verbindung oder versuchen Sie es später erneut.",

            resetPasswordPageTitle: "Passwort zurücksetzen - Forum KI",
            resetPasswordHeaderTitleRect: "Passwort zurücksetzen",
            newPasswordPlaceholder: "Neues Passwort",
            confirmNewPasswordPlaceholder: "Neues Passwort bestätigen",
            submitNewPasswordButtonText: "Zurücksetzen",
            invalidResetLink: "Der Reset-Link ist ungültig oder abgelaufen. Bitte stellen Sie eine neue Anfrage.",
            passwordsDoNotMatch: "Die Passwörter stimmen nicht überein.",
            passwordMinLength: "Das Passwort muss mindestens 8 Zeichen lang sein.",
            resettingPassword: "Passwort wird zurückgesetzt...",
            resetSuccess: "Ihr Passwort wurde erfolgreich zurückgesetzt!",
            resetError: "Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihren Link oder versuchen Sie es später erneut.",

            signupPageTitle: "Registrierung - Forum KI",
            signupHeaderTitleRect: "Registrierung",
            signupInfoTitle: "Meine Informationen",
            signupInfoText: "Bitte füllen Sie Ihre persönlichen Daten aus, um Ihr Konto zu erstellen. Alle Felder sind Pflichtfelder."
        },
        it: {
            contactButton: "Contattaci",
            loginButton: "Accedi",
            signupButton: "Registrati",
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
            emailPlaceholder: "Email",
            passwordPlaceholder: "Password",
            forgotPasswordLink: "Password dimenticata?",
            loginButtonText: "Accedi",
            noAccountPrompt: "Non hai ancora un account?",
            forgotPasswordModalTitle: "Password dimenticata",
            forgotPasswordModalText: "Riceverai un'e-mail che ti permetterà di reimpostare la tua password.",
            emailInputRequired: "La tua email *",
            sendButtonText: "Invia",
            fillAllFields: "Si prega di compilare tutti i campi!",
            loginSuccess: "Accesso effettuato con successo!",
            loginError: "Email o password errati.",
            serverConnectionError: "Impossibile connettersi al server. Si prega di controllare la connessione o riprovare più tardi.",

            resetPasswordPageTitle: "Reimposta Password - Forum IA",
            resetPasswordHeaderTitleRect: "Reimposta la tua Password",
            newPasswordPlaceholder: "Nuova password",
            confirmNewPasswordPlaceholder: "Conferma nuova password",
            submitNewPasswordButtonText: "Reimposta",
            invalidResetLink: "Il link di reimpostazione non è valido o è scaduto. Si prega di fare una nuova richiesta.",
            passwordsDoNotMatch: "Le password non corrispondono.",
            passwordMinLength: "La password deve contenere almeno 8 caratteri.",
            resettingPassword: "Reimpostazione in corso...",
            resetSuccess: "La tua password è stata reimpostata con successo!",
            resetError: "Si è verificato un errore. Si prega di controllare il link o riprovare più tardi.",

            signupPageTitle: "Registrazione - Forum IA",
            signupHeaderTitleRect: "Registrazione",
            signupInfoTitle: "Le mie informazioni",
            signupInfoText: "Completa le tue informazioni personali per creare il tuo account. Tutti i campi sono obbligatori."
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

            loginPageTitle: "Login - Fórum IA",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Senha",
            forgotPasswordLink: "Esqueceu a senha?",
            loginButtonText: "Entrar",
            noAccountPrompt: "Ainda não tem uma conta?",
            forgotPasswordModalTitle: "Esqueceu a senha",
            forgotPasswordModalText: "Você receberá um e-mail para redefinir sua senha.",
            emailInputRequired: "Seu e-mail *",
            sendButtonText: "Enviar",
            fillAllFields: "Por favor, preencha todos os campos!",
            loginSuccess: "Login bem-sucedido!",
            loginError: "E-mail ou senha incorretos.",
            serverConnectionError: "Não foi possível conectar ao servidor. Por favor, verifique sua conexão ou tente novamente mais tarde.",

            resetPasswordPageTitle: "Redefinir Senha - Fórum IA",
            resetPasswordHeaderTitleRect: "Redefinir sua Senha",
            newPasswordPlaceholder: "Nova senha",
            confirmNewPasswordPlaceholder: "Confirmar nova senha",
            submitNewPasswordButtonText: "Redefinir",
            invalidResetLink: "O link de redefinição é inválido ou expirou. Por favor, faça uma nova solicitação.",
            passwordsDoNotMatch: "As senhas não correspondem.",
            passwordMinLength: "A senha deve ter pelo menos 8 caracteres.",
            resettingPassword: "Redefinindo senha...",
            resetSuccess: "Sua senha foi redefinida com sucesso!",
            resetError: "Ocorreu um erro. Por favor, verifique seu link ou tente novamente mais tarde.",

            signupPageTitle: "Inscrição - Fórum IA",
            signupHeaderTitleRect: "Inscrição",
            signupInfoTitle: "Minhas informações",
            signupInfoText: "Preencha suas informações pessoais para criar sua conta. Todos os campos são obrigatórios."
        }
    };

    // Fonction pour appliquer les traductions
    function applyTranslations(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            } else {
                console.warn(`Traduction manquante pour la clé: ${key} en langue: ${lang}`);
            }
        });

        // Mise à jour du title de la page
        const pageTitleElement = document.querySelector('title[data-lang-key]');
        if (pageTitleElement) {
            const key = pageTitleElement.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                pageTitleElement.textContent = translations[lang][key];
            }
        }
    }

    // Gérer l'affichage/masquage du menu déroulant
    if (currentLangButton && langDropdown) { // Vérifier si les éléments existent
        currentLangButton.addEventListener('click', (event) => {
            event.stopPropagation();
            langDropdown.classList.toggle('show');
        });
    }

    // Gérer la sélection d'une langue
    langOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const selectedLang = option.getAttribute('data-lang');

            // Mettre à jour le drapeau et l'alt du bouton principal
            if (currentLangIcon) {
                currentLangIcon.src = option.querySelector('img').src;
                currentLangIcon.alt = langNames[selectedLang] || 'Current Language';
            }

            applyTranslations(selectedLang);

            if (langDropdown) {
                langDropdown.classList.remove('show');
            }
            localStorage.setItem('selectedLang', selectedLang);
        });
    });

    // Masquer le menu déroulant si on clique en dehors
    document.addEventListener('click', (event) => {
        if (currentLangButton && langDropdown) {
            if (!currentLangButton.contains(event.target) && !langDropdown.contains(event.target)) {
                langDropdown.classList.remove('show');
            }
        }
    });

    // Initialiser la langue par défaut au chargement de la page
    const savedLang = localStorage.getItem('selectedLang') || 'fr';
    applyTranslations(savedLang);

    // Mettre à jour l'icône du drapeau au chargement
    if (currentLangIcon && langNames[savedLang]) {
        currentLangIcon.src = `assets/icones/drapeau_${savedLang}.png`;
        currentLangIcon.alt = langNames[savedLang];
    }
});