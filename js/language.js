// js/language.js

document.addEventListener('DOMContentLoaded', () => {
    const currentLangButton = document.getElementById('currentLangButton');
    const currentLangIcon = document.getElementById('currentLangIcon');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = langDropdown.querySelectorAll('a');

    const langNames = {
        fr: 'Français',
        en: 'English',
        es: 'Español',
        de: 'Deutsch',
        it: 'Italiano',
        pt: 'Português'
    };

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
            loginFormTitle: "Connectez-vous à votre compte",
            loginFormDescription: "Veuillez entrer vos identifiants pour accéder au Forum IA 2025.",
            usernamePlaceholder: "Nom d'utilisateur / Email",
            passwordPlaceholder: "Mot de passe",
            submitLoginButton: "Se connecter",
            forgotPassword: "Mot de passe oublié ?",
            noAccount: "Pas encore de compte ?",
            signupLink: "S'inscrire"
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
            loginPageTitle: "Login - AI Forum",
            loginHeaderTitleRect: "Login",
            loginFormTitle: "Log in to your account",
            loginFormDescription: "Please enter your credentials to access the AI Forum 2025.",
            usernamePlaceholder: "Username / Email",
            passwordPlaceholder: "Password",
            submitLoginButton: "Log In",
            forgotPassword: "Forgot password?",
            noAccount: "Don't have an account yet?",
            signupLink: "Sign Up"
        },
        es: {
            contactButton: "Contáctanos",
            loginButton: "Iniciar sesión",
            signupButton: "Registrarse",
            contrastButton: "Contraste",
            headerTitle: "Domina la IA antes de que te domine",
            headerSubtitle: "Regístrate para recibir nuestra newsletter sobre Inteligencia Artificial",
            copyrightText: "Foro IA 2025",
            allRightsReserved: "Todos los derechos reservados",
            searchModalTitle: "Buscar en el Foro",
            searchPlaceholder: "Introduce tus palabras clave...",
            searchButtonText: "Buscar",
            noSearchResults: "No se encontraron resultados para esta búsqueda.",
            loginPageTitle: "Inicio de sesión - Foro IA",
            loginHeaderTitleRect: "Iniciar sesión",
            loginFormTitle: "Inicia sesión en tu cuenta",
            loginFormDescription: "Por favor, introduce tus credenciales para acceder al Foro IA 2025.",
            usernamePlaceholder: "Nombre de usuario / Correo electrónico",
            passwordPlaceholder: "Contraseña",
            submitLoginButton: "Iniciar sesión",
            forgotPassword: "¿Olvidaste tu contraseña?",
            noAccount: "¿Aún no tienes cuenta?",
            signupLink: "Registrarse"
        },
        de: {
            contactButton: "Kontakt",
            loginButton: "Anmelden",
            signupButton: "Registrieren",
            contrastButton: "Kontrast",
            headerTitle: "Meistere KI, bevor sie dich meistert",
            headerSubtitle: "Melden Sie sich an, um unseren Newsletter über Künstliche Intelligenz zu erhalten",
            copyrightText: "KI Forum 2025",
            allRightsReserved: "Alle Rechte vorbehalten",
            searchModalTitle: "Forum durchsuchen",
            searchPlaceholder: "Schlüsselwörter eingeben...",
            searchButtonText: "Suchen",
            noSearchResults: "Keine Ergebnisse für diese Suche gefunden.",
            loginPageTitle: "Login - KI Forum",
            loginHeaderTitleRect: "Login",
            loginFormTitle: "Melden Sie sich bei Ihrem Konto an",
            loginFormDescription: "Bitte geben Sie Ihre Anmeldeinformationen ein, um auf das KI Forum 2025 zuzugreifen.",
            usernamePlaceholder: "Benutzername / E-Mail",
            passwordPlaceholder: "Passwort",
            submitLoginButton: "Anmelden",
            forgotPassword: "Passwort vergessen?",
            noAccount: "Noch kein Konto?",
            signupLink: "Registrieren"
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
            loginFormTitle: "Accedi al tuo account",
            loginFormDescription: "Inserisci le tue credenziali per accedere al Forum IA 2025.",
            usernamePlaceholder: "Nome utente / Email",
            passwordPlaceholder: "Password",
            submitLoginButton: "Accedi",
            forgotPassword: "Password dimenticata?",
            noAccount: "Non hai ancora un account?",
            signupLink: "Iscriviti"
        },
        pt: {
            contactButton: "Contate-nos",
            loginButton: "Entrar",
            signupButton: "Registrar",
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
            loginHeaderTitleRect: "Login",
            loginFormTitle: "Acesse sua conta",
            loginFormDescription: "Por favor, insira suas credenciais para acessar o Fórum IA 2025.",
            usernamePlaceholder: "Nome de usuário / Email",
            passwordPlaceholder: "Senha",
            submitLoginButton: "Entrar",
            forgotPassword: "Esqueceu a senha?",
            noAccount: "Ainda não tem uma conta?",
            signupLink: "Inscrever-se"
        }
    };

    // Rend l'objet de traduction accessible globalement pour d'autres scripts
    window.translations = translations;

    function applyTranslations(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                } else if (element.tagName === 'TITLE') {
                    element.textContent = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        currentLangIcon.src = `assets/icones/drapeau_${lang}.png`;
        currentLangIcon.alt = langNames[lang] || 'Current Language';
    }

    // Expose applyTranslations pour d'autres scripts
    window.applyTranslations = applyTranslations;

    currentLangButton.addEventListener('click', (event) => {
        event.stopPropagation();
        langDropdown.classList.toggle('show');
    });

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

    document.addEventListener('click', (event) => {
        if (!currentLangButton.contains(event.target) && !langDropdown.contains(event.target)) {
            langDropdown.classList.remove('show');
        }
    });

    const savedLang = localStorage.getItem('selectedLang') || 'fr';
    applyTranslations(savedLang);
});