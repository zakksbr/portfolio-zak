# Portfolio SABRI Zakaria

Ceci est le dépôt de mon portfolio personnel, en ligne sur **[zakariasabri.fr](https://zakariasabri.fr)**.
J'y présente mes réalisations : mes projets personnels, mes **SAÉ** (Situations d'Apprentissage et d'Évaluation) de BUT Informatique, et mon parcours d'**arbitre de football**.

## Le site
- **Deux univers** : une partie informatique (projets, compétences, CV) et une partie arbitrage (statistiques, actualités, matchs joués, retours d'observation).
- **Thème macOS** : fenêtres, dock, Finder pour parcourir les projets.
- **Stack** : [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), site 100 % statique.
- **Déploiement** : automatique sur GitHub Pages à chaque push sur `main` (GitHub Actions).

## Lancer le projet
Le site se trouve dans le dossier `refonte/` (Node 22 minimum) :
```sh
cd refonte
npm install
npm run dev      # en local sur http://localhost:4321
npm run build    # génère le site dans refonte/dist/
```

## Structure
```text
refonte/
├── src/
│   ├── pages/          # index (info), arbitrage, mentions légales
│   ├── components/     # fenêtres, dock, Finder, cartes projets, partie arbitrage (referee/)
│   ├── data/           # projects.js (projets) et feedbacks.js (rapports d'arbitrage)
│   ├── scripts/        # interactions (Finder, carrousel, graphe réseau)
│   ├── styles/         # global.css
│   └── assets/img/     # images optimisées au build
└── public/             # CV, favicon, CNAME + archive de l'ancienne version (archive/v1/)
```
Les fichiers à la racine (`index.html`, `style.css`, `script.js`, `assets/`) correspondent à l'**ancienne version** du site (HTML/CSS/JS sans framework), gardée pour l'historique.

## Mettre à jour le contenu
- **Ajouter un projet** : une entrée dans `refonte/src/data/projects.js`. Les options `"favorite"`, `"wip"` et `"latest"` affichent les étiquettes « Coup de cœur », « En cours » et « Dernier projet ».
- **Partie arbitrage** : stats dans `components/referee/RefDashboard.astro`, matchs dans `RefMatches.astro`, actus dans `RefNews.astro`, rapports dans `data/feedbacks.js`.

## Licence
Voir [LICENSE](LICENSE).
