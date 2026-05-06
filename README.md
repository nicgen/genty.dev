# Nicolas Genty — Portfolio

Un portfolio haute performance, minimaliste et brutaliste, conçu pour la rapidité et la maintenabilité. Propulsé par **Astro 5** avec une architecture orientée données et une **Quality Gate** rigoureuse.

## 🚀 Fonctionnalités Clés

- **Architecture Astro 5** : Performance statique maximale avec rendu optimisé.
- **Système de Thème Avancé** : Transition fluide (Circular Reveal) via l'API **View Transitions** avec persistance du choix utilisateur.
- **Design System** : Utilisation de tokens CSS centralisés (`tokens.css`) pour une gestion cohérente des couleurs et espacements.
- **Content-First** : Gestion des projets et du profil entièrement via des fichiers **JSON typés** (Astro Content Collections).
- **Asset Optimization** : Auto-hébergement des polices (@fontsource) et icônes (SVG masks) pour une confidentialité et une vitesse optimales.

## 🛠 Tech Stack

- **Framework** : [Astro 5](https://astro.build/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS (Style Queries).
- **Typographie** : Outfit & IBM Plex Mono.
- **Linters** : ESLint (Flat Config), Stylelint, Markdownlint.
- **Qualité** : Prettier, Husky, Commitlint, Gitleaks.

## 💎 Workflow de Développement (Pro)

Le projet intègre une "Quality Gate" automatisée pour garantir la cohérence du code :

- **Git Hooks (Husky)** :
  - **Pre-commit** : Exécute `lint-staged` pour formater et linter uniquement les fichiers modifiés.
  - **Commit-msg** : Force le respect des [Conventional Commits](https://www.conventionalcommits.org/).
- **Linting Multi-couches** :
  - **JS/Astro** : ESLint avec support TypeScript.
  - **CSS** : Stylelint pour la validation des variables et règles Tailwind.
  - **JSON** : ESLint JSONC pour le tri automatique des clés et la validation syntaxique.
  - **Markdown** : Markdownlint pour une documentation impeccable.
- **Sécurité** : Intégration de **Gitleaks** dans le workflow pour prévenir l'exposition de secrets.

## 💻 Commandes

| Commande       | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Installe les dépendances                     |
| `pnpm dev`     | Lance le serveur de dev sur `localhost:4321` |
| `pnpm lint`    | Exécute la suite complète de linting (QA)    |
| `pnpm format`  | Formate l'ensemble du projet avec Prettier   |
| `pnpm build`   | Génère le site statique pour la production   |

## 📁 Structure du Projet

```text
src/
├── assets/         # Images et médias optimisés
├── components/     # Composants Astro réutilisables
├── content/        # Données JSON (projets, profil)
├── layouts/        # Layout principal et logique de thème
├── pages/          # Routes du site
└── styles/         # Design tokens et CSS global
```

---

Fait avec ❤️ par [Nicolas Genty](https://github.com/nicgen)
