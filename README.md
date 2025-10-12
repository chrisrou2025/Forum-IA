# Forum IA - README

## 📋 Description du projet

**Forum IA** est une plateforme web interactive dédiée aux échanges et discussions sur l'intelligence artificielle. Ce projet offre un espace convivial pour partager des connaissances, débattre et découvrir les dernières actualités dans le domaine de l'IA.

## ✨ Fonctionnalités principales

### 🔐 Authentification et gestion des comptes
- Inscription avec validation des données
- Connexion sécurisée
- Réinitialisation de mot de passe
- Gestion de profil utilisateur

### 🌐 Internationalisation
- Support multilingue (Français, Anglais, Espagnol, Allemand, Italien, Portugais)
- Changement de langue dynamique
- Sauvegarde des préférences linguistiques

### ♿ Accessibilité
- Mode contraste élevé
- Navigation au clavier optimisée
- Étiquettes ARIA pour les lecteurs d'écran
- Structure sémantique HTML5

### 📱 Interface utilisateur
- Design responsive adaptatif
- Menu burger pour mobile
- Système de navigation par catégories
- Recherche dynamique de contenu
- Modales interactives

### 📝 Gestion de contenu
- Affichage des posts par catégorie
- Système de tags
- Vue détaillée des articles
- Interactions sociales (likes, commentaires, partages)

## 🗂️ Structure du projet

```
forum-ia/
│
├── assets/                    # Ressources médias
│   ├── icones/               # Icônes de l'interface
│   ├── logo.png              # Logo principal
│   └── *.jpg, *.webp         # Images de contenu
│
├── css/                       # Feuilles de style
│   ├── style.css             # Styles principaux
│   ├── menu_gauche.css       # Styles menu latéral
│   ├── menu_central.css      # Styles menu central
│   └── post.css              # Styles page article
│
├── js/                        # Scripts JavaScript
│   ├── language.js           # Gestion multilingue
│   ├── contrast.js           # Mode contraste
│   ├── login.js              # Logique connexion
│   ├── signup.js             # Logique inscription
│   ├── forgot_Password.js    # Réinitialisation MDP
│   ├── reset_password_page.js # Page réinitialisation
│   ├── search.js             # Recherche
│   ├── main.js               # Script principal
│   └── menu_burger.js        # Menu mobile
│
├── index.html                 # Page d'accueil
├── connexion.html            # Page de connexion
├── inscription.html          # Page d'inscription
├── reinitialiser-mot-de-passe.html # Réinitialisation
├── post.html                 # Page article détaillé
├── profil.html               # Page profil utilisateur
└── README.md                 # Documentation
```

## 🚀 Installation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur web local (optionnel : Live Server, XAMPP, WAMP, etc.)

### Étapes d'installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/votre-username/forum-ia.git
cd forum-ia
```

2. **Lancer le projet**
   - Option 1 : Ouvrir `index.html` directement dans un navigateur
   - Option 2 : Utiliser un serveur local
   ```bash
   # Avec Python 3
   python -m http.server 8000
   
   # Avec Node.js (npx)
   npx serve
   ```

3. **Accéder à l'application**
   - Ouvrir un navigateur et aller à `http://localhost:8000`

## 🔧 Configuration

### Personnalisation des couleurs
Modifier les variables CSS dans `css/style.css` :

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-color: #ffffff;
    --text-color: #333333;
}
```

### Ajout de langues
Éditer le fichier `js/language.js` et ajouter les traductions :

```javascript
const translations = {
    nouvelleLangue: {
        mainTitle: "Traduction du titre",
        // ... autres clés
    }
};
```

## 📚 Utilisation

### Navigation principale
1. **Menu burger** (mobile) : Accès rapide aux catégories
2. **Barre de recherche** : Recherche de posts par mots-clés
3. **Sélecteur de langue** : Changement de langue instantané
4. **Mode contraste** : Amélioration de la lisibilité

### Création de compte
1. Cliquer sur "S'inscrire"
2. Remplir le formulaire avec :
   - Nom d'utilisateur (3-20 caractères alphanumériques)
   - Email valide
   - Mot de passe sécurisé (min. 8 caractères, majuscule, minuscule, chiffre, caractère spécial)
3. Confirmer le mot de passe
4. Valider l'inscription

### Connexion
1. Cliquer sur "Se connecter"
2. Saisir email et mot de passe
3. Option "Mot de passe oublié" disponible

### Réinitialisation du mot de passe
1. Cliquer sur "Mot de passe oublié ?"
2. Saisir l'adresse email
3. Suivre le lien reçu par email
4. Définir un nouveau mot de passe

## 🛠️ Technologies utilisées

### Front-end
- **HTML5** : Structure sémantique
- **CSS3** : Styles et animations
- **JavaScript (ES6+)** : Interactivité et logique métier

### Polices
- **Inter** (poids 800) : Titres
- **Inria Sans** (poids 700) : Texte principal

### Standards web
- Accessibilité **WCAG 2.1**
- Responsive Design
- Progressive Enhancement

## 🔒 Sécurité

### Bonnes pratiques implémentées
- Validation côté client des formulaires
- Protection CSRF (token à implémenter côté serveur)
- Sanitisation des entrées utilisateur
- Politique de mots de passe robuste

### À implémenter (backend requis)
- Authentification JWT
- Hashage des mots de passe (bcrypt)
- Rate limiting
- HTTPS obligatoire en production

## 🐛 Débogage

### Console JavaScript
Ouvrir les outils de développement (F12) pour :
- Vérifier les erreurs de scripts
- Inspecter les requêtes réseau
- Tester les fonctions

### Problèmes courants

**Le menu déroulant ne fonctionne pas**
- Vérifier que `main.js` est bien chargé
- Contrôler les erreurs dans la console

**Les traductions ne s'appliquent pas**
- Vérifier que `language.js` est chargé
- S'assurer que `data-lang-key` est présent sur les éléments

**Le mode contraste ne persiste pas**
- Vérifier que le localStorage est activé
- Tester dans un navigateur différent

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. Créer une branche pour votre fonctionnalité
   ```bash
   git checkout -b feature/nouvelle-fonctionnalite
   ```
3. **Commit** vos changements
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   ```
4. **Push** vers la branche
   ```bash
   git push origin feature/nouvelle-fonctionnalite
   ```
5. Ouvrir une **Pull Request**

### Guidelines de contribution
- Respecter l'indentation et le style de code existant
- Commenter le code complexe
- Tester les modifications sur plusieurs navigateurs
- Mettre à jour la documentation si nécessaire

## 📝 Roadmap

### Version 1.1 (À venir)
- [ ] Connexion avec réseaux sociaux
- [ ] Notifications en temps réel
- [ ] Système de messagerie privée
- [ ] Gamification (badges, points)

### Version 1.2
- [ ] Mode sombre/clair personnalisable
- [ ] Éditeur Markdown pour les posts
- [ ] Upload d'images
- [ ] Recherche avancée avec filtres

### Version 2.0
- [ ] API REST complète
- [ ] Application mobile (React Native)
- [ ] Système de modération automatique (IA)
- [ ] Analytics et statistiques

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

```
MIT License

Copyright (c) 2025 Forum IA

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👥 Auteurs

- Christian ROUPIOZ - *Développement initial* - [Profil GitHub](https://github.com/chrisrou2025)

## 📧 Contact

Pour toute question ou suggestion :
- **Email** : contact@forum-ia.fr
- **GitHub Issues** : [Ouvrir un ticket](https://github.com/chrisrou2025/forum-ia/issues)
- **Site web** : [www.forum-ia.fr](https://www.forum-ia.fr)

## 🙏 Remerciements

- Merci à tous les contributeurs
- Icônes fournies par [Font Awesome](https://fontawesome.com/)
- Polices Google Fonts
- Inspiré par les meilleures pratiques de la communauté web

---

**Note** : Ce projet est en développement actif. Les fonctionnalités peuvent évoluer. Consultez régulièrement cette documentation pour les mises à jour.

**Version actuelle** : 1.0.0  
**Dernière mise à jour** : Octobre 2025